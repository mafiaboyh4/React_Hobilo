import { EventInput } from '@fullcalendar/react'

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Create NFT',
    start: todayStr,
    className:'event-color3',
  },
  {
    id: createEventId(),
    title: 'Deploy your Nft',
    start: todayStr + 'T12:00:00',
    className:'event-color2',
  },
  {
    id: createEventId(),
    title: 'Crypto News',
    start: todayStr + 'T24:00:00',
    className:'event-color1',
  }
]

export function createEventId() {
  return String(eventGuid++)
}
