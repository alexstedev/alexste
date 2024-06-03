import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'alex ─ developer';
	const description = "Hey 👋 I'm Alex, a developer";

	return {
		title,
		description,
		canonical: `https://alexste.com/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'alexste',
			url: `https://alexste.dev/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: '/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@alexstedev',
			site: '@alexstedev',
		},
		...props,
	};
}
