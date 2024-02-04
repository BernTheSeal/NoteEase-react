let date = new Date()

export function getDay() {
    let day = date.toLocaleDateString('default' , {day: 'numeric', month: 'long', year: 'numeric'} )
    return day
}

export function getTime() {
    let hour = date.toLocaleTimeString([],{ hour: '2-digit', minute: '2-digit' })
    return hour
}

