import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage"

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path={"/"} element={<MainPage />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
