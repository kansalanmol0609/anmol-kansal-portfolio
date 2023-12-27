"use client";

//libs
import { useRef } from "react";

//components
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";

//icons
import { IoCalendarOutline } from "react-icons/io5";
import { GrScorecard } from "react-icons/gr";

export function AchievementsSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="achievements" className="section">
				<HeadingDivider title="Achievements" />
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
						<div className="gap-12 pb-10">
							<ul className="pl-12 list-disc">
								<li className="mb-2">
									Secured an All India Rank of 3743 in JEE Mains 2017 out of 1.3 Million students.
								</li>
								<li className="mb-2">CodeForces Max Rating1742 (Expert) </li>
								<li className="mb-2">CodeChef Max Rating1890 (4 Star) </li>
								<li className="mb-2">
									Achieved 817 Global Rank in Google Kickstart Round B, 2020{" "}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</LazyMotion>
	);
}
