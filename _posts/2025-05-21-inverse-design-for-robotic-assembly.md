---
layout: post
title: Inverse Design for Robotic Assembly via Task and Motion Planning
date: 2025-05-20 23:26:00
description: inverse design for robotic assembly via task and motion planning (TAMP)
tags: task and motion planning, robotic assembly, inverse design, co-design
categories: planning
---

# Introduction
Robots are increasingly used to assemble everything from everyday products and mechanical parts to architectural-scale structures. While humans often rely on intuition or heuristics to assess whether a design is buildable, robotic assembly presents a different challenge. The morphological and operational differences between humans and robots mean that human intuition no longer applies — a design that seems feasible to a human may be impossible for a robot to assemble.

Although recent advances in robotic manipulation have significantly improved robots' physical capabilities [1], these systems typically assume a fixed task specification. In contrast, design-for-assembly settings allow for task modifications: if a design proves unassemblable, we want to understand how to alter it to make it feasible for robotic assembly — or even optimize it for robotic efficiency.

This paradigm resembles physics-informed inverse design, where design parameters are optimized using gradients derived from differentiable physics simulations (see, e.g., [2]). However, unlike PDE-based physical simulation, robotic assembly involves complex decision-making over long-horizon, sequential tasks — falling within the scope of Task and Motion Planning (TAMP) [3], which jointly reasons over "what to do" and "how to do it."

Our goal is to develop a design optimization algorithm that optimizes a parameterized assembly design with respect to objectives and constraints defined by a TAMP algorithm. For simplicity, we will restrict the design domain to a set of trusses, parameterized by their geometry, topology, or learned latent variables. We will couple a search-based task planner with an optimization-based grasp and motion planner as part of the TAMP stack.

# Tasks

- Implement a search-based task planner to identify feasible assembly sequences, conditioned on motion constraints [4].
- Develop an optimization-based grasp and inverse kinematics planner with extra design parameters for the parametrized design, e.g., [5].
- Validate the TAMP pipeline (“forward pass”) on a fixed design.
- Extract gradients from the motion planning components to update design parameters.
- Study how changes in design affect the discrete task planner and analyze implications for gradient continuity and optimization stability.
    
# Requirements

- Strong interest in robotics, particularly in task and motion planning.
- Familiarity with optimization-based motion planning (e.g., trajectory optimization) is a plus.
- Proficiency in Python.
- Experience with robot simulation environments (e.g., PyBullet) is preferred but not required.

# Remarks

This is a master thesis opportunity. The thesis is overseen by Prof. Dr. Stelian Coros and is supervised by Dr. Yijiang Huang and Dr. Gabriele Fadini. For further information or to apply for the thesis project, please send your CV, transcript, and a short motivation letter to: Yijiang (yijiang.huang@inf.ethz.ch) and Gabriele (gabfadini@gmail.com).

# References

1. Kevin Black, Noah Brown, Danny Driess, Adnan Esmail, Michael Equi, Chelsea Finn, Niccolo Fusai, Lachy Groom, Karol Hausman, Brian Ichter, et al. *π0: A vision-language-action flow model for general robot control.* arXiv preprint [arXiv:2410.24164](https://arxiv.org/abs/2410.24164), 2024.

2. Juan Sebastian Montes Maestre, Yinwei Du, Ronan Hinchet, Stelian Coros, and Bernhard Thomaszewski. *Differentiable stripe patterns for inverse design of structured surfaces.* ACM Transactions on Graphics (TOG), 42(4):1–14, 2023.

3. Caelan Reed Garrett, Rohan Chitnis, Rachel Holladay, Beomjoon Kim, Tom Silver, Leslie Pack Kaelbling, and Tomás Lozano-Pérez. *Integrated task and motion planning.* Annual Review of Control, Robotics, and Autonomous Systems, 4(1):265–293, 2021.

4. Yijiang Huang, Caelan R. Garrett, Ian Ting, Stefana Parascho, and Caitlin T. Mueller. *Robotic additive construction of bar structures: Unified sequence and motion planning.* Construction Robotics, 5(2):115–130, June 2021. DOI: [10.1007/s41693-021-00062-z](https://doi.org/10.1007/s41693-021-00062-z).

5. Simon Zimmermann, Ghazal Hakimifard, Miguel Zamora, Roi Poranne, and Stelian Coros. *A multi-level optimization framework for simultaneous grasping and motion planning.* IEEE Robotics and Automation Letters, 5(2):2966–2972, 2020.
