
import { faChevronRight, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
  formatISO
} from 'date-fns'
import { useState } from 'react'
import { TimePicker } from '@mui/x-date-pickers'

let meetings = [];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())


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


  const [event, setEvent] = useState({
    startDatetime: '',
    endDatetime: '',
    title: '',
    description: ''
  })

  console.log(event)

  const handleAdd = (e) => {
    console.log("event:", event)
    meetings.push(event)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
  }

  const handleFormat = (time) => {
    console.log(time)
    // let hours = time.slice(0, 2)
    // let min = time.slice(3, 5)
    // const DT = formatISO(add(selectedDay, { hours: hours, minutes: min }))
    // return DT
  }

  return (
    <div className="pt-4 min-w-lg  bg-primary rounded-xl m-4 text-secondary shadow-lg flex max-w-4xl p-6 border-2 border-secondary relative">
      <div className="border-r-2 border-secondary px-6">
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
                  'text-ternary',
                  !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  isSameMonth(day, firstDayCurrentMonth) &&
                  'text-gray-900',
                  !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  !isSameMonth(day, firstDayCurrentMonth) &&
                  'text-gray-400',
                  isEqual(day, selectedDay) && isToday(day) && 'bg-ternary',
                  isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  'bg-ternary',
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
            let start = new Date(meeting.startDatetime)
            console.log(start)

            let end = new Date(meeting.endDatetime)
            console.log(end)
            return (
              <li>
                <p>{meeting.title}</p>
                <p>{format(start, 'h:mm a') + " - " + format(end, "h:mm a")}</p>
              </li>
            )
          })

          }
        </ul>
      </section>
      <div className={`${shown} bg-primary h-80 w-64 absolute right-6 top-9 border-2 border-secondary rounded-lg p-2 flex flex-col justify-evenly`}>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <input id="title" className="rounded m-2 bg-primary border-b-2 border-secondary h-10 text-md" type="text" placeholder="Event" onChange={(e) => setEvent({ ...event, title: e.target.value })}></input>
          <div className='flex flex-col p-2 justify-between h-32 '>
            <TimePicker label="Start" slotProps={{textField:{variant:'filled'}}} defaultValue={selectedDay} openTo="hours" onChange={(e) => { setEvent({ ...event, startDatetime: e }) }} />
            <TimePicker label="End" slotProps={{textField:{variant:'filled'}}}defaultValue={selectedDay} openTo="hours" onChange={(e) => { setEvent({ ...event, endDatetime: e }) }} />
          </div>
          <div>
            <textarea id="description" className="rounded m-2 bg-primary border-b-2 border-secondary resize-none align-baseline" type="text" placeholder="Notes" name="desc" cols={18} rows={3} onChange={(e) => setEvent({ ...event, description: e.target.value })}></textarea>
          </div>
          <button type="submit" onClick={() => { handleAdd(); setEvent({}) }}>Submit</button>
        </form>
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
