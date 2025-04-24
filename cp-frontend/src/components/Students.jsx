import StudentCard from "./StudentCard";
import data from "../api/fairytales.json";
import "../App.css";

function Students() {
	return (
		<section className="students-section">
			<h1 className="section-title">STUDENTS</h1>
			<p className="section-subtitle">Multimedia & Creatieve Technologie</p>
			<div className="students-list">
				{data.map((student) => (
					<StudentCard key={student.id} student={student} />
				))}
			</div>
		</section>
	);
}

export default Students;