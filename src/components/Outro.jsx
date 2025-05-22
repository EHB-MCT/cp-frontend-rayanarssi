import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Outro = () => {
	const [scrollY, setScrollY] = useState(0);
	const noBtnRef = useRef(null);
	const yesBtnRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const noBtn = noBtnRef.current;

		const handleMouseOver = () => {
			noBtn.style.display = "none";
		};

		noBtn.addEventListener("mouseover", handleMouseOver);
		return () => noBtn.removeEventListener("mouseover", handleMouseOver);
	}, []);

	useEffect(() => {
		const yesBtn = yesBtnRef.current;

		const handleClick = () => {
			window.scrollTo({ top: "-10vw", behavior: "smooth" });
		};

		yesBtn.addEventListener("click", handleClick);
		return () => yesBtn.removeEventListener("click", handleClick);
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
				style={{
					position: "relative",
					backgroundColor: "#F7B974",
					width: "100%",
					height: "100%",
					overflow: "hidden",
				}}
			>
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
							position: "relative",
						}}
					>
						<button
							ref={yesBtnRef}
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
							ref={noBtnRef}
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
