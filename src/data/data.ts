// import PhaedraLogo from "assets/images/logos/phaedra.jpeg";
// import BrainxLogo from "assets/images/logos/brainxtech.png";
// import CodenyaLogo from "assets/images/logos/codenya.png";
// import BrainplowLogo from "assets/images/logos/brainplow.jpg";
// import UniLogo from "assets/images/logos/fast.png";
import BisabebasLogo from "../assets/images/bisabebas.svg";
import TauberesLogo from "../assets/images/tauberes.png";
import WideboardLogo from "../assets/images/wb.png";
import UgmLogo from "../assets/images/ugm.png";
import SipBmnLogo from "../assets/images/sipbmn.png";
// import figma from "assets/images/skills/figma.png";
// import vscode from "assets/images/skills/vscode.png";
// import react from "assets/images/skills/react.png";
// import ruby from "assets/images/skills/ruby.png";
// import rails from "assets/images/skills/rails.png";
// import javascript from "assets/images/skills/javascript.png";
// import typescript from "assets/images/skills/typescript.png";
// import html5 from "assets/images/skills/html-5.png";
// import css3 from "assets/images/skills/css3.png";
// import python from "assets/images/skills/python.png";
// import bootstrap from "assets/images/skills/bootstrap.png";
// import postgres from "assets/images/skills/postgresql.png";
// import redis from "assets/images/skills/redis.png";
// import mysql from "assets/images/skills/mysql.png";
// import heroku from "assets/images/skills/heroku.png";
// import docean from "assets/images/skills/digital-ocean.png";
// import aws from "assets/images/skills/aws.png";
// import nginx from "assets/images/skills/nginx.png";

export const companies = [
  {
    title: "PT. Bisabebas Ekosistem Terpercaya (Bisabebas)",
    alt: "BB image",
    role: "ReactJS Developer",
    skills: ["html", "css", "typescript", "javascript", "reactjs"],
    period: "2021 - Present",
    logo: BisabebasLogo,
  },
  {
    title: "PT. Ruang Inovasi Nusantara (Wideboard)",
    alt: "TB image",
    role: "Android Developer",
    skills: ["java", "kotlin", "android"],
    period: "2017-2020",
    logo: WideboardLogo,
  },
  {
    title: "PT. Garuda Tauberes Indonesia (Tauberes)",
    alt: "TB image",
    role: "Android Developer",
    skills: ["java", "kotlin", "android"],
    period: "2019",
    logo: TauberesLogo,
  },
];

export const institutes = [
  {
    short_title: "UGM",
    title: "Gadjah Mada University",
    alt: "Ugm image",
    role: "Bachelor's Degree in Computer Science",
    skills: ["project management", "web development", "data structures"],
    period: "2012",
    startingYear: "2012",
    logo: UgmLogo,
  },
];

export const projectsList = [
  {
    id: 1,
    title: "Bisabebas App",
    logo: BisabebasLogo,
    link: "https://app.bisabebas.com/",
    desc: `Bisabebas is a distribution network platform and business financing as well as an ecosystem to build a strong, integrated, and efficient distribution network.`,
    technologies: ["html", "css", "typescript", "reactjs"],
  },
  {
    id: 2,
    title: "Bisabebas Landing Page",
    link: "https://www.bisabebas.com/",
    logo: BisabebasLogo,
    desc: `Bisabebas is a distribution network platform and business financing as well as an ecosystem to build a strong, integrated, and efficient distribution network.`,
    technologies: ["html", "css", "typescript", "nextjs"],
  },
  {
    id: 3,
    title: "Sistem Informasi Penatausahaan BMN Kementan RI",
    link: undefined,
    logo: SipBmnLogo,
    desc: `Sistem Informasi Penatausahaan Badan Milik Negara is a desktop app purposed for helping The Equipment Unit of Dirjen Tanaman Pangan 
    Kementerian Pertanian RI to do inventory tasks.`,
    technologies: ["html", "css", "typescript", "reactjs", "electronjs"],
  },
];

// export const skills = [
//   {
//     name: "Ruby on Rails",
//     description: "Web development",
//     link: "https://rubyonrails.org/",
//     type: "development",
//     image: rails
//   },
//   {
//     name: "React",
//     description: "Web development",
//     link: "https://reactjs.org/",
//     type: "development",
//     image: react
//   },
//   {
//     name: "Ruby",
//     description: "Web development, scrapping",
//     link: "https://www.ruby-lang.org/en/",
//     type: "development",
//     image: ruby
//   },
//   {
//     name: "Python",
//     description: "Web development, scrapping",
//     link: "https://www.python.org/",
//     type: "development",
//     image: python
//   },
//   {
//     name: "Javascript",
//     description: "Web development",
//     link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
//     type: "development",
//     image: javascript
//   },
//   {
//     name: "Typescript",
//     description: "Web development",
//     link: "https://www.typescriptlang.org/",
//     type: "development",
//     image: typescript
//   },
//   {
//     name: "Html5",
//     description: "Web layouts",
//     link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
//     type: "development",
//     image: html5
//   },
//   {
//     name: "Css3",
//     description: "Web design",
//     link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
//     type: "design",
//     image: css3
//   },
//   {
//     name: "Bootstrap",
//     description: "Web design",
//     link: "https://getbootstrap.com/",
//     type: "design",
//     image: bootstrap
//   },
//   {
//     name: "Postgres",
//     description: "Database",
//     link: "https://www.postgresql.org/",
//     type: "database",
//     image: postgres
//   },
//   {
//     name: "Mysql",
//     description: "Database",
//     link: "https://www.mysql.com/",
//     type: "database",
//     image: mysql
//   },
//   {
//     name: "Redis",
//     description: "Database",
//     link: "https://redis.io/",
//     type: "database",
//     image: redis
//   },
//   {
//     name: "Heroku",
//     description: "Devops",
//     link: "https://www.heroku.com/",
//     type: "devops",
//     image: heroku
//   },
//   {
//     name: "AWS",
//     description: "Devops",
//     link: "https://aws.amazon.com/",
//     type: "devops",
//     image: aws
//   },
//   {
//     name: "Digital Ocean",
//     description: "Devops",
//     link: "https://www.digitalocean.com/",
//     type: "devops",
//     image: docean
//   },
//   {
//     name: "Nginx",
//     description: "Web server",
//     link: "https://www.nginx.com/",
//     type: "devops",
//     image: nginx
//   },
//   {
//     name: "Visual Studio Code",
//     description: "Code editor of choice",
//     link: "https://code.visualstudio.com/",
//     type: "development",
//     image: vscode
//   },
//   {
//     name: "Figma",
//     description: "Collaborative Design",
//     link: "https://www.figma.com/",
//     type: "design",
//     image: figma
//   }
// ];
