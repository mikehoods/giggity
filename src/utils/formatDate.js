const formatDate = (date) => {
    const dateArray = date.split("-")
    const day = dateArray[2]
    const month = dateArray[1]
    const year = dateArray[0].slice(2)
    return `${month}/${day}/${year}`
}

export default formatDate;