import H1 from '@/components/h1'

type PageProps = {
	params: {
		city: string
	}
}
export default async function Page({ params }: PageProps) {
	const city = (await params).city

	return (
		<main>
			<H1>Events in {city}</H1>
		</main>
	)
}
