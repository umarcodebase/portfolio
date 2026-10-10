# Umar Shahzad · Portfolio

Live site: **https://umarcodebase.github.io/**

This is a one-page static site built with plain HTML, CSS and JavaScript, hosted free on GitHub Pages.

---

## 1. Folder structure

```
umarcodebase.github.io/
├── index.html            ← all page content
├── style.css             ← colours, layout, animations (colour tokens at the top)
├── script.js             ← certificates list, power-chain data, animations
├── README.md             ← this file
├── images/
│   ├── profile.jpg       ← round photo (already included, 640×640)
│   ├── cover.jpg         ← LinkedIn cover, hero background (already included)
│   ├── og-image.jpg      ← link preview for LinkedIn/WhatsApp (already included)
│   ├── favicon.svg       ← "US" initials icon (already included)
│   ├── favicon.png       ← fallback icon (already included)
│   ├── apple-touch-icon.png
│   └── certs/            ← put certificate pictures here later
└── assets/
    └── CV.pdf            ← YOU MUST ADD THIS (see below)
```

---

## 2. Files you still need to provide

| File | Exact name and location | Notes |
|---|---|---|
| Your CV | `assets/CV.pdf` | Use exactly `CV.pdf`, with capital C and V. The "Download CV" buttons point here. |
| Certificate pictures (later) | `images/certs/<name>.jpg` | Use lowercase names with hyphens, e.g. `etap-certification.jpg`. Keep each one under 300 KB and about 1200 px wide. |

Suggested certificate filenames:

| Certificate | Filename |
|---|---|
| EOT Training (AWS) | `aws-eot.jpg` |
| Global Safety Training (AWS) | `aws-global-safety.jpg` |
| OSHA | `osha-safety.jpg` |
| Jenbacher 420 | `jenbacher-420.jpg` |
| ETAP | `etap-certification.jpg` |
| AutoCAD | `autocad-certification.jpg` |
| Renewable Energy Technologies | `renewable-energy-tech.jpg` |
| PM with Data Analytics | `pm-data-analytics.jpg` |
| Agile | `agile-fundamentals.jpg` |
| Phishing | `phishing-awareness.jpg` |

### Adding a certificate picture

Open `script.js` and find the `CERTIFICATES` list at the top. Put the filename between the quotes after `img:`. Fill in `issuer` and `date` at the same time:

```js
{ title: "ETAP Certification", issuer: "ETAP", date: "2023", category: "Software", img: "etap-certification.jpg" },
```

To add a **new** certificate, copy any line, change the text and save. A new `category` becomes a new filter button automatically.

---

## 3. Open items to confirm (nothing fake is shown on the site)

1. **Exact official titles of your AWS trainings.** The site shows "EOT Training" and "Global Safety Training" because those are the names you gave me. Check your AWS training record and correct the titles in `script.js` if they differ.
2. **Issuer and date for every certificate.** These are blank, so they are hidden on the site. Fill them in `script.js`.
3. **`assets/CV.pdf`.** Upload your latest CV.
4. **Certificate images.** Add them later, as described above.

---

## 4. Conflicts found between your CVs, LinkedIn and transcripts, and how each was resolved

