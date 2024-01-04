import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div>
      <header>
        Ts Amazon
        <main>
          <Outlet />
        </main>
        <footer> </footer>
      </header>
    </div>
  )
}

export default App
