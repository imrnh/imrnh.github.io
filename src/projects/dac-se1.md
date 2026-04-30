---
title: "High-Fidelity Speech Enhancement via Discrete Audio Tokens"
subtitle: "ICASSP 2026"
authors: "L. A. Lanzendörfer, **F. Berdoz**, A. Asonitis, R. Wattenhofer"
affiliation: "ETH Zurich, Switzerland"
tags: ["projects", "speech-enhancement", "audio-tokens", "language-models", "bandwidth-extension"]
image: "/img/DAC-SE1.drawio (1).png"
tldr: "We introduce DAC-SE1, a simplified language model framework on high-resolution discrete audio tokens that achieves state-of-the-art speech enhancement without multi-stage pipelines."
arxiv_link: "https://arxiv.org/abs/2510.02187"
abstract: |
  Recent autoregressive transformer-based speech enhancement (SE) methods have shown promising results by leveraging advanced semantic understanding and contextual modeling of speech. However, these approaches often rely on complex multi-stage pipelines and low sampling rate codecs, limiting them to narrow and task-specific speech enhancement. In this work, we introduce DAC-SE1, a simplified language model-based SE framework leveraging discrete high-resolution audio representations; DAC-SE1 preserves fine-grained acoustic details while maintaining semantic coherence. Our experiments show that DAC-SE1 surpasses state-of-the-art autoregressive SE methods on both objective perceptual metrics and in a MUSHRA human evaluation. We release our codebase and model checkpoints to support further research in scalable, unified, and high-quality speech enhancement.
bibtex: |
  @inproceedings{lanzendorfer2026high,
    author = {Lanzend{\"o}rfer, L. A. and Berdoz, F. and Asonitis, A. and Wattenhofer, R.},
    title = {{High-Fidelity Speech Enhancement via Discrete Audio Tokens}},
    booktitle = {{IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)}},
    year = {2026}
  }
---
## Overview
<figure><img src="/img/DAC-SE1.drawio (1).png" alt="Overview of the DAC-SE1 framework">
    <figcaption><strong>Figure 1:</strong> Overview of the DAC-SE1 framework. Previous methods use continuous speech representations (e.g., HuBERT or WavLM) as input and predict tokens from a Neural Speech Codec (NSC), limited to 16 kHz signals. DAC-SE1 operates directly on DAC tokens, compressing a 44.1 kHz signal into 9 codebook layers at 86 Hz framerate. The flattened token sequence is translated by a LLaMA-based model into clean speech tokens, which are then reconstructed using the DAC decoder.</figcaption>
</figure>
<p>Speech enhancement (SE) aims to recover clean speech from degraded recordings affected by noise, reverberation, or bandwidth limitations. While recent LM-based SE methods show promising results, they typically rely on complex multi-stage pipelines and low sampling rate codecs, limiting them to narrow and task-specific enhancement. DAC-SE1 takes a different approach: a single-stage autoregressive language model operating directly on high-resolution discrete audio tokens (44.1 kHz), achieving high-fidelity speech enhancement without auxiliary encoders or multi-stage pipelines.</p>

### Key idea
<p>DAC-SE1 encodes audio using the DAC codec into 9 residual codebooks, then flattens all codebooks into a single token sequence. A 1B-parameter LLaMA-based causal transformer maps noisy token sequences to clean ones. This design eliminates the need for semantic encoders, dual-channel conditioning, or separate noise estimators, relying instead on scaling laws to capture both fine-grained acoustic structure and long-range dependencies.</p>

### Training strategy
<p>The model handles multiple distortion types (noise, reverberation, downsampling, packet loss) through a two-stage training strategy:</p>
<ol>
    <li><strong>Stage 1:</strong> Multi-task training across all distortion types simultaneously.</li>
    <li><strong>Stage 2:</strong> Per-task fine-tuning, allowing each distortion type to optimize its own loss more effectively.</li>
</ol>
<p>This approach produces better generalization across all distortions compared to joint training alone.</p>

## Results
<figure><img src="/img/melspec_qual.drawio-komprimiert.png" alt="Qualitative comparison of log-mel spectrograms">
    <figcaption><strong>Figure 2:</strong> Qualitative comparison on log-mel spectrograms. DAC-SE1 cleans the signal without hallucinating artifacts or introducing spectral distortion, unlike prior autoregressive methods.</figcaption>
</figure>

### HiFiTTS-2 evaluation
| Model | OVRL | SIG | BAK | P808 | PESQ | S-BERTS | PLCMOS | WER | MUSHRA |
|---|---|---|---|---|---|---|---|---|---|
| Noisy | 2.44 | 3.18 | 2.79 | 3.11 | 2.63 | 0.89 | 3.84 | 0.25 | 35.8 |
| Clean | 3.03 | 3.41 | 3.80 | 3.64 | 4.50 | 1.00 | 4.41 | 0.00 | 94.5 |
| LLaSE-G1 | 2.90 | 3.24 | 3.83 | 3.47 | 1.98 | 0.86 | 4.19 | 0.27 | 44.1 |
| VoiceFixer | 2.92 | 3.21 | **3.90** | 3.43 | 1.85 | 0.81 | 4.29 | 0.45 | 34.5 |
| **DAC-SE1 (ours)** | **2.95** | **3.33** | 3.70 | **3.56** | **2.46** | **0.89** | **4.35** | **0.25** | **58.3** |

<p>DAC-SE1 outperforms both LLaSE-G1 and VoiceFixer across the majority of objective metrics and achieves the highest MUSHRA score (58.3 vs. 44.1), confirming that human listeners consistently prefer its outputs.</p>

### Benchmark results
<p>On the ICASSP 2022 PLC challenge, DAC-SE1 achieves the highest PLCMOS score (4.34), surpassing all baselines including LLaSE-G1 multi-task (4.30). On the ICASSP 2023 DNS challenge, the model performs competitively with strong baselines, confirming generalization to unseen noise profiles.</p>

<div class="callout"><strong>Key takeaway:</strong> A single autoregressive language model operating on high-resolution discrete audio tokens can achieve state-of-the-art speech enhancement without domain-specific architectural modifications, demonstrating that speech enhancement benefits from the same scaling laws that drive progress in NLP.</div>
