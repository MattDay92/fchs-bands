import React, {useEffect, useState} from 'react'
import { storage } from '../index'
import { getStorage, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage'


export default function Admin({ uploadFile }) {
    const [fileUpload, setFileUpload] = useState(null)

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0]
        setFileUpload(selectedFile)
    }

    const handleUpload = () => {
        if (fileUpload){
            const storage = getStorage()

            const filesRef = ref(storage, 'files/test.pdf')

            const metadata = {
                contentType: 'application/pdf'
            };

            filesRef.put(fileUpload).then(() => {
                console.log('File Uploaded!');
            });
        }
    }

    return (
        <div className='main admin'>
            <h1>This is the Admin Page</h1>
            <div className='itinerary-upload'>
                <form onSubmit={uploadFile}>
                    <h3>Itineraries</h3>
                    <input type='file' onChange={handleFileChange} />
                    <button onClick={handleUpload}>Upload</button>
                </form>
            </div>
        </div>
    )
}
