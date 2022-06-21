import React, {useEffect, useState} from 'react'
import './gif.css'

export default function Giffs() {
  const [gifs, setGifs] = useState ([])

  useEffect (() => {
      let giffsUrl = localStorage.getItem('giffsUrl')
      giffsUrl = JSON.parse(giffsUrl)
      setGifs(giffsUrl)
  }, [])
  return (
    <div className='b'>
      {gifs.map (
        gif => <div className='a' key={gif.id} >< img src =  {gif}  /></div>
        )
      }
    </div>
  )
}

