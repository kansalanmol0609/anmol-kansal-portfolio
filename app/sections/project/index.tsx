import { useRef } from "react";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import Link from "next/link";
import { HeadingDivider } from "components";
import { Projects } from "../../projects/components/Projects";
import { SITE_ROUTES } from "../../../constants";
import { PROJECTS } from "../../../constants/projects";

export function ProjectsSection() {
	const btnRef = useRef(null);
	const isBtnInView = useInView(btnRef, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="projects" className="section">
				<HeadingDivider title="Latest projects" />
				<div className="h-10 md:h-14" />

				<div className="flex flex-col items-center gap-8 md:gap-14">
					<Projects projects={PROJECTS.slice(0, 3)} />

					<Link
						href={SITE_ROUTES.projects}
						tabIndex={-1}
						ref={btnRef}
						className="btn"
						style={{
							transform: btnRef ? "none" : "translateX(-50px)",
							opacity: isBtnInView ? 1 : 0,
							transition: "transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
						}}
						aria-label="more projects"
					>
						more projects
					</Link>
				</div>
			</section>
		</LazyMotion>
	);
}
