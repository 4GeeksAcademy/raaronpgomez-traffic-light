import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [color, setColor] = useState("light");
	const Click = (selectedColor) => {
        setColor(color === selectedColor ? "light" : selectedColor);
	};
	return (
		<>

			<div className="traffic-light mt-5">
				
				<button className={`red ${color === "red" ? "light" : ""}`} onClick={() => Click("red")}></button>

				<button className={`yellow ${color === "yellow" ? "light" : ""}`} onClick={() => Click("yellow")}></button>

				<button className={`green ${color === "green" ? "light" : ""}`} onClick={() => Click("green")}></button>
				
			</div>





		</>
	);
};

export default Home;