# Imran Hossen - Personal Website

This is a statically generated portfolio website built using **Eleventy (11ty)** and Node.js. It features a responsive layout, a default dark mode, and a dynamically generated structure for Projects, Publications, and News via Markdown files.

## Local Development

### Requirements
- Node.js (v18+)

### Installation
1. Clone the repository
2. Run `npm install` to install dependencies

### Running Locally
To run a local development server with hot-reloading:
```bash
npm run serve
```
This will start a server at `http://localhost:8080`.

### Building for Production
To build the static HTML files for deployment (e.g., GitHub Pages):
```bash
npm run build
```
The output will be placed in the `_site/` directory.

---

## Content Management (Markdown)

You can easily update the website by simply creating or editing Markdown files. You do not need to write any HTML.

### 1. Adding a Publication
Publications are displayed as a list on the `/publications/` page. 

**Location:** `src/publications/YYYY/your-paper-name.md` (e.g., `src/publications/2026/subliminal-signals.md`)

**Schema:**
```yaml
---
title: "Subliminal Signals in Preference Labels"
authors: "I. Magistrali, **F. Berdoz**, S. Dauncey, R. Wattenhofer"
venue: "Agents in the Wild Workshop @ ICLR"
date: 2026-03-01 # YYYY-MM-DD. Determines the sorting order.
year: 2026 # The year group heading it falls under
paper_link: "https://arxiv.org/pdf/..."
arxiv_link: "https://arxiv.org/abs/..."
project_link: "/projects/dac-se1/" # Link to your project page, if any
bibtex: |
  @inproceedings{magistrali2026subliminal,
    title={Subliminal Signals in Preference Labels},
    author={Magistrali, I. and Berdoz, F. and Dauncey, S. and Wattenhofer, R.},
    booktitle={Agents in the Wild Workshop @ ICLR},
    year={2026}
  }
---
The Abstract text goes here. You can write multiple lines, and it will be revealed when clicking the "Abstract" button.
```
*Note: If `paper_link`, `arxiv_link`, or `project_link` are left empty or omitted, their respective buttons will be automatically hidden from the UI.*

### 2. Adding a Project
Projects get their own dedicated detail pages (e.g., `/projects/dac-se1/`) and are also listed on the `/projects/` page.

**Location:** `src/projects/your-project-name.md`

**Schema:**
```yaml
---
title: "High-Fidelity Speech Enhancement via Discrete Audio Tokens"
subtitle: "ICASSP 2026"
authors: "L. A. Lanzendörfer, **F. Berdoz**, A. Asonitis, R. Wattenhofer"
affiliation: "ETH Zurich, Switzerland"
image: "/img/DAC-SE1.drawio (1).png" # Image shown on the Projects list page
tldr: "We introduce DAC-SE1, a simplified language model framework..."
tags: ["speech-enhancement", "audio-tokens"] # Shown as pills
arxiv_link: "https://arxiv.org/abs/..."
paper_link: "" # Optional
abstract: |
  The abstract text shown on the top of the detail page...
bibtex: |
  @inproceedings{...}
---
## Overview
The main body of your project goes here. You can use Markdown `## Headers`, `**bold text**`, `<img src="...">`, etc.
```

### 3. Adding News (Homepage)
News items appear on the homepage.
**Location:** `src/news/your-news.md`

**Schema:**
```yaml
---
date: 2026-03-01
---
Your news text goes here, you can use [Markdown links](/projects/dac-se1/).
```
