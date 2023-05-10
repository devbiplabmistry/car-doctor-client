import { Outlet } from "react-router-dom";
import Navigation from "../../pages/share/navigation/Navigation";
import Footer from "../../pages/share/footer/Footer";


const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;