import H1 from '@/components/h1'
import { EventoEvent } from '@/lib/types'
import Image from 'next/image'

type EventPageProps = {
	params: {
		slug: string
	}
}

export default async function EventPage({ params }: EventPageProps) {
	const slug = (await params).slug
	const response = await fetch(
		`https://bytegrad.com/course-assets/projects/evento/api/events?slug=${slug}`
	)
	const event: EventoEvent = await response.json()

	return (
		<main>
			<section className="relative h-[360px]">
				<Image
					src={event.imageUrl}
					className="object-cover blur-3xl overflow-hidden z-0"
					alt="Event background image"
					sizes="(max-width:1280px) 100vw, 1280px"
					quality={50}
					fill
				/>

				<div className="z-1 relative">
					<Image
						src={event.imageUrl}
						alt={event.name}
						width={300}
						height={200}
					/>

					<div>
						{/* display date in day name coma name of the month and then day number of the month */}
						<p>
							{new Date(event.date).toLocaleDateString('en-US', {
								weekday: 'long',
								month: 'long',
								day: 'numeric',
							})}
						</p>
						<H1>{event.name}</H1>
						<p>
							Organized by <span className="italic">{event.organizerName}</span>
						</p>
					</div>
				</div>
			</section>
			<div></div>
		</main>
	)
}
