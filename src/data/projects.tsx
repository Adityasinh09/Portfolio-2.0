import { ReactNode } from "react";
import { Database, Code, PenTool, LayoutTemplate, Terminal } from "lucide-react";

export type Project = {
  title: string;
  category: string;
  icon: ReactNode;
  description: string;
  tools: string[];
  insights: string[];
  github: string;
  demo: string;
  color: string;
  image?: string | string[];
};

export const projects: Project[] = [
  {
    title: "Retail Sales & Customer Behavior Analytics",
    category: "Data",
    icon: <Database className="w-10 h-10 text-foreground" />,
    description: "Decoding consumer trends to drive revenue growth through EDA and Python. I analyzed a retail transaction dataset to identify high-value customer segments and product performance.",
    tools: ["Python", "Pandas", "Seaborn", "EDA"],
    insights: [
      "Uncovered that 30–50 year-olds drive the highest average spend.",
      "Provided a clear target for marketing optimization to drive revenue growth.",
    ],
    github: "https://github.com/Adityasinh09/Retail-Sales-and-Customer-Behavior-Analysis",
    demo: "https://public.tableau.com/app/profile/adityasinh.chauhan/viz/RetailSalesAnalysisDashboard_17737033125250/Dashboard1",
    color: "from-neutral-200/50 to-neutral-500/10 dark:from-neutral-800/50 dark:to-neutral-500/10",
    image: "/retail-sales-dashboard.png",
  },
  {
    title: "Netflix Global Content Strategy & Growth Analytics",
    category: "Data",
    icon: <Database className="w-10 h-10 text-foreground" />,
    description: "Mapping the evolution of a streaming giant through data engineering and visual storytelling. Developed a Python-based cleaning pipeline and built a comprehensive Tableau Dashboard to visualize the 2014–2019 \"Content Explosion\" and regional production hubs.",
    tools: ["Python", "Tableau", "Data Engineering", "Pandas"],
    insights: [
      "Identified that the library remains 70% movie-heavy despite global shifts.",
      "Uncovered International Dramas acting as the primary engine for non-US growth, indicating a strategy of using cinema for market entries.",
    ],
    github: "https://github.com/Adityasinh09/Netflix-Content-Strategy-Analysis",
    demo: "https://public.tableau.com/app/profile/adityasinh.chauhan/viz/NetflixContentStrategyAnalysis_17737949998940/Dashboard1",
    color: "from-neutral-300/40 to-neutral-500/10 dark:from-neutral-700/40 dark:to-neutral-500/10",
    image: "/netflix-strategy-dashboard.png",
  },
  {
    title: "Fashion Hub: A Modern E-Commerce UI/UX Concept",
    category: "Design",
    icon: <PenTool className="w-10 h-10 text-foreground" />,
    description: "Blending bold aesthetics with functional design to create an immersive retail experience. Designed a responsive e-commerce platform focusing on conversion-driven design and intuitive user flows.",
    tools: ["Figma", "UI/UX", "Prototyping", "Responsive Design"],
    insights: [
      "Utilized a vibrant color palette and bold typography to create a visually striking interface.",
      "Ensured high functionality and intuitive user flows across multiple device formats.",
    ],
    github: "#",
    demo: "#",
    color: "from-neutral-200/50 to-neutral-400/20 dark:from-neutral-800/50 dark:to-neutral-600/20",
    image: ["/fashion-hub-design-1.png", "/fashion-hub-design-2.png"],
  },
  {
    title: "Dynamic Task Management Web App",
    category: "Development",
    icon: <Code className="w-10 h-10 text-foreground" />,
    description: "A sleek, persistent To-Do application built with vanilla JavaScript and Local Storage, focusing on a \"zero-loss\" user experience and modern glassmorphism UI.",
    tools: ["JavaScript", "Local Storage", "DOM Manipulation", "CSS Glassmorphism"],
    insights: [
      "Implemented localStorage API for dynamic data persistence and state management.",
      "Engineered input validation and vanilla JavaScript DOM manipulation for seamless real-time updates.",
    ],
    github: "#",
    demo: "#",
    color: "from-zinc-200/40 to-zinc-400/10 dark:from-zinc-800/40 dark:to-zinc-600/10",
    image: [
      "/task-app-1.png", 
      "/task-app-2.png", 
      "/task-app-3.png", 
      "/task-app-4.png"
    ],
  },
  {
    title: "Mobile To-Do App UI/UX Concept",
    category: "Design",
    icon: <PenTool className="w-10 h-10 text-foreground" />,
    description: "A minimalist, high-usability interface geared towards efficient task tracking. Designed a high-fidelity system prioritizing user interaction clarity.",
    tools: ["Figma", "Visual Hierarchy", "Color Theory", "Prototyping"],
    insights: [
      "Successfully transitioned from low-fidelity wireframes to a comprehensive high-fidelity design system.",
      "Optimized visual hierarchy to enhance task persistence and interaction clarity.",
    ],
    github: "#",
    demo: "#",
    color: "from-neutral-200/60 to-neutral-300/10 dark:from-neutral-800/60 dark:to-neutral-700/10",
    image: [
      "/mobile-todo-1.png",
      "/mobile-todo-2.png",
      "/mobile-todo-3.png",
      "/mobile-todo-4.png",
      "/mobile-todo-5.png"
    ],
  },
  {
    title: "WiFiScan | Wireless Diagnostic Tool",
    category: "Development",
    icon: <Terminal className="w-10 h-10 text-foreground" />,
    description: "Engineered a Python-based diagnostic utility featuring hardware interfacing and multi-module scanning to parse raw network data into human-readable basic scan reports.",
    tools: ["Python", "Scapy", "Socket Library", "Network Protocols"],
    insights: [
      "Built a modular architecture for packet capture, active host discovery, and port scanning.",
      "Engineered backend communication with PCIe adapters to retrieve and parse GUID and physical address data.",
    ],
    github: "https://drive.google.com/file/d/15_vbz90Y61v0KU_CjqPodfeQnR1TE6Cf/view?usp=sharing",
    demo: "#",
    color: "from-neutral-300/30 to-neutral-500/10 dark:from-neutral-700/30 dark:to-neutral-500/10",
    image: "/wifiscan-tool.png",
  },
  {
    title: "6G & Smart City IoT Framework | Academic Publication",
    category: "Research",
    icon: <Database className="w-10 h-10 text-foreground" />,
    description: "Peer-Reviewed Research published under Springer Nature Link addressing the \"6G-Enabled Smart Cities\" paradigm, focusing on bandwidth and AI integration in home automation frameworks.",
    tools: ["Internet Computing", "IoT", "6G Networking", "Embedded Systems"],
    insights: [
      "Published as a peer-reviewed conference paper (pp. 137–150), demonstrating rigorous academic validation.",
      "Conducted in-depth analysis on the evolution of IoT connectivity, contributing to cyber-physical systems research.",
    ],
    github: "#",
    demo: "#",
    color: "from-zinc-200/50 to-zinc-400/20 dark:from-zinc-800/50 dark:to-zinc-600/20",
    image: "/6g-research-paper.png",
  },
  {
    title: "Oasis Hospital Solution | UI/UX Design",
    category: "Design",
    icon: <LayoutTemplate className="w-10 h-10 text-foreground" />,
    description: "Designed a modular service grid, user-centric onboarding, and strategic CTA workflows. Leveraged custom illustrations to differentiate user types across the medical platform.",
    tools: ["Figma", "Visual Hierarchy", "Component Design", "Responsive Layouts"],
    insights: [
      "Created a custom card-based system allowing easy expansion for categories like Medical Tourism.",
      "Integrated social login onboarding to lower barriers for new policyholders and partners.",
      "Strategically placed 'Know More' and 'Login' CTAs to guide users toward key conversion points."
    ],
    github: "#",
    demo: "#",
    color: "from-neutral-200/40 to-neutral-400/10 dark:from-neutral-800/40 dark:to-neutral-600/10",
    image: "/oasis-hospital.png",
  },
  {
    title: "Vegetable Market App | UI/UX Design",
    category: "Design",
    icon: <PenTool className="w-10 h-10 text-foreground" />,
    description: "A comprehensive UI/UX design featuring component-driven product cards, an immersive onboarding experience, and engaging micro-interactions.",
    tools: ["Figma", "UI Design", "Prototyping", "Digital Branding"],
    insights: [
      "Created reusable product cards featuring strategic calls-to-action to increase conversion.",
      "Designed a 5-tab bottom navigation bar for instant access to critical app sections.",
      "Planned intuitive checkout banners and promotional sliders to maximize average order value.",
    ],
    github: "#",
    demo: "#",
    color: "from-zinc-300/40 to-zinc-500/10 dark:from-zinc-700/40 dark:to-zinc-500/10",
    image: [
      "/vegetable-market-1.png",
      "/vegetable-market-2.png",
      "/vegetable-market-3.png"
    ],
  },
];
