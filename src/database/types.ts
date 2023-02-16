export type Resume = {
  imageBaseUrl: string;
  name: string;
  role: string;
  linkedInId: string
  roleDescription: string;
  socialLinks: SocialLink[];
  aboutMe: string;
  address: string;
  website: string;
  education: Education[];
  work: Work[];
  skills: string[]
}


export type SocialLink = {
  name: string;
  url: string;
  className: string;
}

export type Education = {
  name: string;
  major: string;
  graduationMonth: string;
  graduationYear: string;
  achievements: string;
}

export type Work = {
  name: string;
  focus: string;
  startDate: string;
  endDate: string;
  projects: string;
}


