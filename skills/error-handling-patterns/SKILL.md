---
name: error-handling-patterns
description: Builds resilient applications with robust error handling strategies. Use when implementing error handling, designing error-resilient APIs, debugging production issues, improving reliability, creating better error messages, implementing retry/circuit breaker patterns, handling async errors, or building fault-tolerant systems.
---

# Error Handling Patterns

Build resilient applications with robust error handling strategies that gracefully handle failures and provide excellent debugging experiences.

## When to Use This Skill

- Implementing error handling in new features
- Designing error-resilient APIs
- Debugging production issues
- Improving application reliability
- Creating better error messages for users and developers
- Implementing retry and circuit breaker patterns
- Handling async/concurrent errors
- Building fault-tolerant distributed systems

## Core Concepts

### Error Handling Philosophies

| Approach | Description | Best For |
|----------|-------------|----------|
| **Exceptions** | Traditional try-catch, disrupts control flow | Unexpected errors, exceptional conditions |
| **Result Types** | Explicit success/failure, functional approach | Expected errors, validation failures |
| **Error Codes** | C-style, requires discipline | System-level programming |
| **Option/Maybe** | For nullable values | Nullable value handling |
| **Panics/Crashes** | Fail fast | Unrecoverable errors, programming bugs |

### Error Categories

**Recoverable Errors:**
- Network timeouts
- Missing files
- Invalid user input
- API rate limits

**Unrecoverable Errors:**
- Out of memory
- Stack overflow
- Programming bugs (null pointer, etc.)

## Quick Reference by Language

| Language | Primary Pattern | Link |
|----------|-----------------|------|
| Python | Custom Exception Hierarchy | [Python Patterns](references/python-patterns.md) |
| TypeScript/JS | Custom Error Classes + Result Types | [TypeScript Patterns](references/typescript-patterns.md) |
| Rust | Result<T, E> and Option<T> | [Rust Patterns](references/rust-patterns.md) |
| Go | Explicit Error Returns | [Go Patterns](references/go-patterns.md) |

## Universal Patterns

### Pattern 1: Circuit Breaker

Prevent cascading failures in distributed systems.

```python
from enum import Enum
from datetime import datetime, timedelta

class CircuitState(Enum):
    CLOSED = "closed"       # Normal operation
    OPEN = "open"           # Failing, reject requests
    HALF_OPEN = "half_open" # Testing if recovered

class CircuitBreaker:
    def __init__(self, failure_threshold=5, timeout=timedelta(seconds=60)):
        self.failure_threshold = failure_threshold
        self.timeout = timeout
        self.failure_count = 0
        self.state = CircuitState.CLOSED
        self.last_failure_time = None

    def call(self, func):
        if self.state == CircuitState.OPEN:
            if datetime.now() - self.last_failure_time > self.timeout:
                self.state = CircuitState.HALF_OPEN
            else:
                raise Exception("Circuit breaker is OPEN")
        try:
            result = func()
            self.on_success()
            return result
        except Exception as e:
            self.on_failure()
            raise
```

### Pattern 2: Retry with Exponential Backoff

```python
import time
from functools import wraps

def retry(max_attempts=3, backoff_factor=2.0, exceptions=(Exception,)):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except exceptions as e:
                    if attempt < max_attempts - 1:
                        time.sleep(backoff_factor ** attempt)
                        continue
                    raise
        return wrapper
    return decorator

# Usage
@retry(max_attempts=3, exceptions=(NetworkError,))
def fetch_data(url: str) -> dict:
    response = requests.get(url, timeout=5)
    response.raise_for_status()
    return response.json()
```

### Pattern 3: Graceful Degradation

```python
def with_fallback(primary, fallback, log_error=True):
    """Try primary function, fall back to fallback on error."""
    try:
        return primary()
    except Exception as e:
        if log_error:
            logger.error(f"Primary function failed: {e}")
        return fallback()

# Usage
def get_user_profile(user_id):
    return with_fallback(
        primary=lambda: fetch_from_cache(user_id),
        fallback=lambda: fetch_from_database(user_id)
    )
```

### Pattern 4: Error Aggregation

Collect multiple errors instead of failing on first error.

```typescript
class ErrorCollector {
  private errors: Error[] = [];

  add(error: Error): void {
    this.errors.push(error);
  }

  hasErrors(): boolean {
    return this.errors.length > 0;
  }

  throw(): never {
    if (this.errors.length === 1) throw this.errors[0];
    throw new AggregateError(this.errors, `${this.errors.length} errors occurred`);
  }
}
```

## Best Practices Checklist

- [ ] **Fail Fast**: Validate input early, fail quickly
- [ ] **Preserve Context**: Include stack traces, metadata, timestamps
- [ ] **Meaningful Messages**: Explain what happened and how to fix it
- [ ] **Log Appropriately**: Error = log, expected failure = don't spam logs
- [ ] **Handle at Right Level**: Catch where you can meaningfully handle
- [ ] **Clean Up Resources**: Use try-finally, context managers, defer
- [ ] **Don't Swallow Errors**: Log or re-throw, don't silently ignore
- [ ] **Type-Safe Errors**: Use typed errors when possible

## Common Pitfalls

| Pitfall | Problem | Solution |
|---------|---------|----------|
| Catching Too Broadly | `except Exception` hides bugs | Catch specific exceptions |
| Empty Catch Blocks | Silently swallowing errors | Log or re-throw |
| Logging and Re-throwing | Duplicate log entries | Log OR re-throw, not both |
| Not Cleaning Up | Forgetting to close resources | Use context managers/defer |
| Poor Error Messages | "Error occurred" is not helpful | Include context and remediation |
| Ignoring Async Errors | Unhandled promise rejections | Always handle async errors |

## Resources

- [Python Patterns](references/python-patterns.md): Exception hierarchy, context managers
- [TypeScript Patterns](references/typescript-patterns.md): Custom errors, Result types, async handling
- [Rust Patterns](references/rust-patterns.md): Result<T, E>, Option<T>, error propagation
- [Go Patterns](references/go-patterns.md): Explicit error returns, wrapping, sentinel errors
