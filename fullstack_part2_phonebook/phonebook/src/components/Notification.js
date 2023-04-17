const Notification = ({ message, filter }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className='error'>
        {message}, {filter}
      </div>
    )
  }

export default Notification