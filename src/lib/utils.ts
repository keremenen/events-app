import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import prisma from './db'
import { notFound } from 'next/navigation'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

export async function getEvents(city: string, page: number) {
	const events = await prisma.eventoEvent.findMany({
		where: {
			city: city === 'all' ? undefined : capitalize(city),
		},
		orderBy: {
			date: 'asc',
		},
		take: 6,
		skip: (page - 1) * 6,
	})

	const totalCount = await prisma.eventoEvent.count({
		where: {
			city: city === 'all' ? undefined : capitalize(city),
		},
	})

	return { events, totalCount }
}

export async function getEvent(slug: string) {
	const event = await prisma.eventoEvent.findUnique({
		where: {
			slug,
		},
	})

	if (!event) {
		notFound()
	}
	return event
}
