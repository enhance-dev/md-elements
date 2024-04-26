export default function ({ html }) {
  return html`
    <style>
      div.author, div.date {
        font-size: 0.8rem;
      }
      h1 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
      }
      h2 {
        font-size: 1.5rem;
        margin-bottom: 0.8rem;
      }
      h3 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }
      blockquote {
        margin-left: 0;
        padding-left: 1rem;
        border-left: 5px solid silver;
      }
      article h1 {
        display: none;
      }
    </style>

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
      <slot></slot>
    </md-render>

  `
}
