export default function AboutContent ({ html, state: { store } }) {
  const { enhanceMd } = store

  return html`

<style>
  section {
    margin-bottom: 2rem;
  }
  section small {
    display: block;
    margin: 0.5rem 0;
    background-color: #f7f7f7;
  }
  section code {
    background-color: #f7f7f7;
    padding: 0.1rem 0.3rem;
    font-size: 0.9em;
  }
  section blockquote {
    border-left: 3px solid #eee;
    padding-left: 0.5rem;
  }
  section .error {
    color: red;
  }
</style>

${Object.keys(enhanceMd).map(file => {
    const { error, html } = enhanceMd[file]
    if (error)
      return `
        <section>
          <small>Error from <code>${file}</code>:</small>
          <p class="error">${error.message}</p>
        </section>`

    return `
      <section>
        <small>Content of <code>${file}</code>:</small>
        <div>${html}</div>
      </section>`
  }).join('')}

  `
}
