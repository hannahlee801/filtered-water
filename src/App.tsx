import { useState } from "react";
import "./App.css";
import Header from "./Header";
import FilteredWater from "./Filter";
import WaterBucket from "./WaterBucket";

function App() {
  let [waterImage, setWaterImage] = useState<boolean>(false);

  const handleOnClick = () => {
    let filteredWater: string[] = FilteredWater(water, contaminates);
    setWater(filteredWater);

    setWaterImage(true);
  };

  const [water, setWater] = useState<string[]>([
    "chlorine",
    "salt",
    "dirt",
    "calcite",
    "uranium",
    "rubber",
  ]);

  let contaminates: string[] = ["dirt", "uranium", "rubber"];

  return (
    <div>
      <Header />
      <p className="click">Click the machine to filter the water.</p>
      <div className="button">
        <button onClick={handleOnClick}>
          <img src="water-filter.jpg" alt="machine" />
        </button>
      </div>
      <>
        <div className="result">
          {waterImage && (
            <img className="bucket" src="water-bucket.png" alt="Water Bucket" />
          )}
          <WaterBucket water={water} />
        </div>
      </>
    </div>
  );
}

export default App;
