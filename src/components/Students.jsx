import { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import data from "../api/fairytales.json";
import "../App.css";

function chunkArray(array, size) {
	return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
		array.slice(i * size, i * size + size)
	);
}

function Students() {
	const [currentPage, setCurrentPage] = useState(0);
	const studentChunks = chunkArray(data, 6);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentPage((prev) => (prev + 1) % studentChunks.length);
		}, 5000);

		return () => clearInterval(interval);
	}, [studentChunks.length]);

	return (
		<section className="students-section">
			<h1 className="section-title">STUDENTS</h1>
			<p className="section-subtitle">Multimedia & Creatieve Technologie</p>
			<div className="students-list">
				{studentChunks[currentPage].map((student) => (
					<StudentCard key={student.id} student={student} />
				))}
			</div>
		</section>
	);
}

export default Students;
