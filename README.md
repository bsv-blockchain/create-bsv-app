# @bsv/app is deprecated

The supported BSV application CLI, starter catalogue, generated examples, and maintained complete-example registry now live in [`bsv-blockchain/ts-stack`](https://github.com/bsv-blockchain/ts-stack/tree/main/packages/helpers/create-bsv-app) under the unscoped package name [`create-bsv-app`](https://www.npmjs.com/package/create-bsv-app).

Use the new command immediately:

```bash
npx create-bsv-app new my-app --starter full-stack --yes
```

Existing `npx @bsv/app ...` invocations print this deprecation notice and forward their arguments to `create-bsv-app`. There is no separate template registry here anymore. Convo was retired and is not included in the unified catalogue.

See the [create-bsv-app documentation](https://github.com/bsv-blockchain/ts-stack/tree/main/packages/helpers/create-bsv-app#readme) for generated React/Express starters, the inherited example catalogue, add mode, config files, and the local browser UI.

This repository is archived and retained only for package history and the redirect release.
