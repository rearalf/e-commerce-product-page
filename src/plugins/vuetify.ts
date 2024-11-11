/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify, ThemeDefinition } from 'vuetify'

const light: ThemeDefinition = {
  dark: false,
  colors: {
    orange: '#ff7d1a',
    'light-grayish-blue': '#f7f8fd',
    'very-dark-blue': '#1d2025',
    'dark-grayish-blue': '#68707d',
    'grayish-blue': '#b6bcc8',
  },
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light,
    },
  },
})
