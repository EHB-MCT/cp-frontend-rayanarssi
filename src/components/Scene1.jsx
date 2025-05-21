import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Scene1 = () => {
	const [scroll, setScrollY] = useState(0);
	const base = import.meta.env.BASE_URL;

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			id="Scene1"
			style={{
				width: "100vw",
				height: "100vh",
				position: "relative",
			}}
		>
			<div
				id="Scene1"
				style={{
					width: "100vw",
					height: "100vh",
					position: "relative",
					backgroundColor: "#302E79",
					color: "white",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					fontSize: "68px",
					textAlign: "center",
					fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
				}}
			>
				<p>
					Deep in the ocean, a <br /> young mermaid dreamed <br />
					of the human world.
				</p>

				{/* Mermaid */}
				<motion.div
					className="Mermaid"
					style={{
						position: "absolute",
						top: "18%",
						right: "-50vw",
						width: "80vw",
						height: "70vh",
						backgroundImage: `url(${base}/assets/Mermaid.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 5,
					}}
				/>

				{/* Rock */}
				<motion.div
					className="Rock"
					style={{
						position: "absolute",
						top: "50%",
						left: "-2vw",
						width: "60vw",
						height: "55vh",
						backgroundImage: `url(${base}/assets/Rock_left.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 6,
					}}
				/>

				{/* Pink Coral */}
				<motion.div
					className="Pink_Coral"
					style={{
						position: "absolute",
						top: "65%",
						left: "18vw",
						width: "40vw",
						height: "35vh",
						backgroundImage: `url(${base}/assets/Pink_coral.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 6,
					}}
				/>

				{/* Green Coral */}
				<motion.div
					className="Green_Coral"
					style={{
						position: "absolute",
						top: "55%",
						left: "10vw",
						width: "30vw",
						height: "25vh",
						backgroundImage: `url(${base}/assets/Green_coral.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 5,
					}}
				/>

				{/* Red Coral */}
				<motion.div
					className="Red_Coral"
					style={{
						position: "absolute",
						top: "30%",
						left: "3vw",
						width: "40vw",
						height: "35vh",
						backgroundImage: `url(${base}/assets/Red_coral.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 5,
					}}
				/>

				{/* Blue fish 1 */}
				<motion.div
					className="Blue_Fish_1"
					style={{
						position: "absolute",
						top: "75%",
						left: "50vw",
						width: "14vw",
						height: "9vh",
						backgroundImage: `url(${base}/assets/Blue_fish.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 8,
					}}
				/>

				{/* Blue fish  */}
				<motion.div
					className="Blue_Fish_2"
					style={{
						position: "absolute",
						top: "82%",
						left: "55vw",
						width: "12vw",
						height: "7vh",
						backgroundImage: `url(${base}/assets/Blue_fish.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 8,
					}}
				/>

				{/* Purple fish  */}
				<motion.div
					className="Purple_Fish"
					style={{
						position: "absolute",
						top: "15%",
						left: "20vw",
						width: "15vw",
						height: "10vh",
						backgroundImage: `url(${base}/assets/Purple_fish.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 8,
					}}
				/>

                	{/* Bubble  */}
				<motion.div
					className="Bubble"
					style={{
						position: "absolute",
						top: "40%",
						left: "25w",
						width: "10vw",
						height: "5vh",
						backgroundImage: `url(${base}/assets/Bubble.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 8,
					}}
				/>
                {/* Bubble  */}
				<motion.div
					className="Bubble"
					style={{
						position: "absolute",
						top: "45%",
						left: "27vw",
						width: "6vw",
						height: "3vh",
						backgroundImage: `url(${base}/assets/Bubble.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 8,
					}}
				/>
			</div>
		</div>
	);
};

export default Scene1;
