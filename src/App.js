import React from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

import styles from '../src/styles/style.css'

function App() {
  const firstName = 'Zackary'
  const lastName = 'Williams'

  const styles = {
    color: 'blue',
    backgroundColor: 'yellow'
  }

  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      <p style = {styles}>Hello {firstName + " " + lastName}!</p>
    </div >
  )
}
export default App