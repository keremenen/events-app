import { EventoEvent } from '@/lib/types'
import EventCard from './event-card'

export default async function EventsList({ city }: { city: string }) {
	const reponse = await fetch(
		`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
	)
	const events: EventoEvent[] = await reponse.json()

	return (
		<section className="flex flex-wrap gap-10 justify-center">
			{events.map((event) => (
				<EventCard event={event} key={event.id} />
			))}
		</section>
	)
}
