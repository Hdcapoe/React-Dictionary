import React from 'react'

const Homepage = () => {

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