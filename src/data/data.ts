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
import OosahaLogo from "../assets/images/oosaha.png";
import SinarLogo from "../assets/images/sinar.png";
import GmadsaLogo from "../assets/images/gmadsa.png";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
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

export const webProjectsList = [
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
    logo: SipBmnLogo,
    desc: `Sistem Informasi Penatausahaan Badan Milik Negara is a desktop app purposed for helping The Equipment Unit of Dirjen Tanaman Pangan 
    Kementerian Pertanian RI to do inventory tasks.`,
    technologies: ["html", "css", "typescript", "reactjs", "electronjs"],
  },
];

export const mobileProjectsList = [
  {
    id: 1,
    title: "Wideboard App",
    logo: WideboardLogo,
    link: "https://play.google.com/store/apps/details?id=me.wideboard",
    desc: `Wideboard is a team messenger that helps you connect and unifies your entire team's communications, making your collaboration a lot simple and better under your fingertips.`,
    technologies: ["kotlin", "java", "android"],
  },
  {
    id: 2,
    title: "Oosaha App",
    logo: OosahaLogo,
    link: "https://play.google.com/store/apps/details?id=com.oosaha",
    desc: `Oosaha is a super app to support the productivity of small and medium enterprise (SME) management in Indonesia.`,
    technologies: ["kotlin", "java", "android"],
  },
  {
    id: 3,
    title: "Gmadsa App",
    logo: GmadsaLogo,
    desc: `Gmadsa is an android app used for data collection of research subjects in the medical faculty of UGM.`,
    technologies: ["kotlin", "java", "android"],
  },
  {
    id: 4,
    title: "SInAr PD3I App",
    logo: SinarLogo,
    link: "https://apkpure.com/id/sinar-pd3i/pd3i.org.sinar_kedokteran",
    desc: `SInAr is an information system that can be used to accommodate the mobility-based PD3I surveillance function.`,
    technologies: ["kotlin", "java", "android"],
  },
];

export const socmedList = [
  {
    id: 1,
    name: "LinkedIn",
    username: "Alfian Tryputranto",
    link: "https://www.linkedin.com/in/alfian-tryputranto-5ab8b3105",
    logo: FaLinkedin,
  },
  {
    id: 2,
    name: "Facebook",
    username: "Alfian Try Putranto",
    link: "https://www.facebook.com/fiantz",
    logo: FaFacebookSquare,
  },
  {
    id: 3,
    name: "Instagram",
    username: "alfiantry",
    link: "https://www.instagram.com/alfiantry",
    logo: FaInstagramSquare,
  },
  {
    id: 4,
    name: "Twitter",
    username: "alfian_try",
    link: "https://twitter.com/alfian_try",
    logo: FaTwitterSquare,
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
