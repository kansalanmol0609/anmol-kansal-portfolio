export type Post = {
	title: string;
	brief: string;
	url: string;
	id: string;
	slug: string;
	subtitle: string;
	tags: {
		id: string;
		name: string;
	}[];
	coverImage: {
		url: string;
	};
	readTimeInMinutes: number;
	reactionCount: number;
	views: number;
	publishedAt: string;
	seo: {
		title: string;
		description: string;
	};
	ogMetaData: {
		image: string;
	};
};
