export const numFormat = value => {
    let config = {}
    config = {
        notation: "compact",
        maximumFractionDigits: 0
    }
    return Intl.NumberFormat("en", config).format(value)
}