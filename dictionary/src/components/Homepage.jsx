import React, { useState } from 'react'
import { useState, useEffect } from "react";


const Homepage = () => {

const [word, setword] = useState([])

async function getData() {
  try {
    let response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/<word>')

  } catch (error) {
    
  }
}



  return (
    <div>Homepage</div>

    
  )
}

export default Homepage