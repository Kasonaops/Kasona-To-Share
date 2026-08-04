# CI/CD Pipeline Example

## DSL

```
(Push) -> [Build] -> [Test] -> {Tests Pass?}
{Tests Pass?} -> "yes" -> [Deploy Staging] -> {Manual Approval?}
{Manual Approval?} -> "yes" -> [Deploy Production] -> (Done)
{Manual Approval?} -> "no" -> (Cancelled)
{Tests Pass?} -> "no" -> [Notify Team] -> (Failed)
```

## Command

```bash
npx @swiftlysingh/excalidraw-cli create --inline "$(cat <<'EOF'
@direction TB
@spacing 60

(Push) -> [Build] -> [Test] -> {Tests Pass?}
{Tests Pass?} -> "yes" -> [Deploy Staging] -> {Manual Approval?}
{Manual Approval?} -> "yes" -> [Deploy Production] -> (Done)
{Manual Approval?} -> "no" -> (Cancelled)
{Tests Pass?} -> "no" -> [Notify Team] -> (Failed)
EOF
)" -o cicd-pipeline.excalidraw
```

## Use Case

Standard CI/CD pipeline with:
- Build and test stages
- Manual approval gate for production
- Failure notification branch

Common in:
- DevOps documentation
- GitHub Actions / GitLab CI visualization
- Deployment strategy docs
