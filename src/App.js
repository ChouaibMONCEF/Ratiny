import Header from "./components/Header"
import RatingList from "./components/RatingList"
import RatingStats from "./components/RatingStats"
import RatingForm from "./components/RatingForm"
import AboutPage from "./pages/AboutPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AboutIconLink from "./components/AboutIconLink"
import { RatingsProvider } from "./context/RatingsContext"

function App() {
  return (
    <RatingsProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <RatingForm />
                  <RatingStats />
                  <RatingList />
                </>
              }
            />
            <Route path='/About' element={<AboutPage />} />
          </Routes>
        </div>
        <AboutIconLink />
      </Router>
    </RatingsProvider>
  )
}

export default App
