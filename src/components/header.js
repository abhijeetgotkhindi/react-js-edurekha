
import NavBar from './Navbar';
function Header(props) {
    return (
        <>
            <NavBar />
            <h1 style={{ marginBottom: "10px" }}>{props.header}</h1>
        </>

    );
}

export default Header;