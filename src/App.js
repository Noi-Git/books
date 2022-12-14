import { useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

function App() {
  const [books, setBooks] = useState([])

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle }
      }
      return book
    })
    setBooks(updatedBooks)
  }

  const deleteBookById = (id) => {
    const updatedBook = books.filter((book) => book.id !== id)
    return setBooks(updatedBook)
  }

  const createBook = (title) => {
    const randomId = Math.round(Math.random() * 9999)
    const updatedBook = [...books, { id: randomId, title }]
    setBooks(updatedBook)
  }

  return (
    <div className='app'>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App
