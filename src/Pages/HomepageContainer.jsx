import Header from './Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

const HomepageContainer = () => {
    return (
        <>
            <Header></Header>
            
            <div className='mt-16'>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </>
    );
};

export default HomepageContainer;