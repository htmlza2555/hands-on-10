import { Link } from 'react-router-dom'
import { ContentDTO } from '../types/dto'
import classes from './Post.module.css'

interface IContentProps {
  contents: ContentDTO
}

const Post = ({ contents }: IContentProps) => {
  return (
    <div className={classes.post}>
      <Link className={classes.container} to={`/content/${contents.id}`}>
        <img className={classes.thumbnailUrl} src={contents.thumbnailUrl} />
        <div className={classes.detail}>
          <div className={classes.section}>
            <div className={classes.title}>
              <a>{contents.videoTitle}</a>
              <a>{contents.creatorName}</a>
            </div>
            <a>{contents.comment}</a>
          </div>
          <div className={classes.rating}>
            <a>{contents.postedBy.name}</a>
            <a>{contents.rating}</a>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Post
