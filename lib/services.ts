export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  summary: string;
  narrative: string;
  problems: string[];
  deliverables: string[];
  fit: string[];
  measures: string[];
};

export const services: Service[] = [
  {
    slug: "seo",
    number: "01",
    title: "Search Engine Optimization",
    short: "Be the answer when the search is serious.",
    summary:
      "A search practice for companies that should be found for the work they actually do — not for a pile of loosely related phrases.",
    narrative:
      "Search rewards a business that is easy to understand. We decide which queries are worth earning, make the site capable of holding them, and watch whether the right people arrive. Rankings are a means. The useful outcome is a visitor who already understands the offer.",
    problems: [
      "The company is known to regulars and nearly invisible to everyone searching.",
      "Important pages compete with each other, or the best page is buried.",
      "The copy introduces the company without answering what a buyer is deciding.",
      "There is no shared view of which queries, pages, or fixes matter.",
    ],
    deliverables: [
      "A technical review of the current site",
      "Query and intent research tied to real offers",
      "Page recommendations and on-page rewrites",
      "A content plan for the searches worth winning",
      "Internal linking that gives priority pages a path",
      "A plain-language view of what changed and what to watch",
      "Local search support where the business serves a specific place",
    ],
    fit: [
      "Companies with a site that should earn attention over time.",
      "Service businesses that depend on being found in a specific market.",
      "Shops and product brands that need a clearer search foundation.",
    ],
    measures: [
      "Queries the priority pages are visible for",
      "Organic visits to those pages",
      "Index coverage and technical health",
      "Enquiries or other useful actions that begin in organic search",
    ],
  },
  {
    slug: "social",
    number: "02",
    title: "Social Media Marketing",
    short: "A presence with a point of view.",
    summary:
      "Planning, creative, and a publishing rhythm a real team can keep — so the feed sounds like the company, not like a content calendar on autopilot.",
    narrative:
      "Social is where a brand is met in passing. That only works when the point of view is already decided. This practice covers organic social: the strategy, the creative, the publishing rhythm, and how replies are handled. Paid social is a separate advertising engagement, with its own budget. We shape the subjects worth repeating, the way they should look and sound, and a cadence the business can sustain after the novelty wears off.",
    problems: [
      "Posting happens when someone remembers, so the brand feels intermittent.",
      "The feed looks busy and still does not say what the company is for.",
      "Creative is made one post at a time, with no system underneath.",
      "Reporting counts likes and never connects them to a commercial question.",
    ],
    deliverables: [
      "A point of view and a short list of recurring subjects",
      "Templates and a visual system for the feed",
      "A practical publishing rhythm",
      "Captions and creative direction in the brand voice",
      "Community guidance for replies and messages",
      "A monthly read of what earned attention and what did not",
    ],
    fit: [
      "Brands that need a public voice, not a burst of launch posts.",
      "Teams that want the feed handled without losing the way they sound.",
      "Companies whose buyers actually spend time on social platforms.",
    ],
    measures: [
      "Consistency against the agreed rhythm",
      "Saves, shares, and replies on the subjects that matter",
      "Profile visits and clicks through to the site",
      "Enquiries that name the social presence as the source",
    ],
  },
  {
    slug: "paid",
    number: "03",
    title: "Paid Advertising",
    short: "Spend where the brief is clear.",
    summary:
      "Campaigns with an offer, an audience, and a place to land. Media is adjusted against a commercial goal, not against the comfort of a busy dashboard.",
    narrative:
      "Paid media is a precise instrument and an easy way to waste money. We start with the offer and the person it is for, build the path from the ad to a page that continues the sentence, and change the spend when the evidence says to. Media budgets are separate from agency fees. Sales, leads, and returns are not guaranteed.",
    problems: [
      "Money is boosting posts that have nowhere useful to send people.",
      "Campaigns launch without an offer a stranger can understand.",
      "The landing page and the ad seem to describe different companies.",
      "Reports list impressions and avoid the question of enquiries or sales.",
    ],
    deliverables: [
      "An offer and audience definition before anything is bought",
      "Account structure and campaign setup",
      "Ad creative and copy in the brand voice",
      "Landing-page recommendations so the click has a destination",
      "Ongoing budget and creative decisions",
      "Reporting tied to the action the business actually wants",
    ],
    fit: [
      "Launches that need attention inside a defined window.",
      "Offers that can be explained in a sentence and fulfilled properly.",
      "Businesses ready to judge spend by enquiries or sales, not by reach alone.",
    ],
    measures: [
      "Cost of a qualified enquiry or sale",
      "The rate at which clicks become that action",
      "Which creative and audiences earn the next increment of budget",
      "Spend that can be paused without a story having to change",
    ],
  },
  {
    slug: "branding",
    number: "04",
    title: "Branding and Creative Strategy",
    short: "Recognizable before the sentence ends.",
    summary:
      "Naming support when it is needed, a visual and verbal system, and the rules that keep a company consistent once more than one person is making things.",
    narrative:
      "Identity is not a logo delivered in a folder. It is the set of decisions that make a company feel like itself on a website, a package, a proposal, and a post. We define the point of view first, then the marks, type, color, and language that can carry it without a designer in the room.",
    problems: [
      "The company is described differently by every person who works there.",
      "Visuals are attractive and still interchangeable with a competitor.",
      "New materials are invented from scratch each time, so nothing accumulates.",
      "The brand lives in a slide and never reaches the site or the sales conversation.",
    ],
    deliverables: [
      "Positioning: who it is for, and what it should be known for",
      "Verbal direction, including a voice a writer can follow",
      "A mark, a type system, and a working color palette",
      "Core applications for the places the brand actually appears",
      "Simple rules for using the system",
      "A handover the team can keep using",
    ],
    fit: [
      "New companies that need a finished first impression.",
      "Established businesses whose materials no longer match the standard of the work.",
      "Teams preparing a site, a launch, or a sales effort that should feel like one company.",
    ],
    measures: [
      "Whether a stranger can tell the materials belong together",
      "How quickly a new asset can be made without reinventing the system",
      "Whether the site, the feed, and the sales materials say the same thing",
    ],
  },
  {
    slug: "web",
    number: "05",
    title: "Web Design and Development",
    short: "A site that earns the next conversation.",
    summary:
      "Design and engineering for sites that explain the offer, carry the brand, and give a person a clear way to enquire — built to stay fast and understandable.",
    narrative:
      "A website is the one place the company fully controls the sentence. We design that sentence properly: what the visitor should understand, what they should do, and how the page should feel at the standard of the brand. Then we build it so it loads cleanly, reads on a phone, and can be looked after.",
    problems: [
      "The current site explains the company to itself and not to a buyer.",
      "The brand and the website feel like they were commissioned years apart.",
      "Enquiries depend on a visitor already being determined.",
      "The site is slow, brittle, or impossible for the team to update.",
    ],
    deliverables: [
      "Structure and page strategy before visual design",
      "Interface design in the brand system",
      "Responsive build with attention to speed and accessibility",
      "Enquiry paths that match how the business actually sells",
      "Basic on-page search foundations",
      "A handover covering what the team can change",
    ],
    fit: [
      "Companies whose site is the main place a buyer decides to make contact.",
      "Brands that have outgrown a template or a brochure PDF.",
      "Launches that need a destination worthy of the campaign sending people there.",
    ],
    measures: [
      "Whether a first-time visitor can explain the offer after one visit",
      "Completion of the enquiry path",
      "Speed, clarity, and basic technical health",
      "How confidently the team can publish a simple change",
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
