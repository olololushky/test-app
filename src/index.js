import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import 'font-awesome/css/font-awesome.min.css'
import 'fontsource-roboto'

import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './theme'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
