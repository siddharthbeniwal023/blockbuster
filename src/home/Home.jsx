import "./Home.scss";
import NavBar from "../components/navbar/Navbar";
import Featured from "../components/Featured/Featured";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <Featured type="Movies"/> 
    </div>
  );
}

export default Home;
