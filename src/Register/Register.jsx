import "./Register.scss";

function Register() {
  return (
    <div className="register">
      <div className="top">
        <img className="logo" src="https://logotyp.us/files/blockbuster.svg" />
        <button className="signin">Sign in</button>
      </div>
      <div className="container">
        <h1>Netflix ate us</h1>
        <h2>So we giving movies for free</h2>
        <div className="input">
          <input type="email" placeholder="email address" />
          <button className="start">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
