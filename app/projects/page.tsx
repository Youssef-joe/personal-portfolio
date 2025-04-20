import Image from 'next/image';
import React from 'react';

interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
}

const projects: Project[] = [
    {
        title: 'Project One',
        description: 'A brief description of Project One.',
        image: "https://i.pinimg.com/736x/50/3b/cb/503bcbba9b9be3ce15641015a5c20165.jpg",
        link: 'https://bistro-bliss-theta.vercel.app/',
    },
    {
        title: 'Project Two',
        description: 'A brief description of Project Two.',
        image: "https://i.pinimg.com/736x/5b/b6/25/5bb62553b0ee1f0451d760cc3425be57.jpg",
        link: 'https://fashion-shop-tan.vercel.app/',
    },
    // Add more projects here
];

const ProjectsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6">
            <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
                    >
                        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={500}
                            height={450}
                            className="mb-4 rounded-lg"
                        />
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            {project.description}
                        </p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 dark:text-blue-400 hover:underline"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
