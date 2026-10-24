export const method = [
  {
    number: "01",
    title: "Listen",
    text: "We learn the offer, the buyer, and what has already been tried.",
    detail:
      "The first conversations are about the business, not about a channel. We want the commercial aim, the people who already buy, and the places the current story falls apart.",
  },
  {
    number: "02",
    title: "Frame",
    text: "We write the point of view before anyone opens a design file.",
    detail:
      "Positioning, audience, and the job of the work are agreed in plain language. If this page is vague, everything built afterward will be decorative.",
  },
  {
    number: "03",
    title: "Make",
    text: "Identity, pages, and campaign materials are produced from that frame.",
    detail:
      "Design and writing happen against the decisions already made. Reviews look for clarity and consistency, not for an endless supply of alternative moods.",
  },
  {
    number: "04",
    title: "Release",
    text: "The work goes into the market with a place to land and a way to read it.",
    detail:
      "A site, a search improvement, or a campaign is released with the enquiry path and the measure already defined. Launch is a step, not a celebration that replaces one.",
  },
  {
    number: "05",
    title: "Refine",
    text: "We keep what is earning the right attention and change what is not.",
    detail:
      "Reporting is short and specific. The next month’s effort follows the evidence, and the studio will say when something should stop.",
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
    slug: "imprint",
    name: "Imprint",
    summary: "A defined project with a beginning, a making phase, and a handover.",
    fits: "A brand, a website, or a campaign that needs to be finished properly.",
    includes: [
      "A written frame before production",
      "A scoped set of deliverables",
      "Reviews at agreed points, not an open-ended loop",
      "Files and a short handover at the end",
    ],
  },
  {
    slug: "orbit",
    name: "Orbit",
    summary: "A monthly practice. Planning, creation, and a report a person can read.",
    fits: "Companies that need search, social, or paid media looked after on a steady rhythm.",
    includes: [
      "A plan for the month before the month begins",
      "Creation and publishing inside the agreed scope",
      "Decisions recorded, including what will stop",
      "A short report tied to the measure we agreed",
    ],
  },
  {
    slug: "constellation",
    name: "Constellation",
    summary: "Brand, website, and marketing planned as one system.",
    fits: "Companies ready to align how they look, what they say, and where they show up.",
    includes: [
      "Positioning that the site and the media both inherit",
      "A website or a serious revision of one",
      "A marketing rhythm for the channels that matter",
      "One studio accountable for the whole impression",
    ],
  },
] as const;

export const faqs = [
  {
    question: "Are the projects on this site client work?",
    answer:
      "No. They are studio studies: self-initiated concepts that show how Daystarsprint thinks. They are not client projects, and they are not results. Real work replaces them when it can be shown with permission.",
  },
  {
    question: "Can we hire the studio for one discipline?",
    answer:
      "Yes. Search, social, paid media, identity, and websites can each be commissioned on their own. If the brief needs more than one, we will say so before the scope is written.",
  },
  {
    question: "Do you publish prices?",
    answer:
      "Not on this site. A useful number depends on the offer, the condition of what already exists, and the level of involvement. The enquiry asks for a direction, not a public rate card. A proposal comes after the scope is clear.",
  },
  {
    question: "Where do you work?",
    answer:
      "The studio works with companies in Ghana and with clients elsewhere. The fit matters more than the postcode: a clear offer, a willingness to decide, and work the studio is actually equipped to do.",
  },
  {
    question: "What do you need from us to begin?",
    answer:
      "A straight description of the business, the person you want to reach, and what a good outcome would change. Existing sites, names, and materials help. A finished brief is not required. An honest one is.",
  },
  {
    question: "Will you guarantee a ranking or a return?",
    answer:
      "No. Anyone who guarantees a first-page ranking or a fixed return from a website form is selling a feeling. We define what will be measured, do the work properly, and report what the evidence shows.",
  },
  {
    question: "What happens after an enquiry?",
    answer:
      "The studio reads it and replies if there is a useful way to help. A response time is not published here, and the form is not a booking. If a proposal is warranted, it defines scope before any commitment.",
  },
] as const;
