---
title: "AutiMate: Early Stage Autism Screening & Therapy Platform"
subtitle: "AI-Powered Microservices Application"
date: 2026-05-25
authors: "**Imran Hossen**"
affiliation: "University College Dublin"
image: "/img/autimate/behavioral_analysis_system_design.png"
tldr: "A serverless microservices platform for fast, reliable early-stage autism screening and interactive drawing therapy for kids."
tags: ["autism-screening", "serverless", "microservices", "spring-boot", "vuejs"]
paper_link: ""
arxiv_link: ""
github_link: "https://github.com/imrnh/autimate"
hf_link: ""
description: |
  This project presents AutiMate, a multi-service web platform designed to facilitate fast, accessible, and reliable early-stage autism screening and interactive therapy for children. AutiMate allows parents to fill out behavioral questionnaires and upload brief video clips of their child. The platform processes these videos using a serverless 3D Transformer classification pipeline. For home therapy, AutiMate features a real-time drawing feedback system powered by Gemini, converting AI responses into speech to guide kids as they learn to draw shapes and objects.
---

## Overview

AutiMate is an end-to-end application aimed at assisting parents in early autism screening and providing interactive, audio-guided home drawing therapies for children.

<figure>
  <img src="/img/autimate/behavioral_analysis_system_design.png" alt="Behavioral Analysis System Design">
  <figcaption>Figure 1: High-level overview of the video classification and microservice system design.</figcaption>
</figure>

---

## Technical Architecture

The platform is designed around a scalable, cost-efficient microservices architecture consisting of four key services:

1. **Frontend (VueJS):** Provides an intuitive, kid-friendly portal for parents to fill out questionnaires, upload videos, and participate in drawing therapies.
2. **Backend (Java Spring Boot):** Manages user accounts, authentication, questionnaire answers, and coordinates between microservices.
3. **Database (MongoDB):** Stores user metadata, behavioral responses, and historical reports.
4. **Behavioral Video Analysis (Modal Serverless):** A serverless Python/PyTorch/ONNX worker that runs the 3D Transformer classifier.

### The Power of Serverless Video Classification
Running heavy 3D ConvNets or Transformers directly on the main backend server block would freeze the CPU, hindering other incoming requests. By decoupling the video model into a serverless function (deployed on Modal.com), the platform scales dynamically to zero when idle, saving costs, and boots instantly to analyze uploads in parallel.

---

## Interactive Therapy & Real-Time Feedback

To engage children in developmental exercises, AutiMate includes a drawing board that matches a child's canvas strokes against a reference image.

<figure>
  <div style="display: flex; gap: 10px; justify-content: center; align-items: center;">
    <img src="/img/autimate/sample_drawing.jpeg" style="width: 45%; max-height: 250px; object-fit: contain;" alt="Sample Reference Image">
    <img src="/img/autimate/sample_dr_f_saved.png" style="width: 45%; max-height: 250px; object-fit: contain;" alt="Drawn Image Overlay">
  </div>
  <figcaption>Figure 2: Reference object (left) alongside the canvas output evaluated by the AI (right).</figcaption>
</figure>

### Drawing AI Feedback System
As the child draws on the canvas, the system periodically packages the current state of the drawing with the reference image and sends it to the server. The server prompts `gemini-1.5-flash` to evaluate the drawing, and the resulting critique is converted to speech via the browser's native `SpeechSynthesisUtterance` API.

<figure>
  <img src="/img/autimate/feedback_on_drawing.png" alt="Drawing Feedback Flow">
  <figcaption>Figure 3: Schematic diagram of the drawing canvas and speech-synthesis loop.</figcaption>
</figure>

---

## How to Run locally

You can easily build and launch the entire multi-service suite via Docker:

```bash
docker build -t autimate-v1 .
docker run -p 8080:8080 -p 5173:5173 autimate-v1
```
