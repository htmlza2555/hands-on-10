import { useEffect, useState } from 'react'
import { ContentsDTO, CreateContentDTO, RegisterDTO } from '../types/dto'
import axios from 'axios'

const usePosts = () => {
  const token = localStorage.getItem('token')
  const [contents, setContents] = useState<ContentsDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isPosting, setPosting] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<ContentsDTO>('https://api.learnhub.thanayut.in.th/content')

        console.log(res.data)
        setContents(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const createPost = async (newUrl: string, newComment: string, newRating: number) => {
    const newPost: CreateContentDTO = {
      videoUrl: newUrl,
      comment: newComment,
      rating: newRating,
    }

    setPosting(true)
    try {
      const res = await axios.post<CreateContentDTO>('https://api.learnhub.thanayut.in.th/content', newPost, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(res.data)
    } catch (err) {
      console.error(err)
    } finally {
      setPosting(false)
    }
  }

  const registerUser = async (newUsername: string, newPassword: string, newName: string) => {
    const newUser: RegisterDTO = {
      username: newUsername,
      password: newPassword,
      name: newName,
    }

    setPosting(true)
    try {
      const res = await axios.post<RegisterDTO>('https://api.learnhub.thanayut.in.th/user', newUser, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      console.log(res.data.name)
    } catch (err) {
      console.error(err)
    } finally {
      setPosting(false)
    }
  }

  return { contents, isLoading, isPosting, createPost, registerUser }
}

export default usePosts
