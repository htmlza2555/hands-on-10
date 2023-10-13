import { NavLink, useNavigate } from 'react-router-dom'
import classes from './Register.module.css'
import usePosts from '../hooks/usePosts'
import { FormEvent, useState } from 'react'

const Register = () => {
  const { isPosting, registerUser } = usePosts()
  const navigate = useNavigate()
  const [newUsername, setNewUsername] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [newName, setNewName] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await registerUser(newUsername, newPassword, newName)

      navigate('/login')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
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
            onChange={(e) => {
              setNewUsername(e.target.value)
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
            onChange={(e) => {
              setNewName(e.target.value)
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
            type="password"
            onChange={(e) => {
              setNewPassword(e.target.value)
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
            type="password"
            onChange={(e) => {
              setNewPassword(e.target.value)
            }}
            required
          />
        </div>
        <button className={classes.register_btn} type="submit" disabled={isPosting}>
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
