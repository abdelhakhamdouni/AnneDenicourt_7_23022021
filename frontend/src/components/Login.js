import '../styles/Login.css'
import Banner from './Banner';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import logo from '../assets/icon.png'
import Form1 from './Form1';
import Form2 from './Form2';



function Login () {

    return <div className="bg-login"> <Banner /> 
    <div className="row justify-content-center mb-5">
        <div className="col-4 p-0">
            <Form1 />
        </div>
        <div className="col-4 p-0">
            <div className="login-logo"><img src={logo} alt="logo Groupomania"/></div>
            <Form2 />
        </div>
    </div>    
    <Footer />
    </div>
}
  

export default Login
