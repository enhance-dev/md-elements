export default function AboutContent ({ html, state: { store } }) {
  const { enhanceMd } = store

  return html`

<style>
  section {
    margin-bottom: 2rem;
  }
  section small {
    padding: 0.25rem 0.4rem;
    background-color: #666;
    color: white;
  }
  section code {
    font-size: 0.85em;
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
