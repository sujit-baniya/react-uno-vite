import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  // transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'
import transformerDirective from '@unocss/transformer-directives'
import transformerCompileClass from '@unocss/transformer-compile-class'
import transformerVariantGroup from '@unocss/transformer-variant-group'


export default defineConfig({
	shortcuts: [
		[
			'icon-btn',
			'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
		],
	],
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons({
			scale: 1.2,
			warn: true,
		}),
	],
	transformers: [
		transformerDirective(),
		transformerCompileClass(),
		transformerVariantGroup(),
	],
	// transformers: [
	//   transformerDirectives(),
	//   transformerVariantGroup(),
	// ],
})
