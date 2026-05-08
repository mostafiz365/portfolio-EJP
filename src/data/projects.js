export const projects = [
  {
    id: "digitools",
    title: "DigiTools – Digital Marketplace",
    category: "Full-Stack • Digital Commerce",
    desc: "A premium digital marketplace designed to empower creators. It features a curated collection of AI-powered software, design assets, and productivity tools with a focus on a seamless, mobile-first user experience.",
    img: "/assets/projects/digitools_final.png",
    live: "https://digitools-website.netlify.app",
    github: "https://github.com/mostafiz365/A6-DigiTools-Website",
    stack: ["React.js v19", "Tailwind CSS", "DaisyUI", "React Icons", "Vite", "React Toastify"],
    challenges: "Architecting a real-time dynamic cart system that synchronizes instantaneously across the navigation and product catalog was a primary technical hurdle. Ensuring high-performance animations for interactive pricing cards while maintaining a strict mobile-first adaptive layout required meticulous state management and CSS optimization.",
    improvements: "The roadmap includes integrating Firebase authentication for user-specific dashboards, implementing a multi-vendor module for independent creators, and adding a secure Stripe-powered payment ecosystem."
  },
  {
    id: "skillsphere",
    title: "SkillSphere – Online Learning",
    category: "EdTech • Next.js Platform",
    desc: "A sophisticated e-learning platform designed for skill-based mastery. It features a dynamic course catalog, secure authentication via Better Auth, and a fluid search system to help users navigate their learning journey with ease.",
    img: "/assets/projects/skillsphere_final.png",
    live: "https://skillsphere-website-nextjs.vercel.app",
    github: "https://github.com/mostafiz365/skillsphere-website-nextjs",
    stack: ["Next.js (App Router)", "Hero UI", "Better Auth", "Tailwind CSS", "Framer Motion", "React Toastify"],
    challenges: "Integrating a secure and seamless authentication flow using Better Auth while managing complex protected routes for dynamic course content was a major technical hurdle. Additionally, optimizing the responsive grid system for a heavy course catalog while maintaining a smooth user experience across all devices required meticulous performance tuning.",
    improvements: "The future roadmap includes implementing a real-time progress tracking dashboard for students, integrating a peer-to-peer discussion forum using WebSockets, and launching an automated certification system upon course completion."
  },
  {
    id: "friendpulse",
    title: "Friend Pulse – Relationship Manager",
    category: "Social • React 19 App",
    desc: "A modern relationship management platform designed to help users nurture their connections. It features smart contact tracking, interactive catch-up timelines, and insightful statistics to maintain meaningful relationships.",
    img: "/assets/projects/friendpulse_final.png",
    live: "https://keen-keeper-website-dusky.vercel.app",
    github: "https://github.com/mostafiz365/keen-keeper-website",
    stack: ["React 19", "Vite", "Tailwind CSS", "Recharts", "React Router", "Context API"],
    challenges: "Developing a dynamic status calculation engine that accurately tracks contact frequency relative to user-defined goals was a complex logical challenge. Additionally, integrating Recharts for real-time relationship insights while ensuring high performance on mobile devices required careful optimization of React's rendering lifecycle.",
    improvements: "Future updates will feature automated catch-up reminders via email/push notifications, an AI-powered 'Ice-Breaker' suggestion engine, and a dedicated mobile application for on-the-go relationship management."
  }
];
