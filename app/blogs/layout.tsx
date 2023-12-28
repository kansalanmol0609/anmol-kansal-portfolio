export const metadata = {
	title: `Anmol Kansal's Blog`,
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <div className="container-md">{children}</div>;
}
