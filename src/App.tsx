import React, { useState } from 'react'
import Header from './components/Header'
import FloatingMenu from './components/FloatingMenu'
const App = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div>
      <Header></Header>
      {isVisible && <FloatingMenu/>}
    </div>
  )
}

export default App