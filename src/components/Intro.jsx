import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Intro = () => {
	const [scrollY, setScrollY] = useState(0);
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
			id="intro"
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100vw",
				height: "100vh",
				zIndex: 1000,
			}}
		>
			<div
				id="intro-section"
				style={{
					position: "relative",
					width: "100%",
					height: "100%",
					overflow: "hidden",
				}}
			>
				{/* Background Image */}
				<motion.div
					className="Intro_background"
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100vw",
						height: "100vh",
						backgroundImage: `url(${base}/assets/3rd_line.png)`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						zIndex: 0,
						transform: `translateY(${scrollY * 0.1}px)`,
					}}
				/>

				{/* Title*/}
				<motion.div
					style={{
						position: "absolute",
						top: "200px",
						transform: "translate(-50%, -50%)",
						color: "#FCC943",
						zIndex: 2,
						fontSize: "30px",
						textAlign: "center",
						fontFamily: "Playfair Display SC Regular",
						width: "100vw",
					}}
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.5 }}
				>
					<h1> The Little Mermaid </h1>
				</motion.div>
			</div>
		</div>
	);
};

export default Intro;
