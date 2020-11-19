module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'nuxt.config.js',
    ]
  },
  theme: {
    typography: {
      default: {
        css: {
          color: null,
          "a, ol > li::before, blockquote, figure figcaption, a code, thead, strong, h1, h2, h3, h4": {
            color: 'inherit',
            '&:hover': {
              color: 'inherit',
            },
          },
        },
      },
    },
    colors: {
      transparent: "transparent",
      default: "var(--color-default)",

      "primary" : "var(--color-primary)",
      "primary-lighten" : "var(--color-primary-lighten)",
      "primary-darken" : "var(--color-primary-darken)",

      "secondary" : "var(--color-secondary)",
      "secondary-lighten" : "var(--color-secondary-lighten)",
      "secondary-darken" : "var(--color-secondary-darken)",

      "accent" : "var(--color-accent)",
      "accent-lighten" : "var(--color-accent-lighten)",
      "accent-darken" : "var(--color-accent-darken)",

      "content": {
        primary: "var(--color-content-primary)",
        secondary: "var(--color-content-secondary)",
        accent: "var(--color-content-accent)",
        50: "var(--color-content-50)",
        100: "var(--color-content-100)",
        200: "var(--color-content-200)",
        300: "var(--color-content-300)",
        400: "var(--color-content-400)",
        500: "var(--color-content-500)",
        600: "var(--color-content-600)",
        700: "var(--color-content-700)",
        800: "var(--color-content-800)",
        900: "var(--color-content-900)",
      }


      //bootstrap

      // "primary": "hsla(var(--primary-h), var(--primary-s), var(--primary-l), var(--primary-a))",
      // "secondary": "hsla(var(--secondary-h), var(--secondary-s), var(--secondary-l), var(--secondary-a))",
      // "success": "hsla(var(--success-h), var(--success-s), var(--success-l), var(--success-a))",
      // "danger": "hsla(var(--danger-h), var(--danger-s), var(--danger-l), var(--danger-a))",
      // "warning": "hsla(var(--warning-h), var(--warning-s), var(--warning-l), var(--warning-a))",
      // "info": "hsla(var(--info-h), var(--info-s), var(--info-l), var(--info-a))",
      // "light": "hsla(var(--light-h), var(--light-s), var(--light-l), var(--light-a))",
      // "dark": "hsla(var(--dark-h), var(--dark-s), var(--dark-l), var(--dark-a))",
      // "white": "hsla(var(--white-h), var(--white-s), var(--white-l), var(--white-a))",
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
