"use client";
// libs
import { useMemo, useRef } from "react";
import { useInView } from "framer-motion";

// types
import { Post } from "../types";

const DATE_FORMAT_OPTIONS = {
	year: "numeric",
	month: "long",
	day: "numeric",
};

export const BlogItem = ({ post, index }: { post: Post; index: number }) => {
	const cardRef = useRef(null);
	const isInView = useInView(cardRef, { once: true });

	const date = useMemo(
		() =>
			new Date(post.publishedAt).toLocaleDateString(
				"en",
				// @ts-ignore
				DATE_FORMAT_OPTIONS,
			),
		[post.publishedAt],
	);

	return (
		<li
			ref={cardRef}
			className="my-10 md:mx-16"
			style={{
				transform: isInView
					? "none"
					: `${index === 0 ? "translateY(250px)" : `translateY(${200 / index}px)`}`,
				opacity: isInView ? 1 : 0,
				transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index === 0 ? 0 : 25 * index}ms`,
			}}
		>
			<a href={post.url} target="_blank" className="icon-link-btn">
				<div className="flex flex-col lg:flex-row items-start gap-6">
					<div className="flex-1 flex flex-col gap-4">
						<h2 className="text-3xl font-bold">{post.title}</h2>
						<div className="flex text-sm gap-4 dark:text-gray-300">
							<span>{date}</span>
							<span>{post.readTimeInMinutes} min read</span>
							<span>{post.views} views</span>
						</div>
						<p className="dark:text-gray-300">{post.brief}</p>
					</div>

					<img src={post.coverImage.url} alt={post.title} className="object-contain lg:w-3/6" />
				</div>
			</a>
		</li>
	);
};
