import { Theme, ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    status: {
      danger: string
    }
  }

  interface CustomThemeOptions extends ThemeOptions {
    status?: {
      danger?: string
    }
  }

  interface Palette {
    custom: PaletteColor
    customCol: Palette['primary']
  }

  interface PaletteOptions {
    custom?: SimplePaletteColorOptions
    customCol?: PaletteOptions['primary']
  }

  interface PaletteColor {
    border?: string
  }

  interface SimplePaletteColorOptions {
    border?: string
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme
}
