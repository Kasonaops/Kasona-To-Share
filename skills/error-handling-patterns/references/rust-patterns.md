# Rust Error Handling Patterns

## Result and Option Types

```rust
use std::fs::File;
use std::io::{self, Read};

// Result type for operations that can fail
fn read_file(path: &str) -> Result<String, io::Error> {
    let mut file = File::open(path)?;  // ? operator propagates errors
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    Ok(contents)
}
```

## Custom Error Types

```rust
#[derive(Debug)]
enum AppError {
    Io(io::Error),
    Parse(std::num::ParseIntError),
    NotFound(String),
    Validation(String),
}

impl From<io::Error> for AppError {
    fn from(error: io::Error) -> Self {
        AppError::Io(error)
    }
}

// Using custom error type
fn read_number_from_file(path: &str) -> Result<i32, AppError> {
    let contents = read_file(path)?;  // Auto-converts io::Error
    let number = contents.trim().parse()
        .map_err(AppError::Parse)?;   // Explicitly convert ParseIntError
    Ok(number)
}
```

## Option for Nullable Values

```rust
// Option for nullable values
fn find_user(id: &str) -> Option<User> {
    users.iter().find(|u| u.id == id).cloned()
}

// Combining Option and Result
fn get_user_age(id: &str) -> Result<u32, AppError> {
    find_user(id)
        .ok_or_else(|| AppError::NotFound(id.to_string()))
        .map(|user| user.age)
}
```

## Error Propagation with ?

```rust
fn process_data(path: &str) -> Result<ProcessedData, AppError> {
    let raw = read_file(path)?;           // Propagate io::Error
    let parsed = parse_data(&raw)?;       // Propagate parse error
    let validated = validate(parsed)?;    // Propagate validation error
    Ok(validated)
}
```

## Using `thiserror` Crate

```rust
use thiserror::Error;

#[derive(Error, Debug)]
enum AppError {
    #[error("IO error: {0}")]
    Io(#[from] io::Error),
    
    #[error("Parse error: {0}")]
    Parse(#[from] std::num::ParseIntError),
    
    #[error("Resource not found: {0}")]
    NotFound(String),
    
    #[error("Validation failed: {0}")]
    Validation(String),
}
```

## Using `anyhow` for Application Errors

```rust
use anyhow::{Context, Result};

fn read_config() -> Result<Config> {
    let content = std::fs::read_to_string("config.toml")
        .context("Failed to read config file")?;
    
    let config: Config = toml::from_str(&content)
        .context("Failed to parse config")?;
    
    Ok(config)
}
```
