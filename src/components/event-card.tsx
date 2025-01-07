import { EventoEvent } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

export default function EventCard({ event }: { event: EventoEvent }) {
	return (
		<Link
			href={`/event/${event.slug}`}
			className="flex-1 basis-80 h-[380px] max-w-[500px]"
		>
			<section className="w-full h-full flex flex-col bg-white/[3%] rounded-xl overflow-hidden relative state-effects">
				<Image
					src={event.imageUrl}
					width={500}
					height={280}
					alt={event.slug}
					className="h-[60%] w-auto object-cover"
				/>
				<div className="flex flex-col justify-center items-center flex-1">
					<h2>{event.name}</h2>
					<p className="italic text-white/75">{event.organizerName}</p>
					<p className="text-sm text-white/50 mt-4">{event.location}</p>
				</div>

				<section className="absolute left-[12px] top-[12px] size-[45px] bg-black/30 rounded-md flex justify-center items-center flex-col">
					<p className="text-xl font-bold -mb-[5px]">
						{new Date(event.date).getDate().toString().padStart(2, '0')}
					</p>
					<p className="text-xs uppercase text-accent">
						{new Date(event.date).toLocaleString('en-US', { month: 'short' })}
					</p>
				</section>
			</section>
		</Link>
	)
}
