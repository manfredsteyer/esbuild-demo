# Simple Micro Frontend Example using esbuild

```
npm run build
npm run start
```

## Current Implementation

- The remote is an external for the host (see ``build-host.js``)
- The ``index.html`` contains an import map resolving the external remote
- Both get RxJS bundled in

## Goal

- Use Module Federation 2 together with esbuild 
- Resolve remote and share RxJS
- Import Maps are currently NOT really important

## Build Scripts using esbuild

- ``build-host.js``
- ``build-remote.js``
