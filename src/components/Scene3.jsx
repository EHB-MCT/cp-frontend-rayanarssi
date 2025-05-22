import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Scene3 = () => {
	const [scroll, setScrollY] = useState(0);
	const [hasEntered, setHasEntered] = useState(false);
	const [showTentacles, setShowTentacles] = useState(false);
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

	return (
		<div
			id="Scene3"
			ref={sceneRef}
			style={{
				width: "100vw",
				height: "100vh",
				position: "relative",
			}}
		>
			<div
				id="Scene3"
				style={{
					width: "100vw",
					height: "130vh",
					position: "relative",
					backgroundColor: " #1A0F4A",
					color: "white",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					fontSize: "34px",
					textAlign: "center",
					fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
				}}
			>
				<p
					style={{
						marginTop: "35vw",
					}}
				>
					Desperate to be with him, she made a deal with the <br /> Sea Witch.
					She would get human legs but lose her <br /> voice. If the prince did
					not love her, she would perish.
				</p>
				{/* Top */}
				<motion.div
					className="Rock_background"
					style={{
						position: "absolute",
						top: "-8vw",
						left: 0,
						width: "100vw",
						height: "100vh",
						backgroundImage: `url(${base}/assets/Rock_bg.png)`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						zIndex: 1,
						transform: `translateY(${scrollY * 0.1}px)`,
					}}
				/>
				{/* Rock left */}
				<motion.div
					className="Rock"
					initial={{ x: "-100vw" }}
					animate={hasEntered ? { x: 0 } : {}}
					transition={{ duration: 1 }}
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
				{/* Rock right */}
				<motion.div
					className="Rock"
					initial={{ x: "100vw" }}
					animate={hasEntered ? { x: 0 } : {}}
					transition={{ duration: 1 }}
					style={{
						position: "absolute",
						top: "47%",
						right: "-25vw",
						width: "60vw",
						height: "55vh",
						backgroundImage: `url(${base}/assets/Rock_right.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 6,
					}}
				/>
				{/* Potion */}
				<motion.div
					className="Potion"
					initial={{ y: 200, opacity: 0 }}
					animate={hasEntered ? { y: 0, opacity: 1 } : {}}
					transition={{ duration: 1.2 }}
					style={{
						position: "absolute",
						top: "40%",
						marginRight: 0,
						left: "46%",
						width: "30vw",
						height: "30vh",
						backgroundImage: `url(${base}/assets/Potion.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 6,
					}}
					onMouseEnter={() => {
						setShowTentacles(true);
						const audio = new Audio(`${base}/assets/Witch_sound.mp3`);
						audio.play();
					}}
					onMouseLeave={() => {
						setShowTentacles(false);
					}}
				/>
				{/* Tentacle left */}
				{showTentacles && (
					<motion.div
						className="Tentacle_left"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						style={{
							position: "absolute",
							top: "40%",
							left: "18%",
							width: "40vw",
							height: "30vh",
							backgroundImage: `url(${base}/assets/Tentacle_left.png)`,
							backgroundSize: "contain",
							backgroundRepeat: "no-repeat",
							zIndex: 0,
						}}
					/>
				)}

				{/* Tentacle right */}
				{showTentacles && (
					<motion.div
						className="Tentacle_right"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						style={{
							position: "absolute",
							top: "30%",
							left: "60%",
							width: "80vw",
							height: "60vh",
							backgroundImage: `url(${base}/assets/Tentacle_right.png)`,
							backgroundSize: "contain",
							backgroundRepeat: "no-repeat",
							zIndex: 0,
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default Scene3;
