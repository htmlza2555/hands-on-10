import { Link } from 'react-router-dom'
import { ContentDTO } from '../types/dto'
import classes from './Post.module.css'

interface IContentProps {
  content: ContentDTO
}

const Post = ({ content }: IContentProps) => {
  return (
    <div className={classes.post}>
      <Link className={classes.container} to={`/content/${content.id}`}>
        <img className={classes.thumbnailUrl} src={content.thumbnailUrl} />
        <div className={classes.detail}>
          <div className={classes.section}>
            <div className={classes.title}>
              <a>{content.videoTitle}</a>
              <a>{content.creatorName}</a>
            </div>
            <a>{content.comment}</a>
          </div>
          <div className={classes.rating}>
            <a>{content.postedBy.name}</a>
            <a>{content.rating}</a>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Post
