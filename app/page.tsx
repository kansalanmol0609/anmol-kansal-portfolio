"use client";

import { WelcomeSection, AboutSection, TechnologiesSection, ProjectsSection } from "app/sections";
import { ExperienceSection } from "./sections/Experience";
import { EducationSection } from "./sections/Education";

export default function Page() {
	return (
		<div className="container-md">
			<WelcomeSection />
			<AboutSection />
			<TechnologiesSection />
			<ExperienceSection />
			<ProjectsSection />
			<EducationSection />
		</div>
	);
}
