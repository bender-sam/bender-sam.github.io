import { Resume } from "./types";

export const resume: Resume = {
  imageBaseUrl: "https://rbhatia46.github.io/",
  name: "Samuel Bender",
  role: "Software Engineer and Musician",
  linkedInId: "https://www.linkedin.com/in/samuel-bender/",
  roleDescription: "",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/samuel-bender/",
      className: "fa fa-linkedin",
    },
    {
      name: "github",
      url: "https://github.com/bender-sam",
      className: "fa fa-github",
    },
    {
      name: "skype",
      url: "https://www.instagram.com/bender_samuel/",
      className: "fa fa-instagram",
    }
  ],
  aboutMe: "I am currently a student at Vanderbilt University, double-majoring in Computer Science and Music Performance. Originally from Franklin, TN, I spent the majority of my childhood surrounded by scenic middle Tennessee countryside. The dichotomy between my two fields of study can largely be attributed to my lifelong passion for classical music combined with an innate interest in science and technology. Having played the violin since the age of 5, then picking up the viola at the age of 12, my pursuit of musical excellence has been a perennial journey. Ever since saying Hello to the dynamic World of computer science in late high school , my free time can be illustrated as such: ",
  address: "Nashville",
  website: "https://github.com/bender-sam",
  education: [
    {
      name: "Vanderbilt University",
      major: "Computer Science",
      graduationMonth: "May",
      graduationYear: "2021",
      achievements: "Some Achievements"
    },
  ],
  work: [
    {
      name: "Asurion",
      focus: "Software Engineering",
      startDate: "July",
      endDate: "2021",
      projects: "Device Replacement"
    },
  ],
  skills: ["Coding", "Music", "Rubiks Cubes"],
}