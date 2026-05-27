---
title: "Tennis Serve Extraction and Gameplay Analysis"
subtitle: "Computer Vision & Deep Learning Pipeline"
date: 2026-05-27
featured: true
image: "/img/tennis/project_demonstration.gif"
tldr: "A multi-model deep learning pipeline to extract court keypoints, track players, analyze ball trajectories, and classify serve types in real-time."
tags: ["computer-vision", "yolo", "transformers", "deep-learning"]
paper_link: ""
arxiv_link: ""
github_link: "https://github.com/imrnh/tennis_player_analysis"
hf_link: ""
description: |
  This project implements a complete computer vision pipeline for real-time tennis serve extraction and gameplay analysis. By leveraging a variety of custom and state-of-the-art models (including ConvNets, YOLO, MediaPipe, and Transformers), the system detects the court geometry, tracks player movement and pose, identifies player identity, and reconstructs 3D racket trajectories and ball paths. It automatically detects the start/end of a serve using a gated CNN-Transformer architecture, classifies serves (Flat, Kick, Slice), calculates serve speed, hit height, toss parameters, and determines the success of each serve (in, out, or let).
---

## Overview

This project provides a comprehensive machine learning and computer vision pipeline for analyzing tennis gameplay videos. By processing standard camera feeds, it automatically extracts valuable statistics for players and coaches.

<figure>
  <img src="/img/tennis/project_demonstration.gif" alt="Tennis Gameplay Analysis Demo">
  <figcaption>Figure 1: Real-time gameplay analysis demo featuring player pose tracking, court alignment, and live serve/shot metrics.</figcaption>
</figure>

Watch the complete demonstration video on [YouTube](https://youtu.be/53Lz9B7wAYQ).

## Key Features

1. **Court Keypoint Detection:** A custom ConvNet extracts 14 marker points defining the court boundaries.
2. **Player and Ball Detection & Tracking:** YOLO detects the players, net, and tennis ball. Net detection is crucial for identifying if a serve is a "let".
3. **Player Identification & Pose Estimation:** MediaPipe extracts 3D skeleton poses. A custom face-recognition ConvNet identifies specific players on both sides and maintains their tracking across camera cuts or side changes.
4. **Serve Segmentation & Classification:** A **ConvNet + Gated Transformer** architecture isolates serve attempts and classifies serve types (Flat, Kick, Slice).

---

## Methodology & Architecture

The system operates as a multi-stage pipeline:

### 1. Court Extraction
A specialized ConvNet detects 14 key marker points of the tennis court, which are connected to build the tracking coordinates:
<figure>
  <img src="/img/tennis/picture_court_processed.png" alt="Processed Tennis Court">
  <figcaption>Figure 2: Custom CNN output mapping the 14 key points of the tennis court.</figcaption>
</figure>

### 2. Gated Transformer Module
To understand when a serve starts and ends, a **Gated Transformer** architecture tracks the ball and player trajectories. A gating logic (CNN) filters out non-serve gameplay data, ensuring that only relevant serve phases are processed by the sequence transformer.

<figure>
  <img src="/img/tennis/tennis_game_analysis_module.png" alt="Tennis Game Analysis Module">
  <figcaption>Figure 3: High-level overview of the tennis game analysis module architecture.</figcaption>
</figure>

---

## Performance and Metrics

The pipeline has been optimized for high-frequency video feeds (up to 60 FPS) and yields sub-degree precision:

| Metric | Accuracy / Precision |
|--------|----------------------|
| Racket Tilt Angle | **≤ 1°** |
| Ball Bounce Localization | **≤ 20 cm** |
| Play Segmentation Accuracy | **94.2%** |
| Serve Type Classification (F1) | **0.91** |
