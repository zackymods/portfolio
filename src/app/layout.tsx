import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Geologica } from 'next/font/google';
import React from 'react';

const geologica = Geologica({
	subsets: ['latin'],
	display: 'swap',
	adjustFontFallback: false,
});

export const metadata = {
	title: 'JploreDev',
	description:
		"Showcasing the projects, skills and achievements of Juan Pablo Lorefice, a computer engineering student from Argentina. Explore Juan Pablo Lorefice's experience in programming, problem solving, and technical development through this carefully curated portfolio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body suppressHydrationWarning={true} className={geologica.className}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
