export const metadata = {
	title: `Blogs`
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <div className="container-md">{children}</div>;
}
