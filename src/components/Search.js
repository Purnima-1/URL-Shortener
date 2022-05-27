import React from 'react'
import { TextField,Button,LinearProgress } from '@material-ui/core'
import { useState } from 'react'
import shortcode from '../api/shortcode'


const HTTP_URL_VALIDATOR_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
const Search = () => {
    const [link,setLink] = useState('')
    const [short,setShort] = useState('')
    const [loading,setLoading] = useState(false)
    // console.log(link)
    const validateURL = (string) => {
        return string.match(HTTP_URL_VALIDATOR_REGEX)
    }

    const handleSubmit =(e) => {
         e.preventDefault()
         if (validateURL(link)){
            getLink()
            setLink('')
              setLoading(!loading)
         } else {
             setShort('Please enter a valid Url')
         }
            }
    const getLink = async() => {
      
    await shortcode
    .get(`https://api.shrtco.de/v2/shorten?url=${link}`)
    .then((response)=> {
        setShort(response.data.result.short_link)
        setLoading(false)
        })
        .catch((error) => {
         console.error(error)
        })
    }
  return (
    <>
     <form onSubmit = {(e)=> handleSubmit(e)} style={{display:'flex',flexDirection:'column'}}>
         <TextField style={{marginBottom:'6px'}} label='Input Your Link'
         variant = 'outlined' value={link}
         onChange= {(e)=>setLink(e.target.value)}
         />
         {!loading && (
          <Button onClick={(e)=> handleSubmit(e)} variant='contained' color='primary' style={{marginBottom:'20px'}}>
          Submit
      </Button>
         )}
         { loading && <LinearProgress/>

         }
         
     </form>
   {short && (
       <div>
           Short Link: {short}
       </div>
   )

   }
    </>
  )
}

export default Search