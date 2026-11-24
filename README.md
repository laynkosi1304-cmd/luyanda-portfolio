<!-- Brand palette: ink 111111 · cream F3EEE3 · green 80EF80 (same as the live site) -->

<p align="center">
  <a href="https://luyandankosi.netlify.app/">
    <img src="https://capsule-render.vercel.app/api?type=waving&color=0:111111,55:111111,100:80EF80&height=230&section=header&text=LUYANDA%20NKOSI&fontSize=62&fontColor=F3EEE3&fontAlignY=38&animation=fadeIn&desc=PORTFOLIO%20WEBSITE%20%C2%B7%20PRACTICAL%20SOFTWARE%20FOR%20THE%20BOLD%20AND%20BUSY&descSize=17&descAlignY=60&descColor=80EF80" alt="Luyanda Nkosi portfolio website" />
  </a>
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Anton&size=26&duration=3000&pause=1000&color=80EF80&background=00000000&center=true&vCenter=true&width=800&height=55&lines=Software+Development;Database+Management;Systems+Analysis;Data+Analytics;Hand-built.+No+frameworks." alt="Software development, database management, systems analysis, data analytics. Hand-built, no frameworks." />
</p>

<p align="center">
  <a href="https://luyandankosi.netlify.app/"><img src="https://img.shields.io/badge/VIEW_LIVE_SITE-80EF80?style=for-the-badge&logo=netlify&logoColor=111111&labelColor=80EF80" alt="View the live site" /></a>
  <a href="https://www.linkedin.com/in/luyanda-nkosi-34578b350/"><img src="https://img.shields.io/badge/LINKEDIN-111111?style=for-the-badge&logo=linkedin&logoColor=80EF80" alt="LinkedIn" /></a>
  <a href="mailto:laynkosi1304@gmail.com"><img src="https://img.shields.io/badge/EMAIL_ME-111111?style=for-the-badge&logo=gmail&logoColor=80EF80" alt="Email" /></a>
</p>

<p align="center">
  <a href="https://app.netlify.com/projects/luyandankosi/deploys"><img src="https://api.netlify.com/api/v1/badges/4e26c7e4-9db3-49ee-a587-007e7321962d/deploy-status" alt="Netlify deploy status" /></a>
  <img src="https://img.shields.io/badge/dependencies-0-80EF80?style=flat-square&labelColor=111111" alt="Zero dependencies" />
  <img src="https://img.shields.io/badge/build_step-none-80EF80?style=flat-square&labelColor=111111" alt="No build step" />
  <img src="https://img.shields.io/badge/hosting-Netlify-80EF80?style=flat-square&labelColor=111111" alt="Hosted on Netlify" />
</p>

<br>

<p align="center">
  <a href="https://luyandankosi.netlify.app/">
    <img src="luyanda-portfolio-v2/assets/og-image.png" alt="Preview of the Luyanda Nkosi portfolio website" width="760" />
  </a>
</p>

---

## ▌About the project

My personal portfolio: a fast, responsive, hand-built website showing my projects, skills, process and experience, with a simple way to get in touch. It is written in plain **HTML, CSS and JavaScript** with no frameworks and no build step, and deployed on **Netlify**, so every push to `main` goes live in about a minute.

The look is street-style: ink black, cream and pastel green, with custom sticker artwork, a ticker, stacked process cards and a drippy footer.

---

## ▌Features

<table>
  <tr>
    <td width="33%" valign="top">
      <h3>🎨 Design</h3>
      Fully responsive layout, custom sticker library and a single shared stylesheet used by every page.
    </td>
    <td width="33%" valign="top">
      <h3>♿ Accessibility</h3>
      Skip-to-content link, semantic landmarks, labelled controls and live-region form messages.
    </td>
    <td width="33%" valign="top">
      <h3>✉️ Contact form</h3>
      Client-side validation, Netlify Forms delivery, honeypot, timing check and a send cooldown against spam.
    </td>
  </tr>
  <tr>
    <td width="33%" valign="top">
      <h3>🔒 Security</h3>
      Strict Content Security Policy, HSTS, <code>X-Frame-Options</code>, <code>Referrer-Policy</code> and <code>Permissions-Policy</code> via <code>_headers</code>.
    </td>
    <td width="33%" valign="top">
      <h3>🍪 Privacy first</h3>
      Cookie consent banner. Cookie-free GoatCounter analytics only load after a visitor clicks Accept.
    </td>
    <td width="33%" valign="top">
      <h3>🔎 SEO ready</h3>
      Sitemap, <code>robots.txt</code>, structured data, Open Graph image and web app manifest.
    </td>
  </tr>
</table>

Also included: a custom **404 page**, **Privacy Policy** and **Terms & Conditions** pages, and a `security.txt` contact file.

---

## ▌Tech stack

<p align="left">
  <img src="https://skillicons.dev/icons?i=html,css,js,nodejs,netlify,git,github,vscode&theme=dark&perline=8" alt="HTML5, CSS3, JavaScript, Node.js, Netlify, Git, GitHub, VS Code" />
</p>

| Layer | Tools |
| --- | --- |
| Front end | HTML5, CSS3, vanilla JavaScript |
| Hosting and forms | Netlify with continuous deployment from this repo |
| Analytics | GoatCounter (cookie-free, consent-gated) |
| Local development | Node.js (optional) for the included dev server |

