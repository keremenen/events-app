export default async function Page({
	params,
}: {
	params: Promise<{ city: string }>
}) {
	const city = (await params).city
	return <main>Hello events page, city is: {city}</main>
}
