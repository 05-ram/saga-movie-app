import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Error from "../pages/Error";

const RouterData = () => {
    const StrictRoute = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            errorElement: <Error />
        },
        {
            path: '/movie/:id',
            element: <Movie />
        }
    ])
    return StrictRoute;
}

export default RouterData;