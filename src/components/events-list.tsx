import EventCard from './event-card'
import { getEvents } from '@/lib/utils'
import PaginationControls from './pagination-controls'

type EventsPageProps = {
	city: string
	page?: number
}

export default async function EventsList({ city, page = 1 }: EventsPageProps) {
	const { events, totalCount } = await getEvents(city, page)

	const prevPath = page > 1 ? `/events/${city}?page=${page - 1}` : ''
	const nextPath =
		page * 6 < totalCount ? `/events/${city}?page=${page + 1}` : ''

	return (
		<section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px] w-full">
			{events.map((event) => (
				<EventCard event={event} key={event.id} />
			))}

			<PaginationControls prevPath={prevPath} nextPath={nextPath} />
		</section>
	)
}
