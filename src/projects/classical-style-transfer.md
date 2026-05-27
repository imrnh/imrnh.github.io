---
title: "Classical Style Transfer Without Neural Networks"
subtitle: "Patch-based Texture Synthesis"
date: 2026-05-24
authors: "**Imran Hossen**"
affiliation: "University College Dublin"
image: "/img/style-transfer/generated_output.png"
tldr: "Performs high-quality image style transfer purely through patch-based texture matching and classical statistics, without deep learning."
tags: ["style-transfer", "classical-computer-vision", "texture-synthesis", "parallel-computing"]
paper_link: ""
arxiv_link: ""
github_link: "https://github.com/imrnh/classical_style_transfer"
hf_link: ""
description: |
  This project demonstrates image style transfer achieved entirely through classical image processing and non-parametric texture matching. Traditional neural style transfer relies on deep convolutional networks (such as VGG) to match content and style features. In contrast, this approach works purely by matching and replacing local image patches between a content image and a style image, transferring the local mean, variance, and texture statistics. It is implemented in Python and optimized for multi-core parallel execution.
---

## Overview

This project presents a non-parametric style transfer algorithm that blends a content image and a style image using patch-level pixel matching rather than deep neural network representations.

<figure>
  <img src="/img/style-transfer/generated_output.png" alt="Generated Output Example">
  <figcaption>Figure 1: Sample style transfer output generated using patch-based classical matching.</figcaption>
</figure>

---

## Technical Concept

Unlike traditional neural style transfer (such as Gatys et al.) which uses intermediate activation maps of deep networks to separate and recombine content and style, this algorithm handles the transfer directly on the pixel space:

* **Content Representation:** The spatial structures, edges, and objects layout are captured by the relative spatial positions of the patches in the content image.
* **Style Representation:** The visual style—which consists of tone, contrast, sharpness, and local texture statistics—is captured by local statistical features (mean and standard deviation) of the style image.

### Algorithm Intuition
By replacing each small local patch in the content image with a visually similar patch retrieved from the style image, we transfer the texture and styling of the style image while preserving the overall shapes and spatial boundaries of the content image. This approach is heavily inspired by classical **non-parametric texture synthesis** (Efros & Leung) and **statistical texture models** (Portilla & Simoncelli).

---

## Parallel Execution & Performance

Patch-matching algorithms can be computationally intensive when executed sequentially. This implementation is written in Python and supports multi-core parallel computing to speed up execution.

### Usage
You can run the script specifying padding, stride, and whether to run in single-core or multi-core mode:

```bash
python main.py p 3 2
```

* **Parameter 1 (`p` or `m`):** Mode of operation. Specify `p` to allocate all available CPU cores in parallel, or `m` to run on a single core.
* **Parameter 2 (`3`):** Padding size around patches.
* **Parameter 3 (`2`):** Stride value for patch matching.
