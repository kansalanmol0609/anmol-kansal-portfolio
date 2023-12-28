"use client";

import { WelcomeSection, AboutSection, TechnologiesSection, ProjectsSection } from "app/sections";
import { ExperienceSection } from "./sections/Experience";
import { EducationSection } from "./sections/Education";
import { AchievementsSection } from "./sections/Achievements";
import { BlogsSection } from "./sections/Blogs";

export default function Page() {
	return (
		<div className="container-md">
			<WelcomeSection />
			<AboutSection />
			<BlogsSection />
			<ProjectsSection />
			<TechnologiesSection />
			<ExperienceSection />
			<EducationSection />
			<AchievementsSection />
		</div>
	);
}
