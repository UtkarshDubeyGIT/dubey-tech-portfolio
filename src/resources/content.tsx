import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Utkarsh",
  lastName: "Dubey",
  name: `Utkarsh Dubey`,
  role: "Full Stack Developer | ML Engineer",
  avatar: "/images/avatar.png",
  email: "utkarshd9990@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/utkarshdubeygit",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/dubey9990/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between life and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Utkarsh Dubey</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Utkarsh Dubey, a Full Stack Developer <br /> I design and build end-to-end
      software systems with real-world impact.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Selene is a Jakarta-based design engineer with a passion for transforming complex challenges
        into simple, elegant design solutions. Her work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Netaji Subhas University of Technology, New Delhi 2027",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Full Stack Development",
        description: (
          <>Building modern web applications with the MERN stack, Next.js, and TypeScript for scalable, performant solutions.</>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
        ],
        images: [],
      },
      {
        title: "Frontend & UI Development",
        description: (
          <>Crafting responsive, accessible interfaces with React 19, Tailwind CSS, and design systems for exceptional user experiences.</>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwindcss",
          },
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        images: [],
      },
      {
        title: "Backend & Database",
        description: (
          <>Developing robust APIs and data layers with Node.js, Express, MongoDB, and PostgreSQL for enterprise-grade applications.</>
        ),
        tags: [
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "Express",
            icon: "express",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
        ],
        images: [],
      },
      {
        title: "Machine Learning & Data Science",
        description: (
          <>Building ML models for predictive analytics and explainable AI using Python, scikit-learn, and data visualization libraries.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Jupyter",
            icon: "jupyter",
          },
          {
            name: "Pandas",
            icon: "pandas",
          },
        ],
        images: [],
      },
      {
        title: "Cloud & DevOps",
        description: (
          <>Implementing containerization and cloud infrastructure with Docker and AWS for scalable, production-ready deployments.</>
        ),
        tags: [
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "AWS",
            icon: "aws",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about Tech and Growth...",
  description: `Read what ${person.firstName} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Professional and Personal projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
