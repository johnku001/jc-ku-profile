import { TimelineData } from './TimelineData';

export interface User {
  name: string;
  currentPost: string;
  email: string;
  phone: string;
  resume: string;
  website: string;
  github: string;
  linkedin: string;
  imageUrl: string;
  personalStatement: string;
  skills: {
    programmingLanguages: string[];
    frameworksAndTools: string[];
  };
  workExperience: TimelineData[];
  education: TimelineData[];
}
