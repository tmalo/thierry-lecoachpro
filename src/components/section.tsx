import { tv } from 'tailwind-variants';

const sx = tv({
	base: 'py-20',
	variants: {
		style: {
			gradient: 'bg-gradient-to-br from-white to-gray-50',
			gray: 'bg-gray-50',
			primary: 'bg-primary text-white',
			white: 'bg-white',
			none: '',
		},
	},
	defaultVariants: {
		style: 'none',
	}
})

export default function Section({ children, style = 'none', centered = false }: any) {
	return (
		<section className={sx({ style })}>
			<div className={centered ? 'container-max section-padding text-center' : 'container-max section-padding'}>
				{children}
			</div>
		</section>
	)
}
