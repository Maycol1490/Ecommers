import axios from 'axios'
import { useState } from 'react'

const useFetch = url => {
  const [data, setData] = useState()

  const getApiData = () => {
    axios.get(url)
      .then(res => setData(res.data))
      .catch(err => console.error(err))
  }

  return [data, getApiData]
}

export default useFetch