| # | Item | Sources say | Used on site |
|---|---|---|---|
| 1 | MSc graduation | Sep 2026 (TenneT CV) · Apr 2027 (TU Delft CV) · Dec 2026 (KAUST CV, LinkedIn) | **Dec 2026 (expected)**, your ruling |
| 2 | MSc start | Sep 2024 (CVs; transcript shows enrolment 05/09/2024) · Oct 2024 (LinkedIn) | **Sep 2024** (transcript) |
| 3 | Thesis title | "Vibration and Noise Behaviour of Transformer Cores…" (LinkedIn) | **"Experimental and Numerical Analysis of the Structural Dynamic Behaviour of a Separate Yoke of a Special Power Transformer Core under Varying Clamping Forces"**, your ruling |
| 4 | Thesis accuracy | "<8% deviation" (CVs, LinkedIn) | **<5% error, up to 2,000 Hz**, your approved figures |
| 5 | Thesis "12+ configurations" | CVs and LinkedIn | **Not used.** No extra thesis metrics were added; re-add it only if you confirm it. |
| 6 | NTDC voltage | 132 kV (KAUST CV) · 500/220 kV (others) | **500/220 kV**, your ruling |
| 7 | PMU validation tool | PowerFactory (TenneT CV) · ETAP (TU Delft CV) · MS Excel (KAUST CV) | **No tool named** ("validated against simulated grid scenarios"). Tell me which one is true and I'll add it. |
| 8 | Barqtron scope | "Led bid… ~$5M, 3 projects, 4 suppliers" vs "5+ projects, 5 surveys, documentation" | **Both kept**, your ruling |
| 9 | One Click metric | 20% turnaround (3 sources) · 25% client satisfaction (old LinkedIn only) | **20% turnaround**, the common figure |
| 10 | Languages | Italian A1 / German A2 in some CVs | **English C1 · Italian A2 · German A1**, as you confirmed |
| 11 | MSc grade | "CGPA 3.53/4" (CVs) · transcript weighted average 25.76/30 | **Omitted** to avoid an unofficial conversion |
| 12 | Old LinkedIn items | NTDC "20% maintenance efficiency", ETAP relay study; CAA and PIA internships with % claims | **Not used.** They aren't in any CV and were removed from your newer LinkedIn. |

---

## 5. LinkedIn corrections (copy and paste)

**a) Thesis entry (Leibniz Universität Hannover → Thesis Researcher).** Replace the "Research topic" line and the "<8%" bullet with:

> Thesis: Experimental and Numerical Analysis of the Structural Dynamic Behaviour of a Separate Yoke of a Special Power Transformer Core under Varying Clamping Forces.
> ● Built COMSOL Multiphysics FEM models coupling electromagnetic excitation to the structural-mechanical response of the yoke, validated against measured vibration data with less than 5% error across an analysis range up to 2,000 Hz.

**b) PMU project.** Add it under *Projects*, since it isn't on your current LinkedIn. Before posting, replace the "[tool]" text with the one simulation tool you actually used. If you didn't use one, delete it and keep "simulated grid scenarios".

> **Design and Development of a Phasor Measurement Unit (PMU) for Synchrophasor Data Analysis using Machine Learning** (Bahria University, 2022–2023, IGNITE National Research Funding)
> Lead developer of three low-cost PMU prototypes (Arduino, GPS time-synchronisation, PZEM-004T sensors) with a phasor-estimation and timestamping pipeline streaming to the cloud. Collected 40,000+ synchronised measurements and trained ML load-prediction models (Python, scikit-learn) reaching 91% accuracy, validated against simulated grid scenarios in [tool].

**c) One Click.** Your current LinkedIn already uses "Cut average reporting turnaround by 20%". Keep that wording and make sure the old "25% client satisfaction" line is deleted everywhere.

**d) Education dates.** Change the University of Padova start to **September 2024** to match your transcript.

**e) Contact info.** Add `https://umarcodebase.github.io` as a website, with the type set to "Portfolio".

---

## 6. Suggestions to strengthen the profile for data center roles

- **Get your AWS training record** and list the exact course titles. They are your most relevant evidence for data center roles.
- **Add a data-center credential** that is recognised across the industry, such as Uptime Institute ATD/AOM, the EPI CDCP, or arc-flash / electrical-safety awareness training (NFPA 70E or EN 50110 based). Each one directly fills a gap that recruiters search for: Tier, safety, LOTO.
- **Ask for two recommendations**, one from your AWS DCEO manager or mentor and one from your LUH supervisor. Then add a "What they say" section to the site.
- **Publish one small public GitHub repo**, for example a generic PowerFactory–Python batch-run template with no confidential data. It turns your GitHub link into evidence.
- **Keep improving your Italian (A2 → B1).** Ops roles in Milan list it often.

---

## 7. Step-by-step: publish on GitHub Pages (beginner)

### A. Repository
1. Sign in at github.com as **umarcodebase**. Your account already exists.
2. Click **+** (top right) → **New repository**.
3. Set the repository name to exactly **`umarcodebase.github.io`**. Set it to **Public**. Do not tick "Add a README". Click **Create repository**.

