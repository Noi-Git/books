import React, { useState } from 'react'
import BookEdit from './BookEdit'

const BookShow = ({ book, onDelete }) => {
  const [showEdit, setShowEdit] = useState(false)

  const handleDeleteBook = () => onDelete(book.id)
  const handleEditBook = () => setShowEdit(!showEdit)
  // let content = <h3>{book.title}</h3>
  // if (showEdit) {
  //   content = <BookEdit />
  // }

  return (
    <div className='book-show'>
      {/* {content} */}
      {showEdit && <BookEdit book={book} />}
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
