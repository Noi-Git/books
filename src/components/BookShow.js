import React, { useState } from 'react'
import BookEdit from './BookEdit'

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false)

  const handleDeleteBook = () => onDelete(book.id)
  const handleEditBook = () => setShowEdit(!showEdit)
  const handleEditSave = () => {
    setShowEdit(false)
  }
  return (
    <div className='book-show'>
      {/* {content} */}
      {showEdit && (
        <BookEdit book={book} onEdit={onEdit} onEditSave={handleEditSave} />
      )}
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
