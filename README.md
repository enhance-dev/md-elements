<h1 align="center"><code>@enhance/md-elements</code></h1>

<p align="center">
  <strong>Enhance elements for rendering .md to HTML</strong><br>
  Leverage <a href="https://github.com/architect/arcdown">Arcdown</a> to render Markdown on demand and include HTML with <code>&lt;md-render&gt;</code> and <code>&lt;md-content&gt;</code>.<br>
  <a href="https://www.npmjs.com/package/@enhance/md-elements"><strong><code>@enhance/md-elements</code> on npmjs.com »</strong></a><br>
  <!--<br>
  Contents:
  <a href="#Install">Install</a>
  •
  <a href="#Usage">Usage</a>
  •
  <a href="#Links">Links</a>-->
</p>

> [!CAUTION]
> This is in active development and not yet published.
> We are internally reviewing how Markdown can work in Enhance.

## `<md-render>`

Create a context frame for using a specific rendered .md file. Children `<md-content>` tags will use this context to include content like HTML and frontmatter from the file.

```html
<md-render>
  <!-- use md-content -->
</md-render>
```


### `file=`

Optional specifier for the rendered file. If not provided, the first file registered with `EnhanceMd` will be used.

```html
<md-render file="a-specific/file.md">
  <!-- use md-content -->
</md-render>
```

## `<md-content>`

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

### `part=`

The four return values from Arcdown can be used as "parts":

1. `html` rendered HTML
1. `title` title (same as `frontmatter="title"`)
1. `slug` generated slug
1. `toc-html` table of contents

### `frontmatter=`

Additionally any frontmatter can be accessed with `frontmatter=`
