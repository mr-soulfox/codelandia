export function formatDate(data: string) {    
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

    const arrayDate = data.split('-')

    return `${arrayDate[2]} de ${months[Number(arrayDate[1]) - 1]}, ${arrayDate[0]}`
}