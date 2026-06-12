# marf Website — TODO & Recommendations

_Last updated: 2026-06-13_

## 🔴 Pending — needed to finish launch

### 1. Analytics IDs (GA4 + Microsoft Clarity) — ✅ DONE 2026-06-13
Both IDs are embedded in `index.html`: GA4 `G-25XGKQ8MDL`, Clarity `x62wehn9rh`.

Remaining: **link them** — Clarity → Settings → Setup → **Google Analytics integration** → connect the GA4 property. (This puts Clarity session-recording links inside your GA4 reports.)

Events tracked once live: `whatsapp_click` (with location: hero / product / contact / floating / footer), `generate_lead` (form submits, with role + state), `language_change`, `faq_open`.

### 2. Commit & deploy
All changes are local and uncommitted. When happy with the preview (`npx serve .` → http://localhost:3456):
- Commit and push to `master` → Vercel auto-deploys, or run `npx vercel deploy --prod`.
- After deploy, open GA4 **Realtime** + the Clarity dashboard and click around the live site to confirm data arrives.

## 🟡 High-impact recommendations (do soon)

1. **NAFDAC registration number** — display it near the product cards and in the footer. The single strongest trust signal for Nigerian agro buyers. (Send the number to Claude and it gets added in minutes.)
2. **WhatsApp Business** — switch 08022256977 to the WhatsApp Business app: branded profile, product catalog, quick replies, away messages. All site CTAs then land on a proper business profile.
3. **Google Business Profile** — free listing at [business.google.com](https://business.google.com); makes the company show up for "organic fertilizer + your city" searches and on Maps.

## 🟢 Worth doing (when there's time)

4. **Custom domain** — e.g. `marforganics.com.ng` or `marf.ng`. Better brand recall, better WhatsApp link previews, cleaner GA data. Buy from a .ng registrar, then add it in the Vercel project settings.
5. **Meta Pixel** — only if/when running Facebook or Instagram ads (the dominant channel for Nigerian agri marketing). Same pattern as GA4: one snippet + a `Lead` event on WhatsApp clicks.
6. **Real testimonial photos/videos** — replace the emoji avatars with photos of the actual farmers quoted, or 30-second phone videos. Hugely increases believability.
7. **Application photos** — when real photos of mixing/spraying marf exist, re-add a 3-photo strip to the "How to Apply" section (the layout previously had slots there).
8. **Compiled Tailwind** — the site uses the Tailwind CDN (fine for now, but it logs a console warning and costs ~100 KB). A one-time build step producing a small static CSS file makes the site faster.
9. **Search Console** — verify the site at [search.google.com/search-console](https://search.google.com/search-console) and submit `sitemap.xml` so Google indexes it quickly.

## 📓 Notes

- Original full-size photos are preserved in `images/Landscap Images/` and `images/Products/`; the site uses the optimized copies in `images/` (~1.2 MB total).
- The Chrome-extension guided setup for GA4/Clarity failed repeatedly on 2026-06-13 ("tab no longer exists" from the extension) — check the Claude side panel for a pending permission prompt before retrying, or just follow the manual steps above.
