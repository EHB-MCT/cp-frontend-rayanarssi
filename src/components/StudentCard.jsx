function StudentCard({ student }) {
	return (
		<div className="student-card">
			{student.fairytaleLink ? (
				<a
					href={student.fairytaleLink}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={student.pictureLink}
						alt={`${student.nameStudent} ${student.fnameStudent}`}
						className="student-image"
					/>
				</a>
			) : (
				<img
					src={student.pictureLink}
					alt={`${student.nameStudent} ${student.fnameStudent}`}
					className="student-image"
				/>
			)}
			<p className="student-surname">
				<strong>{student.nameStudent}</strong>
			</p>
			<p className="student-name">{student.fnameStudent}</p>
		</div>
	);
}

export default StudentCard;
