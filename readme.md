# Sample TypeScript Express Server

## Please start by going through this checklist:
- [ ] Copy the repository locally. Do not clone this repo for your projects, unless you want to contribute to the template.
- [ ] Update `package.json` to match the new project. Update project name, authors, license, version, etc.
- [ ] `git init` if you would like to use git for your new project.
- [ ] `npm install`.
- [ ] Add the following to `.vscode/settings.json`, if you'd like `eslint` errors to be fixed automatically.
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
- [ ] Add a new `readme.md` file instead of this one and explain your project.

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

By default, all files in `configs/` are commited to git. If you have files that should not be commited, e.g., files that include passwords, keys, etc., add a `.secret` to their name. For example, `configs/azure.secret.json` can contain your Azure keys and it won't be commited to git (because `**.secret*` is in `.gitignore`), unless you forcefully commit it. To access secret variables, you don't need to specify `secret`, e.g., the contents of the above file can be accessed at `configs.azure`. See `src/settings.ts` for implementation.