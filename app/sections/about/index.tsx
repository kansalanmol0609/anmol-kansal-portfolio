"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-10 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex={0}
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							Welcome to my digital space! I am a dynamic and dedicated professional with a fervor
							for crafting innovative solutions through technology. As a seasoned Senior Product
							Engineer with over 2.5 years of experience, I&apos;ve cultivated a skill set that
							spans full stack technologies like - Next.js, React, JavaScript, TypeScript, Node.JS,
							GraphQL etc
						</p>
						<br />

						<p>
							This portfolio is a testament to my journey, showcasing not just the projects
							I&apos;ve undertaken but the passion and dedication I bring to each endeavor. I invite
							you to explore the intersection of creativity and technology through my work and learn
							more about how I can contribute to innovative and impactful projects.
						</p>
					</div>
				</div>
			</section>
		</LazyMotion>
	);
}
