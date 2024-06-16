import { meta, shopify, starbucks, tesla, kickdrum } from "../assets/images";
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
    typescript,
    sort,
    IBE,
    Chatty
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
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
    {
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
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
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
        title: "Software Developer Intern",
        company_name: "Kickdrum",
        icon: kickdrum,
        iconBg: "#E4E3E5",
        date: "January 2023 - June 2023",
        points: [
            "Completed a comprehensive 3-month boot-camp training program focused on Backend Development with Java Spring Boot, Frontend Development with React & TypeScript, and Cloud Services using AWS.",
            "Developed a strong understanding of Software Design Principles and applied them to create a Multi Tenant Booking Engine.",
            "Became proficient in writing clean and modular code following industry best practices.",
        ],
    },
    {
        title: "Software Developer",
        company_name: "Kickdrum",
        icon: kickdrum,
        iconBg: "#E4E3E5",
        date: "July 2023 - Present",
        points: [
            "Developed and enhanced the PE Library system, a critical platform for securely managing sensitive documents related to Private Equity diligence work.",
            "Transformed Backend infrastructure with a serverless framework for automated management of Lambda functions, VPC, API Gateway, and Cognito setup.",
            "Enhanced system security from grade F to A+ with a score of 105/100 on Mozilla Observatory, earning extra marks for additional security measures.",
            "Spearheaded the frontend development using React.js & SASS to create a new, user-friendly UI interface, while modularizing the whole codebase for scalability.",
        ],
    },
    // {
    //     title: "React.js Developer",
    //     company_name: "Starbucks",
    //     icon: starbucks,
    //     iconBg: "#accbe1",
    //     date: "March 2020 - April 2021",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#fbc3bc",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
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
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: IBE,
        theme: 'btn-back-blue',
        name: 'Multi Tenant Booking Engine',
        description: [
            'Designed and developed a scalable, configurable, and secure hotel booking engine using Java Spring Boot, React, and PostgreSQL.', 
            'Leveraged AWS for deployment, security, and monitoring.',
            'Integrated GraphQL with Spring Boot for efficient data retrieval, achieved 95% code coverage with JUnit tests, and implemented CI/CD with AWS CodePipeline.',
            'Enhanced user experience with personalized room suggestions.'
        ],
        link: 'https://video.drift.com/v/ab7H21XE11W/',
        linkType: 'Demo',
    },
    {
        iconUrl: Chatty,
        theme: 'btn-back-green',
        name: 'ChatStream',
        description: [
            'I developed a real-time chat application using HTML, JavaScript, SASS, and Socket.io. The application is designed to enhance communication among users by offering two main sections:',

            '📝**1. Posts Section**',
            'In this section, users can create posts that are visible to all logged-in users. It serves as a bulletin board where users can share updates, announcements, or any information they want to broadcast to the community. The interface is user-friendly, allowing users to easily add new posts with titles and descriptions.',

            '👥**2. Currently Online Section**',
            'This section provides a list of all online users, allowing for real-time interaction. Users can select any online user to view the chat history and engage in live conversations. The chat interface is designed to be intuitive, displaying exchanged messages clearly and supporting seamless live chatting.',

            '✨**Key Features:**',
            '🚀Real-time Updates: Leveraging Socket.io, the application ensures that all posts and chats are updated in real-time without the need for page refreshes.',
            '👌User-friendly Interface: The interface is clean and simple, with easy navigation between the Posts and Currently Online sections.',
            '💬Live Chat: Users can engage in live conversations with other online users, with messages appearing instantly.',
            '📱Responsive Design: The application is designed to work well on both desktop and mobile devices.',

            'This project demonstrates my ability to build interactive, real-time web applications with a focus on user experience and functionality. It showcases my skills in front-end development, real-time communication using WebSockets, and creating responsive interfaces.'
        ],
        link: 'https://drive.google.com/file/d/1Y6F7L6o6lZcJxSIqkokZq_G0G4Hf6wlD/view?usp=sharing',
        linkType: 'Demo',
    },
    {
        iconUrl: sort,
        theme: 'btn-back-black',
        name: 'Sorting Visualizer',
        description: [
            'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.'
        ],
        link: 'https://tushhkashyap.github.io/Sorting-Visualizer/',
        linkType: 'Live Link',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: [
            'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.'
        ],
        link: 'https://github.com/adrianhajdin/pricewise',
        linkType: 'Live Link',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: [
            'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.'
        ],
        link: 'https://github.com/adrianhajdin/threads',
        linkType: 'Live Link',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: [
            'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.'
        ],
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
        linkType: 'Live Link',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: [
            'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.'
        ],
        link: 'https://github.com/adrianhajdin/social_media_app',
        linkType: 'Live Link',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: [
            'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.'
        ],
        link: 'https://github.com/adrianhajdin/projects_realestate',
        linkType: 'Live Link',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: [
            'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.'
        ],
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
        linkType: 'Live Link',
    }
];