export const getFormatedDate = (date) => {
    return date.toISOString().slice(0,10)
}

export const getDateMinudDays = (date,days) =>{
    return new Date(date.getFullYear(),date.getMonth(),date.getDate() - days)
}