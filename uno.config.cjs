import { defineConfig } from 'unocss';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import { presetIcons } from 'unocss/preset-icons';
import { presetWind } from 'unocss';

export default defineConfig({
    theme: {
        fontFamily: {
        inter: 'InterVariable',
        lexend: 'LexendVariable',
        montserrat: 'MontserratVariable'
        }
    },
    presets: [presetWind(), presetIcons()],
    transformers: [transformerVariantGroup()]
});