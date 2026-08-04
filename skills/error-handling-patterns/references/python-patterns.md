# Python Error Handling Patterns

## Custom Exception Hierarchy

```python
from datetime import datetime

class ApplicationError(Exception):
    """Base exception for all application errors."""
    def __init__(self, message: str, code: str = None, details: dict = None):
        super().__init__(message)
        self.code = code
        self.details = details or {}
        self.timestamp = datetime.utcnow()

class ValidationError(ApplicationError):
    """Raised when validation fails."""
    pass

class NotFoundError(ApplicationError):
    """Raised when resource not found."""
    pass

class ExternalServiceError(ApplicationError):
    """Raised when external service fails."""
    def __init__(self, message: str, service: str, **kwargs):
        super().__init__(message, **kwargs)
        self.service = service
```

## Usage Example

```python
def get_user(user_id: str) -> User:
    user = db.query(User).filter_by(id=user_id).first()
    if not user:
        raise NotFoundError(
            f"User not found",
            code="USER_NOT_FOUND",
            details={"user_id": user_id}
        )
    return user
```

## Context Managers for Cleanup

```python
from contextlib import contextmanager

@contextmanager
def database_transaction(session):
    """Ensure transaction is committed or rolled back."""
    try:
        yield session
        session.commit()
    except Exception as e:
        session.rollback()
        raise
    finally:
        session.close()

# Usage
with database_transaction(db.session) as session:
    user = User(name="Alice")
    session.add(user)
    # Automatic commit or rollback
```

## Retry with Exponential Backoff

```python
import time
from functools import wraps
from typing import TypeVar, Callable

T = TypeVar('T')

def retry(
    max_attempts: int = 3,
    backoff_factor: float = 2.0,
    exceptions: tuple = (Exception,)
):
    """Retry decorator with exponential backoff."""
    def decorator(func: Callable[..., T]) -> Callable[..., T]:
        @wraps(func)
        def wrapper(*args, **kwargs) -> T:
            last_exception = None
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except exceptions as e:
                    last_exception = e
                    if attempt < max_attempts - 1:
                        sleep_time = backoff_factor ** attempt
                        time.sleep(sleep_time)
                        continue
                    raise
            raise last_exception
        return wrapper
    return decorator

# Usage
@retry(max_attempts=3, exceptions=(NetworkError,))
def fetch_data(url: str) -> dict:
    response = requests.get(url, timeout=5)
    response.raise_for_status()
    return response.json()
```

## Comprehensive Error Handling Example

```python
def process_order(order_id: str) -> Order:
    """Process order with comprehensive error handling."""
    try:
        # Validate input
        if not order_id:
            raise ValidationError("Order ID is required")

        # Fetch order
        order = db.get_order(order_id)
        if not order:
            raise NotFoundError("Order", order_id)

        # Process payment
        try:
            payment_result = payment_service.charge(order.total)
        except PaymentServiceError as e:
            # Log and wrap external service error
            logger.error(f"Payment failed for order {order_id}: {e}")
            raise ExternalServiceError(
                f"Payment processing failed",
                service="payment_service",
                details={"order_id": order_id, "amount": order.total}
            ) from e

        # Update order
        order.status = "completed"
        order.payment_id = payment_result.id
        db.save(order)

        return order

    except ApplicationError:
        # Re-raise known application errors
        raise
    except Exception as e:
        # Log unexpected errors
        logger.exception(f"Unexpected error processing order {order_id}")
        raise ApplicationError(
            "Order processing failed",
            code="INTERNAL_ERROR"
        ) from e
```
