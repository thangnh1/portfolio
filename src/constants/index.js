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
  techvify,
  pests,
  tiki,
  health,
  nobisoft,
  unigap,
  mb,
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
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "DE Coach",
    icon: mobile,
  },
  {
    title: "Data Engineer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  //Python, Scala, SQL, GCP, AWS, Hadoop, Spark, Airflow, Kafka, Terraform, Docker, Linux, Jenkins, Oracle, Tableau, GitHub, Grafana

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
    title: "Data Engineer Coach",
    company_name: "UniGap",
    icon: unigap,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Present",
    points: [
      "Working as a Software Engineer Coach, mentoring students and junior engineers in programming and software development.",
      "Assisting in designing tailored learning paths, covering topics like big data, backend development, and cloud technologies.",
      "Overseeing small-scale projects to ensure trainees grasp practical implementation techniques.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Nobisoft",
    icon: nobisoft,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Mar 2025",
    points: [
      "Serving as a Backend Engineer, responsible for developing and maintaining backend systems, ensuring performance and stability.",
      "Designing and managing relational databases to optimize query speed and data reliability.",
      "Deploying and managing applications on cloud platforms like AWS and GCP.",
    ],
  },
  {
    title: "Data Engineer",
    company_name: "MB Bank",
    icon: mb,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Sep 2023",
    points: [
      "Acted as a Data Engineer, focusing on building and operating large-scale data pipelines for digital banking services.",
      "Designed data models to support business analytics and optimize system performance.",
      "Managed and upgraded enterprise databases to ensure security and compliance with banking regulations.",
    ],
  },
  {
    title: "NodeJS Developer",
    company_name: "Techvify",
    icon: techvify,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Nov 2021",
    points: [
      "Held the position of Node.js Developer, developing backend applications using Node.js and popular frameworks like Express.js.",
      "Contributed to optimizing API performance by improving server-side processing workflows.",
      "Participated in Agile development processes, collaborating with team members to plan and deliver new features.",
    ],
  },
  {
    title: "SAP ABAP Developer",
    company_name: "FPT Infomation System",
    icon: fpt,
    iconBg: "#E6DEDD",
    date: "Apr 2021 - Aug 2021",
    points: [
      "Worked as an ABAP Developer, responsible for developing and customizing SAP modules per client requirements.",
      "Created dynamic reports within SAP systems, enhancing internal data management workflows.",
      "Conducted testing and quality assurance for SAP modules before official deployment.",
    ],
  },
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
    // name: "Healthcare Monitoring Data Pipeline",
    name: "Healthcare Monitoring",
    description:
      "This project proposes a reliable data pipeline to collect, store, and analyze real-time data streams from hospital IoT devices.",
    tags: [
      {
        name: "aws",
        color: "blue-text-gradient",
      },
      {
        name: "kafka",
        color: "pink-text-gradient",
      },
      {
        name: "spark",
        color: "orange-text-gradient",
      },
      {
        name: "hive",
        color: "green-text-gradient",
      },
      {
        name: "HBase",
        color: "blue-text-gradient",
      },
      {
        name: "awssns",
        color: "pink-text-gradient",
      },
    ],
    image: health,
    source_code_link:
      "https://github.com/thangnh1/Healthcare-Monitoring-Data-Pipeline",
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
