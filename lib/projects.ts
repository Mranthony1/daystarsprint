export type Project = {
  slug: string;
  title: string;
  sector: string;
  year: string;
  summary: string;
  disciplines: Array<"seo" | "social" | "paid" | "branding" | "web">;
  challenge: string;
  response: string;
  made: string[];
};

export const disciplineLabels: Record<Project["disciplines"][number], string> = {
  seo: "SEO",
  social: "Social Media",
  paid: "Paid Advertising",
  branding: "Branding",
  web: "Web Design",
};

export const projects: Project[] = [
  {
    slug: "harbor-rye",
    title: "Harbor & Rye",
    sector: "Specialty food",
    year: "2026",
    summary:
      "A grocer known to regulars, and unnamed to everyone else. One name, one voice, and a site organized around the weekly table.",
    disciplines: ["branding", "web", "social"],
    challenge:
      "The shop had regulars and almost no public language. People described it differently depending on who they asked, and the only website was a menu saved as a PDF. Nothing accumulated into a brand a new customer could recognize.",
    response:
      "The study settles a single name and a plain-spoken voice, then builds the shop around three reasons people actually come: the weekly table, the pantry, and the counter. The identity is a seal and a small system, not a costume. The site is short on purpose.",
    made: [
      "A locked name and a short verbal direction",
      "A seal, a type pairing, and packaging marks",
      "A marketing site with a clear enquiry for wholesale and catering",
      "A small set of social templates the counter could actually keep using",
    ],
  },
  {
    slug: "vesper-clinic",
    title: "Vesper Clinic",
    sector: "Private practice",
    year: "2026",
    summary:
      "A quieter identity for a clinic whose website answered none of the practical questions a new patient arrives with.",
    disciplines: ["branding", "web", "seo"],
    challenge:
      "The practice looked like every template clinic on the same street. Search sent people to a homepage that talked about care in the abstract and never explained a visit, a preparation, or a way to ask a simple question.",
    response:
      "The study strips the voice back to what a person needs before they book: what the practice is for, how a first visit works, and how to prepare. The identity is calm on purpose. Search is planned from those practical questions, not from a list of generic health phrases.",
    made: [
      "A restrained identity and a clearer name treatment",
      "A site structured around visits rather than slogans",
      "Page outlines for the questions people actually search",
      "An appointment path that does not hide the next step",
    ],
  },
  {
    slug: "kite-copper",
    title: "Kite & Copper",
    sector: "Home objects",
    year: "2026",
    summary:
      "A collection launch with a destination. Creative, a landing page, and a media plan that sends people somewhere deliberate.",
    disciplines: ["social", "paid", "web"],
    challenge:
      "The objects photographed well and the marketing did not add up. Posts were boosted because they looked busy. There was no page that continued the thought, and no offer a new customer could act on.",
    response:
      "The study builds one collection narrative and refuses to advertise anything else until that story has a home. Social introduces the objects. Paid spend only runs once the landing page can explain the materials, the price logic, and how to buy or enquire.",
    made: [
      "A collection narrative and a short launch sequence",
      "Social crops that belong to the same system",
      "A landing page with one decision on it",
      "A paid structure judged by enquiries and sales, not by reach",
    ],
  },
  {
    slug: "north-station",
    title: "North Station",
    sector: "Café group",
    year: "2026",
    summary:
      "Three rooms, one group. A way to talk about the cafés together without sanding off what makes each counter itself.",
    disciplines: ["branding", "social"],
    challenge:
      "Each café had regulars who never visited the other two. The group existed on a lease and nowhere else. Promoting “all locations” made every room feel less specific.",
    response:
      "The study gives the group a name and a shared mark, then lets each room keep a color and a line of its own. The campaign is about the walk between them — a reason to know the group — rather than a discount that flattens the difference.",
    made: [
      "A group identity with room for each location",
      "Lockups that can name the room without renaming the group",
      "A short campaign about moving between the counters",
      "Social templates a manager could post without a designer",
    ],
  },
  {
    slug: "fieldnote",
    title: "Fieldnote",
    sector: "Independent audio",
    year: "2026",
    summary:
      "A journal that lived inside a platform and nowhere else. A home on the web, and a launch that does not depend on the algorithm alone.",
    disciplines: ["web", "seo", "paid"],
    challenge:
      "New listeners met a single episode with no sense of what the journal was for, who it was speaking to, or why the next one would be worth their time. The show had an audience and no address.",
    response:
      "The study builds a small site that states the editorial point of view, holds the episodes, and gives a person one way to begin. Search is aimed at the subjects the journal actually covers. A modest paid test introduces the point of view, not a single episode in isolation.",
    made: [
      "A website with a clear description of who it is for",
      "Episode pages that can be found on their own",
      "A launch note a listener can forward",
      "A paid test plan with a stop condition",
    ],
  },
  {
    slug: "sable-atelier",
    title: "Sable Atelier",
    sector: "Clothing label",
    year: "2026",
    summary:
      "Clothes that photographed well, and a brand a buyer still had to be talked through from the beginning every time.",
    disciplines: ["branding", "web", "social"],
    challenge:
      "Wholesale conversations started at zero. There was no page a buyer could read before the meeting, and the social feed, though beautiful, never explained how the label was built or who it was for.",
    response:
      "The study treats the identity as a sales tool. A buyer should understand the point of view, the way a collection is cut, and how to enquire — in about a minute. The site is a lookbook with a spine. Social crops are taken from the same system so the meeting and the feed agree.",
    made: [
      "An identity a buyer can recognize on a line sheet",
      "A lookbook site with a single enquiry path",
      "Short pages on cloth, cut, and the people the clothes are for",
      "A social crop system that does not invent a second brand",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsForDiscipline(discipline: Project["disciplines"][number]) {
  return projects.filter((project) => project.disciplines.includes(discipline));
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return projects[0];
  return projects[(index + 1) % projects.length];
}
