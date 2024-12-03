import profilePic from "./assets/brendanfraserlokivariant.png"

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">@Mintteacup</h2>
            <p className="card-text">I am a Video Games Development student and I am learning web development</p>
        </div>
    );
}

export default Card