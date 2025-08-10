# Agent Guidelines for www.oshevtsov.com (Astro)

## Commands
- **Build**: `npm run build` (runs astro check + astro build)
- **Dev**: `npm run dev` (starts development server)
- **Check**: `npm run check` (runs astro check for TypeScript)
- **Preview**: `npm run preview` (preview built site)
- **Sync**: `npm run sync` (sync Astro types)

## Architecture
- **Framework**: Astro 5.12.9 with TypeScript (strict mode)
- **Content**: Blog collection using Astro content loader in `src/content/blog/`
- **Structure**: `src/components/`, `src/layouts/`, `src/pages/`, `src/styles/` (SCSS modules)
- **Integrations**: MDX, PurgeCSS, rehype-unwrap-images
- **Config**: TypeScript strict mode, Prettier with astro plugin

## Code Style
- **Imports**: ES modules, relative imports with extensions
- **Components**: `.astro` files with TypeScript frontmatter
- **Props**: Export interface Props pattern for component typing
- **Functions**: camelCase, utility functions in frontmatter
- **Files**: kebab-case for components, PascalCase for layouts
- **Styles**: SCSS modules, Nord color scheme preference
