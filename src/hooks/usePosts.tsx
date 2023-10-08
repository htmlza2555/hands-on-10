import { useEffect, useState } from 'react'
import { ContentDto } from '../types/dto'
import axios from 'axios'

const usePosts = () => {
  const [posts, setPosts] = useState<ContentDto[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<ContentDto[]>('https://api.learnhub.thanayut.in.th/content')

        setPosts(res.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchData()
  }, [])

  return { posts }
}

export default usePosts
