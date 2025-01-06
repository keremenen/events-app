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
		`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
	)
	const event: EventoEvent = await response.json()

	return (
		<main>
			<section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
				<Image
					src={event.imageUrl}
					className="object-cover blur-3xl z-0"
					alt="Event background image"
					sizes="(max-width:1280px) 100vw, 1280px"
					quality={50}
					fill
				/>

				<div className="z-1 flex flex-col gap-6 lg:gap-16 lg:flex-row relative ">
					<Image
						src={event.imageUrl}
						alt={event.name}
						width={300}
						height={200}
					/>

					<div className="flex flex-col w-full">
						<p className="text-white/75">
							{new Date(event.date).toLocaleDateString('en-US', {
								weekday: 'long',
								month: 'long',
								day: 'numeric',
							})}
						</p>
						<H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
							{event.name}
						</H1>
						<p className="whitespace-nowrap text-xl text-white/75">
							Organized by <span className="italic">{event.organizerName}</span>
						</p>

						<button className="text-lg bg-white/20 capitalize py-2 rounded-md border-white/10 border-2 bg-blur mt-5 lg:mt-auto hover:scale-105 active:sacele-[102] transition focus:scale-105 w-full">
							Get tickets
						</button>
					</div>
				</div>
			</section>
			<div></div>
		</main>
	)
}
