import React from "react";
import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import DatePicker from 'react-datepicker'
import '../custom-calendar-styles.scss'
import "react-datepicker/dist/react-datepicker.css"

const MyCalendar = (props) => {

    const localizer = momentLocalizer(moment)

    const events = [
        {
            title: "work",
            start: new Date(2023, 6, 5),
            end: new Date(2023, 6, 11)
        },
        {
            title: "vacation",
            start: new Date(2023, 6, 16),
            end: new Date(2023, 6, 23)
        }
    ]

    const [newEvent, setNewEvent] = useState({ title: '', start: "", end: "" })
    const [allEvents, setAllEvents] = useState(events)

    const handleAddEvents = () => {
        setAllEvents([...allEvents, newEvent])
    }

    return (
        <div className="calendar-widget">
            
            <div style={{ height:"300px", margin:'20px',display:"flex",flexDirection:"column",justifyContent:"space-evenly" }}>
            <h3>Add Event</h3>
            <input type="text" placeholder="Add Title" style={{width:"100px"}} value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}></input>
            <DatePicker placeholderText="Start Date" style={{margin:"10px"}} selected={newEvent.start} onChange={(start)=> setNewEvent({...newEvent, start})}/>
            <DatePicker placeholderText="End Date" style={{margin:"10px", color:"alicelue"}} selected={newEvent.end} onChange={(end)=> setNewEvent({...newEvent, end})}/>
            <button style={{width:"100px", color:"black"}}onClick={handleAddEvents}>Add Event</button>
            </div>

            <Calendar
                localizer={localizer}
                events={allEvents}
                startAccessor='start'
                endAccessor='end'
            />
        </div>
    )
}

export default MyCalendar