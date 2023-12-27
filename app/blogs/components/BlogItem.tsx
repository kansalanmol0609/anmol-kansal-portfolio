import { Post } from "../types";

const DATE_FORMAT_OPTIONS = {
	year: "numeric",
	month: "long",
	day: "numeric"
};

export const BlogItem = ({ post }: { post: Post }) => {
	return (
		<li className="py-10 md:px-16">
			<a href={post.url} target="_blank">
				<div className="flex flex-col lg:flex-row items-start gap-6">
					<div className="flex-1 flex flex-col gap-4">
						<h2 className="text-3xl font-bold">{post.title}</h2>
						<div className="flex text-sm gap-4 text-gray-300">
							<span>
								{new Date(post.publishedAt).toLocaleDateString(
									undefined,
									// @ts-ignore
									DATE_FORMAT_OPTIONS
								)}
							</span>
							<span>{post.readTimeInMinutes} min read</span>
							<span>{post.views} views</span>
						</div>
						<p className="text-gray-300">{post.brief}</p>
					</div>

					<img src={post.coverImage.url} alt={post.title} className="object-contain lg:w-3/6" />
				</div>
			</a>
		</li>
	);
};
