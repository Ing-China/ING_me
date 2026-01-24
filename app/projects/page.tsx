"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaDatabase, FaMobile, FaDesktop, FaCode } from "react-icons/fa";
import { ProjectCategory } from "@/types/project";
import { projects } from "@/data/projects";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories: ProjectCategory[] = [
    { id: "all", name: "All Projects", icon: FaCode },
    { id: "web", name: "Web Development", icon: FaDesktop },
    { id: "mobile", name: "Mobile Apps", icon: FaMobile },
    { id: "backend", name: "Backend Services", icon: FaDatabase },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex items-center min-h-[calc(100vh-4rem)]">
      <div className="max-w-5xl mx-auto p-4 sm:p-8 lg:p-12 w-full">
        <div className="space-y-6 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Projects
          </h1>
          <p className="text-foreground/80 leading-relaxed max-w-5xl">
            A showcase of my work spanning web development, mobile applications,
            and backend services. Each project demonstrates different aspects of
            modern software development and problem-solving.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-foreground/20 rounded-md bg-background text-foreground placeholder:text-foreground/60 focus:outline-none focus:ring-2 focus:ring-foreground/20"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-foreground/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? "bg-foreground text-background"
                      : "bg-foreground/10 text-foreground hover:bg-foreground/20"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects */}
        {filteredProjects.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="bg-foreground/5 rounded-lg overflow-hidden hover:bg-foreground/10 transition-colors block"
              >
                {/* Project Image */}
                {project.image && (
                  <div className="relative w-full h-48 bg-foreground/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="p-4">
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 text-xs line-clamp-1">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-foreground/60">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
