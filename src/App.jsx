import Profile from './components/Profile'
import Resume from './components/Resume'
import './App.css'

function App() {
  return (
    <div className="container">
      <div className="left">
        <Profile />
      </div>
      <div className="right">
        <Resume />
      </div>
    </div>
  )
}

export default App