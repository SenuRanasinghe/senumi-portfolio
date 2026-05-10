"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Calendar, ChevronDown, ChevronUp, Award, BookOpen, GraduationCap, ShieldCheck } from "lucide-react";

interface Certification {
    id: number;
    title: string;
    org: string;
    date: string;
    logo: string;
    credentialID: string;
    link: string;
    color: string;
    borderColor: string;
}

// ---------------------- DATA ----------------------
const certifications: Certification[] =[
    {
        id: 1,
        title: "Introduction to Database and SQL",
        org: "Great Learning",
        date: "Issued Dec 2023",
        logo: "/gl.jpeg",
        credentialID: "",
        link: "https://www.mygreatlearning.com/certificate/RIVQRUZX",
        color: "bg-gray-500/10",
        borderColor: "group-hover:border-gray-500/50"
    },
    {
        id: 2,
        title: "Introduction to Artificial Intelligence",
        org: "Great Learning",
        date: "Issued Jan 2024",
        logo: "/gl.jpeg",
        credentialID: "",
        link: "https://www.mygreatlearning.com/certificate/GATAAKZS",
        color: "bg-gray-500/10",
        borderColor: "group-hover:border-gray-500/50"
    },
    {
        id: 3,
        title: "Software Development Lifecycle",
        org: "Great Learning",
        date: "Issued Jan 2024",
        logo: "/gl.jpeg",
        credentialID: "",
        link: "https://www.mygreatlearning.com/certificate/CPJZZBYN?referrer_code=GLEFQXD-AA8NG",
        color: "bg-gray-500/10",
        borderColor: "group-hover:border-gray-500/50"
    },
    {
        id: 4,
        title: "React JS",
        org: "Simplilearn",
        date: "Issued Jan 2024",
        logo: "/Simp.png",
        credentialID: "",
        link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIyMDA0IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNjczNDk3OF8xNzE4NTQ1OTY1LnBuZyIsInVzZXJuYW1lIjoiU2VudW1pIFJhbmFzaW5naGUifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion",
        color: "bg-gray-500/10",
        borderColor: "group-hover:border-gray-500/50"
    },
    {
        id: 5,
        title: "Python Basic Programs",
        org: "Great Learning",
        date: "Issued Jan 2024",
        logo: "/gl.jpeg",
        credentialID: "",
        link: "https://www.mygreatlearning.com/certificate/XVPTRHWB",
        color: "bg-gray-500/10",
        borderColor: "group-hover:border-gray-500/50"
    },
    {
        id: 6,
        title: "Introduction to Digital Marketing",
        org: "Great Learning",
        date: "Issued Jan 2024",
        logo: "/gl.jpeg",
        credentialID: "",
        link: "https://www.mygreatlearning.com/certificate/GIRJAGOJ",
        color: "bg-gray-500/10",
        borderColor: "group-hover:border-gray-500/50"
    },
    {
        id: 7,
        title: "Introduction to MERN Stack",
        org: "Simplilearn",
        date: "Issued Jan 2024",
        logo: "/Simp.png",
        credentialID: "",
        link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMzM3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDc2Mzk1Ml8xNzA0NTE4NDQ5LnBuZyIsInVzZXJuYW1lIjoiU2VudW1pIFJhbmFzaW5naGUifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion",
        color: "bg-gray-500/10",
        borderColor: "group-hover:border-gray-500/50"
    },
    {
        id: 8,
        title: "Java Programming",
        org: "Great Learning",
        date: "Issued Jan 2024",
        logo: "/gl.jpeg",
        credentialID: "",
        link: "https://www.mygreatlearning.com/certificate/DJVQOBDO",
        color: "bg-gray-500/10",
        borderColor: "group-hover:border-gray-500/50"
    },
    {
        id: 9,
        title: "UI/UX Design for Beginners",
        org: "Great Learning",
        date: "Issued Jun 2024",
        logo: "/gl.jpeg",
        credentialID: "",
        link: "https://olympus.mygreatlearning.com/courses/55928/certificate",
        color: "bg-gray-500/10",
        borderColor: "group-hover:border-gray-500/50"
    },
    {
        id: 10,
        title: "AWS Mobile App Development",
        org: "Great Learning",
        date: "Issued Jun 2024",
        logo: "/gl.jpeg",
        credentialID: "",
        link: "https://olympus.mygreatlearning.com/courses/65407/quizzes/256473?module_item_id=1995860",
        color: "bg-gray-500/10",
        borderColor: "group-hover:border-gray-500/50"
    },
    {
        id: 11,
        title: "Introduction to Flutter",
        org: "Simplilearn",
        date: "Issued Jul 2024",
        logo: "/Simp.png",
        credentialID: "",
        link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIyMjk3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNjg3OTQ1MF8xNzIwNDA1NDgwLnBuZyIsInVzZXJuYW1lIjoiU2VudW1pIFJhbmFzaW5naGUifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion",
        color: "bg-gray-500/10",
        borderColor: "group-hover:border-gray-500/50"
    },
    {
        id: 12,
        title: "Web Development",
        org: "Sololearn",
        date: "Issued Jul 2024",
        logo: "/sololearn.jpeg",
        credentialID: "CC-UASAWSIC",
        link: "https://api2.sololearn.com/v2/certificates/CC-UASAWSIC/image/jpg",
        color: "bg-gray-500/10",
        borderColor: "group-hover:border-gray-500/50"
    },
    {
        id: 13,
        title: "AWS Academy Graduate - Cloud Web Application Builder",
        org: "Amazon Web Services (AWS)",
        date: "Issued Sep 2025",
        logo: "/aws.jpeg",
        credentialID: "",
        link: "https://www.credly.com/badges/e0328766-43b6-4f5c-990d-7eb0da7a1eb0/linked_in_profile",
        color: "bg-gray-500/10",
        borderColor: "group-hover:border-gray-500/50"
    },
    {
        id: 14,
        title: "Introduction to Software Quality Assurance",
        org: "University of Moratuwa",
        date: "Issued Feb 2026",
        logo: "/uom.png",
        credentialID: "",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7423760309808721920/",
        color: "bg-white",
        borderColor: "group-hover:border-white/50"
    },
    {
        id: 15,
        title: "Getting Started with Playwright using TypeScript",
        org: "Simplilearn",
        date: "Issued May 2026",
        logo: "/Simp.png",
        credentialID: "10207884",
        link: "https://certificates.simplicdn.net/share/10207884_10493576_1778342502616.pdf",
        color: "bg-gray-500/10",
        borderColor: "group-hover:border-gray-500/50"
    }
];

