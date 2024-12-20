
import vid from './assets/vecteezy-animated-earth-with-camera-moving-around-it-fast-2158318_i7Xm71jr.mp4'
import Home from './component/Home'
import About from './component/About'
import Rapid from './component/Rapid'
import Footer from './component/Footer'
import Navbar from './component/Nav'


function App() {
  

  return (
  <div className='w-full'>
    <div className='relative h-[700px]'>
<video src={vid} autoPlay muted loop className=' object-cover fixed right-0 top-0 z-[-1] min-h-[700px]'>
</video>
<Navbar/>
<Home/>
</div>
<About/>
<Rapid/>
<Footer/>
    </div>
 
  
  )
}

export default App
