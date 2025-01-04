import { EventoEvent } from '@/lib/types'
import Image from 'next/image'

type EventPageProps = {
	params: {
		slug: string
	}
}

export default async function EventPage({ params }: EventPageProps) {
	const slug = await params.slug
	const response = await fetch(
		`https://bytegrad.com/course-assets/projects/evento/api/events?slug=${slug}`
	)
	const event: EventoEvent = await response.json()
	console.log(event)

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
				</div>
			</section>
			<div></div>
		</main>
	)
}
