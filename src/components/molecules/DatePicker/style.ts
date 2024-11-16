import { CSSProperties } from 'react'
import { colors } from 'src/theme/color'

export const staticDateRangeActiveStyles: CSSProperties = {
  background: '#233759',
  color: '#ffffff',
  fontWeight: 'bold',
}

export const dateRangeStyles: CSSProperties = {
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  textAlign: 'left',
  color: colors.text.primary,
  fontWeight: 400,
}
