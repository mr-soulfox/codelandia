export function useDate(date: string) {
    if (date === undefined) {
        return ''

    }

    const months = [
        'Jan',
        'Fev',
        'Mar',
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        'Set',
        'Out',
        'Nov',
        'Dez'
    ]

    const arrayDate = date.split('-')

    return `${arrayDate[2]} de ${months[Number(arrayDate[1]) - 1]}, ${arrayDate[0]}`
}
