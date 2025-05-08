# Civil‑Engineer‑Portfolio

A modern, fully responsive **HTML 5 + Bootstrap 5** template for civil‑engineering portfolios.
Originally forked from the *Arkitektur* theme and refactored for structural design, construction management, and infrastructure services.
Includes bilingual (English ↔ Arabic) support with automatic RTL handling, SEO‑ready markup, and no build tools required—just open the HTML files and deploy.

![Template preview](./screenshots/preview.png)

---

## ✨ Key Features

| Category               | Details                                                                    |
| ---------------------- | -------------------------------------------------------------------------- |
| **Core stack**         | **Bootstrap 5.3**, HTML 5, CSS 3, vanilla ES6                              |
| **Responsive**         | Mobile‑first grid, sticky navbar, hamburger menu                           |
| **Bilingual / RTL**    | Instant English ↔ Arabic toggle, `dir="rtl"` switch, Owl Carousel RTL mode |
| **Hero slider**        | Owl Carousel 2 with thumbnail dots & autoplay                              |
| **Pre‑built sections** | Facts counters · About · Services · Why Choose · CTA Contact               |
| **SEO friendly**       | Meta description/keywords, Open Graph, JSON‑LD schema                      |
| **Performance**        | Lightweight (no heavy JS frameworks)                                       |
| **MIT licensed**       | Free for personal & commercial projects                                    |

---

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/<your_user>/civil-engineer-portfolio.git
cd civil-engineer-portfolio

# Open in the browser
open index.html               # or double‑click on Windows
```

*No build tools required – it’s pure static files.*

---

## 🗂 Folder Structure

```
civil-engineer-portfolio/
├── css/
│   └── style.css
├── img/
│   ├── carousel-1.jpg
│   └── icons/
├── js/
│   └── main.js
├── lib/                # third‑party assets
│   ├── animate/
│   ├── owlcarousel/
│   └── …
├── index.html
├── about.html
├── service.html
├── contact.html
└── README.md
```

---

## 🔧 Customization Guide

| Task                  | Where to edit                                                        |
| --------------------- | -------------------------------------------------------------------- |
| **Brand logo & name** | `<nav class="navbar …">` in each HTML file                           |
| **Primary color**     | change `--primary` in `css/style.css`                                |
| **Carousel images**   | replace files in `img/carousel‑*.jpg` (1920×1080 ideal)              |
| **Add services**      | duplicate a `.service-item` card in **index.html**                   |
| **Contact info**      | search `+012 345 6789` and `info@example.com` across HTML files      |
| **Translate text**    | add IDs in HTML and entries in `elementsToTranslate` in `js/main.js` |

---

## 🌐 English ↔ Arabic Switching

1. **Toggle button**

   ```html
   <a id="languageButton" class="btn btn-primary">عربي</a>
   ```

2. **Translation map**

   ```js
   const elementsToTranslate = {
     homeNav:        { en: "Home",    ar: "الرئيسية" },
     carouselTitle1: { en: "Building Tomorrow’s Infrastructure",
                       ar: "بناء بنية الغد التحتية" },
     // … more keys …
   };
   ```

3. **Logic in `main.js`**

   ```js
   document.documentElement.dir =
       currentLang === "ar" ? "rtl" : "ltr";
   ```

   and Owl Carousel re‑initialises with `rtl:true` when needed.

Add any new text node by giving it an **ID** and appending a key in the map—no extra code.

---

## 📈 SEO Checklist

| ✅                                                                 | Item |
| ----------------------------------------------------------------- | ---- |
| Descriptive `<title>` & `<meta name="description">` on every page |      |
| Keyword `<meta>` for civil engineering niche                      |      |
| Canonical URL tag                                                 |      |
| Open Graph tags for social sharing                                |      |
| JSON‑LD ProfessionalService schema                                |      |
| `<img>` tags with meaningful `alt` text                           |      |

---

## 🤝 Credits

* **Base template** – [HTML Codex “Arkitektur”](https://htmlcodex.com)
* **Icons** – Font Awesome 5, Bootstrap Icons
* **Libraries** – Animate.css, Owl Carousel 2
* **Images** – Unsplash (free use)

---

## 📄 License

Released under the **MIT License** – free for personal & commercial projects.
Attribution (footer link or a GitHub ⭐) is appreciated but **not required**.

---

## ✍️ Author / Maintainer

**\[Your Name]** — Civil Engineer, Structural Design & Construction Management
[Portfolio](https://yourwebsite.com) | [LinkedIn](https://linkedin.com/) | [Twitter](https://twitter.com/)

Feel free to open issues or pull requests to improve the template!
