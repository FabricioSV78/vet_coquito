# Despliegue

El proyecto genera un sitio estático en `dist/` mediante:

```bash
npm install
npm run build
```

## Netlify

El archivo `netlify.toml` ya define el comando de construcción, la carpeta publicada y el fallback para navegación SPA.

### Desde Git

1. Conecta el repositorio en Netlify.
2. Netlify utilizará automáticamente `npm run build`.
3. La carpeta de publicación será `dist`.

### Desde la CLI

Después de autenticarte con Netlify:

```bash
npm run deploy:netlify
```

## Cloudflare Pages

El archivo `wrangler.jsonc` configura `dist` como salida de Pages.

### Desde Git

Configura el proyecto con:

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: 22

### Desde la CLI

Después de autenticarte con Wrangler:

```bash
npm run deploy:cloudflare
```

Los archivos `public/_redirects` y `public/_headers` se copian automáticamente a `dist/` y funcionan en ambos proveedores.
