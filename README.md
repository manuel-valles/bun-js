# Bun
Bun is a JavaScript runtime built from scratch to serve the modern JavaScript ecosystem. It is written in the [zig](https://ziglang.org/) language, 
and includes a native bundler, transpiler, task runner, and npm client.


## Features
- [x] Speed and performance
- [x] TypeScript out of the box
- [x] Integrated Bundler
- [x] Native npm client
- [x] No module madness (CJS, ESM)
- [x] Handle environment variables
- [x] Watch mode
- [x] Web-standard APIs
- [x] SQLite DB
- [x] More [here](https://bun.sh)

## Installation
```bash
$ curl -fsSL https://bun.sh/install | bash 
$ exec /bin/zsh 
$ bun --version
```

## Usage
```bash
$ bun init
$ bun run index.ts
```
- To run it in watch mode (no `nodemon` required!!):
```bash
$ bun --watch index.ts
```
- To run it in hot reload mode for stateful apps:
```bash
$ bun --hot index.ts
```

## Features Examples
### Environment variables 
They can be used in two ways (without any configuration or extra library!!):
```ts
port: process.env.PORT || 3000 // Opt A
port: Bun.env.PORT || 3000 // Opt B
```

### Bun scripts
```json
{
  "scripts": {
    "start": "bun run index.ts",
    "dev": "bun --watch index.ts",
    "hot": "bun --hot index.ts"
  }
}
```
```bash
$ bun start
```
```bash
$ bun dev
```
```bash
$ bun hot
```

### Bun X
`bun x` or `bunx` (alias) can be used to auto-install and run packages from `npm`:
```bash
$ bunx interactive-cli-tool
```

### Node Core Modules
You can use any node core module without any configuration or extra library. Please see examples: 
- [modules](./modules.ts)
- [file-system](./file-system.ts)

### Testing
Bun includes a built-in test runner that can be used to run your tests. It is based on your test file names. 

[Example](./index.test.ts)
```bash
$ bun test
```

Further info: [Testing](https://bun.sh/docs/cli/test)

### Bundler
Bun includes a built-in bundler that can be used to bundle your code. It is based on your entry file.

Let's also use some library for it:
```bash
# Native npm client is super fast!!
$ bun i axios
```

- [Example Axios](./src/github-api.ts)
- [Example JSX](./src/index.tsx)
- [Example HTML](./src/index.html)

```bash
- [Dist Script](./package.json)

```bash
$ bun dist
```

>NOTE: To add a watch on the build process, use `--watch` flag.
