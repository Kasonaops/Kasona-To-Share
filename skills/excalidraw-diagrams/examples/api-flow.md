# API Request Flow Example

## DSL

```
[Client Request] -> [API Gateway] -> {Auth Valid?}
{Auth Valid?} -> "yes" -> [Route to Service] -> [[Database]] -> [Response]
{Auth Valid?} -> "no" -> [401 Unauthorized]
```

## Command

```bash
npx @swiftlysingh/excalidraw-cli create --inline "$(cat <<'EOF'
@direction LR
[Client Request] -> [API Gateway] -> {Auth Valid?}
{Auth Valid?} -> "yes" -> [Route to Service] -> [[Database]] -> [Response]
{Auth Valid?} -> "no" -> [401 Unauthorized]
EOF
)" -o api-flow.excalidraw
```

## Use Case

Standard REST API request handling with authentication check pattern. Common in:
- Microservices documentation
- API gateway architectures
- Security flow diagrams
