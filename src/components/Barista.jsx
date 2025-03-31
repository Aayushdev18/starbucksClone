import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import "./Barista.css";

const Barista = () => {
  return (
    <div className="divBarsi">
      <h2 className="bhead">Barista Recommends</h2>
      <div className="card1">
        <div>
          <img
            src="https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100501.webp"
            className="img"
            alt="Java Chip Frappuccino"
          />
          <p>Rs 420.00</p>
        </div>

        <div className="infotext">
          <FontAwesomeIcon icon={faLeaf} />
          <p className="javachip">Java Chip Frappuccino</p>
          <p className="tall">TALL(345 ml) .392 kcal</p>
        </div>

        <div className="Add">
          <button className="additem">Add Item</button>
        </div>
      </div>
    </div>
  );
};

export default Barista;
