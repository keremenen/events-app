import EventCard from './event-card'
import { getEvents } from '@/lib/utils'

export default async function EventsList({
	city,
	page,
}: {
	city: string
	page: number
}) {
	const events = await getEvents(city, page)

	return (
		<section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
			{events.map((event) => (
				<EventCard event={event} key={event.id} />
			))}
		</section>
	)
}
