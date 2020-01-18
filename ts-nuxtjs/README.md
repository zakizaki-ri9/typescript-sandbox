TSで始めるNuxt.jsのおためし

---

# メモ

## 導入手順

```bash
npm i -D typescript @nuxt/typescript-build
npx tsc --init
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "es2018",
    "module": "esnext",
    "moduleResolution": "node",
    "lib": ["esnext", "esnext.asynciterable", "dom"],
    "esModuleInterop": true,
    "allowJs": true,
    "sourceMap": true,
    "strict": true,
    "noEmit": true,
    "baseUrl": ".",
    "paths": {
      "~/*": ["./*"],
      "@/*": ["./*"]
    },
    "types": ["@types/node", "@nuxt/types"]
  },
  "exclude": ["node_modules"]
}
```