---

## ▌Project structure

```text
.
└── luyanda-portfolio-v2/
    ├── index.html             Main portfolio page
    ├── privacy.html           Privacy Policy
    ├── terms.html             Terms & Conditions
    ├── 404.html               Custom "page not found" page
    ├── style.css              Single stylesheet for every page
    ├── script.js              Navigation and page interactions
    ├── assets/
    │   ├── form.js            Contact form validation and submission
    │   ├── consent.js         Cookie consent banner
    │   ├── analytics.js       GoatCounter loader (runs after consent)
    │   └── stickers/          Optimised WebP artwork
    ├── sticker-library/       Master sticker files (PNG, SVG, WebP)
    ├── _headers               Netlify security and caching headers
    ├── _redirects             Netlify redirects
    ├── sitemap.xml · robots.txt · site.webmanifest
    ├── .well-known/security.txt
    └── dev-server.js          Local server that also serves the 404 page
```

---

## ▌Run it locally

No dependencies to install. You only need [Node.js](https://nodejs.org/) for the optional dev server.

```bash
git clone https://github.com/laynkosi1304-cmd/luyanda-portfolio.git
cd luyanda-portfolio/luyanda-portfolio-v2
node dev-server.js
```

Open <http://localhost:5500>, then visit any address that does not exist (for example `/nope`) to see the custom 404 page.

> [!NOTE]
> The site uses root-relative paths such as `/style.css`, so always serve the `luyanda-portfolio-v2` folder itself, not its parent. With the VS Code Live Server extension, open that folder in VS Code first.

---

## ▌Deployment

Every push to `main` is built and published by Netlify.

| Setting | Value |
| --- | --- |
| Branch to deploy | `main` |
| Build command | *(empty)* |
| Publish directory | `luyanda-portfolio-v2` |

---

## ▌Repository activity

Live numbers for this repository. They update automatically on every push.

<p align="center">
  <img src="https://img.shields.io/github/last-commit/laynkosi1304-cmd/luyanda-portfolio?style=for-the-badge&labelColor=111111&color=80EF80" alt="Last commit" />
  <img src="https://img.shields.io/github/commit-activity/m/laynkosi1304-cmd/luyanda-portfolio?style=for-the-badge&labelColor=111111&color=80EF80" alt="Commits per month" />
  <img src="https://img.shields.io/github/repo-size/laynkosi1304-cmd/luyanda-portfolio?style=for-the-badge&labelColor=111111&color=80EF80" alt="Repository size" />
  <img src="https://img.shields.io/github/languages/top/laynkosi1304-cmd/luyanda-portfolio?style=for-the-badge&labelColor=111111&color=80EF80" alt="Top language" />
  <img src="https://img.shields.io/github/stars/laynkosi1304-cmd/luyanda-portfolio?style=for-the-badge&labelColor=111111&color=80EF80" alt="Stars" />
</p>

<p align="center">
  <img height="170" src="https://github-readme-stats-five-sigma-99.vercel.app/api?username=laynkosi1304-cmd&show_icons=true&custom_title=GITHUB%20STATS&bg_color=111111&title_color=80EF80&text_color=F3EEE3&icon_color=80EF80&ring_color=80EF80&border_color=80EF80&count_private=true" alt="GitHub stats: stars, commits, pull requests and issues" />
  <img height="170" src="https://github-readme-stats-five-sigma-99.vercel.app/api/top-langs/?username=laynkosi1304-cmd&layout=compact&custom_title=TOP%20LANGUAGES&bg_color=111111&title_color=80EF80&text_color=F3EEE3&icon_color=80EF80&border_color=80EF80&langs_count=6" alt="Most used languages" />
</p>

<p align="center">
  <img width="100%" src="https://github-readme-activity-graph-gold-gamma.vercel.app/graph?username=laynkosi1304-cmd&custom_title=COMMIT%20ACTIVITY&bg_color=111111&color=80EF80&line=80EF80&point=F3EEE3&area=true&area_color=80EF80&title_color=80EF80&hide_border=false&border_color=80EF80" alt="Contribution activity graph" />
</p>

---

## ▌Let's talk

Open to collaboration and learning opportunities.

<p align="left">
  <a href="https://luyandankosi.netlify.app/"><img src="https://img.shields.io/badge/PORTFOLIO-80EF80?style=for-the-badge&logo=netlify&logoColor=111111&labelColor=80EF80" alt="Portfolio" /></a>
  <a href="https://www.linkedin.com/in/luyanda-nkosi-34578b350/"><img src="https://img.shields.io/badge/LINKEDIN-111111?style=for-the-badge&logo=linkedin&logoColor=80EF80" alt="LinkedIn" /></a>
  <a href="mailto:laynkosi1304@gmail.com"><img src="https://img.shields.io/badge/EMAIL-111111?style=for-the-badge&logo=gmail&logoColor=80EF80" alt="Email" /></a>
</p>

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:80EF80,45:111111,100:111111&height=110&section=footer" alt="" />
</p>

<p align="center"><sub>&copy; 2026 Luyanda Nkosi. All rights reserved.</sub></p>
