---
layout: post
title: Strategic Humanoid Box Lifting
date: 2025-05-23 10:00:00
description: Developing demonstration-guided reinforcement learning for complex humanoid manipulation tasks involving strategic contact-rich interactions.
tags: reinforcement-learning, trajectory-optimization, humanoid, contact-rich-manipulation
categories: control
---

# Introduction
Manipulating large, heavy, and unwieldy objects from the ground presents a significant challenge for humanoid robots, especially in the absence of handles or convenient grasp affordances. Unlike small object grasping, this task requires coordinated full-body motion, careful balance control, and a sequence of contact-rich interactions such as pivoting, push-sliding, and re-grasping (fig. 1-(1-5)). Humans intuitively manage such tasks by adjusting their posture, leveraging friction, and shifting contact modes, but this remains an underexplored frontier for robotic learning.

This project focuses on endowing a humanoid robot, specifically [Adam from PNDbotics](https://www.pndbotics.com/humanoid), with the ability to lift a flat, wide, heavy object (e.g., an IKEA-style box or raw construction material like a wood panel) from the ground using a learned policy. For simplicity, Adam will be equipped with a simple, ball-shaped gripper instead of dexterous hands.

{% include figure.liquid loading="eager" path="assets/img/publication_preview/2025_stra-humanoid-box-lifting.png" class="img-fluid rounded z-depth-1" %}
*Figure 1: Example of a human lifting a large, heavy package from the ground through a sequence of whole-body coordinated actions: initial pivoting (2–3), grasp adjustment and reorientation (4), push-sliding against the floor (4–5), and finally establishing a stable, upright configuration for transport (5). Our objective is to develop a reinforcement learning policy for a humanoid robot to replicate and generalize such strategies using full-body motion and dual-arm interaction with simple ball-shaped end-effectors.*

# Tasks
- Design a data collection protocol to record one or few high-quality whole-body human demonstrations that include pivoting, pushing, sliding, and lifting behaviors.
- Extract contact-relevant features from these demonstrations using motion capture, object tracking, and possibly tactile instrumentation.
- Convert demonstration data into robot-feasible trajectories through a retargeting and trajectory optimization pipeline (e.g., [1]).
- Train a policy via demonstration-guided reinforcement learning to replicate and generalize the demonstrated behavior in simulation.
- Deploy the policy on the real humanoid robot.

# Requirements
- Proficient knowledge in programming in Python.
- Sound understanding of trajectory optimization and reinforcement learning. Students who have taken the Computational Models of Motion course at ETH is a plus but not required.
- Basic knowledge of the ROS framework is a plus but not required.
- Since this ambitious project involves the full stack of robotics tools—from motion capture-based data collection, optimization- and learning-based control software, to real-world robot deployment—the student should be devoted, self-driven, and have a strong desire and persistence to explore and solve problems independently.

# Remarks
This is a master thesis project limited to students at ETH Zurich.
The project is overseen by Prof. Dr. Stelian Coros and is supervised by Jin Cheng, Dr. Yijiang Huang, and Tianxu An. For further information or to apply for the thesis project, please send your CV, transcript, and a short motivation letter to: Jin ([jin.cheng@inf.ethz.ch](mailto:jin.cheng@inf.ethz.ch)), Yijiang ([yijiang.huang@inf.ethz.ch](mailto:yijiang.huang@inf.ethz.ch)), and Tianxu ([tianxu.an@inf.ethz.ch](mailto:tianxu.an@inf.ethz.ch)).

# References
[1] Lujie Yang, H. J. Terry Suh, Tong Zhao, Bernhard Paus Graesdal, Tarik Kelestemur, Jiuguang Wang, Tao Pang, and Russ Tedrake. Physics-Driven Data Generation for Contact-Rich Manipulation via Trajectory Optimization, February 2025.