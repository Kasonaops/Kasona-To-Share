# User Registration Example

## DSL

```
(Start) -> [Enter Details] -> {Email Valid?}
{Email Valid?} -> "no" -> [Show Error] -> [Enter Details]
{Email Valid?} -> "yes" -> {Password Strong?}
{Password Strong?} -> "no" -> [Show Password Requirements] -> [Enter Details]
{Password Strong?} -> "yes" -> [[Save to Database]] -> [Send Verification Email] -> (Success)
```

## Command

```bash
npx @swiftlysingh/excalidraw-cli create --inline "$(cat <<'EOF'
@direction TB
@spacing 50

(Start) -> [Enter Details] -> {Email Valid?}
{Email Valid?} -> "no" -> [Show Error] -> [Enter Details]
{Email Valid?} -> "yes" -> {Password Strong?}
{Password Strong?} -> "no" -> [Show Password Requirements] -> [Enter Details]
{Password Strong?} -> "yes" -> [[Save to Database]] -> [Send Verification Email] -> (Success)
EOF
)" -o user-registration.excalidraw
```

## Use Case

User registration flow with validation loops:
- Email format validation
- Password strength check
- Database persistence
- Email verification trigger

Common in:
- User onboarding documentation
- Form validation flows
- Authentication system design
