export const method = [
  {
    number: "01",
    title: "Discover",
    text: "Understand the business, the audience, the goals, and what is already in the way.",
    detail:
      "The first conversations are about the offer and the buyer, not about a channel. We look at the current site, the competitive set, and the places the story falls apart.",
  },
  {
    number: "02",
    title: "Strategize",
    text: "Decide the priorities and what a useful outcome would actually look like.",
    detail:
      "Positioning, audience, and the job of the work are agreed in plain language. If this is vague, everything built afterward is decoration.",
  },
  {
    number: "03",
    title: "Create & Launch",
    text: "Produce the identity, the site, the content, or the campaign, then put it in market.",
    detail:
      "Design and writing follow the decisions already made. A launch includes the enquiry path and the measure, so the work has somewhere to land.",
  },
  {
    number: "04",
    title: "Measure & Improve",
    text: "Read what happened, keep what is working, and change what is not.",
    detail:
      "Reporting is short and specific. The next period of work follows the evidence. Tinatries will say when something should stop.",
  },
] as const;

export const standards = {
  practice: [
    {
      title: "The offer before the aesthetic",
      text: "Visual work begins once we can say what the company is asking the market to understand.",
    },
    {
      title: "One voice across every door",
      text: "Search, social, ads, and the website are treated as meetings with the same company.",
    },
    {
      title: "Specificity over slogans",
      text: "A sentence a buyer can use is worth more than a line that only sounds ambitious.",
    },
    {
      title: "Handover, not hostage",
      text: "The client should be able to keep going. Files, rules, and access are part of the work.",
    },
  ],
  decline: [
    "Guaranteed rankings, follower counts, or a fixed return.",
    "Bought audiences and fabricated social proof.",
    "Templates presented as original identity or web design.",
    "Campaigns with no offer, no audience, and nowhere to land.",
  ],
} as const;

export const engagements = [
  {
    slug: "project",
    name: "Project",
    summary: "A defined creative or website project, with a start, a making phase, and a handover.",
    fits: "A brand, a site, or a piece of campaign creative that needs to be finished properly.",
    includes: [
      "A written frame before production",
      "A scoped set of deliverables",
      "Reviews at agreed points",
      "Files and a short handover at the end",
    ],
  },
  {
    slug: "retainer",
    name: "Retainer",
    summary: "Ongoing marketing. Planning, creation, and a report a person can actually read.",
    fits: "Companies that need search, social, or paid media looked after on a steady rhythm.",
    includes: [
      "A plan before the period begins",
      "Creation and publishing inside the agreed scope",
      "Decisions recorded, including what will stop",
      "A short report tied to the measure we agreed",
    ],
  },
  {
    slug: "campaign",
    name: "Campaign",
    summary: "A bounded push with an offer, an audience, and a page the click can land on.",
    fits: "Launches and seasonal efforts that need attention inside a defined window.",
    includes: [
      "An offer and audience before media is bought",
      "Creative and a landing recommendation",
      "Setup, monitoring, and adjustments",
      "A close-out of what the evidence showed",
    ],
  },
  {
    slug: "custom",
    name: "Custom",
    summary: "Brand, website, and marketing planned together when one service is not enough.",
    fits: "Companies ready to align how they look, what they say, and where they show up.",
    includes: [
      "Positioning the site and the media both inherit",
      "A website or a serious revision of one",
      "A marketing rhythm for the channels that matter",
      "One team accountable for the whole impression",
    ],
  },
] as const;

export const faqs = [
  {
    question: "What services does Tinatries offer?",
    answer:
      "Search engine optimization, social media marketing, paid advertising, branding and creative strategy, and web design and development. They can be commissioned alone or planned as one system.",
  },
  {
    question: "Which types of businesses can work with Tinatries?",
    answer:
      "Companies with a real offer and a willingness to decide. The practice is built for ambitious brands in Ghana and for clients elsewhere who want the same standard. Fit matters more than a category.",
  },
  {
    question: "Can I hire Tinatries for one specific service?",
    answer:
      "Yes. Search, social, paid media, branding, and websites can each stand alone. If the brief needs more than one discipline, that is said before the scope is written.",
  },
  {
    question: "How does a project begin?",
    answer:
      "With an enquiry. Tell us the business, who it is for, and what you need help with. Tinatries reads it and replies if there is a useful way to help. A proposal, when one is warranted, defines scope before any commitment.",
  },
  {
    question: "How are project costs determined?",
    answer:
      "From the scope: the offer, the condition of what already exists, and the level of involvement. This site does not publish prices, guarantees, or turnaround times. Advertising spend, when relevant, is separate from agency fees. A proposal follows a clear brief.",
  },
  {
    question: "How will progress and results be communicated?",
    answer:
      "In plain language, against the measures agreed at the start. Reporting names what changed and what should happen next. Rankings, leads, and advertising returns are not guaranteed.",
  },
  {
    question: "Can I combine a website with marketing?",
    answer:
      "Yes. A site and the marketing that sends people to it are more useful when they are planned together. The Custom engagement is the structure for that. A single service is still available when that is all the brief needs.",
  },
  {
    question: "Are the projects on this site client work?",
    answer:
      "No. They are studio concepts: self-initiated studies that show how Tinatries thinks. They are not client projects and they are not results. Real work replaces them when it can be shown with permission.",
  },
] as const;
