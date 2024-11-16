import React, { useState, useEffect, useCallback, FC, useRef } from 'react'
import Calendar from 'react-calendar'
import MaterialIcon from '@material/react-material-icon'
import { format, endOfMonth, startOfMonth, subDays, subMonths } from 'date-fns'
import { Box, Button, TextField } from '@mui/material'
import { DatePickerProps, IStaticRangeOption } from './types'
import { staticDateRangeActiveStyles } from './style'
import { colors } from 'src/theme/color'

function dateFormat(date: Date) {
  return typeof date.getMonth === 'function'
    ? date.toLocaleDateString('en-GB')
    : new Date(date).toLocaleDateString('en-GB')
}

export const DatePicker: FC<DatePickerProps> = ({
  showStaticDateRange = true,
  staticDateRangeOptions = [],
  float = 'left',
  showDateWithDay = true,
  actions = '',
  applyOrCancel = '',
  setApplyOrCancel = () => {},
  placeholder = '',
  isFormDirty = false,
  showPrompt = () => {},
  onStaticDateRangeChange = () => {},
  toDateIsNull = false,
  isDateRangeEnabled = true,
  defaultStaticDateRange,
  startDate,
  endDate,
  disabled,
  onBlur,
  onDateChange,
  autoFocus,
  minDate,
  maxDate,
  selectRange,
  onClickDay,
  wrapperStyles,
  ...rest
}) => {
  const [showCalendar, setShowCalendar] = useState(false)
  const [staticDateRange, setStaticDateRange] = useState<
    IStaticRangeOption | ''
  >('')
  const [date, setDate] = useState<Date | null | Array<Date | null>>(
    endDate ? [startDate!, endDate] : startDate || new Date(),
  )
  const [dateForApply, setDateForApply] = useState(new Date())
  const inputRef = useRef<HTMLInputElement>()

  const toggleCalendar = useCallback(
    (e: React.MouseEvent | React.KeyboardEvent) => {
      e.stopPropagation()
      if (disabled) return
      setShowCalendar(prev => !prev)
    },
    [disabled],
  )

  const onCalendarOpen = (e: React.KeyboardEvent) => {
    inputRef?.current?.focus()
    if (e.type === 'keyup' && e.key !== 'Tab') return
    if (disabled) return
    setShowCalendar(true)
  }

  const onCalendarClose = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      if (typeof onBlur === 'function') onBlur()
      inputRef?.current?.focus()
      setShowCalendar(false)
    }
  }

  const onCalenderChange = (date: Date | Date[]) => {
    inputRef?.current?.focus()
    if (!actions) {
      if (isFormDirty) {
        showPrompt(() => {
          setDate(date)
          setShowCalendar(false)
          onDateChange!(date)
        })
      } else {
        setDate(date)
        setShowCalendar(false)
        onDateChange!(date)
      }
    } else {
      setDateForApply(date as Date)
    }
  }

  const handleStaticDateRangeChange = (
    range: IStaticRangeOption,
    toDateIsNull: boolean,
  ) => {
    if (onStaticDateRangeChange) {
      onStaticDateRangeChange(range)
    }
    setStaticDateRange(range)

    const current = new Date()
    let start: Date | null | undefined
    let end: Date | null | undefined = current

    switch (range) {
      case 'last_7':
        start = subDays(current, 7)
        break
      case 'last_15':
        start = subDays(current, 15)
        break
      case 'last_30':
        start = subDays(current, 30)
        break
      case 'last_90':
        start = subDays(current, 90)
        break
      case 'last_180':
        start = subDays(current, 180)
        break
      case 'last_365':
        start = subDays(current, 365)
        break
      case 'this_month':
        start = startOfMonth(current)
        end = endOfMonth(current)
        break
      case 'last_month': {
        const lastMonthDate = subMonths(current, 1)
        start = startOfMonth(lastMonthDate)
        end = endOfMonth(lastMonthDate)
        break
      }
      case 'last_6_months': {
        const lastSixMonthDate = subMonths(current, 6)
        start = startOfMonth(lastSixMonthDate)
        break
      }
      case 'to_date':
        if (toDateIsNull) {
          start = null
          end = null
        } else {
          start = staticDateRangeOptions.find(
            option => option.value === range,
          )?.start_date
        }
        break
      case 'project_duration': {
        const selectedOption = staticDateRangeOptions.find(
          option => option.value === range,
        )
        start = selectedOption?.start_date
        end = selectedOption?.end_date
        break
      }
      default:
        break
    }

    setDate([start ?? null, end ?? null])
    setShowCalendar(false)
    onDateChange!([start ?? null, end ?? null])
  }

  useEffect(() => {
    if (startDate && endDate) {
      setDate([startDate, endDate])
    } else if (startDate && !endDate) {
      setDate(startDate)
    }
  }, [startDate, endDate])

  useEffect(() => {
    setStaticDateRange(defaultStaticDateRange || '')
  }, [defaultStaticDateRange])

  useEffect(() => {
    if (applyOrCancel === 'apply') {
      onDateChange!(dateForApply)
      setShowCalendar(false)
      setApplyOrCancel('')
    } else if (applyOrCancel === 'cancel') {
      setShowCalendar(false)
      setApplyOrCancel('')
    }
  }, [applyOrCancel, dateForApply, onDateChange, setApplyOrCancel])

  useEffect(() => {
    if (autoFocus) {
      toggleCalendar({} as React.MouseEvent)
    }
  }, [autoFocus, toggleCalendar])

  const getStaticDateRangeActiveStyles = (value: IStaticRangeOption) =>
    value === staticDateRange ? staticDateRangeActiveStyles : {}

  const dateFormatWithDay = (value: Date) => {
    const newDate = format(new Date(value), 'eee dd/MM/yyyy')
    return newDate
  }

  return (
    <Box
      className={`datepicker ${disabled ? 'disabled' : ''}`}
      role="button"
      tabIndex={0}
      onBlur={onCalendarClose}
      onKeyUp={onCalendarOpen}
      style={{
        outline: 'none',
        backgroundColor: disabled ? colors.primary.contrastText : undefined,
        border: 'none !important',
        ...wrapperStyles,
      }}
    >
      <Box
        className="selected-date"
        onClick={toggleCalendar}
        onKeyPress={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleCalendar(e)
          }
        }}
        role="button"
        tabIndex={0}
        style={{
          cursor: disabled ? 'not-allowed' : undefined,
          display: 'flex',
          alignItems: 'center',
          height: '38px',
          padding: '0',
        }}
      >
        <Box className="date">
          {/* {startDate && (
            <span className="start-date">
              {showDateWithDay
                ? dateFormatWithDay(startDate)
                : dateFormat(startDate)}
            </span>
          )}
          {endDate && (
            <span className="end-date">
              {showDateWithDay
                ? dateFormatWithDay(endDate)
                : dateFormat(endDate)}
            </span>
          )}
          {!startDate && !endDate && (
            <span className="placeholder">
              {placeholder ||
                (isDateRangeEnabled ? 'Select Date Range' : 'Select Date')}
            </span>
          )} */}
          <TextField
            inputRef={inputRef}
            InputProps={{
              fullWidth: true,
              startAdornment: <MaterialIcon role="button" icon="date_range" />,
            }}
            InputLabelProps={{
              shrink: !!startDate || showCalendar,
              sx: {
                color: 'red',
              },
            }}
            label={
              placeholder ||
              (isDateRangeEnabled ? 'Select Date Range' : 'Select Date')
            }
            sx={{
              border: 'none',
              '& .MuiOutlinedInput-root': {
                border: 'none',
              },
              '& .MuiInputLabel-root': {
                color: 'green',
              },
              '& .MuiInputLabel-shrink': {
                transform: 'translate(14px, -2px) scale(0.75) !important',
                fontSize: '14px !important',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderWidth: 0,
              },
            }}
            hiddenLabel
            placeholder={
              placeholder ||
              (isDateRangeEnabled ? 'Select Date Range' : 'Select Date')
            }
            value={
              startDate
                ? showDateWithDay
                  ? dateFormatWithDay(startDate)
                  : dateFormat(startDate)
                : ''
            }
          />
        </Box>
      </Box>
      {showCalendar && (
        <Box className={`calendar ${float}`}>
          <Box className="calendar-wrapper">
            {showStaticDateRange && (
              <ul className="calendar-sidebar">
                {staticDateRangeOptions.map(option => (
                  <li
                    key={option.value}
                    style={getStaticDateRangeActiveStyles(option.value)}
                  >
                    <Button
                      onClick={() =>
                        handleStaticDateRangeChange(option.value, toDateIsNull!)
                      }
                      style={{
                        ...getStaticDateRangeActiveStyles(option.value),
                      }}
                    >
                      {option.label}
                    </Button>
                  </li>
                ))}
              </ul>
            )}

            <Calendar
              onChange={onCalenderChange}
              value={toDateIsNull ? null : date}
              selectRange={selectRange}
              calendarType="US"
              minDate={minDate}
              maxDate={maxDate}
              onClickDay={onClickDay}
              defaultActiveStartDate={endDate}
              {...rest}
            />
          </Box>
          <Box>{actions}</Box>
        </Box>
      )}
    </Box>
  )
}
