export const createQueryString = (
  search?: string,
  dateFilter: string = 'Year',
  categoryId?: number,
  eventTypeId?: number
) => {
  const params = new URLSearchParams('')
  if (search) params.append('searchString', search)
  if (dateFilter) params.append('dateFilter', dateFilter)
  if (categoryId) params.append('categoryId', categoryId.toString())
  if (eventTypeId) params.append('eventTypeId', eventTypeId.toString())
  return params.toString() ? `parameters?${params.toString()}` : 'parameters'
}
