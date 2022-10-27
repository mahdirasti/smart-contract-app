import moment from "jalali-moment"

const humanDate = (
  date: string,
  timeformat: string = "YYYY/MM/DD HH:mm",
  locale: any = "fa"
) => moment(date).locale(locale).format(timeformat)

export default humanDate
