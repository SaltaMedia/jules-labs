# Development Workflow

## Branch Strategy

This project uses a simple two-branch workflow:

- **`main`** - Production branch (deployed to live site)
- **`dev`** - Development branch (for active development)

## Workflow

### For New Features/Bug Fixes

1. **Start from dev branch**
   ```bash
   git checkout dev
   git pull origin dev
   ```

2. **Create feature branch (optional)**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Make your changes and commit**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   # or
   git commit -m "fix: resolve bug description"
   ```

4. **Push to dev**
   ```bash
   git push origin dev
   # or if using feature branch:
   git checkout dev
   git merge feature/your-feature-name
   git push origin dev
   ```

### For Production Deployment

1. **Merge dev to main**
   ```bash
   git checkout main
   git merge dev
   git push origin main
   ```

2. **Deploy from main branch**
   - Vercel/Netlify will automatically deploy from main
   - Or manually trigger deployment

### Best Practices

- ✅ Always work from `dev` branch for new features
- ✅ Use descriptive commit messages
- ✅ Test changes locally before pushing
- ✅ Keep `main` branch stable and deployable
- ✅ Use feature branches for complex changes
- ❌ Don't commit directly to `main`
- ❌ Don't commit broken code to `dev`

## Commit Message Format

Use conventional commit format:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example: `feat: add contact form to footer`
