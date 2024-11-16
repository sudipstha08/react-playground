import { CSSProperties, ReactNode } from 'react'

export type IStaticRangeOption =
  | 'last_7'
  | 'last_15'
  | 'last_30'
  | 'last_90'
  | 'last_180'
  | 'last_365'
  | 'this_month'
  | 'last_month'
  | 'last_6_months'
  | 'to_date'
  | 'project_duration'

interface StaticDateRangeOption {
  value: IStaticRangeOption
  label: string
  start_date?: Date
  end_date?: Date
}

export interface DatePickerProps {
  isDateRangeEnabled?: boolean
  startDate?: Date | null
  endDate?: Date | null
  minDate?: Date
  maxDate?: Date
  showStaticDateRange?: boolean
  staticDateRangeOptions?: StaticDateRangeOption[]
  defaultStaticDateRange?: IStaticRangeOption | null
  float?: 'left' | 'right'
  showDateWithDay?: boolean
  actions?: ReactNode
  applyOrCancel?: string
  setApplyOrCancel?: (value: string) => void
  placeholder?: string
  isFormDirty?: boolean
  showPrompt?: (callback: () => void) => void
  onStaticDateRangeChange?: (range: string) => void
  toDateIsNull?: boolean
  disabled?: boolean
  onBlur?: () => void
  onDateChange?: (date: Date | null | Array<Date | null>) => void
  autoFocus?: boolean
  selectRange?: boolean
  onClickDay?: (value: Date) => void
  wrapperStyles?: CSSProperties
}
