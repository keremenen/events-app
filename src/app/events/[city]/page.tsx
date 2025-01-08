import EventsList from '@/components/events-list'
import H1 from '@/components/h1'
import { Suspense } from 'react'
import Loading from './loading'
import { capitalize } from '@/lib/utils'
import { z } from 'zod'

type PageProps = {
	params: {
		city: string
	}
}

type EventsPageProps = PageProps & {
	searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: PageProps) {
	const city = (await params).city

	return {
		title:
			city === 'all' ? 'All events' : `Events in ${capitalize(city)} | Evento`,
	}
}

const pageNumberSchema = z.coerce.number().int().positive().optional()

export default async function Page({ params, searchParams }: EventsPageProps) {
	const city = (await params).city
	const page = (await searchParams).page
	const parsedPage = pageNumberSchema.safeParse(page)
	if (!parsedPage.success) {
		throw new Error('Invalid page number')
	}

	return (
		<main className="flex flex-col items-center py-24 px-5">
			<H1 className="mb-10">
				{city === 'all' && 'All events'}
				{city !== 'all' && 'Events in ' + capitalize(city)}
			</H1>

			<Suspense fallback={<Loading />} key={city + parsedPage}>
				<EventsList city={city} page={parsedPage.data} />
			</Suspense>
		</main>
	)
}
