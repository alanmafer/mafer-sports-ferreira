import "./style.css"
import logo from "../../assets/Mafer.png";
import FeatherIcon from 'feather-icons-react';
import Cartwidget from "../Cartwidget";

export default function Navbar () {
    return (
        <nav class="nav-bar">
            <div class="logo">
                <img src={logo} alt="Mafer Sports"/>
            </div>
            <div class="nav-list">
                <ul>
                    <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Futebol</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">NBA</a></li>
                </ul>
            </div>
            <div class="login-button">
                <Cartwidget />
                <button><a href="#">Login / Cadastre-se</a><FeatherIcon icon="user"/></button>
            </div>
        </nav>
    )
}