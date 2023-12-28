import { Suspense } from "react";

// components
import { HeadingDivider, Loader } from "components";
import { BlogItem } from "./components/BlogItem";

// queries
import { getPublicationsQuery } from "./queries/getPublicationsQuery";

// types
import { Post } from "./types";

export default async function BlogsPage() {
	const data = await fetch("https://gql.hashnode.com/", {
		method: "POST",
		body: JSON.stringify({
			query: getPublicationsQuery(10),
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then((res) => res.json());

	const posts = data.data.publication.posts.edges.map(
		(post: { node: Post }) => post.node,
	) as Post[];

	return (
		<div className="container-md">
			<section id="blogs" className="section">
				<HeadingDivider title="Blogs" />

				<ul className="py-10">
					{posts.map((post, index) => (
						<BlogItem post={post} key={post.id} index={index} />
					))}
				</ul>
			</section>
		</div>
	);
}
