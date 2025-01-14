import '../styles/header.scss'
const NavBar = () =>{
return(
    <nav className="navBar d-flex flex-row ">
    <a className="navBar__item" href="">Home</a>
    <a className="navBar__item" href="">Project</a>
    <a className="navBar__item" href="">About Us</a>
    <a className="navBar__item" href="">FAQs</a>
</nav>
)
}
export default NavBar;