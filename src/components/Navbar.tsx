import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.menu}>
        <h2 className={classes.LearnHub}>LearnHub</h2>
      </div>
      <div className={classes.menu}>
        <button className={classes.login_btn}>Login</button>
        <button className={classes.regis_btn}>Register</button>
      </div>
    </nav>
  )
}

export default Navbar
