import { useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

function App() {
  const [books, setBooks] = useState([])

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
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App
