import React, { useState } from 'react'

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('')

  const handleBookTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onCreate(title)
    setTitle('')
  }

  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Book Title: </label>
        <input
          className='input'
          value={title}
          onChange={handleBookTitleChange}
        />
        <button className='button'>Create Book</button>
      </form>
    </div>
  )
}

export default BookCreate
