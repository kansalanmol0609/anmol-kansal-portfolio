export function FilterButton({
	onClick,
	label,
	active,
	children
}: {
	children: JSX.Element | string;
	active: boolean;
	label: string;
	onClick: () => void;
}) {
	const activeClassName = "icon-link-btn--active";
	return (
		<button
			className={`icon-link-btn icon-link-btn--outline w-14 h-10 ${active ? activeClassName : ""}`}
			onClick={onClick}
			aria-label={`Filter projects by ${label.toLowerCase()}`}
		>
			{children}
		</button>
	);
}
