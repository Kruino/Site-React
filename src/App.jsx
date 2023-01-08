import { useState } from 'react'
import ProjectContainer from './components/ProjectContainer'

import './App.css'
import { fontSize } from '@mui/system'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='profile' style={{position: "relative"}}>
        <div className='background-image' style={{width: "100%", height: 150, overflow: "hidden", border: "solid 5px #1c1c1c", borderBottom: "none", borderRadius: "2vh 2vh 0 0"}}>
          <img src='https://dyako.net/wp-content/uploads/2020/04/technology-banner-background-with-hexagonal-shapes-text-space_1017-22589.jpg' style={{width: "100%", minWidth: 500}}/>
        </div>
        <div className='profile-image' style={{width: 150, height: 150, borderRadius: 300, border: "solid 6px #1c1c1c", overflow: "hidden", position: "absolute", top: 65, left: 20}}>
          <img src='https://avatars.cloudflare.steamstatic.com/b2bcbacc94024505c6aef2c5e21c6e123a6b2255_full.jpg' width={"100%"}/>
        </div>
        <div className='profile-name'>
          <h1 style={{color: "white", position: "absolute", fontSize:  30, left: 168, top: 110, backgroundColor: "#1c1c1c", padding: 10, borderRadius: "0 2vh 0 0"}}>Kruino</h1>
        </div>
        <div className='profile-info' style={{height: 100, backgroundColor: "#1c1c1c"}}></div>
      </div>
      <div className='project-container' style={{backgroundColor: "#1c1c1c"}}>
        <ProjectContainer id="1" title="C#"/>
        <ProjectContainer id="2" title="JavaScript"/>
      </div>
    </div>
  )
}

export default App
