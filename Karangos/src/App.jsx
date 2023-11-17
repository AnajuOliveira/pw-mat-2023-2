import { useState } from 'react'
import './App.css'
import HeaderBar from './ui/HeaderBar'
import { ThemeProvider } from '@mui/material/styles'
import theme from './utils/theme'
import box from '@mui/material/Box'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CssBaseLine from '@mui/material/CssBaseline'

import HomePage from './pages/homePage'
import CarList from './pages/CarList'
import CustomerList from './pages/CustomerList'

function App() {

  return (
    <>
      <ThemeProvider theme = {theme}>
        <Box src = {{
          width: '100vw',
          minHidth: '100vh'
          backgroundColor: 'background.defalt'
        }}>
          <HeaderBar />
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
