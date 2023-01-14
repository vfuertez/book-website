import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './App'
import Show from './pages/Show'
import Index from './pages/Index'
import { bookLoader } from './loaders'
import { createAction } from './actions'
import { updateAction } from './actions'
import { selectedBook } from './loaders'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Index />} loader={bookLoader} />
      <Route path=":id" element={<Show />} loader={selectedBook} />
      <Route path="create" action={createAction}/>
      <Route path="update/:id" action={updateAction}/>
      <Route path="delete/:id" />
    </Route>
  )
)

export default router
