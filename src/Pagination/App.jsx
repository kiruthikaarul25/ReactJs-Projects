import React, { useState } from 'react'
import Data from "./Data.json"
import './App.css'

const App = () => {

  const recordsPerPage = 10;
  const TotalPages = Math.ceil(Data.users.length / recordsPerPage)
  const [currentPage, setCurrentPage] = useState(1)

  function getRecords() {
    const startIndex = (currentPage - 1) * recordsPerPage
    const endIndex = startIndex + recordsPerPage
    return Data.users.slice(startIndex, endIndex)
  }

  function next() {
    if (currentPage < TotalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  function prev() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div>
      {
        getRecords().map((item, index) => {
          return (
            <div key={index}>
              <p>{item.name}</p>
            </div>
          )
        })
      }

      <button onClick={prev} disabled={currentPage === 1}>
        Prev
      </button>

      <span> {currentPage} / {TotalPages} </span>

      <button onClick={next} disabled={currentPage === TotalPages}>
        Next
      </button>

    </div>
  )
}

export default App