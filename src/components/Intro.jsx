import React, { useEffect, useRef } from "react";

const Intro = () => {
	const containerRef = useRef(null);
	const base = import.meta.env.BASE_URL;

	const layers = [
		"Cloud1_sky.png",
		"Cloud2_sky.png",
		"Cloud3_sky.png",
		"Left_1st_cloud.png",
		"Left_2nd_cloud.png",
		"Right_1st_cloud.png",
		"Right_2nd_cloud.png",
		"Right_3rd_cloud.png",
		"1st_line.png",
		"2nd_line.png",
		"3rd_line.png",
	];

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const layers = containerRef.current.querySelectorAll(".parallax-layer");
			layers.forEach((layer, index) => {
				const speed = 0.3 + index * 0.05;
				layer.style.transform = `translateY(${scrollY * speed}px)`;
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			ref={containerRef}
			className="relative h-[200vh] overflow-hidden bg-blue-200"
		>
			{layers.map((img, index) => {
				const path = `${base}assets/${img}`;
				console.log("Loading image:", path); // Debug line
				return (
					<img
						key={index}
						src={path}
						alt={img}
						className={`parallax-layer absolute 
              ${isText ? "w-3/4 left-1/2 transform -translate-x-1/2" : "w-full"}
              top-0 object-contain`}
						style={{ zIndex: 10 + index, pointerEvents: "none", opacity: 1 }}
					/>
				);
			})}
		</div>
	);
};

export default Intro;
