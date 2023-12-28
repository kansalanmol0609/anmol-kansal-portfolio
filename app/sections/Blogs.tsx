"use client";

// libs
import { Suspense, useEffect, useRef, useState } from "react";
import { domAnimation, LazyMotion } from "framer-motion";
import Link from "next/link";

// components
import { HeadingDivider, Loader } from "components";
import { BlogItem } from "app/blogs/components/BlogItem";

// constants
import { SITE_ROUTES } from "../../constants";

// queries
import { getPublicationsQuery } from "app/blogs/queries/getPublicationsQuery";

// types
import { Post } from "app/blogs/types";

export const BlogsSection = () => {
	const btnRef = useRef(null);

	const [posts, setPosts] = useState<undefined | Post[]>(undefined);

	useEffect(() => {
		fetch("https://gql.hashnode.com/", {
			method: "POST",
			body: JSON.stringify({
				query: getPublicationsQuery(2),
			}),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setPosts(
					data.data.publication?.posts?.edges?.map((post: { node: Post }) => post.node) as Post[],
				);
			});
	});

	if (!posts) {
		return (
			<div className="flex-center">
				<Loader />
			</div>
		);
	}

	return (
		<LazyMotion features={domAnimation}>
			<section id="blogs" className="section">
				<HeadingDivider title="Latest Blogs" />
				<div className="h-10 md:h-14" />

				<div className="flex flex-col items-center gap-8 md:gap-14">
					<Suspense
						fallback={
							<div className="flex-center">
								<Loader />
							</div>
						}
					>
						<ul className="pt-6">
							{posts.map((post, index) => (
								<BlogItem post={post} key={post.id} index={index} />
							))}
						</ul>
					</Suspense>

					<Link
						href={SITE_ROUTES.blogs}
						tabIndex={-1}
						ref={btnRef}
						className="btn"
						style={{
							transform: btnRef ? "none" : "translateX(-50px)",
							transition: "transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
						}}
						aria-label="more blogs"
					>
						more blogs
					</Link>
				</div>
			</section>
		</LazyMotion>
	);
};
