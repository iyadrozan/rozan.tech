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
    name: "Iyad Rozan",
    icon: "github",
    link: "https://github.com/iyadrozan",
  },
  {
    name: "Iyad Rozan",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/iyad-rozan",
  },
  {
    name: "@code.eclipses",
    icon: "threads",
    link: "https://www.threads.com/@code.eclipses",
  },
  {
    name: "@code.eclipses",
    icon: "instagram",
    link: "https://www.instagram.com/code.eclipses"
  },
  {
    name: "hi@rozan.tech",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

export { person, social };