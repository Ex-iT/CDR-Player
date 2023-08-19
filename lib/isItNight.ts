// Night is between 8 at night and 7 in the morning
export default function () {
  const hour = new Date().getHours()
  return hour <= 7 || hour >= 20
}
