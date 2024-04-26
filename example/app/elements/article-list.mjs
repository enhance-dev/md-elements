export default function ({ html, state: { store } }) {
  const { enhanceMdFiles } = store

  return html`
    <style>
      aside {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      h2 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: #444;
      }

      a {
        position: relative;
      }

      a.active {
        color: firebrick;
        text-decoration: none;
      }

      a.active:before {
        content: "❧";
        position: absolute;
        width: 1ch;
        left: -1.2rem;
        font-family: system-ui, serif;
        color: rosybrown;
      }
    </style>

    <aside>
      <h2>Disquisitions</h2>
      ${enhanceMdFiles.map(article => {
    const [ one, two ] = article.title.split(':')
    return html`
          <a
            class="${article.active ? 'active' : ''}"
            href="/${article.link}"
          >
            <strong>${one}</strong><br>
            ${two}
          </a>
        `
  }).join('')}
      <h3>More</h3>
      <a href="/about">About</a>
    </aside>
  `
}
