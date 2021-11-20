import './login.css'
import Google from '../imgs/google.png'
import Facebook from '../imgs/facebook.png'
import Github from '../imgs/github.png'

const Login = () => {
    const google = ()=>{
        window.open("http://localhost:5000/auth/google", "_self")
    }
    const github = ()=>{
        window.open("http://localhost:5000/auth/github", "_self")
    }
    const facebook = ()=>{
        window.open("http://localhost:5000/auth/facebook", "_self")
    }
    return (
        <div className="login">
            <h1 className="title">Choose your login method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginBtn google" onClick={google}>
                        <img src={Google} alt="" className="icon" />
                        <span>Google</span>
                    </div>
                    <div className="loginBtn facebook" onClick={facebook}>
                        <img src={Facebook} alt="" className="icon" />
                        <span>Facebook</span>
                    </div>
                    <div className="loginBtn github" onClick={github}>
                        <img src={Github} alt="" className="icon" />
                        <span>Github</span>
                    </div>
                </div>
                <div className="center">
                    <div className="line"/>
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="text" placeholder="username"/>
                    <input type="text" placeholder="password"/>
                    <button className="loginButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login
