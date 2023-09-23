import React, { useEffect, useState } from 'react'
import { storage, filesRef } from '../index'
import { getStorage, ref, uploadBytes, uploadBytesResumable, uploadString, getDownloadURL } from 'firebase/storage'


export default function Admin({ storage }) {
    const [fileUpload, setFileUpload] = useState('')
    const [fileUploadName, setFileUploadName] = useState('')
    const [fileDownload, setFileDownload] = useState('')

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0]

        let reader = new FileReader();

        reader.readAsDataURL(selectedFile)

        reader.onload = () => {
            console.log(reader.result);
            setFileUpload(reader.result)
            setFileUploadName(selectedFile.name)
        }

        reader.onerror = () => {
            console.log(reader.error)
        }
    }

    const handleUpload = () => {
        // const filesRef = ref(storage, `files/${fileUploadName}`)
        const filesRef = ref(storage, `files/test`)

        if (fileUpload) {
            uploadString(filesRef, fileUpload, 'data_url').then((snapshot) => {
                console.log('Uploaded a file!');
            });
        }
    }

    useEffect(() => {
        handleUpload()
    }, [fileUpload])


    const downloadFile = () => {
        const gsReference = ref(storage, 'gs://fchs-bands.appspot.com/files/test')

        getDownloadURL(gsReference)
            .then((url) => {
                const xhr = new XMLHttpRequest();
                xhr.onload = (event) => {
                    const link = xhr.responseURL
                    setFileDownload(link)
                    const img = document.getElementById('testIMG')
                    img.setAttribute('src', link)
                };
                xhr.open('GET', url);
                xhr.send()
            })
            .catch((error) => {
                console.log('ERROR Downloading File')
            })
    }

    useEffect(() => {
        downloadFile()
    }, [])

    return (
        <div className='main admin'>
            <h1>This is the Admin Page</h1>
            <div className='itinerary-upload'>
                <form>
                    <h3>Itineraries</h3>
                    <input type='file' onChange={handleFileChange} />
                    <button onClick={handleUpload}>Upload</button>
                </form>
            </div>
            <div>
                <btn onClick={downloadFile} className='btn'>DOWNLOAD</btn>
            </div>

            <img src={fileDownload} id='testIMG'/>
        </div>
    )
}
