import EventsList from '@/components/events-list'
import H1 from '@/components/h1'
import { Suspense } from 'react'
import Loading from './loading'
import { capitalize } from '@/lib/utils'

type PageProps = {
	params: {
		city: string
	}
}
export default async function Page({ params }: PageProps) {
	const city = (await params).city

	return (
		<main className="flex flex-col items-center py-24 px-5">
			<H1 className="mb-10">
				{city === 'all' && 'All events'}
				{city !== 'all' && 'Events in ' + capitalize(city)}
			</H1>

			<Suspense fallback={<Loading />}>
				<EventsList city={city} />
			</Suspense>
		</main>
	)
}
