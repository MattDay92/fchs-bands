import React, { useEffect, useState } from 'react'
import Background from '../components/images/FCHS-Band-Banner.webp'
import { getStorage, ref, uploadBytes, uploadBytesResumable, uploadString, getDownloadURL } from 'firebase/storage'


export default function Admin({ storage }) {
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

        if (fileUploadName){
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

    return (
        <div className='main admin'>
            <div id='hero' className='row home-hero hero-container'>
                <img className='banner' src={Background} />
                <div className='admin-hero-box'>
                    <h1 className='admin-hero-title'>Admin Page</h1>
                </div>
            </div>

            <h2 className='my-5 col-10 m-auto'>Note:  When uploading files, they will update automatically upon selection.  There is no "upload" button.  To see the updated preview, refresh the page.  </h2>
            
            <div className='upload'>
                <form className='admin-col'>
                    <h3>Marching Season Info</h3>
                    <embed id='MarchingSeasonInfo' src='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMarchingSeasonInfo?alt=media&token=799b1080-3fd8-4ed5-a65e-879a887c11d8'></embed>
                    <input type='file' name='MarchingSeasonInfo' onChange={handleFileChange} />
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
                    <h3>MB/CG Acknoledgment Form</h3>
                    <embed id='MarchingSeasonInfo' src='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBCGAcknoledgment?alt=media&token=01d494e0-4ca2-4881-8e4b-54d2b8d1b4ab'></embed>
                    <input type='file' name='MBCGAcknoledgment' onChange={handleFileChange} />
                </form>
                <form className='admin-col'>
                    <h3>MB/CG Health and Permission Form</h3>
                    <embed id='MarchingSeasonInfo' src='https://firebasestorage.googleapis.com/v0/b/fchs-bands.appspot.com/o/files%2FMBCGHealthAndPermission?alt=media&token=37e38df3-a3a6-4881-a376-cecbabba535e'></embed>
                    <input type='file' name='MBCGHealthAndPermission' onChange={handleFileChange} />
                </form>
            </div>
        </div>
    )
}
