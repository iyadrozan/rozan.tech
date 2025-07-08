const person = {
  firstName: "Iyad",
  lastName: "Rozan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Developer",
  email: "hi@rozan.tech",
  location: "Asia/Makassar",
  languages: ["English", "Bahasa"], 
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/iyadrozan",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/iyad-rozan",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@code.eclipses",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/code.eclipses"
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

export { person, social };