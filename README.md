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