# TypeScript Day 1 Notes

## 📦 Installing TypeScript

Install TypeScript as a development dependency:

```bash
npm install typescript --save-dev
```

## ⚙️ Initialize a TypeScript Project

Create a `tsconfig.json` file (TypeScript configuration):

```bash
npx tsc --init
```

> This file lets you customize how TypeScript compiles your code.

## 🔁 Transpile TypeScript to JavaScript

Use the TypeScript compiler (`tsc`) to convert `.ts` files to `.js`:

```bash
npx tsc
```

> This compiles based on `tsconfig.json`. By default, it looks for `*.ts` files in the root or `include` paths.

## ▶️ Run the Compiled Code

Use Node.js to run the output `.js` file:

```bash
node main.js
```

> You cannot run `.ts` files directly with Node without a runtime like `ts-node`.

---

## 📝 Extra Tips

- Create your main file: `main.ts`
- To run TypeScript directly (for quick testing), you can install [ts-node]:

```bash
npm install -D ts-node
```

Then:

```bash
npx ts-node main.ts
```

- Common compiler options in `tsconfig.json`:
  - `"strict": true` for better type safety
  - `"target": "esnext"` or `"es6"` to control JS output
  - `"outDir": "./dist"` to separate compiled files

---

## ✅ Day 1 Goals Complete

- [x] Install TypeScript
- [x] Create `tsconfig.json`
- [x] Transpile `.ts` to `.js`
- [x] Run code with Node

Ready for Day 2 🚀
