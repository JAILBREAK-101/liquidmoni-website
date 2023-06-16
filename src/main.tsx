import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'

// import Root, {rootLoader} from "./"


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <SignUp />
//   },
//   {
//     path: "/",
//     element: <About />
//   },
//   {
//     path: "/",
//     element: <Contact />
//   },
//   {
//     path: "/",
//     element: <Faq />
//   }
// ])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)


{/*       
      <Switch>
        <Route path="/sign-up"><SignUp /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/contact"><Contact /></Route>
      <Switch /> */}
      {/* <Route path="/fa"><SignUp /></Route> */}