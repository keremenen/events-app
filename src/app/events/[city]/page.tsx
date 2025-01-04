import H1 from '@/components/h1'
import { EventoEvent } from '@/lib/types'

type PageProps = {
	params: {
		city: string
	}
}
export default async function Page({ params }: PageProps) {
	const city = (await params).city

	const reponse = await fetch(
		'https://bytegrad.com/course-assets/projects/evento/api/events?city=austin'
	)
	const events: EventoEvent[] = await reponse.json()

	return (
		<main className="flex flex-col items-center py-24 px-5">
			<H1>
				{city === 'all' && 'All events'}
				{city !== 'all' &&
					'Events in ' + city.charAt(0).toUpperCase() + city.slice(1)}
			</H1>

			{events.map((event) => (
				<section key={event.id}>{event.name}</section>
			))}
		</main>
	)
}
