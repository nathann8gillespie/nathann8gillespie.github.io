# Modular JavaScript Architecture

## Overview
The codebase has been refactored into a modular architecture that eliminates code duplication and makes maintenance easier.

## Structure

### Core Modules (in `/js/` folder)

1. **config.js** - Central configuration
   - Site-wide settings (`useFiles` flag)
   - Navigation structure (pages and submenus)
   - Footer content (organization info, contact details)
   - Header content (title and subtitle)

2. **utils.js** - Path utilities
   - `getRoot(depth)` - Calculate relative path to root based on page depth
   - `buildLink(targetPath, currentDepth, includeFile)` - Build navigation links dynamically
   - `getResourcePath(resourcePath, currentDepth)` - Get paths to CSS/JS resources

3. **components.js** - UI component generators
   - `createHeader(headerConfig)` - Generate site header
   - `createNavBar(pages, currentDepth, useFiles)` - Generate navigation with dropdowns
   - `createFooter(footerConfig)` - Generate site footer
   - `initializeAll(currentDepth)` - Initialize all components at once

### Entry Points

1. **main.js** (root level) - For pages at depth 1
   - Used by: `home/`, `mission/`, `ourPurpose/`
   - Sets `PAGE_DEPTH = 1`

2. **sections/main.js** - For pages at depth 2
   - Used by: `sections/social-media/`, `sections/medical/`, `sections/problems-in-america/`
   - Sets `PAGE_DEPTH = 2`

## Page Depth System

The modular system uses a depth-based approach to calculate relative paths:

- **Depth 0**: Root directory (not used for pages)
- **Depth 1**: First-level subdirectories (`home/`, `mission/`, etc.)
- **Depth 2**: Second-level subdirectories (`sections/social-media/`, etc.)

## HTML Integration

All HTML files now include scripts in this order:

```html
<!-- For depth 1 pages (home, mission, etc.) -->
<script src="../js/config.js"></script>
<script src="../js/utils.js"></script>
<script src="../js/components.js"></script>
<script src="../main.js"></script>

<!-- For depth 2 pages (sections/*) -->
<script src="../../js/config.js"></script>
<script src="../../js/utils.js"></script>
<script src="../../js/components.js"></script>
<script src="../main.js"></script>
```

## Benefits

1. **Single Source of Truth**: All configuration in one place (`config.js`)
2. **No Code Duplication**: Shared components used across all pages
3. **Easy Maintenance**: Update navigation/footer/header in one location
4. **Automatic Path Resolution**: Paths calculated based on page depth
5. **Scalable**: Easy to add new pages or sections

## Adding New Pages

### Adding a depth 1 page (e.g., `contact/index.html`):
1. Create the page directory and HTML file
2. Update `config.js` to add the page to the `pages` array
3. Include the standard depth 1 script imports in the HTML
4. Done! Navigation, header, and footer automatically generated

### Adding a depth 2 page (e.g., `sections/new-section/index.html`):
1. Create the page directory and HTML file
2. Update `config.js` to add the section to the submenu
3. Include the standard depth 2 script imports in the HTML
4. Done! Page automatically integrated into the site

## Customization

### Changing Site-wide Content:
- **Navigation**: Edit `SiteConfig.pages` in `config.js`
- **Footer**: Edit `SiteConfig.footer` in `config.js`
- **Header**: Edit `SiteConfig.header` in `config.js`
- **File extension behavior**: Toggle `SiteConfig.useFiles` in `config.js`

### Adding Page-specific JavaScript:
Add additional script tags after the main entry point:
```html
<script src="../main.js"></script>
<script src="page-specific.js"></script>
```
