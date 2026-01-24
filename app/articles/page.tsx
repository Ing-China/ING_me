"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaClock, FaStar, FaThumbtack } from "react-icons/fa";
import { articles } from "@/data/articles";

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "starred", "pinned"];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "starred" && article.starred) ||
      (selectedCategory === "pinned" && article.pinned);
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="flex items-center min-h-[calc(100vh-4rem)]">
      <div className="max-w-5xl mx-auto p-4 sm:p-8 lg:p-12 w-full">
        <div className="space-y-6 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Articles
          </h1>
          <p className="text-foreground/80 leading-relaxed max-w-5xl">
            Insights, tutorials, and thoughts on web development, mobile app
            development, and modern software engineering practices. Sharing
            knowledge and experiences from real-world projects.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search articles..."
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
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-foreground text-background"
                    : "bg-foreground/10 text-foreground hover:bg-foreground/20"
                }`}
              >
                {category === "all" && <span>All Articles</span>}
                {category === "starred" && (
                  <>
                    <FaStar className="w-3 h-3" />
                    <span>Starred</span>
                  </>
                )}
                {category === "pinned" && (
                  <>
                    <FaThumbtack className="w-3 h-3" />
                    <span>Pinned</span>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 && (
          <div className="grid gap-6">
            {filteredArticles.map((article) => (
              <Link key={article.id} href={`/articles/${article.slug}`}>
                <article className="bg-foreground/5 rounded-lg p-6 hover:bg-foreground/10 transition-colors relative">
                  {/* Status Icons */}
                  <div className="absolute top-4 right-4">
                    {article.pinned ? (
                      <FaThumbtack className="w-4 h-4 text-blue-500" />
                    ) : article.starred ? (
                      <FaStar className="w-4 h-4 text-yellow-500" />
                    ) : null}
                  </div>

                  <div className="space-y-4 pr-12">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60">
                      <span className="flex items-center gap-1">
                        <FaClock className="w-3 h-3" />
                        {article.readTime} min read
                      </span>
                      <span>{formatDate(article.publishedAt)}</span>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-foreground mb-2 hover:text-foreground/80 transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-foreground/80 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="pt-2">
                      <span className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium">
                        Read more →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-foreground/60">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;
