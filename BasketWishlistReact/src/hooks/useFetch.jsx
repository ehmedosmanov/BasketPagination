import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = url => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url)
        const result = res.data
        setData(result)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(true)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}

export default useFetch