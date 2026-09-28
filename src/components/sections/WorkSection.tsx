"use client";

import { Reveal, StaggerReveal, StaggerChild } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects } from "@/data/projects";

export function WorkSection() {
  const featured = projects.filter((p) => p.featured);
  const rows = featured.reduce<(typeof featured)[]>((result, project) => {
    const previous = result[result.length - 1];
    if (project.size === "half" && previous?.length === 1 && previous[0].size === "half") previous.push(project);
    else result.push([project]);
    return result;
  }, []);

  return (
    <section id="work" className="section-padding">
      <div className="container-content">
        {/* Section header */}
        <Reveal className="mb-12 md:mb-16">
          <div className="flex items-center justify-between">
            <div>
              <div className="rule mb-4" aria-hidden="true" />
              <span className="section-label text-text-secondary">Selected Work</span>
            </div>
            <span className="font-body text-body-s text-text-tertiary hidden sm:block">
              {featured.length} projects
            </span>
          </div>
        </Reveal>

        <StaggerReveal className="flex flex-col gap-6 md:gap-8">
          {rows.map(row => (
            <StaggerChild key={row[0].id}>
              {row[0].size === "full" ? (
                <ProjectCard project={row[0]} size="full" />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {row.map(project => <ProjectCard key={project.id} project={project} size="half" />)}
                </div>
              )}
            </StaggerChild>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
