import { useState, useEffect } from 'react'

const useFetchData = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` }
        })
        const result = await res.json()

        if (!res.ok) {
          throw new Error(result.message)
        }
        setData(result.data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(error.message)
      }
    }
    fetchData()
  }, [url])

  return { data, loading, error }
}

export default useFetchData