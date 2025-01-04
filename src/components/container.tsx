export default function Container({ children }: { children: React.ReactNode }) {
	return (
		<div className="max-w-7xl mx-auto flex flex-col min-h-screen bg-white/[2%]">
			{children}
		</div>
	)
}
