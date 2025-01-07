import H1 from '@/components/h1'
import { EventoEvent } from '@/lib/types'

import Image from 'next/image'

type EventPageProps = {
	params: {
		slug: string
	}
}

export async function generateMetadata({ params }: EventPageProps) {
	return {
		title: `${params.slug} | Evento`,
	}
}

export default async function EventPage({ params }: EventPageProps) {
	const slug = (await params).slug
	const response = await fetch(
		`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`,
		{
			next: {
				revalidate: 60,
			},
		}
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

						<button className="text-lg bg-white/20 capitalize py-2 rounded-md border-white/10 border-2 bg-blur mt-5 lg:mt-auto state-effect">
							Get tickets
						</button>
					</div>
				</div>
			</section>
			<div className="text-center px-5 py-16">
				<Section>
					<SectionHeading>About this event</SectionHeading>
					<SectionText>{event.description}</SectionText>
				</Section>

				<Section>
					<SectionHeading>Location</SectionHeading>
					<SectionText>{event.description}</SectionText>
				</Section>
			</div>
		</main>
	)
}

function Section({ children }: { children: React.ReactNode }) {
	return <section className="mb-12">{children}</section>
}

function SectionHeading({ children }: { children: React.ReactNode }) {
	return <h2 className="text-2xl mb-8">{children}</h2>
}

function SectionText({ children }: { children: React.ReactNode }) {
	return (
		<p className="text-lg leading-8 text-white/75 max-w-4xl mx-auto">
			{children}
		</p>
	)
}
