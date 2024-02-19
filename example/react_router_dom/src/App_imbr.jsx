import { Link, RouterProvider, createBrowserRouter, NavLink, Outlet, useRouteError } from 'react-router-dom'
import { Single } from './Page/Single'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        path: 'blog',
        element: <div className='row'>
          <aside className='col-3'>
            <h2>Sidebar</h2>
          </aside>
          <main className="col-9">
            <Outlet />
          </main>
        </div>,
        children: [
          {
            path: '',
            element: <div>Mon Blog</div>
          },
          {
            path: ':id',
            element: <Single />
          },
        ]
      },
      {
        path: 'contacts',
        element: <div>Contacts</div>
      },
    ]
  },
  
])

function Root() {
  return <>
    <header>
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
    </header>
    <div className="container my-4">
      <Outlet />
    </div>
  </>
}

function PageError() {
  const error = useRouteError()
  console.log(error)
  return <>
    <h1>An errror occured</h1>
    <p>
      { error?.error?.toString() && error?.toString() }
    </p>
  </>

}
function App() {
  return <RouterProvider router={router} />
}

export default App
