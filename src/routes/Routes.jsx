import {createBrowserRouter} from "react-router-dom";
import Root from "../Root.jsx";
import HomePage from "../pages/HomePage.jsx";

export const router = createBrowserRouter([{
    path: '/', element: <Root></Root>, children: [{
        path: '/', element: <HomePage></HomePage>
    },
    ]
}])