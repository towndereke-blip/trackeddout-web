export type Project = {
  id: string;
  title: string;
  pillar: string;
  usageCount: number;
};

export const projects: Project[] = [
  { id: "poster-1", title: "Poster One", pillar: "Growth - Internal", usageCount: 12 },
  { id: "poster-2", title: "Poster Two", pillar: "Leadership - External", usageCount: 7 },
  { id: "poster-3", title: "Poster Three", pillar: "Mindset - Internal", usageCount: 4 },
];
