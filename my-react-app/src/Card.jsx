import profilePic from "./assets/brendanfraserlokivariant.png"

function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="profile picture"></img>
            <h2>Mintteacup</h2>
            <p>I am a student studying Video Games Development and i am learning web development</p>
        </div>
    );
}

export default Card