### B. Upload the files
1. On the empty repo page, click **uploading an existing file**, or **Add file → Upload files**.
2. Unzip the package on your computer. Open the `umarcodebase.github.io` folder, select **everything inside it** (`index.html`, `style.css`, `script.js`, `README.md`, and the `images` and `assets` folders), and drag it all into the browser. Folders keep their structure when dragged.
3. Make sure `assets/CV.pdf` is included. Empty folders such as `images/certs` are skipped by GitHub, which is fine.
4. Scroll down and click **Commit changes**.

### C. Turn on GitHub Pages
1. Go to the repo → **Settings** → **Pages** (left menu).
2. Under "Build and deployment", set **Source** to **Deploy from a branch**.
3. Set **Branch** to **main** and the folder to **/(root)**, then click **Save**.
4. Wait **1–5 minutes**, sometimes up to 10. The Pages screen then shows "Your site is live at https://umarcodebase.github.io/". The **Actions** tab shows the build progress.

### D. Check it
1. **Open the site:** https://umarcodebase.github.io/. Use Ctrl+F5 to force a fresh load.
2. **Test on mobile:** open the link on your phone. In Chrome on a computer, press F12 → toggle device toolbar → iPhone.
3. **Run Lighthouse:** press F12 → **Lighthouse** tab → Mode "Navigation", device Mobile → **Analyze**. Aim for 90+ in every category.
4. **Check the LinkedIn preview:** open https://www.linkedin.com/post-inspector/, paste your URL and click **Inspect**. This also refreshes LinkedIn's cached preview.
5. **Fix common errors:**
   - **404 for the whole site:** the repo name is not exactly `umarcodebase.github.io`, or `index.html` is not at the top level of the repo.
   - **Broken image or CV:** filenames are **case-sensitive**. `CV.pdf` ≠ `cv.pdf`, and `Profile.JPG` ≠ `profile.jpg`.
   - **Old version still showing:** wait a few minutes, then hard-refresh (Ctrl+F5) or open the site in a private window.

### E. Update it later
- **New CV:** in the repo, open the `assets` folder → **Add file → Upload files** → upload a file with the same name `CV.pdf` → **Commit**. It replaces the old one.
- **New certificate:**
  1. Upload the picture into `images/certs`. In the browser, open the `images` folder and use **Add file → Upload files**. To create the `certs` folder the first time, use **Add file → Create new file** and type `certs/placeholder.txt`.
  2. Open `script.js` → click the pencil icon → fill in the `img: ""` value → **Commit changes**.
- Changes go live within a few minutes.

### F. Optional custom domain
1. Buy a domain, for example `umarshahzad.eu`, from a registrar such as Namecheap, Cloudflare or Aruba.
2. In the repo, go to **Settings → Pages → Custom domain**, type the domain and click **Save**.
3. At your registrar, add four **A records** pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`. Also add a **CNAME** record for `www` pointing to `umarcodebase.github.io`.
4. After DNS updates (minutes to 24 hours), tick **Enforce HTTPS**.
5. Replace `https://umarcodebase.github.io/` with your new domain in `index.html`, in the meta tags and the JSON-LD block.

### G. Put it in front of recruiters
- **CV header:** add it on the same line as your email and LinkedIn:
  `umarrshahzad.pk@gmail.com · linkedin.com/in/umar-shahzad · Portfolio: umarcodebase.github.io`
  - **Word:** select the text → Ctrl+K → paste `https://umarcodebase.github.io`.
  - **Overleaf:** `\href{https://umarcodebase.github.io}{Portfolio: umarcodebase.github.io}`.
  - Export to PDF and click the link to confirm it works.
- **QR code (optional):** `portfolio-qr.png` is included in the package. Put it small (about 2 cm) in a corner of a printed CV or on a business card. Skip it in ATS uploads.
- **LinkedIn:**
  - Go to **Edit profile → Contact info → Website**, add the URL, and choose the type "Portfolio".
  - Go to **Add section → Featured → Add a link**, paste the URL, and use the title "Portfolio: Data Center Critical Power & Operations".
- **Email signature:**
  `Umar Shahzad · Electrical Engineer | Data Center Critical Power & Operations`
  `umarcodebase.github.io · linkedin.com/in/umar-shahzad`
- **Cover letters and recruiter messages (one line):**
  > "My portfolio at umarcodebase.github.io maps my experience across the grid-to-rack power chain, from 132 kV substations to my current AWS DCEO role."
