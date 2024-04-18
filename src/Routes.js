import Create from "./components/Create"
import Home from "./components/Home"
import Update from './components/Update'

let Routes = [
          { path: '/home', element: <Home /> },
          { path: '/create', element: <Create /> },
          { path: '/update/:id' , element:<Update/>}
]
export default Routes