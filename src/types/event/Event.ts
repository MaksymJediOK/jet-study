interface Creator {
  id: string
  fullName: string
}

interface IEvent {
  id: number
  title: string
  thumbnail: string
  imageSrc: string
  startDate: string
  startTime: string
  creator: Creator
  eventType: string
  lecturers: Creator[]
}

interface DetailedEvent extends IEvent {
  endDate: string
  endTime: string
  price: number
  shortDescription: string
  longDescription: string
  targetedAudience: string
  seatsAvailable: string
  location: string
  additionalResources: string
  isOnline: boolean
  waitingForConfirmation: boolean | null
  isAllowedToWatchAllContent: boolean | null
}

interface ShortEvent extends IEvent {
  eventTypeId: number
  categoryId: number
}
export type { Creator, IEvent, DetailedEvent, ShortEvent }
