## Project Setup

```
pnpm install
```

## Compile and Hot-Reload for Development

```
pnpm dev
```

## Type-Check, Compile and Minify for Production

```
pnpm build
```

## Create a new tool

```
pnpm run script:create:tool tool-name
```
It will create a directory in src/tools with the correct files, and a the import in src/tools/index.ts. You will just need to add the imported tool in the proper category and develop the tool.

Need to set text for i18n.