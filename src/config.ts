export interface Project {
    id: number;
    title: string;
    category: string;
    technologies: string;
    image: string;
    github?: string;
    live?: string;
}

export const config = {
    developer: {
        name: "Rupom",
        fullName: "MD Robayet Hassan Rupom",
        title: "Full Stack Developer & Creative Designer",
        description: "Full-stack builder creating digital experiences with high visual polish, robust architecture, and thoughtful human interaction. Turning complex workflows into elegant web apps."
    },
    social: {
        github: "rupom787",
        email: "rupomhossain000@gmail.com",
        phone: "01714858480",
        location: "Bangladesh"
    },
    about: {
        title: "About Me",
        description: "Full-stack builder creating digital experiences that respect humans and scale with clarity. Accessibility and clean engineering are my core principles. I specialize in building modern, interactive web applications with React, TypeScript, Three.js, and robust backend architectures."
    },
    experiences: [
        {
            position: "Frontend Developer & Team Leader",
            company: "Humanova Trust Networks",
            period: "2025 - Present",
            location: "Remote",
            description: "Leading frontend development of multi-tenant enterprise platforms, integrating AI pipelines, real-time analytics, and high-performance WebGL animations.",
            responsibilities: [
                "Architecting modular component design systems using React, Vite, and TailwindCSS",
                "Implementing complex interactive dashboards, Kanban workflows, and data visualizations",
                "Optimizing performance, bundle splitting, and client-side caching for enterprise SaaS scale",
                "Collaborating closely with backend and AI engineers to deliver responsive, seamless workflows"
            ],
            technologies: ["React", "TypeScript", "TailwindCSS", "Vite", "Three.js", "Zustand"]
        },
        {
            position: "Full Stack Developer",
            company: "Tekisky / Digital Projects",
            period: "2023 - 2025",
            location: "Remote",
            description: "Engineered full-stack applications with modern UI/UX and scalable backend microservices.",
            responsibilities: [
                "Developed responsive user interfaces and full-stack REST API integrations",
                "Designed database schemas and authentication workflows",
                "Implemented smooth animation systems and interactive UI modules"
            ],
            technologies: ["React", "Node.js", "MongoDB", "Express", "REST APIs", "JavaScript"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Humanova — AI Trust & Hallucination Platform",
            category: "Full Stack SaaS / AI Governance",
            technologies: "React 19, TypeScript, Vite, TailwindCSS, Laravel 12, FastAPI, Docker",
            image: "/images/humanova.png",
            github: "https://github.com/rupom787/humanova",
            live: "https://humanova.vercel.app"
        },
        {
            id: 2,
            title: "Research Hub — Proposal & Workflow Platform",
            category: "Enterprise Full Stack",
            technologies: "React 18, TypeScript, Vite, TailwindCSS, shadcn/ui, Zustand, Recharts, Laravel",
            image: "/images/project-2.webp",
            github: "https://github.com/rupom787/research-hub-ui",
            live: "https://research-hub-ui.vercel.app"
        },
        {
            id: 3,
            title: "Interactive 3D Developer Portfolio",
            category: "3D & Creative Web Experience",
            technologies: "React 18, Three.js, @react-three/fiber, @react-three/cannon, GSAP, Lenis Smooth Scroll",
            image: "/images/project-3.webp",
            github: "https://github.com/rupom787/rupom-portfolio",
            live: "https://rupom-portfolio.vercel.app"
        },
        {
            id: 4,
            title: "Cloud Infrastructure & Microservices Hub",
            category: "DevOps & Backend Infrastructure",
            technologies: "Docker, Kubernetes, Redis, MySQL, Node.js, RESTful Architecture",
            image: "/images/project-4.webp"
        },
        {
            id: 5,
            title: "Neural Network & AI Pipeline Visualizer",
            category: "Machine Learning / Data Viz",
            technologies: "Python, TensorFlow, React, FastAPI, D3.js, WebGL",
            image: "/images/project-5.webp"
        }
    ] as Project[],
    contact: {
        email: "rupomhossain000@gmail.com",
        phone: "01714858480",
        github: "https://github.com/rupom787",
        linkedin: "https://www.linkedin.com/in/rupom-hossain",
        twitter: "https://x.com/rupom787",
        instagram: "https://www.instagram.com/rupom787"
    },
    skills: {
        develop: {
            title: "DEVELOP",
            description: "Full-stack development with modern web technologies",
            details: "Building scalable web applications using React, Node.js, and cutting-edge frameworks. Specializing in creating responsive, performant, and accessible user interfaces.",
            tools: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "Framer Motion", "Three.js"]
        },
        design: {
            title: "DESIGN",
            description: "UI/UX design and modern web interfaces",
            details: "Creating beautiful and intuitive user experiences with focus on accessibility and user-centered design principles.",
            tools: ["UI Design", "UX Design", "Figma", "Photoshop", "Motion Design", "Responsive Design", "Accessibility", "Prototyping"]
        }
    }
};
