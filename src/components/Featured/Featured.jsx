import Featured_movie from "./Featured_movie/pxfuel.jpg";
import "./Featured.scss";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";

function Featured({type}) {
  return (
    <div className="featured">
        {type && (
          <div className="category">
            <span>{type === "Movies" ? "Movies" : "Series"}</span>
            <select name="" id="">
              <option>Genre</option>
              <option value="Horror">Horror</option>
              <option value="Action">Action</option>
              <option value="Sci-fi">Sci-fi</option>
              <option value="Family">Family</option>
              <option value="Comedy">Comedy</option>
              <option value="Adventure">Adventure</option>
            </select>
          </div>
        )}
      <img src={Featured_movie} alt="FeaturedMovie" />
      <div className="info">
        <span className="moviehead">Alice in Borderland</span>
        <div className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
          doloremque distinctio dolorum atque non. Voluptas quidem harum
          reiciendis iure culpa, temporibus asperiores deleniti quaerat?
          Voluptatibus cumque natus quisquam quis quaerat atque illo maiores
          iste aliquid perspiciatis dolor unde a quasi, reiciendis repellendus
          mollitia consectetur? Reiciendis, incidunt laudantium. Delectus,
          perspiciatis facere.
        </div>
        <div className="buttons">
          <button>
            <PlayArrow className="icon" />
            <span>Play</span>
          </button>

          <button className="more">
            <InfoOutlined className="icon" />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Featured;
