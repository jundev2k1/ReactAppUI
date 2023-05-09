import Home from '../pages/Home'
import Explore from '../pages/Explore'

// Route Public
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/explore', component: Explore}
]
// Route Private (Redirect Login if not Login)
const privateRoutes = [

]

export { publicRoutes, privateRoutes }