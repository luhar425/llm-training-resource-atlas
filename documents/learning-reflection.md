# Reflection on learning

Rahul Niroop · November 8, 2026

## Challenge and strategy

The most challenging distinction in this analysis is between aggregate computation, elapsed time, electricity, and total project cost. A large GPU-hour number can appear to describe all four. I separate each claim into its unit, hardware, scope, and assumptions before comparing it. The DeepSeek example makes this concrete: 2.664 million pretraining GPU-hours becomes about 54.2 days only after specifying 2,048 concurrent GPUs and full occupancy. The calculation is useful precisely because its assumptions remain visible.

## Learning and course connections

My main takeaway is that understanding an algorithm also requires understanding the system around it. Next-token prediction supplies a self-supervised training target, while supervised demonstrations and preference feedback shape later behavior. This connects learning objectives with the course concepts of optimization and evaluation. I also see why data quality and model capacity must be considered together under a compute budget. A published dollar amount alone cannot establish that one model is more capable or efficient than another, especially when hardware and training scopes differ.

## Application to AI engineering

For AI engineering and infrastructure work, I would define a task and evaluation criteria before choosing a model or estimating hardware needs. I would track data provenance, record the accounting boundary for costs and electricity, and measure latency and quality on the intended workload. I would also plan checkpoints, monitoring, and revision when tests fail. A useful next project would compare smaller models on the same task and hardware, separating measured results from estimates. That would turn the reasoning in this conceptual artifact into evidence from an actual experiment.

