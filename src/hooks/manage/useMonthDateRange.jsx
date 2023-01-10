import React from 'react'

const getMonthDateRange = (month, year) => {
  const startMonthDate = new Date(year, month, 1)
  startMonthDate.setHours(0, 0, 0, 0)

  const endMonthDate = new Date(year, month + 1, 0)
  endMonthDate.setHours(23, 59, 59, 999)

  return {
    start: startMonthDate,
    end: endMonthDate
  }
}

const useMonthDateRange = () => {
  const currentDate = new Date()
  const dateRange = getMonthDateRange(currentDate.getMonth(), currentDate.getFullYear())
  return { startDate: dateRange.start.toISOString(), endDate: dateRange.end.toISOString() }
}

export default useMonthDateRange
