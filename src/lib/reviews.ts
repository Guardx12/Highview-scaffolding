export type Review = {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  when?: string;
};

// Reviews taken from the text you pasted (Google reviews section)
export const reviews: Review[] = [
  {
    name: 'Hannah Cork',
    rating: 5,
    when: '11 months ago',
    text: 'Scott and the team were reliable and efficient. Communication was great throughout. I would 100% recommend.',
  },
  {
    name: 'Rosie Ansell',
    rating: 5,
    when: 'Edited a year ago',
    text: 'Great service!',
  },
  {
    name: 'Sarah Morris',
    rating: 5,
    when: 'a year ago',
    text: 'Excellent scaffolders! Great workmen, great team, great structure, overall so great!',
  },
  {
    name: 'Emma May',
    rating: 5,
    when: 'a year ago',
    text: 'Amazing scaffolders, Scott and the team were efficient and accommodating to what we needed. Thank you!',
  },
  {
    name: 'Barry Fitzmaurice',
    rating: 5,
    when: 'a year ago',
    text: 'Brilliant service 10/10 😁👍🏻 Many thanks',
  },
  {
    name: 'John Hammond',
    rating: 2,
    when: 'a year ago',
    text: 'Some of the staff are rude. Should remember that when visiting a site they should respect the homeowner’s property',
  },
  {
    name: 'Val Hamilton',
    rating: 5,
    when: '5 years ago',
    text: 'Scott and his team were extremely efficient and helpful, keeping us up to date at all times with all aspects of the project. We would not hesitate to use Highview Scaffolding for future projects.',
  },
  {
    name: 'Peter Carrington Smith',
    rating: 5,
    when: '5 years ago',
    text: 'Scott and his team did a great job for us, quick to erect and dismantle the scaffolding and kept to our schedule. Polite and efficient. Highly recommended.',
  },
  {
    name: 'Sam Wadman',
    rating: 5,
    when: '5 years ago',
    text: 'Best in the business.',
  },
  {
    name: 'Dilys Wilson-Layton',
    rating: 5,
    when: '5 years ago',
    text: 'Can’t recommend this Scaffolding company & Scott high enough - been in the building industry over 35 years and this is definitely one of the best scaffolding company I have used. Dilys Wilson-Layton Independent Project Manager & Building Facilitator.',
  },
];
