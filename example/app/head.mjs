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
    </head>
  `
}
