import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Dashboard } from './pages/dashboard'
import { Login } from './pages/login'
import { FinancialRecordsProvider } from './contexts/financial-record-context'

function App() {
  return (
  <Router>
    <div className="app-container">
      <Routes>
        <Route path="/" element={
          <FinancialRecordsProvider>
            <Dashboard />
          </FinancialRecordsProvider>
        }/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
