export type CaseItem = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const RAW_CASES = [
  {
    title: 'Rideshare Incidents & Assault',
    description:
      'Reports of assault, harassment, or safety failures involving rideshare platforms and drivers.',
    imageAlt: 'Woman in car looking at phone',
  },
  {
    title: 'Institutional Misconduct',
    description:
      'Misconduct or negligence occurring within schools, care facilities, or government institutions.',
    imageAlt: 'Young woman in classroom',
  },
  {
    title: 'Religious Institution Abuse',
    description:
      'Allegations of abuse or misconduct involving clergy or religious organizations.',
    imageAlt: 'Church setting',
  },
  {
    title: 'Workplace Harassment & Misconduct',
    description:
      'Cases involving harassment, discrimination, or unsafe workplace environments.',
    imageAlt: 'Woman at desk',
  },
  {
    title: 'Campus Misconduct Cases',
    description:
      'Allegations of assault, harassment, or institutional negligence on college campuses.',
    imageAlt: 'Students with smartphone',
  },
  {
    title: 'Healthcare Misconduct',
    description:
      'Misconduct or negligence involving doctors, nurses, or healthcare professionals.',
    imageAlt: 'Medical consultation',
  },
  {
    title: 'Childhood Abuse Cases',
    description:
      'Historical or recent cases involving abuse of minors or institutional failures.',
    imageAlt: 'Child alone',
  },
  {
    title: 'Government & Detention Facility Misconduct',
    description:
      'Allegations of abuse, negligence, or misconduct within government facilities and detention settings.',
    imageAlt: 'Government facility interior',
  },
] as const;

/** Local images: `public/cases/case-1.jpg` … `case-N.jpg` (N = length). */
export const CASE_ITEMS: CaseItem[] = RAW_CASES.map((item, index) => {
  const n = index + 1;
  return {
    id: String(n),
    title: item.title,
    description: item.description,
    imageAlt: item.imageAlt,
    imageSrc: `/cases/case-${n}.png`,
  };
});
