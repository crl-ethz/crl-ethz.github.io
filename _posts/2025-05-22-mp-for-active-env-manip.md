---
layout: post
title: Robotic motion planning for active environmental manipulation
date: 2025-05-22 10:00:00
description: inverse design for robotic assembly via task and motion planning (TAMP)
tags: motion-planning, physics-simulation, mobile-manipulation
categories: planning
---

# Introduction
Robotic motion planning usually happens in static environments, and we typically do not reason about how we can (or need to) change the environment in order to reach certain places or fulfill certain tasks. In reality, this is an important part that cannot be neglected: think of grabbing a chair to reach an object high up, or building a bridge to walk to another place over a gap (fig. 1). Another setting can be found in the construction industry, where we need to build scaffolding to facilitate work higher up. In these cases, the robot intentionally extends its reachable space by building supports (bridges or makeshift staircases). Traditional motion planning techniques require explicitly representing and enumerating all the different surfaces on which a robot could move, which usually involves case-specific assumptions and engineering heuristics.

In this work, we are interested in exploring the motion planning in a changing reachable space that is actively shaped by the robot’s manipulation actions. In order to do so, we want to explore planning using a simulator (such as Isaac Lab or PyBullet) to use physics simulation instead of explicit representation of the surface, etc. The approach we intend to use has close ties to sampling-based kinodynamic motion planning [1, 2].

{% include figure.liquid loading="eager" path="assets/img/publication_preview/2025_mp-for-active-env-manip.png" class="img-fluid rounded z-depth-1" %}
*Figure 1: Example from Boston Dynamics Atlas robot using a plank to extend its reachable space. Source: [Atlas Gets a Grip (Boston Dynamics)](https://www.youtube.com/watch?v=-e1_QhJ1EhQ)*

# Goal
The ideal outcome of this project is a (task and) motion planning approach that can deal with the requirement to actively change the environment that the robot is in. We will start with a given sequence of actions for the robotic agent (e.g., inspired by the Atlas demo: *grab the plank, place the plank in this location*) and focus on the motion planning problem.

Once we have a solid foundation on motion planning with a fixed action sequence, the project could then evolve in various different directions, e.g., extending this to a multi-robot setting, or focusing more on the task planning aspect in the continuous space.

# Work packages
- Setup scene / explore simulators  
- Setup initial simple problem with simplified dynamics  
- Develop tree-based motion planner  

---

# Requirements
- Strong Python knowledge  
- Some background in motion planning is advantageous  
- Previous experience with task and motion planning is advantageous, but not required  
- We prefer self-driven students with a strong desire and persistence to explore and solve problems independently.

---

# Contact Details
For further information or to apply for this project, please contact:  
- Yijiang Huang: [yijiang.huang@inf.ethz.ch](mailto:yijiang.huang@inf.ethz.ch)  
- Valentin Noah Hartmann: [valentin.hartmann@inf.ethz.ch](mailto:valentin.hartmann@inf.ethz.ch)  

We look forward to working with motivated students who are passionate about robotic motion planning. Please include your CV and transcript when reaching out.

---

# References
[1] Dustin J. Webb and Jur van den Berg. Kinodynamic RRT*: Asymptotically optimal motion planning for robots with linear dynamics. In *2013 IEEE International Conference on Robotics and Automation*, pages 5054–5061, May 2013. doi: 10.1109/ICRA.2013.6631299.

[2] Rahul Shome and Lydia E. Kavraki. Asymptotically Optimal Kinodynamic Planning Using Bundles of Edges. In *2021 IEEE International Conference on Robotics and Automation (ICRA)*, pages 9988–9994, May 2021. doi: 10.1109/ICRA48506.2021.9560836.