import React from 'react'
import axios from 'axios'
const Home = () => {

  const startProcess =async()=>{
    try {
      console.log('in start process function')
      const response = await axios.post( `${process.env.REACT_APP_BASE_URL}/api/v1/start`);
    console.log(response,'second response');
    } catch (error) {
      console.log(error)
    }
  }
  const handleUpload = async()=>{
    try {
        const response = await axios.post( `${process.env.REACT_APP_BASE_URL}/api/v1/get-signed`);
        console.log(response);
        await startProcess();
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <div>
     <button
     onClick={handleUpload}
     >Short Time response</button>
    </div>
  )
}

export default Home