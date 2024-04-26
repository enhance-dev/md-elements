<h1 align="center"><code>@enhance/md-elements</code></h1>

<p align="center">
  <strong>Enhance elements for rendering .md to HTML</strong><br>
  Leverage <a href="https://github.com/architect/arcdown">Arcdown</a> to render Markdown on demand and include HTML with <code>&lt;md-render&gt;</code> and <code>&lt;md-content&gt;</code>.<br>
  <a href="https://www.npmjs.com/package/@enhance/md-elements"><strong><code>@enhance/md-elements</code> on npmjs.com »</strong></a><br>
  <br>
  Contents:
  <a href="#Install">Install</a>
  •
  <a href="#Usage">Usage</a>
  •
  <a href="#Elements">Elements</a>
  •
  <a href="#Advanced">Advanced</a>
</p>

## Install

> [!CAUTION]
> This is in active development and not yet published.  
> We are internally reviewing how Markdown can work in Enhance.

## Usage

### `EnhanceMd()`

The `EnhanceMd` function is used to register and render .md files on the server. The result should be added to the Enhance app store via `preflight.mjs` or an app/api/ function. Destructure the returned value or use the keys `enhanceMd` and `enhanceMdFiles` .

An example preflight.mjs file:

```javascript
import { join } from 'node:path'
import { EnhanceMd } from '@enhance/md-elements'

export default async function ({ req }) {
  // set the root folder for .md to "/app/md"
  const dir = join(import.meta.dirname, 'md')
  // use the request path to find the .md file
  const file = decodeURIComponent(req.path).replace('/', '').concat('.md')

  return {
    ...await EnhanceMd(dir, file),
  }
}
```

#### Parameters

##### `dir`

`string` - The root folder for .md files. The path should be absolute.

##### `file`

`string | string[]` (optional) - The name(s) of the .md file(s) to render. The path(s) (if any) should be relative to `dir`.

#### Returns

`EnhanceMd()` returns an object with two keys. These keys are expected to be added to the Enhance application store by the [elements](#Elements).

##### `enhanceMd`

Contains a dictionary of filenames and their Arcdown results.

##### `enhanceMdFiles`

Contains an array of file objects with the following properties:

- `title` string - a best guess title based on the filename
- `link` string - a URI encoded filename suitable for use in a link
- `active` boolean - true if the file was rendered for the current request

### Elements

#### Setup

Reference the provided elements in your Enhance application:

`app/elements/md-render.mjs`:
```js
export { MdRender as default } from '@enhance/md-elements'
```

`app/elements/md-content.mjs`:
```js
export { MdContent as default } from '@enhance/md-elements'
```

#### `<md-render>`

Create a context frame for using a specific rendered .md file. Children `<md-content>` tags will use this context to include content like HTML and frontmatter from the file.

```html
<md-render>
  <!-- use md-content -->
</md-render>
```


##### `file=`

Optional specifier for the rendered file. If not provided, the first file registered with `EnhanceMd` will be used.

```html
<md-render file="a-specific/file.md">
  <!-- use md-content -->
</md-render>
```

#### `<md-content>`

Include rendered content from a specific part of the .md file. Specify part or frontmatter with attributes.

```html
<md-render>
  <h1><md-content part="title"></md-content></h1>
  <h2><md-content frontmatter="subtitle"></md-content></h2>
  <p>
    <md-content frontmatter="author"></md-content><br>
    <md-content frontmatter="date"></md-content>
  </p>
  <md-content part="toc-html"></md-content>
  <article>
    <md-content part="html"></md-content>
  </article>
</md-render>
```

##### `part=`

The four return values from Arcdown can be used as "parts":

1. `html` rendered HTML
1. `title` title (same as `frontmatter="title"`)
1. `slug` generated slug
1. `toc-html` table of contents

##### `frontmatter=`

Additionally any frontmatter can be accessed with `frontmatter=`

### Advanced
