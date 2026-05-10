"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Code2, Figma, Smartphone, Globe, Layers, Layout, LayoutDashboard } from "lucide-react";
import { FaBehance } from "react-icons/fa";
import Image from "next/image";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    techStack: { name: string; icon: any }[];
    image: string; // Placeholder color or image path
    github?: string;
    demo?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Salon Management System",
        category: "Web Projects",
        description: "Developed with MERN Stack, Tailwind CSS, and Postman this group project delivers a robust solution.",
        techStack: [{ name: "MERN", icon: Code2 }, { name: "CSS", icon: Layout }],
        image: "/1.jpg",
        github: "https://github.com/SenuRanasinghe/ITP",
        demo: "https://github.com/SenuRanasinghe/ITP"
    },
    {
        id: 2,
        title: "Task Manager App",
        category: "Mobile Projects",
        description: "Developed using Kotlin Language in Android Studio.This app helps to Stay focused and accomplish more with our task manager app.",
        techStack: [{ name: "Kotlin", icon: Smartphone }, { name: "Expo", icon: Code2 }],
        image: "/2.jpeg",
        github: "https://github.com/SenuRanasinghe/Task-Manager-App-Kotlin",
        demo: "https://github.com/SenuRanasinghe/Task-Manager-App-Kotlin"
    },
    
    {
        id: 3,
        title: "To-Do App",
        category: "Mobile Projects",
        description: "A versatile to-do list application developed using Kotlin. It helps users organize tasksefficiently with features for adding, editing, and deleting tasks.",
        techStack: [{ name: "Kotlin", icon: Smartphone }, { name: "Expo", icon: Code2 }],
        image: "/4.jpg",
        github: "https://github.com/SenuRanasinghe/ToDo-App",
        demo: "https://github.com/SenuRanasinghe/ToDo-App"
    },
    {
        id: 4,
        title: "Hospital Management System",
        category: "Web Projects",
        description: "A hospital management system using the MERN Stack is a web application designed to streamline and automate hospital operations, including patient management, appointment scheduling.",
        techStack: [{ name: "MERN", icon: Code2 }, { name: "Tailwind CSS", icon: Layout }],
        image: "/6.jpg",
        github: "https://github.com/SenuRanasinghe/MERN-Stack-Hospital-Management-System",
        demo: "https://github.com/SenuRanasinghe/MERN-Stack-Hospital-Management-System"
    },
    {
        id: 5,
        title: "Math Quiz Game",
        category: "Mobile Projects",
        description: "A math quiz game developed in Kotlin is an interactive mobile application designed to challenge and improve users' mathematical skills through various levels of difficulty.",
        techStack: [{ name: "Kotlin", icon: Smartphone }, { name: "Expo", icon: Code2 }],
        image: "/7.avif",
        github: "https://github.com/SenuRanasinghe/Maths-Quiz-Game-Multi",
        demo: "https://github.com/SenuRanasinghe/Maths-Quiz-Game-Multi"

    },
    {
        id: 6,
        title: "Airline Reservation System",
        category: "Web Projects",
        description: "An airline reservation system using HTML, CSS, JavaScript, and PHP is a web-based platform that enables users to search for flights, book tickets, and manage reservations online.",
        techStack: [{ name: "HTML", icon: Code2 }, { name: "CSS", icon: Code2 }, { name: "JavaScript", icon: Code2 }, { name: "PHP", icon: Code2 }],
        image: "/8.png",
        github: "https://github.com/SenuRanasinghe/IWT",
        demo: "https://github.com/SenuRanasinghe/IWT"

    },
    {
        id: 7,
        title: "Apple Clone Website",
        category: "Web Projects",
        description: "A replica of the Apple website using HTML and CSS aims to mimic the sleek design, intuitive navigation, and visual appeal of the original Apple site.",
        techStack:  [{ name: "HTML", icon: Code2 }, { name: "CSS", icon: Code2 }, { name: "JavaScript", icon: Code2 }],
        image: "/9.webp",
        github: "https://github.com/SenuRanasinghe/Apple",
        demo: "https://github.com/SenuRanasinghe/Apple"

    },
    {
        id: 8,
        title: "Admin Dashboard Web ",
        category: "Web Projects",
        description: "A modern admin dashboard web application built with React and Tailwind CSS. It features a sleek design, responsive layout, and interactive components to manage data and visualize key metrics effectively.",
        techStack: [{ name: "React", icon: Code2 }, { name: "Tailwind CSS", icon: Layers }],
        image: "/Admin-Dashboard-UI.jpeg",
        github: "https://github.com/SenuRanasinghe/Admin-Dashboard-reactjs",
        demo: "https://github.com/SenuRanasinghe/Admin-Dashboard-reactjs"

    },
    {
        id: 9,
        title: "Book Heaven – Online Reading Books Platform",
        category: "UI/UX Design",
        description: "Designed a modern online book reading platform with multiple book categories, easy navigation, and a user-friendly reading experience. Focused on creating clean layouts, attractive book displays, and smooth user interaction flows",
        techStack: [{ name: "Figma", icon: Figma }, { name: "Prototyping", icon: Layers }],
        image: "/Book-Haven-UI.png",
        github: "",
        demo: "https://www.figma.com/design/Yd3wCSaqkmehH6lrAjRuxk/Book-Haven?m=auto&t=03mAIpgNHI8AgJuc-6"

    },
    {
        id: 10,
        title: "Redesign Lanka Holidays.com Website",
        category: "UI/UX Design",
        description: "Redesigned the existing Lanka Holidays website interface by improving usability issues, visual consistency, and overall user experience. Enhanced the layout structure, booking flow, and responsive design for better customer engagement.UI/UX Tools Used: Figma, UX Research, Wireframing, High-Fidelity Mockups, Prototyping, Design Systems, Responsive Design",
        techStack: [{ name: "Figma", icon: Figma }, { name: "Prototyping", icon: Layers }],
        image: "/Lanka-Holidays-UI.png",
        github: "",
        demo: "https://www.figma.com/design/EW8zRs7MUVF6QeDtFwW9oa/Redesign-Lanka-Holidays-website?m=auto&t=03mAIpgNHI8AgJuc-6"

    },
    {
        id: 11,
        title: "Pet Care App",
        category: "UI/UX Design",
        description: "Designed a pet care mobile application that helps users manage pet-related services, care routines, and appointments through a simple and engaging user interface. Emphasized accessibility and user-friendly navigation.UI/UX Tools Used: Figma, Mobile UI Design, Wireframing, Prototyping, Typography, Color Styling, User-Centered Design",
        techStack: [{ name: "Figma", icon: Figma }, { name: "Prototyping", icon: Layers }],
        image: "/Pet-Care-UI.png",
        github: "",
        demo: "https://www.figma.com/design/juMCw5g3F7KhBsA1FbIs3h/Pet-Care?m=auto&t=03mAIpgNHI8AgJuc-6"

    },
    {
        id: 12,
        title: "Movie Ticket Booking App",
        category: "UI/UX Design",
        description: "Created a movie ticket booking application that allows users to browse movies, reserve seats, and book tickets online with a smooth and intuitive interface. Focused on improving the ticket booking journey and user convenience.UI/UX Tools Used: Figma, Interactive Prototyping, User Flow Mapping, Auto Layout, Components, Mobile UI Design, Icon Design",
        techStack: [{ name: "Figma", icon: Figma }, { name: "Prototyping", icon: Layers }],
        image: "/Movie-Ticket-Booking-UI.png",
        github: "",
        demo: "https://www.figma.com/design/IGnbotQBfJgU22MvasNg8A/Foodie?m=auto&t=03mAIpgNHI8AgJuc-6"
    },
    {
        id: 14,
        title: "Coffee Shop App",
        category: "UI/UX Design",
        description: "Designed a coffee shop application that enables users to explore coffee products, place orders, and interact with a modern café-themed interface. Focused on delivering a visually appealing and smooth customer experience.UI/UX Tools Used: Figma, High-Fidelity UI Design, Prototyping, Design Components, Typography, Color Palette Design, Mobile App Design",
        techStack: [{ name: "Figma", icon: Figma }, { name: "Prototyping", icon: Layers }],
        image: "/Coffee-Shop-UI.png",
        github: "",
        demo: "https://www.figma.com/design/SAcW59bBpG2fsQThTJQktM/Coffee-Shop?m=auto&t=03mAIpgNHI8AgJuc-6"
    },
    {
        id: 15,
        title: "Salon Management App",
        category: "UI/UX Design",
        description: "Designed a salon management application that allows users to book appointments, manage salon services, and schedule staff activities through an organized and user-friendly interface. Focused on creating a smooth booking experience and an attractive modern design for customers and salon administrators.",
        techStack: [{ name: "Figma", icon: Figma }, { name: "Prototyping", icon: Layers }],
        image: "/Salon-Management.UI.jpeg",
        github: "",
        demo: "https://www.figma.com/design/FuQgC8Vi1ndeUGBJxDW46w/Salon-Management?m=auto&t=03mAIpgNHI8AgJuc-6"
    }
];

