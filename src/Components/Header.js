import { Container, Navbar } from "react-bootstrap";
import DropdownButton from "./DropdownButton";

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <DropdownButton />
            </Container>
        </Navbar>
    );
}

export default Header;