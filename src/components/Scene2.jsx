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
					background: "linear-gradient(#302E79, #1A0F4A)",
					color: "white",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					fontSize: "48px",
					textAlign: "center",
					fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
				}}
			>
				<p>
					One stormy night, she rescued a <br /> drowning prince, bringing him
					to <br /> shore before vanishing into the sea.
				</p>

				{/* Ground */}
				<motion.div
					className="Ground"
					style={{
						position: "absolute",
						bottom: "-15vw",
						left: "50%",
						width: "100vw",
						height: "65vh",
						backgroundImage: `url(${base}/assets/Ground.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 1,
						transform: `translate(-50%, ${scrollY * 0.1}px)`,
					}}
				/>

				{/* Boat */}
				<motion.div
					className="Boat"
					style={{
						position: "absolute",
						top: "32%",
						right: "-45vw",
						width: "70vw",
						height: "70vh",
						backgroundImage: `url(${base}/assets/Boat.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 5,
					}}
				/>

				{/* Sinking prince */}
				<motion.div
					className="Sinking_prince"
					style={{
						position: "absolute",
						top: "30%",
						left: "5vw",
						width: "60vw",
						height: "55vh",
						backgroundImage: `url(${base}/assets/Sinking_prince.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 6,
					}}
				/>

				{/* Bubble  */}
				<motion.div
					className="Bubble"
					style={{
						position: "absolute",
						top: "20%",
						left: "13vw",
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
						top: "25%",
						left: "15vw",
						width: "8vw",
						height: "4vh",
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
						top: "30%",
						left: "14vw",
						width: "6vw",
						height: "3vh",
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
						top: "34%",
						left: "14vw",
						width: "4vw",
						height: "2vh",
						backgroundImage: `url(${base}/assets/Bubble.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 8,
					}}
				/>

				{/* Blue fish */}
				<motion.div
					className="Blue_Fish"
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

                {/* Blue fish */}
				<motion.div
					className="Blue_Fish"
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

				{/* Blue fish  */}
				<motion.div
					className="Blue_Fish_2"
					style={{
						position: "absolute",
						top: "70%",
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
						left: "70vw",
						width: "15vw",
						height: "10vh",
						backgroundImage: `url(${base}/assets/Purple_fish.png)`,
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
						top: "25%",
						left: "75vw",
						width: "12vw",
						height: "7vh",
						backgroundImage: `url(${base}/assets/Purple_fish.png)`,
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
