module.exports = {
  theme: {
    colors: {
      "transparent": "transparent",
      "default": "var(--color-default, #ffffff)",

      "primary": "var(--color-primary, #e92063)",
      "primary-lighten": "var(--color-primary-lighten, #ee4e83)",
      "primary-darken": "var(--color-primary-darken, #c3134e)",

      "secondary": "var(--color-secondary, #6538b2)",
      "secondary-lighten": "var(--color-secondary-lighten, #7f54c9)",
      "secondary-darken": "var(--color-secondary-darken, #4f2c8b)",

      "accent": "var(--color-accent, #02a6f2)",
      "accent-lighten": "var(--color-accent-lighten, #2abafd)",
      "accent-darken": "var(--color-accent-darken, #0283bf)",

      "content": {
        primary: "var(--color-content-primary, #ffffff)",
        secondary: "var(--color-content-secondary, #ffffff)",
        accent: "var(--color-content-accent, #ffffff)",
        100: "var(--color-content-100, #f3f4f6)",
        200: "var(--color-content-200, #ebecf0)",
        300: "var(--color-content-300, #d0d4dc)",
        400: "var(--color-content-400, #99a2b2)",
        500: "var(--color-content-500, #657086)",
        600: "var(--color-content-600, #515a6c)",
        700: "var(--color-content-700, #3d4451)",
        800: "var(--color-content-800, #2a2e37)",
        900: "var(--color-content-900, #16181d)",
      }
    },
    extend: {
      borderRadius: {
        "box": "var(--rounded-box, 1rem)",
        "btn": "var(--rounded-btn, 0.5rem)",
        "badge": "var(--rounded-badge, 0.25rem)",
      },
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
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
