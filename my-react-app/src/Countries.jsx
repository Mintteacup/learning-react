
function Countries(){
    
    const country1 = "Hawaii"; 
    const country2 = "Australia";
    const country3 = "South Korea";

    return(
        <>
        <h2>Countries I Want To Visit</h2>
        <ul>
            <li>{country1.toUpperCase()}</li>
            <li>{country2.toUpperCase()}</li>
            <li>{country3.toUpperCase()}</li>
        </ul>
        </>
    );
}

export default Countries