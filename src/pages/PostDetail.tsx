import { useParams } from 'react-router-dom'
import classes from './PostDetail.module.css'
import usePost from '../hooks/usePost'

const PostDetail = () => {
  const { id } = useParams()
  const { Post, isLoading } = usePost(id || '1')
  console.log(Post)

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {Post && (
          <>
            <div className={classes.titleGroup}>
              <h1 className={classes.videoTitle}>{Post.videoTitle}</h1>
              <a className={classes.creatorName} href={Post.creatorUrl}>
                <div>{Post.creatorName}</div>
              </a>
            </div>
            <div className={classes.video}>
              <video className={classes.videoUrl} src={Post.videoUrl}></video>
            </div>
            <div className={classes.commentGroup}>
              <p>{Post.comment}</p>
              <div className={classes.postedBy}>
                <p>{Post.rating}</p>
                <p>{Post.postedBy.name}</p>
                <p>{Post.createdAt}</p>
                <p>{Post.updatedAt}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default PostDetail
