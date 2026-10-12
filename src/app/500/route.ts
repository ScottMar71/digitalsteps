// Static 500 demo page. Self-contained on purpose: it must render even if the app cannot.
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>We tripped · Digital Steps</title>
  <style>
    :root { --paper:#f6f3ec; --line:#dad5c8; --ink:#1c1c1a; --ink-soft:#5b5a55; --ember:#e2561f; --ember-deep:#b83e0f; }
    * { box-sizing: border-box; }
    body { margin: 0; min-height: 100vh; display: grid; align-items: center; padding: 3.5rem 1.5rem 4rem; background: var(--paper); color: var(--ink); font-family: "Instrument Sans", "Helvetica Neue", Arial, sans-serif; font-size: 1.0625rem; line-height: 1.6; }
    main { width: min(44rem, 100%); margin: 0 auto; }
    svg { display: block; width: clamp(6rem, 18vw, 9rem); height: auto; color: var(--ink); }
    .kicker { display: inline-flex; align-items: center; gap: .5rem; margin: 1.75rem 0 0; padding: .4rem .8rem; border: 1px solid var(--line); border-radius: 999px; font-size: .8125rem; font-weight: 600; letter-spacing: .12em; line-height: 1; text-transform: uppercase; }
    .kicker::before { content: ""; width: .5rem; height: .5rem; border-radius: 50%; background: var(--ember); }
    h1 { margin: 1rem 0 0; font-size: clamp(2.5rem, 7vw, 4.25rem); font-weight: 500; letter-spacing: -.03em; line-height: 1.02; }
    h1 em { font-style: normal; color: var(--ember-deep); }
    p { max-width: 36rem; margin: 1.25rem 0 0; color: var(--ink-soft); font-size: clamp(1.1875rem, 2.2vw, 1.375rem); line-height: 1.5; }
    .actions { display: flex; flex-wrap: wrap; gap: .75rem; margin-top: 2rem; }
    a, button { display: inline-flex; align-items: center; min-height: 3rem; padding: 0 1.25rem; border-radius: 999px; font: inherit; font-size: 1rem; font-weight: 500; text-decoration: none; cursor: pointer; }
    button { border: 0; background: var(--ink); color: var(--paper); }
    a { border: 1px solid var(--ink); background: transparent; color: var(--ink); }
    a:focus-visible, button:focus-visible { outline: 3px solid var(--ember); outline-offset: 3px; }
  </style>
</head>
<body>
  <main>
    <svg viewBox="0 0 96 96" role="img" aria-label="Digital Steps">
      <rect x="4" y="62" width="24" height="30" rx="6" fill="currentColor"/>
      <rect x="34" y="36" width="24" height="56" rx="6" fill="currentColor"/>
      <rect x="64" y="62" width="24" height="30" rx="6" fill="#e2561f"/>
    </svg>
    <p class="kicker">500</p>
    <h1>We tripped. <em>Not you, us.</em></h1>
    <p>Something on our side went wrong. Your computer is fine and you did nothing wrong. Give it a moment and try again, and we will sort the rest.</p>
    <div class="actions">
      <button type="button" onclick="location.reload()">Try that again</button>
      <a href="/">Back to the start</a>
    </div>
  </main>
</body>
</html>`;

export function GET() {
  return new Response(html, {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
