import { useEffect, useState } from 'react'
import { ContentDTO, UpdateContentDTO } from '../types/dto'
import axios from 'axios'

const usePost = (id: string) => {
  const token = localStorage.getItem('token')
  const [Post, setPost] = useState<ContentDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

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

  const editPost = async (editComment: string, editRating: number) => {
    const editContent: UpdateContentDTO = {
      comment: editComment,
      rating: editRating,
    }

    setIsSubmitting(true)
    try {
    } catch (err) {
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return { Post, isLoading, editPost }
}

export default usePost
