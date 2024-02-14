import { Button } from "react-bootstrap";

// CustomButton component definition
const CustomButton = ({ children }) => {
    return (
        // Render a Bootstrap Button component
        <Button
            variant="success" // Set the variant to success (green)
            className="mt-4 bg-gray text-success border-0 rounded-0 hover"> {/* Apply CSS classes for styling */}
            {children} {/* Render the child elements (button text) */}
        </Button>
    );
}

// Export the CustomButton component
export default CustomButton;
