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
				position: "relative",
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

				{/* Title */}
				<motion.div
					style={{
						position: "absolute",
						top: "250px",
						color: "#FCC943",
						zIndex: 2,
						fontSize: "120px",
						textAlign: "center",
						width: "100vw",
						fontWeight: "bold",
					}}
				>
					<h1 style={{ fontSize: "inherit", margin: 0 }}>
						The Little <br /> Mermaid
					</h1>
				</motion.div>

				{/* Second Image */}
				<motion.div
					className="Intro_background"
					style={{
						position: "absolute",
						bottom: "-17vw",
						left: 0,
						width: "80vw",
						height: "65vh",
						backgroundImage: `url(${base}/assets/2nd_line.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 1,
						transform: `translateY(${scrollY * 0.1}px)`,
					}}
				/>

				{/* Second Image */}
				<motion.div
					className="2nd_image"
					style={{
						position: "absolute",
						bottom: "-15vw",
						left: "50%",
						width: "100vw",
						height: "65vh",
						backgroundImage: `url(${base}/assets/1st_line.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 1,
						transform: `translate(-50%, ${scrollY * 0.1}px)`,
					}}
				/>

				{/* White cloud right */}
				<motion.div
					className="White_cloud_right"
					style={{
						position: "absolute",
						top: "21vh",
						right: "-16.7vw",
						width: "32vw",
						height: "44vh",
						backgroundImage: `url(${base}/assets/Right_3rd_cloud.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 5,
						transform: `translate(-50%, ${scrollY * 0.1}px)`,
					}}
				/>

				{/* Orange cloud right */}
				<motion.div
					className="Orange_cloud_right"
					style={{
						position: "absolute",
						top: "34vh",
						right: "-16vw",
						width: "31vw",
						height: "37vh",
						backgroundImage: `url(${base}/assets/Right_2nd_cloud.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 5,
						transform: `translate(-50%, ${scrollY * 0.1}px)`,
					}}
				/>

				{/* Purple cloud right */}
				<motion.div
					className="Orange_cloud_right"
					style={{
						position: "absolute",
						top: "42.2vh",
						right: "-13.9vw",
						width: "27vw",
						height: "35vh",
						backgroundImage: `url(${base}/assets/Right_1st_cloud.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 5,
						transform: `translate(-50%, ${scrollY * 0.1}px)`,
					}}
				/>

				{/* Cloud sky 1 */}
				<motion.div
					className="Cloud_sky_1"
					style={{
						position: "absolute",
						top: 0,
						right: "30vw",
						width: "40vw",
						height: "40vh",
						backgroundImage: `url(${base}/assets/Cloud3_sky.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 5,
						transform: `translate(30vw, ${scrollY * 0.1}px)`,
					}}
				/>

				{/* Cloud sky 2 */}
				<motion.div
					className="Cloud_sky_2"
					style={{
						position: "absolute",
						top: "17vw",
						left: "25vw",
						width: "40vw",
						height: "35vh",
						backgroundImage: `url(${base}/assets/Cloud1_sky.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 1,
						transform: `translate(-50%, ${scrollY * 0.1}px)`,
					}}
				/>

				{/* Cloud sky 3 */}
				<motion.div
					className="Cloud_sky_3"
					style={{
						position: "absolute",
						top: "4vw",
						left: "10vw",
						width: "35vw",
						height: "30vh",
						backgroundImage: `url(${base}/assets/Cloud2_sky.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 1,
						transform: `translate(-50%, ${scrollY * 0.1}px)`,
					}}
				/>
			</div>
		</div>
	);
};

export default Intro;
