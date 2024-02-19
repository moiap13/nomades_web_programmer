import { Link, RouterProvider, createBrowserRouter, NavLink, Outlet, useNavigation, defer } from 'react-router-dom'
import { SingleBlogPage } from './Page/SingleBlogPage'
import { ErrorPage } from './Page/ErrorPage'
import { BlogPage } from './Page/BlogPage'

const router = createBrowserRouter([
  {
    path: "/", 
    element: <>
        <RootNavigation />
      </>,
    errorElement: <ErrorPage />,
    children: [
      { 
        path: "blog",
        element: <div>
          <h1>Blog - Part</h1>
          <Outlet />
        </div>,
        children: [
          { 
            path: "", 
            element: <BlogPage />,
            loader: () => {
              const posts = fetch("https://jsonplaceholder.typicode.com/posts?_limit=10").then(r => r.json())
              return defer({posts})
            }
          },
          { path: ":id", element: <SingleBlogPage />}
        ]
      },
      { path: "contacts", element: <div><h1>Contacts</h1></div>},
    ]
  },
  {
    path: "/about", element: <div><h1>About</h1></div>
  }
  
])

function App() {
  return <RouterProvider router={router} />
}

function RootNavigation() {
  const { state } = useNavigation()
  return  <>
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <br />
        <NavLink to="/blog">Blog</NavLink>
        <br/>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
    </div>
    <div>
      <Outlet />
      { state === 'loading' && "Loading..." }
    </div>
  </>
}

export default App
