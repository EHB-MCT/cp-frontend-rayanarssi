import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Scene1 = () => {
	const [scroll, setScrollY] = useState(0);
	const [hasEntered, setHasEntered] = useState(false);
	const sceneRef = useRef(null);
	const base = import.meta.env.BASE_URL;

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
			// Get Scene1's top offset
			if (sceneRef.current) {
				const top = sceneRef.current.offsetTop;

				// Trigger animation when entering Scene1 (50% from bottom)
				if (window.scrollY + window.innerHeight * 0.5 >= top) {
					setHasEntered(true);
				}
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			id="Scene1"
			ref={sceneRef}
			style={{
				width: "100vw",
				height: "100vh",
				position: "relative",
			}}
		>
			<div
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
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={hasEntered ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.3, duration: 1 }}
				>
					<p>
						Deep in the ocean, a <br /> young mermaid dreamed <br />
						of the human world.
					</p>
				</motion.p>

				{/* Mermaid */}
				<motion.div
					className="Mermaid"
					initial={{ x: "100vw" }}
					animate={hasEntered ? { x: 0 } : {}}
					transition={{ duration: 1.2 }}
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
					initial={{ x: -100, opacity: 0 }}
					animate={hasEntered ? { x: 0, opacity: 1 } : {}}
					transition={{ duration: 1 }}
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
					initial={{ x: -100, opacity: 0 }}
					animate={hasEntered ? { x: 0, opacity: 1 } : {}}
					transition={{ duration: 1.1 }}
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
					initial={{ x: -100, opacity: 0 }}
					animate={hasEntered ? { x: 0, opacity: 1 } : {}}
					transition={{ duration: 1.2 }}
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
					animate={hasEntered ? { x: [0, 10, 0] } : {}}
					transition={{ repeat: Infinity, duration: 2 }}
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
					animate={hasEntered ? { x: [0, -10, 0] } : {}}
					transition={{ repeat: Infinity, duration: 2.5 }}
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
					animate={hasEntered ? { y: [0, -10, 0] } : {}}
					transition={{ repeat: Infinity, duration: 2 }}
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
					initial={{ y: 20, opacity: 0 }}
					animate={hasEntered ? { y: 0, opacity: 1 } : {}}
					transition={{ duration: 1, delay: 0.5 }}
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
