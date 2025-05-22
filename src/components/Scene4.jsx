import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Scene4 = () => {
	const [scroll, setScrollY] = useState(0);
	const [hasEntered, setHasEntered] = useState(false);
	const [mermaidImage, setMermaidImage] = useState(null);
	const sceneRef = useRef(null);
	const base = import.meta.env.BASE_URL;

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
			if (sceneRef.current) {
				const top = sceneRef.current.offsetTop;
				if (window.scrollY + window.innerHeight * 0.5 >= top) {
					setHasEntered(true);
				}
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (hasEntered) {
			setMermaidImage(`${base}/assets/Smile_mermaid.png`);
			const timer = setTimeout(() => {
				setMermaidImage(`${base}/assets/Crying_Mermaid.png`);
			}, 2500); // 2.5-second delay to change image

			return () => clearTimeout(timer);
		}
	}, [hasEntered, base]);

	return (
		<div
			id="Scene4"
			ref={sceneRef}
			style={{
				width: "100vw",
				height: "100vh",
				position: "relative",
				backgroundColor: "#1A0F4A",
			}}
		>
			<div
				id="Scene4"
				style={{
					top: "17vw",
					width: "100vw",
					height: "100vh",
					position: "relative",
					backgroundColor: "#1A0F4A",
					color: "white",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					fontSize: "36px",
					textAlign: "center",
					fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
				}}
			>
				<p
					style={{
						marginTop: "-5vw",
						marginLeft: "10vw",
						zIndex: 2,
					}}
				>
					The prince married another, unaware of her sacrifice. <br />{" "}
					Heartbroken and unable to return to the sea, she <br /> dissolved into
					sea foam, her soul rising to the sky.
				</p>

				{/* Beach */}
				<motion.div
					className="Beach"
					style={{
						position: "absolute",
						bottom: "16.4vw",
						left: "50vw",
						width: "100vw",
						height: "80vh",
						backgroundImage: `url(${base}/assets/Beach.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 1,
						transform: `translate(-50%, ${scrollY * 0.1}px)`,
					}}
				/>

				{/* Stars */}
				<motion.div
					className="Stars"
					style={{
						position: "absolute",
						bottom: "27vw",
						left: "110vw",
						width: "220vw",
						height: "100vh",
						backgroundImage: `url(${base}/assets/Stars.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "repeat",
						zIndex: 1,
						transform: `translate(-50%, ${scrollY * 0.1}px)`,
					}}
				/>

				{/* Smiling/Crying Mermaid */}
				<motion.div
					className="Crying_Mermaid"
					initial={{ x: "100vw" }}
					animate={hasEntered ? { x: 0 } : {}}
					transition={{ duration: 1.2 }}
					style={{
						position: "absolute",
						top: "25%",
						right: "-30vw",
						width: "50vw",
						height: "50vh",
						backgroundImage: `url(${mermaidImage})`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 5,
					}}
				/>

				{/* Princess */}
				<motion.div
					className="Princess"
					initial={{ x: "100vw" }}
					animate={hasEntered ? { x: 0 } : {}}
					transition={{ duration: 1.2, delay: 2 }}
					style={{
						position: "absolute",
						top: "20%",
						left: "20vw",
						width: "50vw",
						height: "50vh",
						backgroundImage: `url(${base}/assets/Princess.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 6,
					}}
				/>

				{/* Marry Prince */}
				<motion.div
					className="Marry prince"
					initial={{ x: "-100vw" }}
					animate={hasEntered ? { x: 0 } : {}}
					transition={{ duration: 1.2 }}
					style={{
						position: "absolute",
						top: "35%",
						left: "5vw",
						width: "40vw",
						height: "40vh",
						backgroundImage: `url(${base}/assets/Marry_prince.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 6,
					}}
				/>

				{/* Moon  */}
				<motion.div
					className="Moon"
					initial={{ x: "-100vw" }}
					animate={hasEntered ? { x: 0 } : {}}
					transition={{ duration: 1 }}
					style={{
						position: "absolute",
						top: "1%",
						left: "1vw",
						width: "25vw",
						height: "25vh",
						backgroundImage: `url(${base}/assets/Moon.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 8,
					}}
				/>
			</div>
		</div>
	);
};

export default Scene4;
