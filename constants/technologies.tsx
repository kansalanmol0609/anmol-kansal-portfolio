import { AiFillHtml5, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiCss3, DiVisualstudio } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import {
	SiTypescript,
	SiApollographql,
	SiRedux,
	SiJest,
	SiTestinglibrary,
	SiPrisma,
	SiMongodb,
	SiPlanetscale,
	SiGraphql,
	SiExpress,
	SiDocker,
	SiCplusplus,
	SiJira,
	SiChakraui
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";

export const TECHNOLOGIES = [
	{
		category: "Frontend",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> },
			{ name: "Chakra", icon: <SiChakraui width={32} /> },
			{ name: "JavaScript", icon: <IoLogoJavascript size={32} /> },
			{ name: "TypeScript", icon: <SiTypescript size={32} /> },
			{ name: "React", icon: <FaReact size={32} /> },
			{ name: "Redux", icon: <SiRedux size={32} /> },
			{ name: "Jest", icon: <SiJest size={32} /> },
			{ name: "React Testing Library", icon: <SiTestinglibrary size={32} /> },
			{ name: "Next", icon: <TbBrandNextjs size={32} /> },
			{ name: "GraphQL", icon: <SiApollographql size={32} /> }
		]
	},
	{
		category: "Backend",
		items: [
			{ name: "NodeJs", icon: <FaNodeJs size={32} /> },
			{ name: "Prisma", icon: <SiPrisma size={32} /> },
			{ name: "MongoDB", icon: <SiMongodb size={32} /> },
			{ name: "TypeScript", icon: <SiTypescript size={32} /> },
			{ name: "PlanetScale", icon: <SiPlanetscale size={32} /> },
			{ name: "GraphQL", icon: <SiGraphql size={32} /> },
			{ name: "Express.JS", icon: <SiExpress size={32} /> },
			{ name: "Jest", icon: <SiJest size={32} /> }
		]
	},

	{
		category: "Other languages & tools",
		items: [
			{ name: "C++", icon: <SiCplusplus width={32} /> },
			{ name: "Jira", icon: <SiJira width={32} /> },
			{ name: "Github", icon: <AiFillGithub size={32} /> },
			{ name: "Gitlab", icon: <AiFillGitlab size={32} /> },
			{ name: "VsCode", icon: <DiVisualstudio size={32} /> },
			{ name: "Docker", icon: <SiDocker size={32} /> }
		]
	}
];