export const Certifications = () => {
    const [showAll, setShowAll] = useState(false);

    const reversedCertifications = [...certifications].reverse();
    const visibleCertifications = showAll ? reversedCertifications : reversedCertifications.slice(0, 4);

    return (
        <section id="certifications" className="relative py-24 px-6 md:px-12 bg-transparent">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center md:text-left"
                >
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                        <div className="w-4 h-[2px] bg-cyan-400" />
                        <h3 className="text-cyan-400 font-mono tracking-widest uppercase text-sm">Credentials</h3>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Certifications</span>
                    </h2>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatePresence>
                        {visibleCertifications.map((cert, index) => (
                            <CertificationCard key={cert.id} cert={cert} index={index} />
                        ))}
                    </AnimatePresence>
                </div>

                {/* See All Button */}
                {certifications.length > 4 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-12 flex justify-center"
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="group flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white font-semibold hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
                        >
                            {showAll ? (
                                <>Show Less <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" /></>
                            ) : (
                                <>See All Certifications <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" /></>
                            )}
                        </button>
                    </motion.div>
                )}

            </div>
        </section>
    );
};

const CertificationCard = ({ cert, index }: { cert: Certification; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={`group relative flex flex-col sm:flex-row items-center sm:items-stretch gap-6 bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 ${cert.borderColor} transition-all duration-300 backdrop-blur-sm h-full`}
        >
            {/* Logo Placeholder (Left Side) */}
            <div className={`w-full sm:w-32 h-32 shrink-0 rounded-xl ${cert.color} border border-white/5 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                <img
                    src={cert.logo}
                    alt={`${cert.org} logo`}
                    className="w-full h-full object-contain filter drop-shadow-md"
                />
            </div>

            {/* Content (Right Side) */}
            <div className="flex flex-col justify-between flex-grow text-center sm:text-left w-full">
                <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors leading-tight">
                        {cert.title}
                    </h3>
                    <p className="text-gray-400 font-medium mb-1 text-sm">{cert.org}</p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-center sm:justify-start gap-2 sm:gap-4 text-gray-500 text-xs mb-4 font-mono">
                        <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                            <Calendar className="w-3 h-3" />
                            <span>{cert.date}</span>
                        </div>
                        {/* Show Credential ID if it exists */}
                        {cert.credentialID && (
                            <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                                <span className="hidden sm:inline">•</span>
                                <span>ID: {cert.credentialID}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Button */}
                <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-bold text-white border border-white/20 bg-white/5 py-2 px-4 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 w-full sm:w-max"
                >
                    View Certification <ExternalLink className="w-3 h-3" />
                </a>
            </div>
        </motion.div>
    );
};