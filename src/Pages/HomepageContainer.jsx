import Header from './Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

const HomepageContainer = () => {
    return (
        <>
            <Header></Header>

            <Outlet></Outlet>

            <Footer></Footer>
        </>
    );
};

export default HomepageContainer;