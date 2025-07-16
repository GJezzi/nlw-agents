const formatter = Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'short',
})

export function formatRelativeDate(date: Date) {
  return formatter.format(date)
}
