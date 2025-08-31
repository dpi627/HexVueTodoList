- User Conventional Commit Message.
- The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]
```

- Write `description` and `body` in zh-TW.
- Keep symbols in English.
- Write `body` as a list, each item start with `- `

The commit contains the following structural elements:

1.  fix: a commit of the *type* `fix` patches a bug in your codebase.
2.  feat: a commit of the *type* `feat` introduces a new feature to the codebase.
3.  BREAKING CHANGE: a commit that appends a `!` after the type/scope, introduces a breaking API change.
4.  *types* other than `fix:` and `feat:` are allowed, for example recommends `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, and others.
