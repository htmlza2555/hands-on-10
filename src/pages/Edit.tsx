import ReactStars from 'react-stars'
import classes from './Edit.module.css'

const Edit = () => {
  return (
    <form className={classes.container}>
      <h1 style={{ color: '#FF731D', fontSize: '36px' }}>Edit contents</h1>
      <div className={classes.videoUrl}>
        <div className={classes.inputGroup}>
          <div>Comment (280 Characters maximum)</div>
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
        <div>
          <ReactStars count={5} size={24} color2="#FF731D" edit={true} half={false} />
        </div>
        <button className={classes.edit_btn} type="submit">
          Edit
        </button>
      </div>
    </form>
  )
}

export default Edit
