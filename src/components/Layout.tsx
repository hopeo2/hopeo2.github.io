import { Outlet } from '@tanstack/react-router'
import { Nav } from '#/components/Nav'

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen flex flex-col">
			<Nav />
			<main className="flex-grow">{children}</main>
		</div>
	)
}

export default Layout
