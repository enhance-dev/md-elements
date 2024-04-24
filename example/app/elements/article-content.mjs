export default function ({ html, state: { store } }) {
  const { fileName } = store

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
    </style>

    <md-render file="${fileName}">
      <md-content frontmatter="author"></md-content>
      <md-content frontmatter="date"></md-content>
      <md-content part="toc-html"></md-content>
      <slot></slot>
      <article>
        <md-content part="html"></md-content>
      </article>
    </md-render>
  `
}
