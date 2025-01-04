import H1 from '@/components/h1'

type PageProps = {
	params: {
		city: string
	}
}
export default async function Page({ params }: PageProps) {
	const city = (await params).city

	return (
		<main className="flex flex-col items-center py-24 px-5">
			<H1>
				{city === 'all' && 'All events'}
				{city !== 'all' &&
					'Events in ' + city.charAt(0).toUpperCase() + city.slice(1)}
			</H1>
		</main>
	)
}
