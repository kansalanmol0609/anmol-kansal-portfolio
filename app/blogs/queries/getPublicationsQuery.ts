export const getPublicationsQuery = (pageSize: number) => `
	query Publication {
		publication(host: "anmol-kansal.hashnode.dev") {
			posts(first: ${pageSize}) {
				edges {
					node {
						title
						brief
						url
						id
						slug
						subtitle
						tags {
							id
							name
						}
						coverImage {
							url
						}
						readTimeInMinutes
						reactionCount
						views
						publishedAt
						seo {
							title
							description
						}
						ogMetaData {
							image
						}
					}
				}
			}
		}
	}
`;
