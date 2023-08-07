import {ThemeBuilder} from '@steeze-ui/icons'

const builder = new ThemeBuilder({
	sources: {
		inputRaw: './svg',
		collectFromDir: {
			optimized: 'default',
		},
	},
	lib: {
		excludeSvgAttributes: ['xmlns', 'width', 'height', 'class'],
		extendSvgAttributes: {},
	}
})

builder.build()
