import './App.css'
import Profile from './components/Profile'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Notification from './components/Notification'
import TimeLine from './components/TimeLine'
function App() {

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Profile />
        
        <div style={{ marginTop: -500}}>
        <Projects />
        </div>
        {/* <TimeLine position="associate software engineer" company="Ridecell" duration="2024-t33" description="" /> */}
        {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: -400, gap: '20px' }}>
          <Experience />
          <Experience />
        </div> */}
        {/* <Notification /> */}
      </div>
    </>
  )
}

export default App
