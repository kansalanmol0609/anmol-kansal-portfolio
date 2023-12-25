"use client";

import { Suspense, useMemo, useState } from "react";
import { HeadingDivider, Loader } from "components";
import { Filter } from "./components/Filter";
import { Projects } from "./components/Projects";
import { PROJECTS } from "constants/projects";

export default function Page() {
	const [category, setCategory] = useState<string | undefined>(undefined);

	const filteredProjects = useMemo(
		() => PROJECTS.filter((project) => !category || project.category === category),
		[category]
	);

	const onClick = (catName: string | undefined) => setCategory(catName);

	return (
		<div className="container-md">
			<section id="projects" className="section">
				<HeadingDivider title="Relevant projects" />

				<Filter onClick={onClick} />

				<Suspense
					fallback={
						<div className="flex-center">
							<Loader />
						</div>
					}
				>
					{filteredProjects.length === 0 ? (
						// Empty state
						<div className="flex-center">
							<h3 className="text-2xl">No projects found in {category} category</h3>
						</div>
					) : (
						<Projects projects={filteredProjects} />
					)}
				</Suspense>
			</section>
		</div>
	);
}
