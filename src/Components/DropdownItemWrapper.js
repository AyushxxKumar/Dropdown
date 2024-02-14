import Card from 'react-bootstrap/Card';

const DropdownItemWrapper = ({ children }) => {
    return (
        <Card style={{
            position: "absolute",
            left: "100%",
            top: "-100%"
        }}>
            <Card.Body>
                {children}
            </Card.Body>
        </Card>
    );
}

export default DropdownItemWrapper;