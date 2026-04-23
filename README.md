# Golden Gate Management — Local Site

Plain HTML / CSS / JS clone of the Golden Gate Management website, ready for
frontend improvements.

## Running locally

The site uses `fetch()` to pull in shared header/footer partials, which means
you need to serve it over HTTP — opening `index.html` directly with `file://`
won't work.

Pick any static server, for example:

```bash
# Python (ships with macOS)
python3 -m http.server 8080

# Or Node
npx serve .
```

Then visit http://localhost:8080.

If you use VS Code, the **Live Server** extension works out of the box.

## Structure

```
.
├── index.html              # home page
├── contact.html
├── applications.html
├── waitlist.html
├── maintenance.html
├── payments.html
├── casa-dea-info.html
├── housing/
│   ├── index.html
│   ├── mens.html
│   ├── womens.html
│   └── married.html
├── resident-portal/
│   ├── index.html
│   ├── bikes.html
│   ├── cleaning-checks.html
│   ├── move-in.html
│   ├── move-out.html
│   ├── parking.html
│   └── selling-contract.html
├── partials/
│   ├── header.html         # site-wide nav + brand
│   └── footer.html         # site-wide footer
├── css/styles.css          # all styling
├── js/
│   ├── include.js          # loads partials, then main.js
│   └── main.js             # nav toggle, slideshow, current-page highlight
└── images/                 # drop property photos here
```

## Editing

- **Header / nav:** edit `partials/header.html` once — changes apply to every
  page.
- **Footer:** edit `partials/footer.html`.
- **Styles:** edit `css/styles.css`. CSS custom properties at the top control
  colors, fonts, and the max content width.
- **Images:** drop files into `images/` and reference them as
  `/images/your-file.jpg`. The home page currently expects
  `mens-housing.jpg`, `womens-housing.jpg`, `married-housing.jpg` (missing
  files fall back to a gray placeholder).

## What's a real page vs. a stub

- `index.html` is fully built — housing cards, leasing banner, testimonial
  slideshow.
- Every other page is a stub: real header/footer/links, placeholder content.
  Fill them in as you work.

## Outbound links preserved

Applications still link to the existing Google Forms, and Payments still link
to the existing rpropayments.com tenant portals. Swap these out in
`partials/header.html` and on each page if those move.
