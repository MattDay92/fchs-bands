import React from 'react'

export default function AllBandsCalendar() {
    return (
        <div className='container'>
            <div className='row calendar d-flex justify-content-center'>
                <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&title=All%20Band%20Events&src=YTQ4ZTYxZTVkOTBkOTNiZTdkNWJhMTgxMzVjNzU5YzA2NzY0ZjA2MWE2MjlkMDM4NDMzNmY2MTU4Mjc5ZGRhM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZnJhbmtsaW5zY2hvb2xzLm9yZ19rMWt2ZzNvMGp0dWp0MGdrcWhwZGNydDQ1Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZnJhbmtsaW5zY2hvb2xzLm9yZ19zZjNyajlvZWptM3Y5YmphODZlYmJkOGw2Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZnJhbmtsaW5zY2hvb2xzLm9yZ18wdm52Z2Y1dnN2cnFkNHFnYW03MDNoNGEyY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZnJhbmtsaW5zY2hvb2xzLm9yZ19uM2dkNm1iZ29hMDkzbmZtYjIwNTUzazFkc0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZnJhbmtsaW5zY2hvb2xzLm9yZ190Mm91MDdyb3I5YWljZjc0bzF0MWVyN2tlY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZnJhbmtsaW5zY2hvb2xzLm9yZ19iOXBqbnE3OTFsMG1iMTEyajQzcGJmdmpyc0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZnJhbmtsaW5zY2hvb2xzLm9yZ18xNmgxbWNodmkyNHJkOWZ1ZGFpc2w5MW5vZ0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%238E24AA&color=%233F51B5&color=%23009688&color=%23F6BF26&color=%237986CB&color=%23D81B60&color=%23E4C441&color=%234285F4"></iframe>
            </div>

            <div class="dropdown subscribe-btn">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Subscribe
                </button>
                <ul class="dropdown-menu">
                    <li><a href='webcal://calendar.google.com/calendar/ical/a48e61e5d90d93be7d5ba18135c759c06764f061a629d0384336f6158279dda3%40group.calendar.google.com/public/basic.ics' target='_blank' className='dropdown-item'>Add to Desktop Calendar</a></li>
                    <li><a class="dropdown-item" href="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&title=All%20Band%20Events&src=YTQ4ZTYxZTVkOTBkOTNiZTdkNWJhMTgxMzVjNzU5YzA2NzY0ZjA2MWE2MjlkMDM4NDMzNmY2MTU4Mjc5ZGRhM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZnJhbmtsaW5zY2hvb2xzLm9yZ19rMWt2ZzNvMGp0dWp0MGdrcWhwZGNydDQ1Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZnJhbmtsaW5zY2hvb2xzLm9yZ19zZjNyajlvZWptM3Y5YmphODZlYmJkOGw2Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZnJhbmtsaW5zY2hvb2xzLm9yZ18wdm52Z2Y1dnN2cnFkNHFnYW03MDNoNGEyY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZnJhbmtsaW5zY2hvb2xzLm9yZ19uM2dkNm1iZ29hMDkzbmZtYjIwNTUzazFkc0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZnJhbmtsaW5zY2hvb2xzLm9yZ190Mm91MDdyb3I5YWljZjc0bzF0MWVyN2tlY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZnJhbmtsaW5zY2hvb2xzLm9yZ19iOXBqbnE3OTFsMG1iMTEyajQzcGJmdmpyc0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZnJhbmtsaW5zY2hvb2xzLm9yZ18xNmgxbWNodmkyNHJkOWZ1ZGFpc2w5MW5vZ0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%238E24AA&color=%233F51B5&color=%23009688&color=%23F6BF26&color=%237986CB&color=%23D81B60&color=%23E4C441&color=%234285F4" target='_blank'>Add to Google Calendar</a></li>
                </ul>
            </div>
        </div>
    )
}