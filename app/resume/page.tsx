import React from "react";

const Resume = () => {
  return (
    <div className="flex items-center min-h-[calc(100vh-4rem)]">
      <div className="max-w-5xl mx-auto p-4 sm:p-8 lg:p-12 w-full">
        <div className="space-y-6 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Resume
          </h1>
          <p className="text-foreground/80 leading-relaxed">
            Full-stack developer with expertise in modern web technologies and
            mobile development.
          </p>
        </div>

        <div className="space-y-12">
          {/* Education Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Education
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    Bachelor of Information Technology
                  </h3>
                  <span className="text-sm text-foreground/70 mt-1 sm:mt-0">
                    2021 - 2025
                  </span>
                </div>
                <p className="text-foreground/80 mb-2">
                  Build Bright University – Siem Reap, Cambodia
                </p>
                <p className="text-foreground/70 text-sm">
                  Focus on software development, databases, networking, and
                  system analysis
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    English Program Diploma
                  </h3>
                  <span className="text-sm text-foreground/70 mt-1 sm:mt-0">
                    2021 - 2023
                  </span>
                </div>
                <p className="text-foreground/80 mb-2">
                  Paññāsāstra University of Cambodia - PUC
                </p>
                <p className="text-foreground/70 text-sm">
                  Emphasis on academic writing, speaking, listening, and
                  professional communication
                </p>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Experience
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    React Native Developer
                  </h3>
                  <span className="text-sm text-foreground/70 mt-1 sm:mt-0">
                    Jul 2024 - August 2025
                  </span>
                </div>
                <p className="text-foreground/80 mb-3">
                  Eocambo Technology (EOT) – Siem Reap, Cambodia
                </p>
                <ul className="text-foreground/70 text-sm space-y-2 list-disc list-inside">
                  <li>Developed 5+ e-commerce apps tailored to client needs</li>
                  <li>
                    Maintained and improved legacy applications, ensuring
                    performance and stability
                  </li>
                  <li>
                    Adopted best practices for writing clean, modular, and
                    well-organized code
                  </li>
                  <li>
                    Ensured scalable architecture and optimized code structure
                    for long-term maintainability
                  </li>
                  <li>
                    Collaborated with UI/UX teams to transform design concepts
                    into functional applications
                  </li>
                  <li>
                    Published apps to Play Store and App Store, ensuring smooth
                    and compliant deployment
                  </li>
                  <li>
                    Integrated RESTful APIs using Axios and Fetch for data
                    exchange with Laravel and Node.js backends
                  </li>
                  <li>
                    Conducted manual testing and debugging for smooth
                    performance across Android and iOS
                  </li>
                  <li>
                    Participated in team meetings to align on project goals and
                    timelines
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    React Native Developer Internship
                  </h3>
                  <span className="text-sm text-foreground/70 mt-1 sm:mt-0">
                    Apr 2024 - Jun 2024
                  </span>
                </div>
                <p className="text-foreground/80 mb-3">
                  Eocambo Technology (EOT) – Siem Reap, Cambodia
                </p>
                <ul className="text-foreground/70 text-sm space-y-2 list-disc list-inside">
                  <li>
                    Developed and optimized mobile apps using React Native,
                    JavaScript, and TypeScript
                  </li>
                  <li>
                    Implemented state management with Redux Thunk for efficient
                    data handling
                  </li>
                  <li>
                    Worked on UI/UX improvements and performance optimization
                  </li>
                  <li>
                    Integrated RESTful APIs and debugged issues to enhance app
                    functionality
                  </li>
                  <li>
                    Gained hands-on experience in mobile development best
                    practices
                  </li>
                  <li>
                    Collaborated with senior developers during code reviews and
                    feature planning
                  </li>
                  <li>
                    Used Git for version control and participated in team-based
                    agile workflows
                  </li>
                  <li>
                    Tested apps on both Android and iOS to ensure cross-platform
                    compatibility
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    Graphic Designer
                  </h3>
                  <span className="text-sm text-foreground/70 mt-1 sm:mt-0">
                    Sep 2022 - Feb 2024
                  </span>
                </div>
                <p className="text-foreground/80 mb-3">
                  CPR Print – Siem Reap, Cambodia
                </p>
                <ul className="text-foreground/70 text-sm space-y-2 list-disc list-inside">
                  <li>
                    Created visual designs for print materials including
                    brochures, flyers, and business cards
                  </li>
                  <li>
                    Collaborated with clients to understand design requirements
                    and brand guidelines
                  </li>
                  <li>
                    Developed creative concepts and layouts using Adobe Creative
                    Suite
                  </li>
                  <li>
                    Ensured print-ready files met quality standards and
                    specifications
                  </li>
                  <li>
                    Managed multiple design projects simultaneously while
                    meeting tight deadlines
                  </li>
                  <li>
                    Gained experience in typography, color theory, and layout
                    design principles
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Skills</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Programming Languages
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-sm">
                      JavaScript
                    </span>
                    <span className="text-foreground/60 text-xs">Advanced</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-sm">Dart</span>
                    <span className="text-foreground/60 text-xs">
                      Intermediate
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-sm">PHP</span>
                    <span className="text-foreground/60 text-xs">
                      Intermediate
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Framework & Library
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-sm">
                      React Native
                    </span>
                    <span className="text-foreground/60 text-xs">Advanced</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-sm">Flutter</span>
                    <span className="text-foreground/60 text-xs">
                      Intermediate
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-sm">React JS</span>
                    <span className="text-foreground/60 text-xs">Advanced</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-sm">Next JS</span>
                    <span className="text-foreground/60 text-xs">Advanced</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-sm">Laravel</span>
                    <span className="text-foreground/60 text-xs">
                      Intermediate
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Database
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-sm">MySQL</span>
                    <span className="text-foreground/60 text-xs">
                      Intermediate
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-sm">MongoDB</span>
                    <span className="text-foreground/60 text-xs">
                      Intermediate
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-sm">
                      PostgreSQL
                    </span>
                    <span className="text-foreground/60 text-xs">
                      Intermediate
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-sm">Firebase</span>
                    <span className="text-foreground/60 text-xs">Advanced</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-sm">Supabase</span>
                    <span className="text-foreground/60 text-xs">
                      Intermediate
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Deployment & Hosting
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-sm">
                      Google Play Store
                    </span>
                    <span className="text-foreground/60 text-xs">Advanced</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-sm">
                      Apple App Store
                    </span>
                    <span className="text-foreground/60 text-xs">Advanced</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-sm">Vercel</span>
                    <span className="text-foreground/60 text-xs">Advanced</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-sm">
                      DigitalOcean
                    </span>
                    <span className="text-foreground/60 text-xs">
                      Intermediate
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-sm">
                      Cloudflare
                    </span>
                    <span className="text-foreground/60 text-xs">
                      Intermediate
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Tools
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-sm">Git</span>
                    <span className="text-foreground/60 text-xs">Advanced</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-sm">Postman</span>
                    <span className="text-foreground/60 text-xs">Advanced</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-sm">
                      Android Studio
                    </span>
                    <span className="text-foreground/60 text-xs">Advanced</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-sm">Xcode</span>
                    <span className="text-foreground/60 text-xs">
                      Intermediate
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-sm">VS Code</span>
                    <span className="text-foreground/60 text-xs">Expert</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
