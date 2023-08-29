
import { faChevronRight, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns'
import { useState } from 'react'


let meetings = [
  {
    id: 1,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2023-08-01T13:00',
    endDatetime: '2023-08-01T14:30',
  },
  {
    id: 2,
    name: 'Michael Foster',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2023-08-02T09:00',
    endDatetime: '2023-08-02T11:30',
  },
  {
    id: 3,
    name: 'Dries Vincent',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2023-08-03T17:00',
    endDatetime: '2023-08-03T18:30',
  },
  {
    id: 4,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2023-08-09T13:00',
    endDatetime: '2023-08-09T14:30',
  },
  {
    id: 5,
    name: 'Michael Foster',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2023-08-13T14:00',
    endDatetime: '2023-08-13T14:30',
  },
];



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())
  console.log(today)

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  let selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  )

  const [shown, setShown] = useState("invisible")

  const handleForm = () => {
    if (shown === "invisible") {
      setShown("")
    } else if (shown === "") {
      setShown("invisible")
    }
  }

  const [startDate, setStartDate] = useState(new Date())
  const [event, setEvent] = useState({})

  console.log(event)

  const handleAdd = () => {
    let e = { ...event, date: startDate }
    meetings.push(e)
  }

  return (
    <div className="pt-4 min-w-lg bg-primary rounded-xl m-4 text-secondary shadow-lg flex max-w-4xl p-6 border-2 border-secondary relative">
      <div className="border-r-4 border-secondary px-6">
        <div className="flex items-center justify-evenly">
          <FontAwesomeIcon icon={faPlus} onClick={handleForm} className='peer hover:cursor-pointer hover:text-fourth text-ternary' />
          <h2 className="flex-auto font-display text-secondary text-center">
            {format(firstDayCurrentMonth, 'MMMM yyyy')}
          </h2>
          <FontAwesomeIcon icon={faChevronLeft}
            type="button"
            onClick={previousMonth}
            className="mx-2 items-center justify-center p-1.5 text-ternary hover:text-fourth cursor-pointer"
          />
          <FontAwesomeIcon icon={faChevronRight}
            onClick={nextMonth}
            type="button"
            className="mx-2 items-center justify-center p-1.5 text-ternary hover:text-fourth cursor-pointer"
          />
        </div>
        <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </div>
        <div className="grid grid-cols-7 mt-2 text-sm">
          {days.map((day, dayIdx) => (
            <div
              key={day.toString()}
              className={classNames(
                dayIdx === 0 && colStartClasses[getDay(day)],
                'py-1.5'
              )}
            >
              <button
                type="button"
                onClick={() => setSelectedDay(day)}
                className={classNames(
                  isEqual(day, selectedDay) && 'text-white',
                  !isEqual(day, selectedDay) &&
                  isToday(day) &&
                  'text-red-500',
                  !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  isSameMonth(day, firstDayCurrentMonth) &&
                  'text-gray-900',
                  !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  !isSameMonth(day, firstDayCurrentMonth) &&
                  'text-gray-400',
                  isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                  isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  'bg-gray-900',
                  !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                  (isEqual(day, selectedDay) || isToday(day)) &&
                  'font-semibold',
                  'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                )}
              >
                <time dateTime={format(day, 'yyyy-MM-dd')}>
                  {format(day, 'd')}
                </time>
              </button>

              <div className="w-1 h-1 mx-auto mt-1">
                {meetings.some((meeting) =>
                  isSameDay(parseISO(meeting.startDatetime), day)
                ) && (
                    <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="bg-primary mx-4">
        <ul className='w-60'>
          {selectedDayMeetings.map((meeting) => {
            console.log(meeting)
            return (
              <li>
                <p>{meeting.name}</p>
                <p>{format(meeting.startDatetime,"h a")}</p>
              </li>
            )
          })

          }
        </ul>
      </section>
      <div className={`${shown} bg-primary h-72 w-lg absolute right-6 top-10 border-2 border-secondary rounded-lg p-2 flex flex-col justify-evenly`}>
        <h2>{`${format(selectedDay, 'MMM do, yyyy')}`}</h2>
        <input className="rounded border-2 border-secondary" type="text" placeholder="Title" onChange={(e) => setEvent({ ...event, title: e.target.value })}></input>
        <textarea className="rounded border-2 border-secondary resize-none" type="text" placeholder="Description" name="desc" cols={18} rows={3} onChange={(e) => setEvent({ ...event, description: e.target.value })}></textarea>
        <button onClick={handleAdd}>Submit</button>
      </div>
    </div>
  )
}

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]
