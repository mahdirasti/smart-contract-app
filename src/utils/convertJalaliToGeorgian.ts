import moment from "jalali-moment"

export const convertJalaliToGeorgian = (date: string) => {
  if (!date) return new Date()
  return moment.from(date, "fa", "YYYY/MM/DD").unix()
}
