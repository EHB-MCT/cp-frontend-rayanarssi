function StudentCard({ student }) {
	return (
		<div className="student-card">
			<img
				src={student.student}
				alt={`${student.name} ${student.surname}`}
				className="student-image"
			/>
			<p className="student-name"><strong>{student.name}</strong></p>
			<p className="student-surname">{student.surname}</p>
		</div>
	);
}

export default StudentCard;
