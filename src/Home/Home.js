import React, {useState} from 'react'
import axios from 'axios'
import './style.css'
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate();
    const [pesquisa , setPesquisa] = useState ('')

    const handlePesquisa = () => {
      axios.get(`https://api.giphy.com/v1/gifs/search`, {
          params: {
            api_key: 'acrjMoGz0Y9rvYlujADEkDaTs21Upa5L' ,
            q: pesquisa,
            limit: 1000
            
          }
        })

        .then((response) => {
          const giffs = response.data.data
          const giffsUrl = []
          giffs.map ((giff) => { 
            giffsUrl.push(giff.images.fixed_height.url) 
          })
          localStorage.setItem('giffsUrl', JSON.stringify(giffsUrl))
          navigate('/giffs');
      })}
  
    return (
      <div className='container'>
          <input 
              type='text' 
              value={pesquisa}
              onChange={(e) => setPesquisa(e.target.value)}
              className='input'
          />
          <button
            onClick={handlePesquisa}
            className='button'        
          >Pesquisar</button>

         
      </div>
    )
  }
    
      

  
      
           
    


