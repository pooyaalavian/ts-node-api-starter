# Sample TypeScript Express Server

## Please start by going through this checklist:
- [ ] Copy the repository locally.
- [ ] Update `package.json` to match the new project.
- [ ] `git init` if you would like.
- [ ] `npm install`.
- [ ] Add this to `.vscode/settings.json`, if you'd like `eslint` errors to be fixed automatically.
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "typescript"
  ]
}
```

## Useful npm commands
- `npm run nodemon` runs `nodemon` with `inspect` enabled on port 9230.
- `npm run dev` runs `ts-node-dev`.
- `npm run lint-fix` runs the linter and fixes fixable issues.
- `npm run build` builds the project with `tsc`. (Recommended: run `lint-fix` first)
- `npm start` serves the `dist/` folder. Make sure to `build` the project first.
- `npm run interactive` gives you a typescript REPL.

## Controllers
Create controllers that follow `AppController` interface. Import them into the `controllers` array in `controllers/index.ts`. They will be mounted automatically.

## Configs
Any file added to `configs/` folder will be read and included on startup. 
The `.json` files are accessible as objects. All other files are read as `utf8` string. The master object is called `configs` and can be imported in all files.

For example, contents of file `configs/sample/test.json` are accessible under `configs.sample.test` key.

By default, all files in `configs/` are commited to git. If you have files that should not be commited, e.g., files that include passwords, keys, etc., add a `.secret` to their name. For example, `azure.secret.json` can contain your Azure keys and it won't be commited to git (because `**.secret*` is in `.gitignore`).