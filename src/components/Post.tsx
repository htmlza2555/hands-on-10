import { Link } from 'react-router-dom'
import { ContentDTO } from '../types/dto'
import classes from './Post.module.css'

interface IContentProps {
  contents: ContentDTO
}

const Post = ({ contents }: IContentProps) => {
  return (
    <div className={classes.post}>
      <Link to={`/content/${contents.id}`}>
        <img src={contents.thumbnailUrl} />
        <div>
          <div>
            <div>{contents.videoTitle}</div>
            <div>{contents.creatorName}</div>
            <div>{contents.comment}</div>
          </div>
          <div>
            <div>{contents.postedBy.name}</div>
            <div>{contents.rating}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Post
