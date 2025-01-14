import './App.css'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Description from './components/Description'
import Reviews from './components/Reviews'
import Services from './components/Services'
import LastSlide from './components/LastSlide'
function App() {

  return (
    <div className='main'>
    <Header />
    <Welcome />
    <Description />
    <Reviews />
    <Services />
    <LastSlide />
    </div>
  )
}

export default App
