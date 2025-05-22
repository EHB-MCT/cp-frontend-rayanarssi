import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Outro = () => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			id="outro"
			style={{
				position: "relative",
				top: "10vw",
				left: 0,
				width: "100vw",
				height: "70vh",
				zIndex: 0,
			}}
		>
			<div
				id="outro"
				style={{
					position: "relative",
					backgroundColor: "#F7B974",
					width: "100%",
					height: "100%",
					overflow: "hidden",
				}}
			>
				{/* Question */}
				<motion.div
					style={{
						position: "absolute",
						top: "250px",
						color: "#684529",
						zIndex: 2,
						fontSize: "60px",
						textAlign: "center",
						width: "100vw",
						fontWeight: "bold",
					}}
				>
					<h1 style={{ fontSize: "inherit", margin: 0 }}>Did you like it?</h1>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							gap: "32px",
							marginTop: "32px",
                            fontSize: "30px",
						}}
					>
						<button
							style={{
								fontSize: "inherit",
								padding: "16px 40px",
								borderRadius: "12px",
								border: "none",
								background: "#684529",
								color: "#fff",
								cursor: "pointer",
							}}
						>
							Yes
						</button>
						<button
							style={{
								fontSize: "inherit",
								padding: "16px 40px",
								borderRadius: "12px",
								border: "none",
								background: "#684529",
								color: "#fff",
								cursor: "pointer",
							}}
						>
							No
						</button>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Outro;
