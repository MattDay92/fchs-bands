import React, { useEffect, useState } from 'react'
import Background from '../components/images/FCHS-Band-Banner.webp'
import { getStorage, ref, uploadBytes, uploadBytesResumable, uploadString, getDownloadURL } from 'firebase/storage'
import { getDatabase, ref as refDB, set } from 'firebase/database'

export default function Admin({ storage, signUpLink, PercussionItineraryName, MBItineraryName, MBWGIItineraryName }) {
    const [fileUpload, setFileUpload] = useState('')
    const [fileUploadName, setFileUploadName] = useState('')
    const [fileDownload, setFileDownload] = useState('')

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0]

        console.log(selectedFile)

        let reader = new FileReader();

        reader.readAsDataURL(selectedFile)

        reader.onload = () => {
            console.log(reader.result);
            setFileUpload(reader.result)
            setFileUploadName(event.target.name)
        }

        reader.onerror = () => {
            console.log(reader.error)
        }
    }

    const handleUpload = () => {
        const filesRef = ref(storage, `files/${fileUploadName}`)

        if (fileUpload) {
            uploadString(filesRef, fileUpload, 'data_url').then((snapshot) => {
                console.log('Uploaded a file!');
            })
        }

        if (fileUploadName) {
            downloadFile(fileUploadName)
        }
    }

    useEffect(() => {
        handleUpload()
    }, [fileUpload])


    const downloadFile = (name) => {
        const gsReference = ref(storage, `gs://fchs-bands.appspot.com/files/${name}`)

        getDownloadURL(gsReference)
            .then((url) => {
                const xhr = new XMLHttpRequest();
                xhr.onload = (event) => {
                    const link = xhr.responseURL
                    setFileDownload(link)
                    console.log('Ran Download')
                };
                xhr.open('GET', url);
                xhr.send()
            })
            .catch((error) => {
                console.log('ERROR Downloading File')
            })
    }

    const updateFormData = (event) => {
        event.preventDefault()
        const db = getDatabase();

        const linkURL = event.target.signupform.value

        set(refDB(db, 'signuplink'), {
            linkURL
        });
    }

    const updatePercussionItineraryName = (event) => {
        event.preventDefault()
        const db = getDatabase();

        const percussion = event.target.PercussionItineraryName.value

        set(refDB(db, 'percussion'), {
            percussion
        });
    }

    const updateMBItineraryName = (event) => {
        event.preventDefault()
        const db = getDatabase();

        const MB = event.target.MBItineraryName.value

        set(refDB(db, 'MB'), {
            MB
        });
    }

    const updateMBWGIItineraryName = (event) => {
        event.preventDefault()
        const db = getDatabase();

        const MBWGI = event.target.MBWGIItineraryName.value

        set(refDB(db, 'MBWGI'), {
            MBWGI
        });
    }

    return (
        <div className='main admin'>
            <div id='hero' className='row home-hero hero-container'>
                <img className='banner' src={Background} />
                <div className='admin-hero-box'>
                    <h1 className='admin-hero-title'>Admin Page</h1>
                </div>
            </div>

            <h2 className='my-5 col-10 m-auto'>Note:  When uploading files, they will update automatically upon selection.  There is no "upload" button.  To see the updated preview, refresh the page.  </h2>

            <div className='upload my-5 row'>
                <div className='admin-col my-5 row'>
                    <h2>Percussion Itinerary Name</h2>
                    <form onSubmit={updatePercussionItineraryName}>
                        <input className='form-control' name='PercussionItineraryName' defaultValue={PercussionItineraryName} />
                        <button type='submit'>Submit Link</button>
                    </form>
                </div>
                <div className='admin-col my-5 row'>
                    <h2>MB Football Itinerary Name</h2>
                    <form onSubmit={updateMBItineraryName}>
                        <input className='form-control' name='MBItineraryName' defaultValue={MBItineraryName} />
                        <button type='submit'>Submit Link</button>
                    </form>
                </div>
                <div className='admin-col my-5 row'>
                    <h2>MB Itinerary Name</h2>
                    <form onSubmit={updateMBWGIItineraryName}>
                        <input className='form-control' name='MBWGIItineraryName' defaultValue={MBWGIItineraryName} />
                        <button type='submit'>Submit Link</button>
                    </form>
                </div>
                <form className='admin-col' >
                    <h3>MB Football Itinerary</h3>
                    <embed id='MBFootballItinerary' src='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBFootballItinerary?alt=media&token=cc6d46ea-734e-4a75-b00e-729ac2a65b2d'></embed>
                    <input type='file' name='MBFootballItinerary' onChange={handleFileChange} />
                </form>
                <form className='admin-col' >
                    <h3>MB Itinerary</h3>
                    <embed id='MBWGIItinerary' src='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBWGIItinerary?alt=media&token=1d437222-6d73-4488-ab57-6dfcef3e5de1'></embed>
                    <input type='file' name='MBWGIItinerary' onChange={handleFileChange} />
                </form>
                <form className='admin-col' >
                    <h3>Percussion Itinerary</h3>
                    <embed id='PercussionItinerary' src='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FPercussionItinerary?alt=media&token=df5a865c-3388-4e66-bda0-27d39ae5630e'></embed>
                    <input type='file' name='PercussionItinerary' onChange={handleFileChange} />
                </form>
                <form className='admin-col'>
                    <h3>Percussion Forms/Paperwork</h3>
                    <embed id='PercussionPaperwork' src='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FPercussionPaperwork?alt=media&token=6d24055d-6a93-4c00-b6f1-1ce7431bbb39'></embed>
                    <input type='file' name='PercussionPaperwork' onChange={handleFileChange} />
                </form>
            </div>

            <div className='upload'>
                <form className='admin-col'>
                    <h3>Marching Season Info</h3>
                    <embed id='MarchingSeasonInfo' src='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMarchingSeasonInfo?alt=media&token=799b1080-3fd8-4ed5-a65e-879a887c11d8'></embed>
                    <input type='file' name='MarchingSeasonInfo' onChange={handleFileChange} />
                </form>
                <form className='admin-col'>
                    <h3>General Fee Letter</h3>
                    <embed id='MarchingSeasonInfo' src='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FGeneralFeeLetter?alt=media&token=d61c49b5-6a63-419a-b37f-2b7140a3c346&_gl=1*12crmpu*_ga*MTMzMzg1NjExNy4xNjc2NDE3OTIw*_ga_CW55HF8NVT*MTY5NjQ1MzYzNy4xMC4xLjE2OTY0NTM2NDEuNTYuMC4w'></embed>
                    <input type='file' name='GeneralFeeLetter' onChange={handleFileChange} />
                </form>
                <form className='admin-col'>
                    <h3>MB/CG Important Dates</h3>
                    <embed id='MarchingSeasonInfo' src='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBCGImportantDates?alt=media&token=5f2fe224-fd3d-4aa7-821c-07fc3be5cb7f'></embed>
                    <input type='file' name='MBCGImportantDates' onChange={handleFileChange} />
                </form>
                <form className='admin-col'>
                    <h3>MB/CG Budget Information</h3>
                    <embed id='MarchingSeasonInfo' src='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBCGBudgetInformation?alt=media&token=6b1ea0b4-349c-4ff0-bb07-9ae1bf9ce862'></embed>
                    <input type='file' name='MBCGBudgetInformation' onChange={handleFileChange} />
                </form>
                <form className='admin-col'>
                    <h3>MB/CG Financial Commitment Form</h3>
                    <embed id='MarchingSeasonInfo' src='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBCGFinancialCommitment?alt=media&token=129b2880-d036-41bc-8f89-594809a11328'></embed>
                    <input type='file' name='MBCGFinancialCommitment' onChange={handleFileChange} />
                </form>
                <form className='admin-col'>
                    <h3>MB/CG Member Fee Letter</h3>
                    <embed id='MarchingSeasonInfo' src='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBCGMemberFee?alt=media&token=b0b8f079-a84c-47bc-98c6-112679827957'></embed>
                    <input type='file' name='MBCGMemberFee' onChange={handleFileChange} />
                </form>
                <form className='admin-col'>
                    <h3>MB/CG Acknowledgment Form</h3>
                    <embed id='MarchingSeasonInfo' src='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBCGAcknoledgment?alt=media&token=01d494e0-4ca2-4881-8e4b-54d2b8d1b4ab'></embed>
                    <input type='file' name='MBCGAcknoledgment' onChange={handleFileChange} />
                </form>
                <form className='admin-col'>
                    <h3>MB/CG Health and Permission Form</h3>
                    <embed id='MarchingSeasonInfo' src='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBCGHealthAndPermission?alt=media&token=37e38df3-a3a6-4881-a376-cecbabba535e'></embed>
                    <input type='file' name='MBCGHealthAndPermission' onChange={handleFileChange} />
                </form>
                <form className='admin-col'>
                    <h3>Sponsorship Form</h3>
                    <embed id='MarchingSeasonInfo' src='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FSponsorship?alt=media&token=7fb5081f-a9b3-45eb-ad53-fbb5ed6f4dda'></embed>
                    <input type='file' name='Sponsorship' onChange={handleFileChange} />
                </form>

                <form className='admin-col'>
                    <h3>Financial Policy</h3>
                    <embed id='MarchingSeasonInfo' src='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FFinancialPolicy?alt=media&token=7fb5081f-a9b3-45eb-ad53-fbb5ed6f4dda'></embed>
                    <input type='file' name='FinancialPolicy' onChange={handleFileChange} />
                </form>
                <form className='admin-col'>
                    <h3>Volunteer Discount</h3>
                    <embed id='MarchingSeasonInfo' src='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FVolunteerDiscount?alt=media&token=7fb5081f-a9b3-45eb-ad53-fbb5ed6f4dda'></embed>
                    <input type='file' name='VolunteerDiscount' onChange={handleFileChange} />
                </form>

                <form className='admin-col' >
                    <h3>Miles to Dayton Image</h3>
                    <img id='MilesToDaytonIMG' className='w-50 m-auto' src='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMilesToDaytonIMG?alt=media&token=1d437222-6d73-4488-ab57-6dfcef3e5de1' />
                    <input type='file' name='MilesToDaytonIMG' onChange={handleFileChange} />
                </form>
                <div className='admin-img my-5 row' >
                    <h2 className='text-center'>Square Images are Preferred for Image Uploads</h2>
                    <form className='admin-col'>
                        <h3>Student of the Month #1</h3>
                        <div className='w-50 m-auto'><img className='w-100' id='MarchingSeasonInfo' src='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FStudentOfTheMonth1?alt=media&token=28d8003d-c0b8-4433-9533-6671006c119d&_gl=1*o6p08p*_ga*MTMzMzg1NjExNy4xNjc2NDE3OTIw*_ga_CW55HF8NVT*MTY5NjE3OTAzNC45LjEuMTY5NjE3OTgxOS41NS4wLjA.' /></div>
                        <input type='file' name='StudentOfTheMonth1' onChange={handleFileChange} />
                    </form><form className='admin-col'>
                        <h3>Student of the Month #2</h3>
                        <div className='w-50 m-auto'><img className='w-100' id='MarchingSeasonInfo' src='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FStudentOfTheMonth2?alt=media&token=68e8a44e-5310-42af-88be-44f43fee4198&_gl=1*aoykim*_ga*MTMzMzg1NjExNy4xNjc2NDE3OTIw*_ga_CW55HF8NVT*MTY5NjE3OTAzNC45LjEuMTY5NjE3OTgzMy40MS4wLjA.' /></div>
                        <input type='file' name='StudentOfTheMonth2' onChange={handleFileChange} />
                    </form><form className='admin-col'>
                        <h3>Student of the Month #3</h3>
                        <div className='w-50 m-auto'><img className='w-100' id='MarchingSeasonInfo' src='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FStudentOfTheMonth3?alt=media&token=08a71b0d-2a60-4882-8dc5-f1e8fbdaa6c3&_gl=1*1nupt4b*_ga*MTMzMzg1NjExNy4xNjc2NDE3OTIw*_ga_CW55HF8NVT*MTY5NjE3OTAzNC45LjEuMTY5NjE3OTg0NC4zMC4wLjA.' /></div>
                        <input type='file' name='StudentOfTheMonth3' onChange={handleFileChange} />
                    </form>
                </div>
                <div className='admin-col my-5 row'>
                    <h2>Homepage Sign-Up Form Link</h2>
                    <form onSubmit={updateFormData}>
                        <input className='form-control' name='signupform' defaultValue={signUpLink} />
                        <button type='submit'>Submit Link</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
