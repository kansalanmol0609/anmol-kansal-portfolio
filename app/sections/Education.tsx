"use client";

//libs
import { useRef } from "react";

//components
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";

//icons
import { IoCalendarOutline } from "react-icons/io5";
import { GrScorecard } from "react-icons/gr";

export function EducationSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="education" className="section">
				<HeadingDivider title="Education" />
				<div className="pt-10 pb-10  flex flex-col gap-3">
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
						<div className="flex flex-col gap-8 pb-10">
							<div className="flex flex-row justify-between">
								<div className="flex flex-row gap-4">
									<div className="flex flex-col gap-4 justify-between">
										<div className="text-xl ">B.E. in Information Technology</div>
										<div className="text-md font-bold">
											Netaji Subhas Institute Of Technology, Delhi
										</div>
									</div>
								</div>
								<div className="hidden md:flex flex-col justify-between w-40">
									<div className="flex flex-row gap-2">
										<IoCalendarOutline size={32} />
										2017 - 2021
									</div>

									<div className="flex flex-row gap-2">
										<GrScorecard size={32} />
										9.14 CGPA
									</div>
								</div>
							</div>

							<div className="md:hidden flex flex-row justify-between">
								<div className="flex flex-row gap-1 md:hidden">
									<IoCalendarOutline size={32} />
									2017 - 2021
								</div>

								<div className="flex flex-row gap-1 md:hidden">
									<GrScorecard size={32} />
									9.14 CGPA
								</div>
							</div>

							<div className="flex flex-row justify-between pt-10">
								<div className="flex flex-row gap-4">
									<div className="flex flex-col gap-4 justify-between">
										<div className="text-xl ">XII, CBSE Board, Non-Medical </div>
										<div className="text-md font-bold">Star Plus Convent School, Raman</div>
									</div>
								</div>
								<div className="hidden md:flex flex-col justify-between w-40">
									<div className="flex flex-row gap-2">
										<IoCalendarOutline size={32} />
										2017
									</div>

									<div className="flex flex-row gap-2">
										<GrScorecard size={32} />
										89.4 %age
									</div>
								</div>
							</div>

							<div className="md:hidden flex flex-row justify-between">
								<div className="flex flex-row gap-2">
									<IoCalendarOutline size={32} />
									2017
								</div>

								<div className="flex flex-row gap-2">
									<GrScorecard size={32} />
									89.4 %age
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</LazyMotion>
	);
}
