import axios from "axios"
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: 50
    },
    headers: {
        'X-RapidAPI-Key': 'b2d9a36917mshb1acc4fd423b83dp14d95ajsn6c8386b97a46',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com' 
    }
  }

export const ApiService = {
    async fetching(url){
        const res = await axios.get(`${BASE_URL}/${url}` , options)
        return res.data
    }
}