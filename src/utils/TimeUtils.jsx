export function getDay() {
    let date = new Date()
    let day = date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
    return day
}

export function getTime() {
    let date = new Date()
    let hour = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    return hour
}
