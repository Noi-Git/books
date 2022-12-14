import React, { useState } from 'react'

const BookEdit = ({ book, onEditAndSave }) => {
  const [editTitle, setEditTitle] = useState(book.title)

  const handleEditTitle = (event) => {
    setEditTitle(event.target.value)
  }

  const handleSave = (event) => {
    event.preventDefault()

    onEditAndSave(book.id, editTitle)
  }

  return (
    <form className='book-edit' onSubmit={handleSave}>
      <label>Title: </label>
      <input className='input' value={editTitle} onChange={handleEditTitle} />
      <button className='button is-primary'>Save</button>
    </form>
  )
}

export default BookEdit
