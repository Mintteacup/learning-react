
function Countries(){
    
    const country1 = "England"; 
    const country2 = "Australia";
    const country3 = "South Korea";

    return(
        <ul>
            <li>{country1}</li>
            <li>{country2.toLowerCase()}</li>
            <li>{country3.toUpperCase()}</li>
        </ul>
    );
}

export default Countries