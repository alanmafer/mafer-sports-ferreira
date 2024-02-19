import { Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import Checkout from "../pages/Checkout";
import Home from '../pages/Home';

function Router() {
    return (
        <>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Checkout" element={<Checkout />} />
            </Routes>
        </>
    )
}

export default Router;