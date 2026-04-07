import React, { useState } from "react";
import "./App.css";

const API_KEY = "55315232-3516df389284bbd1a355f6829";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const handleSearch = async (customPage = 1) => {
    if (!search) return;

    const res = await fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${search}&image_type=photo&per_page=12&page=${customPage}`
    );
    const d = await res.json();
    setData(d.hits);
    setPage(customPage);
  };

 
  const nextPage = () => {
    handleSearch(page + 1);
  };

  
  const prevPage = () => {
    if (page > 1) {
      handleSearch(page - 1);
    }
  };

  return (
    <div>
    
      <nav className="navbar">
        <h2>ImageApp</h2>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search images..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => handleSearch(1)}>Search</button>
        </div>
      </nav>

  
      <div className="gallery">
        {data.map((img) => {
          const tags = img.tags.split(",").slice(0, 4);

          return (
            <div className="card" key={img.id}>
              <img src={img.webformatURL} alt="" />

              {/* 💊 Pills */}
              <div className="pill-container">
                {tags.map((tag, index) => (
                  <span key={index} className="pill">
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>


      {data.length > 0 && (
        <div className="pagination">
          <button onClick={prevPage}>← Prev</button>
          <span>Page {page}</span>
          <button onClick={nextPage}>Next →</button>
        </div>
      )}


      <footer className="footer">
        <p>© 2026 Image App | Built with React</p>
      </footer>
    </div>
  );
}

export default App;