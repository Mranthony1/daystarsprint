import {
  budgetOptions,
  contactMethodOptions,
  engagementOptions,
  serviceOptions,
  timelineOptions,
} from "@/lib/form-options";

const tables = {
  service: serviceOptions,
  engagement: engagementOptions,
  budget: budgetOptions,
  timeline: timelineOptions,
  contactMethod: contactMethodOptions,
} as const;

export function labelFor(group: keyof typeof tables, value: string) {
  if (!value) return "";
  const match = tables[group].find((item) => item.value === value);
  return match?.label ?? value;
}
