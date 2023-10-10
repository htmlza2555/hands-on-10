import Post from '../components/Post'
import usePosts from '../hooks/usePosts'
import classes from './Home.module.css'

const Home = () => {
  const { contents, isLoading } = usePosts()

  if (isLoading) return <h1>Loading...</h1>

  console.log(contents)
  return (
    <>
      <div className={classes.container}>
        <nav className={classes.nav_container}>
          <h1 className={classes.head}>LearnHub</h1>
          <p className={classes.head2}>Hub for Educational Videos</p>
        </nav>
      </div>
      <div className={classes.feed_container}>
        <div className={classes.create}>
          <button className={classes.create_btn}>Create new content</button>
        </div>
        <div className={classes.feed}>
          {contents &&
            contents.data.map((content) => {
              return <Post key={content.id} contents={content} />
            })}
        </div>
      </div>
    </>
  )
}

export default Home
