'use client'

import Link from 'next/link'
import Logo from './logo'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion } from 'framer-motion'

const routes = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'All Events',
		path: '/events/all',
	},
]

export default function Header() {
	const currentPathname = usePathname()

	return (
		<header className="flex justify-between items-center border-b border-white/10 h-14 px-3 md:px-9">
			<Logo />

			<nav className="h-full">
				<ul className="flex gap-x-6 text-sm h-full items-center">
					{routes.map((route) => (
						<li
							key={route.path}
							className={clsx(' hover:text-white transition relative', {
								'text-white': currentPathname === route.path,
								'text-white/50': currentPathname !== route.path,
							})}
						>
							<Link href={route.path}>{route.name}</Link>
							{currentPathname === route.path && (
								<motion.div
									className="bg-accent h-1 absolute -bottom-2 w-full"
									layoutId="header-active-link"
								/>
							)}
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}
