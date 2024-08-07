import MajooLogo from "../assets/images/majoo.svg";
import BisabebasLogo from "../assets/images/bisabebas.svg";
import TauberesLogo from "../assets/images/tauberes.png";
import WideboardLogo from "../assets/images/wb.png";
import UgmLogo from "../assets/images/ugm.png";
import SipBmnLogo from "../assets/images/sipbmn.png";
import OosahaLogo from "../assets/images/oosaha.png";
import SinarLogo from "../assets/images/sinar.png";
import GmadsaLogo from "../assets/images/gmadsa.png";
import DigasLogo from "../assets/images/digas-logo-square.webp";
import RetLogo from "../assets/images/retlogo.png";
import wtfLogo from "../assets/images/wtf.png";
import leadlineLogo from "../assets/images/leadline.webp";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

export const companies = [
  {
    title: "PT Majoo Teknologi Indonesia (Majoo)",
    alt: "MJ image",
    role: "ReactJS Developer",
    skills: ["html", "css", "typescript", "javascript", "reactjs"],
    period: "2022 - Present",
    logo: MajooLogo,
  },
  {
    title: "PT. Bisabebas Ekosistem Terpercaya (Bisabebas)",
    alt: "BB image",
    role: "ReactJS Developer",
    skills: ["html", "css", "typescript", "javascript", "reactjs"],
    period: "2021 - 2022",
    logo: BisabebasLogo,
  },
  {
    title: "PT. Ruang Inovasi Nusantara (Wideboard)",
    alt: "TB image",
    role: "Frontend Developer",
    skills: ["java", "kotlin", "android", "javascript", "reactjs"],
    period: "2017-2020",
    logo: WideboardLogo,
  },
  {
    title: "PT. Garuda Tauberes Indonesia (Tauberes)",
    alt: "TB image",
    role: "Frontend Developer",
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
    title: "Majoo CMS Dashboard",
    logo: MajooLogo,
    link: "https://dashboard.majoo.id/",
    desc: `Majoo dashboard is an all-in-one dashboard that helps users grow their business by allowing them to track all the most important KPIs`,
    technologies: ["typescript", "javascript", "reactjs"],
  },
  {
    id: 2,
    title: "Majoo UI Design System",
    logo: MajooLogo,
    link: "https://master--6225618030d889003a563b61.chromatic.com/",
    desc: `Majoo UI is an implementation of Majoo Design System using the React framework.  It contains foundations, voice and tone guidelines, component standards, and other guidelines that systematically improve quality, timeliness, and consistency to our product.`,
    technologies: [
      "reactjs",
      "typescript",
      "javascript",
      "cypress",
      "monorepo",
      "nx",
    ],
  },
  {
    id: 3,
    title: "WTF",
    logo: wtfLogo,
    link: "https://itswtf.wtf/",
    desc: `WTF is a web based game platform`,
    technologies: ["typescript", "reactjs"],
  },
  {
    id: 4,
    title: "Bisabebas App",
    logo: BisabebasLogo,
    link: "https://app.bisabebas.com/",
    desc: `Bisabebas is a distribution network platform and business financing as well as an ecosystem to build a strong, integrated, and efficient distribution network.`,
    technologies: ["typescript", "reactjs", "docker"],
  },
  {
    id: 5,
    title: "Bisabebas Landing Page",
    link: "https://bisabebas.com/",
    logo: BisabebasLogo,
    desc: `Bisabebas is a distribution network platform and business financing as well as an ecosystem to build a strong, integrated, and efficient distribution network.`,
    technologies: ["typescript", "nextjs", "docker"],
  },
  {
    id: 6,
    title: "Sistem Informasi Penatausahaan BMN Kementan RI",
    logo: SipBmnLogo,
    desc: `Sistem Informasi Penatausahaan Badan Milik Negara is a desktop app purposed for helping The Equipment Unit of Dirjen Tanaman Pangan 
    Kementerian Pertanian RI to do inventory tasks.`,
    technologies: ["html", "css", "typescript", "reactjs", "electronjs"],
  },
  {
    id: 7,
    title: "Digas",
    link: "https://digas.io/",
    logo: DigasLogo,
    desc: `DIGAS is a offline to online Web3 technology enabler company from Indonesia that specializes in buying and selling digital assets.`,
    technologies: ["javascript", "nextjs"],
  },
  {
    id: 8,
    title: "RET Blockchain",
    link: "https://retblockchain.com/",
    logo: RetLogo,
    desc: `RET is a pioneering blockchain-based company in Indonesia that's dedicated to addressing the intricate challenges of the real estate industry.`,
    technologies: ["javascript", "nextjs"],
    style: {
      filter:
        "invert(22%) sepia(69%) saturate(3969%) hue-rotate(345deg) brightness(88%) contrast(105%)",
    },
  },
];

export const mobileProjectsList = [
  {
    id: 1,
    title: "Leadline App",
    logo: leadlineLogo,
    link: "https://play.google.com/store/apps/details?id=id.xquare.app",
    desc: `Leadline is a cutting-edge platform designed to revolutionize the integration of digital advertising across various platforms.`,
    technologies: ["typescript", "react-native"],
  },
  {
    id: 2,
    title: "Wideboard App",
    logo: WideboardLogo,
    link: "https://play.google.com/store/apps/details?id=me.wideboard",
    desc: `Wideboard is a team messenger that helps you connect and unifies your entire team's communications, making your collaboration a lot simple and better under your fingertips.`,
    technologies: ["kotlin", "java", "android"],
  },
  {
    id: 3,
    title: "Oosaha App",
    logo: OosahaLogo,
    link: "https://play.google.com/store/apps/details?id=com.oosaha",
    desc: `Oosaha is a super app to support the productivity of small and medium enterprise (SME) management in Indonesia.`,
    technologies: ["kotlin", "java", "android"],
  },
  {
    id: 4,
    title: "Gmadsa App",
    logo: GmadsaLogo,
    desc: `Gmadsa is an android app used for data collection of research subjects in the medical faculty of UGM.`,
    technologies: ["kotlin", "java", "android"],
  },
  {
    id: 5,
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
