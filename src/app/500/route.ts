const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>We fell over · Digital Steps</title>
  <style>
    :root { --deep:#163b3a; --warm:#fafaf7; --charcoal:#252b2a; }
    * { box-sizing: border-box; }
    body { margin: 0; min-height: 100vh; display: grid; align-items: center; padding: 2.5rem 1.25rem; background: var(--warm); color: var(--charcoal); font-family: "Segoe UI", sans-serif; }
    main { width: min(40rem, 100%); margin: 0 auto; }
    .kicker { margin: 1.25rem 0 0; color: var(--deep); font-size: .8rem; font-weight: 500; letter-spacing: .14em; text-transform: uppercase; }
    h1 { margin: .6rem 0 0; color: var(--deep); font-size: clamp(2.4rem, 6vw, 3.6rem); font-weight: 500; letter-spacing: -.03em; line-height: 1.05; }
    p { max-width: 36rem; font-size: 1.15rem; line-height: 1.6; }
    a, button { display: inline-flex; align-items: center; min-height: 3rem; margin: .4rem .6rem 0 0; padding: 0 1.15rem; border-radius: 999px; font: inherit; font-size: .95rem; font-weight: 500; text-decoration: none; }
    a { background: var(--deep); color: var(--warm); }
    button { border: 1px solid var(--deep); background: transparent; color: var(--deep); cursor: pointer; }
    a:focus-visible, button:focus-visible { outline: 2px solid var(--deep); outline-offset: 3px; }
  </style>
</head>
<body>
  <main>
    <svg width="120" height="100" viewBox="0 0 140 120" role="img" aria-label="A person who has fallen off the steps">
      <rect x="8" y="78" width="34" height="28" rx="6" fill="#163B3A"/>
      <rect x="48" y="56" width="34" height="50" rx="6" fill="#163B3A"/>
      <rect x="88" y="34" width="34" height="72" rx="6" fill="#0AA09B"/>
      <circle cx="34" cy="48" r="14" fill="#FAFAF7" stroke="#163B3A" stroke-width="3"/>
      <text x="26" y="46" fill="#163B3A" font-size="8">x x</text>
      <text x="29" y="56" fill="#163B3A" font-size="10">︵</text>
      <ellipse cx="34" cy="70" rx="16" ry="5" fill="#C4841D" opacity="0.35"/>
    </svg>
    <p class="kicker">500</p>
    <h1>We have fallen over.</h1>
    <p>The server took a confident step and found a cable. This is our mess, not yours. You may judge us quietly while we pick up the biscuits.</p>
    <p>
      <button type="button" onclick="location.reload()">Try that again</button>
      <a href="/">Back to the start</a>
    </p>
  </main>
</body>
</html>`;

export function GET() {
  return new Response(html, {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
