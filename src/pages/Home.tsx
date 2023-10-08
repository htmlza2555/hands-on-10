import classes from './Home.module.css'

const Home = () => {
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
        <div className={classes.feed}></div>
      </div>
    </>
  )
}

export default Home
