
import "./Signin.css"; 

export default function Signin() {
    return (
        <div className="Login">
            <h1>Welcome Back!</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="userName">Username</label>
                    <input type="text" id="userName" name="userName" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit" className="submit">Log in</button>
            </form>
            <div className="forgot-password">
                <a href="#">Forgot Password?</a>
            </div>
            <hr />
            <button type="submit" id="submit">Create Account</button>
        </div>

    );
}
