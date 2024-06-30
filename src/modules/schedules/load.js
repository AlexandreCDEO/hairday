import { hoursLoad } from "../form/hours-load.js"

const selectedDate = document.getElementById("date")

export function schedulesDay() {
    const date = selectedDate.value
    console.log(date)
    hoursLoad({ date })
}