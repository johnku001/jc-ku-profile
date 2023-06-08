import { NavigationItem } from '@/components/Header';
import { User } from '@/models/User';

export const navigation: NavigationItem[] = [
  { name: 'Introduction', href: '#introduction', current: true },
  { name: 'Tech Stack', href: '#tech-stack', current: false },
  { name: 'Working Experience', href: '#work-experience', current: false },
  { name: 'Education', href: '#education', current: false },
  { name: 'Contact Me', href: '#contact-me', current: false },
  { name: 'Credits', href: '#credits', current: false },
];

export const defaultUser: User = {
  name: '',
  currentPost: '',
  email: '',
  phone: '',
  website: '',
  resume: '',
  github: '',
  linkedin: '',
  imageUrl: '',
  personalStatement: '',
  skills: {
    programmingLanguages: [],
    frameworksAndTools: [],
  },
  workExperience: [],
  education: [],
};

export const credits = [
  {
    name: 'parserbot',
    url: 'https://codepen.io/parserbot',
  },
  {
    name: 'Krishna Gudpalle',
    url: 'https://tailwindflex.com/u/krishna',
  },
  {
    name: 'parserbot',
    url: 'https://codepen.io/parserbot',
  },
];
