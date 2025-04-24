function StudentCard({ student }) {
	return (
		<div className="student-card">
			<img
				src={student.student}
				alt={`${student.name} ${student.surname}`}
				className="student-image"
			/>
			<p className="student-surname">
				<strong>{student.surname}</strong>
			</p>
			<p className="student-name">{student.name}</p>
		</div>
	);
}

export default StudentCard;
