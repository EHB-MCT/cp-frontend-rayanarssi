import React, { useEffect, useRef } from "react";

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

const Intro = () => {
	const containerRef = useRef(null);
	const base = import.meta.env.BASE_URL;

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
				const path = `${base}parallax/Intro/${img}`;
				console.log("Loading image:", path); // Debug line
				return (
					<img
						key={index}
						src={path}
						alt={img}
						className="parallax-layer absolute w-full object-cover top-0 left-0"
						style={{ zIndex: index }}
					/>
				);
			})}
		</div>
	);
};

export default Intro;
