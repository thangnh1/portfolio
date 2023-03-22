import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  python,
  bash,
  linux,
  tensorflow,
  mysql,
  nodejs,
  mongodb,
  github,
  gg,
  docker,
  fpt,
  akb,
  techvify,
  pests,
  tiki,
  bash_,
  bres,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Engineer",
    icon: web,
  },
  {
    title: "Database Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Bash Script",
    icon: bash,
  },
  {
    name: "Linux OS",
    icon: linux,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Google Cloud",
    icon: gg,
  },
  {
    name: "Github",
    icon: github,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "SAP ABAP Developer",
    company_name: "FPT Infomation System",
    icon: fpt,
    iconBg: "#E6DEDD",
    date: "Apr 2021 - Aug 2021",
    points: [
      "Learn business modules SD, MM, WM to understand the workflow in the modules, helping to use the tables in the SAP ERP system correctly.",
      "Customize the system according to customer requirements so that customers can use filters to search for the right data from the system interface, increasing consistency in the customer system.",
      "Generate RTF templates to export data based on customer filters, saving report generation time.",
    ],
  },
  {
    title: "NodeJS Developer",
    company_name: "Techvify",
    icon: techvify,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Dec 2021",
    points: [
      "Join a training project on NestJS Framework, TypeScript and mySQL to better understand the technology used, improve technical skills, communication skills and teamwork skills.",
      "Participate in the development of internal products of the company so that members of the company can better use the system, bring about effective administration as well as interaction between people.",
    ],
  },
  {
    title: "NodeJS Developer",
    company_name: "AKB Software",
    icon: akb,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Jun 2022",
    points: [
      "Join a training project on ExpressJS Framework, JavaScript and MongoDB to better understand the technology used, improve technical skills, communication skills and teamwork skills.",
      "Our team together built a website called ThansohocAKB with the purpose bring users closer to Numerology, I myself built the function of login, user verification and refresh token to reduce virtual users for the application.",
    ],
  },
  // {
  //   title: "NodeJS Developer",
  //   company_name: "AKB Software",
  //   icon: akb,
  //   iconBg: "#383E56",
  //   date: "Mar 2022 - Jun 2022",
  //   points: [
  //     "Join a training project on ExpressJS Framework, JavaScript and MongoDB to better understand the technology used, improve technical skills, communication skills and teamwork skills.",
  //     "Our team together built a website called ThansohocAKB with the purpose bring users closer to Numerology, I myself built the function of login, user verification and refresh token to reduce virtual users for the application.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Phan Quoc Dai",
    designation: "PO",
    company: "YODY",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Pests Classification",
    description:
      "Web-based platform that allows users to identify pests and diseases based on photos use VGG16, Resnet50, Inception v3.",
    tags: [
      {
        name: "deeplearning",
        color: "blue-text-gradient",
      },
      {
        name: "cnn",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
      {
        name: "vgg16",
        color: "orange-text-gradient",
      },
      {
        name: "resnet50",
        color: "blue-text-gradient",
      },
      {
        name: "inceptionv3",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: pests,
    source_code_link: "https://github.com/thangnh1/PestClassification/",
  },
  {
    name: "Crawl Product of Tiki",
    description:
      "Crawl all product on Tiki and insert to MongoDB, product statistics by category, download all images by product.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "crawler",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "beautifulsoup4",
        color: "orange-text-gradient",
      },
    ],
    image: tiki,
    source_code_link: "https://github.com/thangnh1/Crawl_Tiki/",
  },
  {
    name: "Analysis Text File",
    description:
      "Exploratory Data Analysis (EDA) Text file in Linux server non-Python used Bash Script Command.",
    tags: [
      {
        name: "linux",
        color: "blue-text-gradient",
      },
      {
        name: "bashscript",
        color: "pink-text-gradient",
      },
      {
        name: "exporatorydataanalysis",
        color: "orange-text-gradient",
      },
    ],
    image: bash_,
    source_code_link: "https://github.com/thangnh1/Analysis_with_Bash",
  },
  // {
  //   name: "Bee Restaurant",
  //   description:
  //     "Bee Restaurant management web-based platform built with PHP Core, mySQL, VnPay integration.",
  //   tags: [
  //     {
  //       name: "PHPCore",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mySQL",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "boostrap",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "VNPay",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "PHPMailer",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: bres,
  //   source_code_link: "https://github.com/thangnh1/restaurant/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
