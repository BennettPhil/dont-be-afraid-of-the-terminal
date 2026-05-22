import { defineShikiSetup } from '@slidev/types'

// One dark theme for both color schemes: code always reads as a real terminal.
export default defineShikiSetup(() => ({
  themes: {
    dark: 'github-dark',
    light: 'github-dark',
  },
}))
