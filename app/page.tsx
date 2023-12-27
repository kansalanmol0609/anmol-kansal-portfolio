"use client";

import { WelcomeSection, AboutSection, TechnologiesSection, ProjectsSection } from "app/sections";
import { ExperienceSection } from "./sections/Experience";
import { EducationSection } from "./sections/Education";
import { AchievementsSection } from "./sections/Achievements";

export default function Page() {
	return (
		<div className="container-md">
			<WelcomeSection />
			<AboutSection />
			<TechnologiesSection />
			<ExperienceSection />
			<ProjectsSection />
			<EducationSection />
			<AchievementsSection />
		</div>
	);
}
