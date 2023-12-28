"use client";

//libs
import { useRef } from "react";

//components
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import Image from "next/image";

//icons
import { IoLocationOutline, IoCalendarOutline } from "react-icons/io5";

const EXPERIENCES = [
	{
		id: "1",
		role: "Senior Product Engineer",
		time: "April, 2023 - Present",
		company: "Sprinklr",
		location: "Gurugram, India",
		companyDescription:
			"Sprinklr is the world's first Modern Customer Experience Management (CXM) platform that helps brands make their customers happier",
		responsibilities: [
			"Maintaining a single page application (SPA) having 30+ routes by working in collaboration with Backend Developers, Product Managers and Designers etc",
			"Languages and Tools - HTML, CSS, JavaScript, TypeScript, ReactJS, Next, Jest, Redux, Apollo GraphQL Client, Git etc",
			"Provided mentorship to two new team members, facilitating their successful onboarding and contributing to their professional development within the organization",
			"Top performer for major release of Distributed platform in Q2, Q3 and Q4 2023",
			"Added bulk actions support in the contacts' module of Distributed platform"
		],
		logo: "/assets/sprinklr_logo.jpeg"
	},
	{
		id: "2",
		role: "Product Engineer",
		time: "June, 2021 - March, 2023",
		company: "Sprinklr",
		location: "Gurugram, India",
		responsibilities: [
			"Reduced Docker Image Size by 30% (approximately 1.53 GB)",
			"Integrated Stack Exchange and Stack Overflow channels in Distributed platform",
			"Added Translate action for inbound, outbound, suggestion and universal case messages in Distributed platform",
			"Added react-virtualized components which resulted in achieving a smooth 60FPS scrolling experience for infinite lists",
			"Incorporated Sentry for real-time error tracking and performance monitoring in Production, ensuring proactive issue identification"
		],
		logo: "/assets/sprinklr_logo.jpeg"
	},
	{
		id: "3",
		role: "Product Engineering Intern",
		time: "May, 2020 - June, 2020",
		company: "Sprinklr",
		location: "Gurugram, India",
		logo: "/assets/sprinklr_logo.jpeg"
	}
];

export function ExperienceSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="experience" className="section">
				<HeadingDivider title="Experience" />
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
						{EXPERIENCES.map((experience) => (
							<div key={experience.id} className="flex flex-col gap-4 pb-10">
								<div className="flex flex-row justify-between">
									<div className="flex flex-row gap-4">
										<Image src={experience.logo} alt="Sprinklr Logo" width="80" height="80" />
										<div className="flex flex-col justify-between">
											<div className="text-xl font-bold">{experience.company}</div>
											<div className="text-md">{experience.role}</div>
										</div>
									</div>
									<div className="hidden md:flex flex-col justify-between">
										<div className="flex flex-row gap-2">
											<IoCalendarOutline size={32} />
											{experience.time}
										</div>
										<div className="flex flex-row gap-2">
											<IoLocationOutline size={32} />

											{experience.location}
										</div>
									</div>
								</div>

								<div className="flex flex-row gap-1 md:hidden">
									<IoCalendarOutline size={32} />
									{experience.time}
								</div>
								<div className="flex flex-row gap-1 md:hidden">
									<IoLocationOutline size={32} />

									{experience.location}
								</div>

								{experience.companyDescription ? (
									<div className="text-md font-extralight">{experience.companyDescription} </div>
								) : null}
								<ul className="pl-6 list-disc">
									{experience.responsibilities?.map((desc) => (
										<li key={desc} className="mb-1">
											{desc}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>
		</LazyMotion>
	);
}