const allCategories = ["All", "UI/UX Design", "Web Projects", "Mobile Projects"];

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [visibleCount, setVisibleCount] = useState(6);
    const [isExpanded, setIsExpanded] = useState(false);

    const reversedProjects = [...projects].reverse();

    const filteredProjects = activeCategory === "All"
        ? reversedProjects
        : reversedProjects.filter(p => p.category.trim().toLowerCase() === activeCategory.trim().toLowerCase());

    const displayedProjects = activeCategory === "All"
        ? filteredProjects.slice(0, visibleCount)
        : filteredProjects;

    const handleLoadMore = () => {
        if (isExpanded) {
            setVisibleCount(6);
            setIsExpanded(false);
        } else {
            setVisibleCount(projects.length);
            setIsExpanded(true);
        }
    };

    return (
        <section id="projects" className="relative py-24 px-6 md:px-12 bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header & Tabs */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-4 h-[2px] bg-cyan-400" />
                            <span className="text-cyan-400 font-mono tracking-widest uppercase text-sm">Recent Projects</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Work</span>
                        </h2>
                    </motion.div>

                    {/* Filter Tabs */}
                    <motion.div
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {allCategories.map(category => (
                            <button
                                key={category}
                                onClick={() => {
                                    setActiveCategory(category);
                                    // Reset expansion state when changing categories
                                    if (category === "All") {
                                        setVisibleCount(6);
                                        setIsExpanded(false);
                                    }
                                }}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === category
                                    ? "bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20 hover:text-white"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${activeCategory}-${visibleCount}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {displayedProjects.map((project) => (
                            <ProjectCard key={`${activeCategory}-${project.id}`} project={project} />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* View All / GitHub Actions */}
                {activeCategory === "All" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-16 w-full flex flex-col items-center justify-center"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full md:w-auto px-4">
                            
                            {/* View All Button */}
                            <button
                                onClick={handleLoadMore}
                                className="group relative px-8 py-3 bg-slate-900 text-white font-medium rounded-full overflow-hidden border border-cyan-500/50 hover:border-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] w-full md:w-auto flex justify-center"
                            >
                                <div className="absolute inset-0 w-full h-full bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors" />
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {isExpanded ? "Show Less" : "View All Projects"}
                                    <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-90" : "group-hover:-translate-y-1 group-hover:translate-x-1"}`} />
                                </span>
                            </button>

                            {/* Social Links */}
                            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                                <a
                                    href="https://github.com/Lakshan-lk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-colors group bg-white/5 md:bg-transparent rounded-full w-full sm:w-auto border border-white/5 md:border-none"
                                >
                                    <Github className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                                    <span className="text-sm whitespace-nowrap">Explore on GitHub</span>
                                </a>
                                <a
                                    href="https://www.behance.net/lakshanekanayaka"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-colors group bg-white/5 md:bg-transparent rounded-full w-full sm:w-auto border border-white/5 md:border-none"
                                >
                                    <FaBehance className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                                    <span className="text-sm whitespace-nowrap">Explore on Behance</span>
                                </a>
                            </div>
                            
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="group relative flex flex-col rounded-2xl overflow-hidden bg-slate-900/40 border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
        >
            {/* Image Section */}
            <div className="relative aspect-video overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60" />

                {/* Image Placeholder - In real app, use Image component */}
                <div className="absolute inset-0 bg-slate-800 group-hover:scale-105 transition-transform duration-700">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    />
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-semibold text-white/90 bg-black/50 backdrop-blur-md rounded-full border border-white/10">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex gap-2">
                        {project.techStack.map((tech, i) => (
                            <div key={i} title={tech.name} className="p-1.5 rounded-md bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                                <tech.icon className="w-4 h-4" />
                            </div>
                        ))}
                    </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-5">
                    {project.description}
                </p>

                <div className="mt-auto flex gap-4">
                    <a
                        href={project.github || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-white/5 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 text-white text-sm font-medium rounded-lg transition-all duration-300 border border-white/10 hover:border-transparent group/btn text-center flex items-center justify-center"
                    >
                        View Project
                    </a>
                    <a
                        href={project.demo || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-transparent hover:bg-white/5 text-gray-400 hover:text-white text-sm font-medium rounded-lg transition-all duration-300 border border-white/10 hover:border-white/30 flex items-center justify-center"
                    >
                        Live Demo
                    </a>
                </div>
            </div>
        </motion.div>
    );
};
