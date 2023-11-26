export const formatDate = (inputDate: string = '2023-12-10T00:00:00') => {
  const date = new Date(inputDate)

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }

  return date.toLocaleDateString('en-US', options)
}
