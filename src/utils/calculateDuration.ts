interface TimeData {
  startTime: string
  endTime: string
}

export const calculateDuration = (timeData: TimeData): string => {
  const startTime = new Date(`1970-01-01T${timeData.startTime}Z`)
  const endTime = new Date(`1970-01-01T${timeData.endTime}Z`)

  const durationInMilliseconds = endTime.getTime() - startTime.getTime()

  const hours = Math.floor(durationInMilliseconds / (60 * 60 * 1000))
  const minutes = Math.floor((durationInMilliseconds % (60 * 60 * 1000)) / (60 * 1000))

  let durationString = ''

  if (hours > 0) {
    durationString += `${hours} ${hours === 1 ? 'hour' : 'hours'}`
  }

  if (minutes > 0) {
    if (durationString.length > 0) {
      durationString += ' '
    }
    durationString += `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`
  }

  return durationString.trim()
}

const padZero = (value: number): string => (value < 10 ? `0${value}` : `${value}`)

export const transformTimeFormat = (startTime: string): string => {
  const parsedTime = new Date(`1970-01-01T${startTime}Z`)
  const hours = parsedTime.getHours()
  const minutes = parsedTime.getMinutes()

  return `${padZero(hours)}:${padZero(minutes)}`
}
export const transformDateFormat = (startDate: string): string => {
  const parsedDate = new Date(startDate)
  const day = parsedDate.getDate()
  const month = parsedDate.getMonth() + 1
  const year = parsedDate.getFullYear()

  return `${padZero(day)}.${padZero(month)}.${year}`
}
