import React from 'react'

export default function MBWindsCalendar() {
    return (
        <div className='container'>
            <div className='row calendar d-flex justify-content-center'>
                <iframe src="https://calendar.google.com/calendar/embed?src=franklinschools.org_t2ou07ror9aicf74o1t1er7kec%40group.calendar.google.com&ctz=America%2FNew_York"></iframe>
            </div>

            <div class="dropdown subscribe-btn">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Subscribe
                </button>
                <ul class="dropdown-menu">
                    <li><a href='webcal://https://calendar.google.com/calendar/ical/franklinschools.org_t2ou07ror9aicf74o1t1er7kec%40group.calendar.google.com/public/basic.ics' target='_blank' className='dropdown-item'>Add to Desktop Calendar</a></li>
                    <li><a class="dropdown-item" href="https://calendar.google.com/calendar/embed?src=franklinschools.org_t2ou07ror9aicf74o1t1er7kec%40group.calendar.google.com&ctz=America%2FNew_York" target='_blank'>Add to Google Calendar</a></li>
                </ul>
            </div>
        </div>
    )
}