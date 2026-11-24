<div align="center">

# Luyanda Nkosi | Portfolio

**Full Stack Developer building practical, reliable software, databases and dashboards.**

[![Netlify Status](https://api.netlify.com/api/v1/badges/4e26c7e4-9db3-49ee-a587-007e7321962d/deploy-status)](https://app.netlify.com/projects/luyandankosi/deploys)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)

[**View the live site**](https://luyandankosi.netlify.app/) · [LinkedIn](https://www.linkedin.com/in/luyanda-nkosi-34578b350/) · [Email](mailto:laynkosi1304@gmail.com)

<br>

<a href="https://luyandankosi.netlify.app/">
  <img src="luyanda-portfolio-v2/assets/og-image.png" alt="Preview of the Luyanda Nkosi portfolio website" width="720">
</a>

</div>

---

## Overview

This repository contains the source code for my personal portfolio website. It is a fast, responsive, hand-built site with no frameworks or build step, written in plain HTML, CSS and JavaScript and deployed on Netlify. It showcases my projects, skills, process and experience, and gives visitors a simple way to get in touch.

## Features

| Area | What it includes |
| --- | --- |
| **Design** | Responsive layout, custom sticker artwork, reusable stylesheet shared across every page |
| **Accessibility** | Skip-to-content link, semantic landmarks, labelled controls, live-region form messages |
| **Contact form** | Client-side validation, Netlify Forms delivery, honeypot, timing check and send cooldown to reduce spam |
| **Privacy** | Cookie consent banner; privacy-friendly GoatCounter analytics only load after a visitor accepts |
| **Security** | Strict Content Security Policy, HSTS, `X-Frame-Options`, `Referrer-Policy` and `Permissions-Policy` set in `_headers` |
| **SEO** | Sitemap, `robots.txt`, structured data, Open Graph image and web app manifest |
| **Error handling** | Custom 404 page that keeps visitors inside the site |
| **Legal** | Privacy Policy and Terms & Conditions pages |

## Tech stack

- **Front end:** HTML5, CSS3, vanilla JavaScript
- **Hosting and forms:** Netlify (continuous deployment from this repository)
- **Analytics:** GoatCounter (cookie-free, loaded only after consent)
- **Tooling:** Git, GitHub, VS Code

## Project structure

```text
.
└── luyanda-portfolio-v2/
    ├── index.html            Main portfolio page
    ├── privacy.html          Privacy Policy
    ├── terms.html            Terms & Conditions
    ├── 404.html              Custom "page not found" page
    ├── style.css             Single stylesheet for every page
    ├── script.js             Navigation and page interactions
    ├── assets/
    │   ├── form.js           Contact form validation and submission
    │   ├── consent.js        Cookie consent banner
    │   ├── analytics.js      GoatCounter loader (runs after consent)
    │   └── stickers/         Optimised WebP artwork used by the site
    ├── sticker-library/      Master sticker files (PNG, SVG, WebP)
    ├── _headers              Netlify security and caching headers
    ├── _redirects            Netlify redirects
    ├── sitemap.xml
    ├── robots.txt
    ├── site.webmanifest
    ├── .well-known/security.txt
    └── dev-server.js         Local server that serves the 404 page
```

## Run it locally

The site has no dependencies. You only need [Node.js](https://nodejs.org/) for the optional local server.

```bash
git clone https://github.com/laynkosi1304-cmd/luyanda-portfolio.git
cd luyanda-portfolio/luyanda-portfolio-v2
node dev-server.js
```

Then open <http://localhost:5500>. Visit any address that does not exist (for example `/nope`) to see the custom 404 page.

> The site uses root-relative paths such as `/style.css`, so always serve the `luyanda-portfolio-v2` folder itself rather than its parent. If you use the VS Code Live Server extension, open that folder in VS Code first.

## Deployment

The site deploys automatically: every push to `main` is published by Netlify.

| Setting | Value |
| --- | --- |
| Branch to deploy | `main` |
| Build command | *(empty)* |
| Publish directory | `luyanda-portfolio-v2` |

## Contact

Open to collaboration and learning opportunities.

- **Website:** [luyandankosi.netlify.app](https://luyandankosi.netlify.app/)
- **LinkedIn:** [Luyanda Nkosi](https://www.linkedin.com/in/luyanda-nkosi-34578b350/)
- **Email:** [laynkosi1304@gmail.com](mailto:laynkosi1304@gmail.com)

---

<div align="center">
  <sub>&copy; 2026 Luyanda Nkosi. All rights reserved.</sub>
</div>
