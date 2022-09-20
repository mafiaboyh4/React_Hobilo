import React, { FC, useState } from 'react'
import { Calendar, dateFnsLocalizer, Event } from 'react-big-calendar'
import withDragAndDrop, { withDragAndDropProps } from 'react-big-calendar/lib/addons/dragAndDrop'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import addHours from 'date-fns/addHours'
import startOfHour from 'date-fns/startOfHour'

import "react-big-calendar/lib/css/react-big-calendar.css";


const FullCalenderComponent = () => {
    const addDay = (date:Date, days:number) =>  {

        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    const [events, setEvents] = useState<Event[]>([
        {
          title: 'Best Trader Review',
          start,
          end,
        },
        {
          title: 'fibonacci trade',
          start:addDay(start, 4),
          end:addDay(end, 4),
        },
        {
          title: 'best indicator for forex',
          start,
          end,
        },
      ])
    
    
    
      return (
        <>
        <div className="d-flex flex-column justify-content-between h-100">
            <div>
            <h3>Event Table</h3>
            <span className="f-16 gray" style={{position:'relative' , bottom:'.8rem'}}>Our events calendar</span>
            </div>
            <div className="box">
                <Calendar
                defaultView='month'
                views={["month","week", "day"]}
                events={events}
                localizer={localizer}
                timeslots={1}
                style={{ height: '600px', width: '100%' }}
                />
            </div>
        </div>
        </>
      )
    }
    
    const locales = {
      'en-US': enUS,
    }
    const endOfHour = (date: Date): Date => addHours(startOfHour(date), 1)
    const now = new Date()
    const start = endOfHour(now)
    const end = addHours(start, 2)
    // The types here are `object`. Strongly consider making them better as removing `locales` caused a fatal error
    const localizer = dateFnsLocalizer({
      format,
      parse,
      startOfWeek,
      getDay,
      locales,
    })
    //@ts-ignore
    const DnDCalendar = withDragAndDrop(Calendar)
export default React.memo(FullCalenderComponent)