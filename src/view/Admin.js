import React, {useState} from 'react'

export default function Admin() {
    const [itinerary, setItinerary] = useState([])

    const handleIteneraryChange = (event) => {
    }

    return (
        <div className='main admin'>
            <h1>This is the Admin Page</h1>
            <div className='itinerary-upload'>
                <form >
                    <h3>Itineraries</h3>
                    <input type='file' name='itinerary' />
                    <button type='submit'>Upload</button>
                </form>
            </div>
        </div>
    )
}
