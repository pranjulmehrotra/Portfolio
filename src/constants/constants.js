import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  amity,
  threejs,
  dada, 
} from "../assets";

import DockDevelopers from "../assets/company/DockDevelopers.png";

import RLB from "../assets/company/RLB.png";

import CIS from "../assets/company/CIS.png";

import TweetSphere from "../assets/TweetSphere.png";

import Retailix from "../assets/Retailix.png";

import ConvoCraft from "../assets/ConvoCraft.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI / ML Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "UG Student B.Tech CSE",
    company_name: "Amity University",
    icon: amity,
    iconBg: "#383E56",
    date: "March 2020 - August 2024",
    points: [
    "Studying and applying principles of computer science and engineering at Amity University.",
    "Engaging in coursework focused on web development, including React.js and related technologies.",
    "Collaborating with peers and professors on projects to enhance understanding and practical skills.",
    "Participating in extracurricular activities to broaden knowledge and experience in the field.",
    ],
    },
    {
      title: "Jr.FullStack Developer",
      company_name: "Dock Developers",
      icon:DockDevelopers,
      iconBg: "#E6DEDD",
      date: "March 2024 - Present",
      points: [
       "Developed and deployed full-stack applications utilizing the MERN stack.",
          "Engineered dynamic and responsive user interfaces leveraging React.",
          "Managed server-side logic and API development with Node.js and Express.",
          "Handled data persistence, storage, and retrieval operations using MongoDB.",
          "Integrated Firebase to provide authentication services and real-time database capabilities.",
          "Enhanced user experience by implementing interactive features and QR code generation.",
          "Utilized Git for version control and source code management.",
          "Employed Agile methodologies for streamlined development."
        ],
    },
  
  {
    title: "Intern-Full-Stack Developer",
    company_name: "Dock Developers",
    icon: DockDevelopers,
    iconBg: "#E6DEDD",
    date: "December 2023 - May 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "HighSchool",
    company_name: "Rani Laxmi Bai School",
    icon: RLB,
    iconBg: "#383E56",
    date: " 29 - May - 2018",
    points: [
      "Developed a strong foundation in mathematics and computer science, sparking an interest in programming.",
      "Participated in coding competitions, gaining hands-on experience in problem-solving.",
      "Engaged in extracurricular activities, including science fairs and technology clubs, to explore emerging technologies.",
      "Demonstrated leadership skills by organizing and leading academic and technical events.",
      "Excelled in academics, particularly in STEM subjects, laying the groundwork for a career in technology.",
      ]
  },
  {
    title: "Intermediate",
    company_name: "City International School",
    icon: CIS,
    iconBg: "#E6DEDD",
    date: "13 - July - 2020",
    points: [
      "Developed a strong foundation in mathematics and computer science, sparking an interest in programming.",
      "Participated in coding competitions, gaining hands-on experience in problem-solving.",
      "Engaged in extracurricular activities, including science fairs and technology clubs, to explore emerging technologies.",
      "Demonstrated leadership skills by organizing and leading academic and technical events.",
      "Excelled in academics, particularly in STEM subjects, laying the groundwork for a career in technology.",
      ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as my blogs, but Pranjul proved me wrong.",
    name: "Vijaishree",
    designation: "Past",
    company: "client",
    image: "https://thehealgrowtribe.com/wp-content/uploads/2023/08/IMG_20230824_173034.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their client's vision like Pranjul does.",
    name: "Shivam Srivastava",
    designation: "Past",
    company: "client",
    image: dada,
  },
  {
    testimonial:
      "Seen him developing sites for a long time. He is really passionate and creative about it.",
    name: "Kajal Chandra",
    designation: "Past",
    company: "client",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TweetSphere",
    description:
      "A MERN stack social media app with posting, liking, commenting, and following features. Includes AI-based sentiment analysis for tweets, user profile management, and notifications. Developed entirely from scratch.",
    tags: [
      {
        name: "MERN-stack",
        color: "blue-text-gradient",
      },
      {
        name: "api-Creation",
        color: "green-text-gradient",
      },
      {
        name: "fully-func",
        color: "pink-text-gradient",
      },
    ],
    image: TweetSphere ,
    source_code_link: "https://github.com/pranjulmehrotra/Tweet-Sphere",
  },
  {
    name: "Retailix",
    description:
      "Retailix is a sophisticated E-commerce platform engineered to transform the digital shopping landscape. Built upon the pillars of HTML, CSS, and JavaScript, it features an elegantly designed user interface with captivating product sliders and efficient cart functionality. The backend architecture of Retailix ensures dynamic content delivery and robust database interactions, offering a complete and immersive shopping experience. Retailix stands as a beacon of online retail innovation, where every interaction is designed for shopper satisfaction.",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "E-comerce",
        color: "green-text-gradient",
      },
      {
        name: "MERN-stack",
        color: "pink-text-gradient",
      },
    ],
    image:Retailix ,
    source_code_link: "https://github.com/pranjulmehrotra/Retailix-",
  },
  {
    name: "Convocraft",
    description:
      "Discover the transformative power of ConvoCraft, where cutting-edge AI meets unparalleled user engagement. This state-of-the-art chatbot, engineered with TypeScript and MongoDB, leverages the ChatGPT API to offer fluid, intelligent conversations that resonate with users day and night. With responsive design and robust data handling, it's an intuitive solution that evolves with every interaction. Revolutionize your digital presence and set a new standard in customer service with ConvoCraft.",
    tags: [
      {
        name: "AI-CHATBOT",
        color: "blue-text-gradient",
      },
      {
        name: "AI-CHATBOT",
        color: "green-text-gradient",
      },
      {
        name: "MERN-stack",
        color: "pink-text-gradient",
      },
    ],
    image:ConvoCraft ,
    source_code_link: "https://github.com/pranjulmehrotra/",
  },
];

export { services, technologies, experiences, testimonials, projects };