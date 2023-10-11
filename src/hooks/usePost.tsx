import { useEffect, useState } from 'react'
import { ContentDTO } from '../types/dto'
import axios from 'axios'

const usePost = (id: string) => {
  const [Post, setPost] = useState<ContentDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<ContentDTO>(`https://api.learnhub.thanayut.in.th/content/${id}`)

        setPost(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [id])

  return { Post, isLoading }
}

export default usePost
