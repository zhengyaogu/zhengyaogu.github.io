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
  }
];