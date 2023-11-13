import NavBar from "./components/NavBar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer.jsx";

function Root() {
    return (<>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </>)
}

export default Root
