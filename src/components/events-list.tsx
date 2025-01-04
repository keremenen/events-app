import { EventoEvent } from '@/lib/types'
import EventCard from './event-card'

export default function EventsList({ events }: { events: EventoEvent[] }) {
	return (
		<section className="flex flex-wrap gap-10 justify-center">
			{events.map((event) => (
				<EventCard event={event} key={event.id} />
			))}
		</section>
	)
}
