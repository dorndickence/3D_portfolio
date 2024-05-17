import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    /*{
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    */
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    /*{
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    */
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    /*
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    */
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Feb 2022 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/dorndickence',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/dorn-dickence-4449',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Notes app',
        description: 'Developed a web application notes app that stores users data on ocal storage even when the browser is refreshed..',
        link: 'https://github.com/dorndickence',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Worker AI',
        description: 'Developed an AI that leverages work by mimicking human emotions and Natural language .',
        link: 'https://github.com/dorndickence',
    },
    
    
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Random password generator',
        description: ' Made a random password genearte that generates string passwords based on the shmbol ,numbers and letters.',
        link: 'https://github.com/dorndickence',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Smart irrigation with chatgpt',
        description: 'Designed a robotic irrigation machine that automatically waters and monitors the farm,by giving recommendations based on the historical data.',
        link: 'https://github.com/dorndickence',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Speech to text app',
        description: 'Built an application where uers texts can be converted to speech.',
        link: 'https://github.com/dorndickence',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'IPhone calculator prototype',
        description: 'Developed a web application for an iphone calculator .',
        link: 'https://github.com/dorndickence',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Smart calculator with simple JavaScript ',
        description: 'Used little piece of JavaScript to bring calculator to real world.',
        link: 'https://github.com/dorndickence',
    }
];