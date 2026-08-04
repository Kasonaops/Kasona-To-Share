# Go Error Handling Patterns

## Explicit Error Returns

```go
// Basic error handling
func getUser(id string) (*User, error) {
    user, err := db.QueryUser(id)
    if err != nil {
        return nil, fmt.Errorf("failed to query user: %w", err)
    }
    if user == nil {
        return nil, errors.New("user not found")
    }
    return user, nil
}
```

## Custom Error Types

```go
type ValidationError struct {
    Field   string
    Message string
}

func (e *ValidationError) Error() string {
    return fmt.Sprintf("validation failed for %s: %s", e.Field, e.Message)
}
```

## Sentinel Errors

```go
var (
    ErrNotFound     = errors.New("not found")
    ErrUnauthorized = errors.New("unauthorized")
    ErrInvalidInput = errors.New("invalid input")
)

// Error checking
user, err := getUser("123")
if err != nil {
    if errors.Is(err, ErrNotFound) {
        // Handle not found
    } else {
        // Handle other errors
    }
}
```

## Error Wrapping

```go
func processUser(id string) error {
    user, err := getUser(id)
    if err != nil {
        return fmt.Errorf("process user failed: %w", err)
    }
    // Process user
    return nil
}
```

## Error Unwrapping

```go
err := processUser("123")
if err != nil {
    var valErr *ValidationError
    if errors.As(err, &valErr) {
        fmt.Printf("Validation error: %s\n", valErr.Field)
    }
}
```

## Defer for Cleanup

```go
func readFile(path string) (string, error) {
    file, err := os.Open(path)
    if err != nil {
        return "", err
    }
    defer file.Close()  // Always close, even on error

    content, err := io.ReadAll(file)
    if err != nil {
        return "", err
    }
    return string(content), nil
}
```

## Multiple Error Handling

```go
func processOrder(orderID string) error {
    order, err := getOrder(orderID)
    if err != nil {
        return fmt.Errorf("get order: %w", err)
    }

    if err := validateOrder(order); err != nil {
        return fmt.Errorf("validate order: %w", err)
    }

    if err := chargePayment(order); err != nil {
        return fmt.Errorf("charge payment: %w", err)
    }

    if err := fulfillOrder(order); err != nil {
        return fmt.Errorf("fulfill order: %w", err)
    }

    return nil
}
```

## Error Groups for Concurrent Operations

```go
import "golang.org/x/sync/errgroup"

func fetchAll(urls []string) error {
    g := new(errgroup.Group)
    
    for _, url := range urls {
        url := url // Capture loop variable
        g.Go(func() error {
            return fetch(url)
        })
    }
    
    return g.Wait() // Returns first error encountered
}
```
