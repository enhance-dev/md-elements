export default function Head (state) {
  const { req } = state
  const { path } = req
  const title = `Palantíri Pages: Insights of Middle-earth — ${path}`
  return /* html*/`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${title}</title>
      <link rel="stylesheet" href="/_public/styles.css">
      <link rel="icon" href="/_public/favicon.svg">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Rasa:ital,wght@0,300..700;1,300..700&family=Texturina:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap" rel="stylesheet">
      <style>
        header {
          padding: 1rem;
          text-align: center;
          font-size: 2rem;
          font-family: var(--font-headline);
          border-bottom: 1px solid lightcoral;
        }
        header a {
          color: maroon;
          text-decoration: none;
          text-shadow: 0.05em 0.05em 0.1em rgba(0, 0, 0, 0.1);
          font-weight: 700;
        }

        body > article-list {
          padding: 0 1rem 0 1.5rem;
          width: 25vw;
          position: fixed;
          height: 100%;
          overflow-y: auto;
        }

        main {
          padding: 1rem;
        }

        article-content {
          display: block;
          margin-left: 27vw;
          padding: 0 1rem;
        }

        footer {
          text-align: center;
          padding: 1rem;
          font-family: var(--font-headline);
          font-size: 0.9rem;
          border-top: 1px solid lightcoral;
        }
      </style>
    </head>
  `
}
