export interface PublicationLink {
  label: string;
  href: string;
  target?: string;
  rel?: string;
}

export interface Publication {
  title: string;
  subtitle?: string;
  badge?: string;
  description: string;
  url: string;
  image?: string;
  links: PublicationLink[];
}

export const publications: Publication[] = [
  {
    title: "Actor-Curator: Co-adaptive Curriculum Learning via Policy-Improvement Bandits for RL Post-Training",
    subtitle:
      "Zhengyao Gu*, Jonathan Light*, Raul Astudillo, Ziyu Ye, Langzhou He, Henry Peng Zou, Wei Cheng, Santiago Paternain, Philip S. Yu, Yisong Yue",
    badge: "preprint",
    description:
      "A learned neural curator jointly trained with the actor to dynamically select problems from massive datasets. Non-stationary stochastic bandit formulation with OSMD-based updates and regret guarantees; up to 30% performance gains and 80% faster convergence across challenging reasoning benchmarks.",
    url: "https://arxiv.org/abs/2602.20532v1",
    image: "/figures/actor-curator.png",
    links: [
      { label: "PDF", href: "https://arxiv.org/abs/2602.20532v1" },
    ],
  },
  {
    title: "Scaling Laws for Many-Shot In-Context Learning with Self-Generated Annotations",
    subtitle:
      "Zhengyao Gu*, Henry Peng Zou*, Yankai Chen, Aiwei Liu, Weizhi Zhang, Philip S. Yu",
    badge: "EMNLP25",
    description:
      "Semi-supervised ICL framework: confidence-filtered pseudo-demonstrations, no ground-truth labels required, that scales to 1,000+ demonstrations and outperforms standard ICL across zero-shot, few-shot, and many-shot settings. IterPSD further improves quality via iterative refinement and curriculum pseudo-labeling; up to 6.8% gains on classification tasks across 16 benchmarks.",
    url: "https://arxiv.org/abs/2503.03062",
    image: "/figures/semiICL.png",
    links: [
      { label: "PDF", href: "https://arxiv.org/abs/2503.03062" },
    ],
  },
  {
    title: "RECODE-H: A Benchmark for Research Code Development with Interactive Human Feedback",
    subtitle:
      "Chunyu Miao, Henry Peng Zou, Yangning Li, Yankai Chen, Yibo Wang, Fangxin Wang, Yifan Li, Wooseong Yang, Bowei He, Xinni Zhang, Dianzhi Yu, Hanchen Yang, Hoang H Nguyen, Yue Zhou, Jie Yang, Jizhou Guo, Wenzhe Fan, Chin-Yuan Yeh, Panpan Meng, Liancheng Fang, Jinhu Qi, Wei-Chieh Huang, Zhengyao Gu, Yuwei Han, Langzhou He, Yuyao Yang, Yinghui Li, Hai-Tao Zheng, Xue Liu, Irwin King, Philip S. Yu",
    badge: "ICLR26",
    description:
      "102 PhD-level repository tasks from real research papers — structured instructions, unit tests, and a five-level feedback hierarchy simulating realistic researcher–agent collaboration. Experiments across GPT-5, Claude-Sonnet-4, DeepSeek-V3.1, and Gemini 2.5 show even minimal diagnostic feedback nearly doubles pass rates; dominant failure modes are paper misinterpretation and missing domain knowledge, not syntax errors.",
    url: "https://arxiv.org/abs/2510.06186",
    image: "/figures/recode.png",
    links: [
      { label: "PDF", href: "https://arxiv.org/abs/2510.06186" },
    ],
  },
  {
     title: "RECODE-H: A Benchmark for Research Code Development with Interactive Human Feedback",
    subtitle:
      "Henry Peng Zou*, Zhengyao Gu*, Yue Zhou, Yankai Chen, Weizhi Zhang, Liancheng Fang, Yibo Wang, Yangning Li, Kay Liu, Philip S. Yu",
    badge: "ACL25",
    description:
      "TestNUC boosts LLM classification at inference time by majority-voting over predictions on semantically similar unlabeled neighbors. Outperforms self-consistency by ~6–10% across 8 datasets and 4 models; scales linearly in compute.",
    url: "https://aclanthology.org/2025.acl-long.1486/",
    image: "/figures/testnuc.png",
    links: [
      { label: "PDF", href: "https://aclanthology.org/2025.acl-long.1486/" },
    ],
  }
];