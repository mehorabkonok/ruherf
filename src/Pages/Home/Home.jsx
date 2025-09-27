import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet>
                <div>
                    <p>This is the Home page and parent of all the routes and components</p>
                </div>
            </Outlet>

            {/* The footer has to uncommented befor deployment */}
            <Footer></Footer>
        </div>
    );
};

export default Home;