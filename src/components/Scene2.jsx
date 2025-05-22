import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Scene2 = () => {
	const [scroll, setScrollY] = useState(0);
	const [hasEntered, setHasEntered] = useState(false);
	const [droppedFish, setDroppedFish] = useState([]);
	const boatDropZoneRef = useRef(null);
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
		document.body.style.overflow = droppedFish.length === 5 ? "" : "hidden";
	}, [droppedFish]);

	const handleFishDrop = (fishId, point) => {
		if (!boatDropZoneRef.current) return;

		const dropZoneRect = boatDropZoneRef.current.getBoundingClientRect();
		const { x, y } = point;

		const isInside =
			x >= dropZoneRect.left &&
			x <= dropZoneRect.right &&
			y >= dropZoneRect.top &&
			y <= dropZoneRect.bottom;

		if (isInside && !droppedFish.includes(fishId)) {
			setDroppedFish((prev) => [...prev, fishId]);
		}
	};

	return (
		<div
			id="Scene2"
			ref={sceneRef}
			style={{ width: "100vw", height: "100vh", position: "relative" }}
		>
			<div
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
						left: "49%",
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
					initial={{ y: -200 }}
					animate={{ y: hasEntered ? 0 : -200 }}
					transition={{ duration: 1 }}
					style={{
						position: "absolute",
						top: "32%",
						right: "-45vw",
						width: "70vw",
						height: "70vh",
						backgroundImage: `url(${base}/assets/Boat.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 7,
					}}
				/>

				{/* Shark */}
				<motion.div
					className="Shark"
					initial={{ x: 500 }}
					animate={{ x: hasEntered ? 0 : 500 }}
					transition={{ duration: 1 }}
					style={{
						position: "absolute",
						top: "10%",
						right: 0,
						width: "20vw",
						height: "20vh",
						backgroundImage: `url(${base}/assets/Shark.png)`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						zIndex: 7,
					}}
				/>

				{/* Sinking prince */}
				<motion.div
					className="Sinking_prince"
					initial={{ y: -200 }}
					animate={{ y: hasEntered ? 0 : -200 }}
					transition={{ duration: 1.2 }}
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

				{/* Fish - Draggable */}
				{[
					{ id: "purple1", top: "15%", left: "70vw" },
					{ id: "purple2", top: "25%", left: "75vw" },
				].map(({ id, top, left }) => (
					<motion.div
						key={id}
						drag
						onDragEnd={(e, info) =>
							handleFishDrop(id, { x: info.point.x, y: info.point.y })
						}
						style={{
							position: "absolute",
							top,
							left,
							width: "13vw",
							height: "8vh",
							backgroundImage: `url(${base}/assets/Purple_fish.png)`,
							backgroundSize: "contain",
							backgroundRepeat: "no-repeat",
							zIndex: 5,
							cursor: "grab",
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default Scene2;
