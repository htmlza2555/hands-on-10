import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import Create from './pages/Create'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content/:id" element={<PostDetail />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  )
}

export default App
