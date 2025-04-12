function Portal(props) {
    console.log("Portal props:", props); // Debugging

    return (
        <>
            <img src={props.horizontal_cover} alt="" />
            <h2>{props.surname}</h2>
            <h2>{props.name}</h2>
        </>
    );
}

export default Portal;