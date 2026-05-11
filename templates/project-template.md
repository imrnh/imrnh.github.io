---
# ==========================================
# PROJECT TEMPLATE
# Location: src/projects/your-project-slug.md
# ==========================================

# MAIN METADATA
title: "Your Awesome Project Title"
subtitle: "Conference / Venue / Competition 2026"
authors: "First Author, **I. Hossen**, Third Author"
affiliation: "Khulna University of Engineering & Technology"

# CARD APPEARANCE (Shown on /projects/ page)
# Path to the thumbnail image. Store your images in `src/img/`.
image: "/img/project-thumbnail.png" 

# A punchy, one-sentence summary displayed on the card grid to entice visitors.
tldr: "A short summary of the project and its main contributions, highlighting why it matters."

# Tags appear as small gray pills on the card. 
# Note: Do NOT include 'projects' as a tag here, it is automatically injected by projects.json.
tags: ["machine-learning", "computer-vision", "open-source"] 

# ACTION BUTTONS (Optional)
# If you leave any of these blank or remove the line, the corresponding button will automatically hide.
paper_link: "https://ieeexplore.ieee.org/..." # Renders a red 'Paper' button with document icon
arxiv_link: "https://arxiv.org/abs/..."       # Renders a red 'arXiv' button
github_link: "https://github.com/imrnh/..."   # Renders an outlined 'GitHub' button with logo
hf_link: "https://huggingface.co/..."         # Renders a yellow 'HuggingFace' button with logo

# ABSTRACT & CITATION
# The abstract is prominently displayed at the top of the detail page.
abstract: |
  The full abstract text shown on the top of the project detail page.
  You can write multiple paragraphs here, and the YAML pipe (|) ensures line breaks are preserved.

# The BibTeX block generates a clean, copyable citation box at the bottom of the page.
bibtex: |
  @inproceedings{yourcitation2026,
    author={First, Author and Hossen, Imran},
    booktitle={Conference Name}, 
    title={Your Awesome Project Title}, 
    year={2026}
  }
---

## Overview
This is the main body of your project page. Use standard **Markdown** to write your content. 

### Adding Images
For best results with images, wrap them in HTML `<figure>` tags to get nicely styled, centered images with captions:
<figure>
  <img src="/img/your-project-architecture.png" alt="Model Architecture">
  <figcaption>Figure 1: High-level overview of the proposed architecture.</figcaption>
</figure>

## Methodology
Explain the technical details, algorithms, or approaches you used. 
- You can use bullet points.
- Or numbered lists.

```python
# You can also include code blocks to show off key implementations!
def train_model():
    print("Training started...")
```

## Results
Showcase your results. Markdown tables are fully supported and styled:

| Metric | Baseline | Ours |
|--------|----------|------|
| Precision | 0.82 | **0.91** |
| Recall | 0.79 | **0.88** |
| F1 Score | 0.80 | **0.89** |
