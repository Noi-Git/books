import React, { useState } from 'react'
import BookEdit from './BookEdit'

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false)

  const handleDeleteBook = () => onDelete(book.id)
  const handleEditBook = () => setShowEdit(!showEdit)
  const handleEditAndSave = (id, newTitle) => {
    setShowEdit(false)
    onEdit(id, newTitle)
  }
  return (
    <div className='book-show'>
      {showEdit && <BookEdit book={book} onEditAndSave={handleEditAndSave} />}
      {!showEdit && <h3>{book.title}</h3>}
      <div className='action'>
        <button className='edit' onClick={handleEditBook}>
          Edit
        </button>
        <button className='delete' onClick={handleDeleteBook}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow
