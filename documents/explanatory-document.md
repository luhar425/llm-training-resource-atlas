# Generative AI training processes and resources

Rahul Niroop · November 8, 2026

## Main points

Training a large language model requires a coordinated data and infrastructure pipeline. Teams collect suitable text and code, clean and tokenize it, choose a model design, and run small experiments before pretraining. During pretraining, the model predicts tokens, computes an error called loss, and uses backpropagation and an optimizer to adjust its weights. Post-training uses demonstrations and feedback to improve instruction following. Evaluation checks usefulness and risks before deployment, and monitoring continues after release. These stages can repeat when tests expose weaknesses [1-3, 6].

## Resources and performance

Data quality and coverage influence what a model can learn. Licensing, filtering, storage, and annotation all require resources. GPUs or TPUs perform the numerical work, while memory, fast networks, checkpoint storage, and skilled staff keep training practical. Model capacity and training-token volume must be considered together under a compute budget [2, 8]. More hardware can shorten a run, but coordination and failures affect the result. Electricity and cooling support the cluster, and deployed inference creates recurring costs.

## Examples and cost boundaries

Meta reports 1,720,320 A100 GPU-hours for Llama 2 70B pretraining and 30.84 million H100 GPU-hours for Llama 3.1 405B training [4, 5]. DeepSeek-V3 reports 2.788 million H800 GPU-hours across official pretraining, context extension, and post-training. Its $5.576 million estimate assumes $2 per GPU-hour and excludes prior research and ablation experiments [6]. This is a compute-rental equivalent, not a complete organizational budget. The bars therefore compare disclosed GPU-hours while clearly identifying different hardware and scopes. GPT-4 is included as a disclosure example: its 2023 report withholds hardware, training compute, and model-size details [7].

## Design rationale and portfolio relevance

The infographic pairs a numbered training sequence with four resource categories, then connects these concepts to model examples and worked calculations. Direct labels, high contrast, and a limited color palette reduce the need to infer meaning from color. The scalable graphic supports enlargement, and the accompanying web page provides selectable text, source links, a comparison table, and keyboard-accessible controls. This second portfolio artifact demonstrates infrastructure literacy, quantitative reasoning, and evidence evaluation. It extends the first artifact, which focused on classifying machine-learning methods. Both are conceptual analyses rather than claims of personally training these models.

Elapsed-time equivalent = GPU-hours / concurrent GPUs / 24. DeepSeek-V3 pretraining gives 2,664,000 / 2,048 / 24 = 54.2 days at full occupancy. The report states that pretraining finished in less than two months [6]. This calculation excludes preparation, research, evaluation, and interruptions.

Energy proxy = GPU-hours x stated power capacity in kW. Llama 2 70B gives 1,720,320 x 0.400 = 688,128 kWh, or 688 MWh [4]. Llama 3.1 405B gives 30,840,000 x 0.700 = 21,588,000 kWh, or 21.59 GWh [5]. These capacity-based estimates are not metered electricity. The source cards describe power capacity adjusted for power-usage efficiency. Additional facility overhead must not be applied without checking that boundary. Energy, carbon emissions, and renewable-energy accounting are different measures.

A token is a word, word part, or character. Parameters are learned numerical weights. SFT means supervised fine-tuning on demonstrations. RLHF means reinforcement learning from human feedback. A GPU-hour measures one GPU operating for one hour. Inference generates outputs with trained weights and does not ordinarily update them.

## References

[1] Wolfram, S. (2023). [What Is ChatGPT Doing and Why Does It Work](https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/).

[2] IBM (n.d.). [What are large language models](https://www.ibm.com/think/topics/large-language-models).

[3] Ouyang, L., et al. (2022). [Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155).

[4] Meta (2023). [Llama 2 model card](https://github.com/meta-llama/llama/blob/main/MODEL_CARD.md).

[5] Meta (2024). [Llama 3.1 model card](https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md).

[6] DeepSeek-AI (2025). [DeepSeek-V3 Technical Report, version 2, Table 1](https://arxiv.org/html/2412.19437v2).

[7] OpenAI (2023). [GPT-4 Technical Report, section 2](https://cdn.openai.com/papers/gpt-4.pdf).

[8] Hoffmann, J., et al. (2022). [Training Compute-Optimal Large Language Models](https://arxiv.org/abs/2203.15556).

[9] IBM Technology (2023). [How Large Language Models Work [Video]](https://www.youtube.com/watch?v=5sLYAQS9sWQ).

[10] Eye on Tech (2023). [What is ChatGPT? (In About A Minute) [Video]](https://www.youtube.com/watch?v=OGmDr8TLtTo).

