export const showDateTime = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const now = new Date()
  const year = now.getFullYear()
  const month = months[now.getMonth()]
  const date = now.getDate()
  let hours = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }

  const dateMonthYear = `${month} ${date}, ${year}`
  const time = hours + ':' + minutes
  const fullTime = dateMonthYear + ' ' + time
  return fullTime + `:${seconds}`
}
