import { NavLink } from 'react-router-dom'
import classes from './Register.module.css'

const Register = () => {
  return (
    <form className={classes.container}>
      <h1 style={{ color: '#FF731D', fontSize: '36px' }}>Register</h1>
      <div className={classes.regis}>
        <div className={classes.inputGroup}>
          <div>Username</div>
          <input
            style={{
              width: '100%',
              height: '40px',
              borderRadius: '10px',
              fontSize: '20px',
              color: '#7f8588',
              borderColor: '#7f8588',
            }}
            required
          />
        </div>
        <div className={classes.inputGroup}>
          <div>Your Name</div>
          <input
            style={{
              width: '100%',
              height: '40px',
              borderRadius: '10px',
              fontSize: '20px',
              color: '#7f8588',
              borderColor: '#7f8588',
            }}
            required
          />
        </div>
        <div className={classes.inputGroup}>
          <div>Password</div>
          <input
            style={{
              width: '100%',
              height: '40px',
              borderRadius: '10px',
              fontSize: '20px',
              color: '#7f8588',
              borderColor: '#7f8588',
            }}
            required
          />
        </div>
        <div className={classes.inputGroup}>
          <div>Confirm Password</div>
          <input
            style={{
              width: '100%',
              height: '40px',
              borderRadius: '10px',
              fontSize: '20px',
              color: '#7f8588',
              borderColor: '#7f8588',
            }}
            required
          />
        </div>
        <button className={classes.register_btn} type="submit" disabled>
          Register
        </button>
        <NavLink to="/login" style={{ textDecoration: 'none', color: '#848c92', textAlign: 'center' }}>
          {`Already have an account? Login`}
        </NavLink>
      </div>
    </form>
  )
}

export default Register
