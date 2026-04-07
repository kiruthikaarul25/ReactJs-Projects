import "./Nav.css";

function Nav() {

  function dark(){
  let body=document.body;
  body.style.backgroundColor="black";
  body.style.color="white";
 }
 function light(){
  let body=document.body;
  document.body.style.backgroundColor="white";
  body.style.color="black";
 }

    return (
        <>
            <nav className="navbar">
                <div className="logo">My Profile</div>
     
                <div className="f">
                <button onClick={dark}>Dark</button>
                <button onClick={light}>Light</button>
                </div>
            </nav>

        </>
    );
}

export default Nav;