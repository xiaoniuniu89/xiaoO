import './App.css'
import SidePanel from './components/Sidebar'
import { Chat } from './components/Chat'

function App() {

  return (
    <>
    <div className='min-h-screen w-screen flex'>
      <SidePanel />
      <Chat />
    
    </div>
    </>
  )
}

export default App
