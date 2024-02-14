import { Col, Row } from "react-bootstrap";
import CustomButton from "./CustomButton";

// Component for a group of items with a heading and additional links
const ItemGroup = ({ heading, items, additionalLinks }) => {
    return (
        <Col>
            {/* Display the heading */}
            <h5 className="text-success">{heading}</h5>
            {/* Map through each item and display its label */}
            {items.map(item => (
                <Row key={item.label}>
                    <Col>{item.label}</Col>
                    {/* If the item has a chevron property, display a chevron icon */}
                    {item.chevron && <Col xs={1}>&#8250;</Col>}
                </Row>
            ))}
            {/* Display additional links */}
            {additionalLinks.map(link => (
                <Row key={link} className="mt-1">
                    <h6 className="text-success">{link}</h6>
                </Row>
            ))}
        </Col>
    );
}

// Clothing component
const Clothing = () => {
    return (
        <Row
            className="px-2"
            style={{
                width: "35rem",
                display: "flex",
                justifyContent: "center"
            }}>
            {/* First row containing two columns */}
            <Row className="pb-2">
                {/* First column for Accessories */}
                <Col xs={6} className="px-3 py-2 mt-2 border-end">
                    {/* Render ItemGroup component for Accessories */}
                    <ItemGroup
                        heading="Accessories"
                        items={[
                            {
                                label: "Beanies",
                                chevron: true,
                            },
                            {
                                label: "Caps and Hats",
                                chevron: true,
                            },
                            {
                                label: "Glasses",
                            },
                            {
                                label: "Gloves",
                            },
                            {
                                label: "Jewellery",
                            },
                            {
                                label: "Scarves",
                            },
                        ]}
                        additionalLinks={["All Accessories"]} />
                </Col>
                {/* Second column for Bottoms */}
                <Col xs={6} className="px-3 py-2 mt-2">
                    {/* Render ItemGroup component for Bottoms */}
                    <ItemGroup
                        heading="Bottoms"
                        items={[
                            {
                                label: "Casual Trousers",
                            },
                            {
                                label: "Jeans",
                                chevron: true,
                            },
                            {
                                label: "Leggings",
                            },
                            {
                                label: "Shorts",
                            },
                        ]}
                        additionalLinks={["All Bottoms"]} />
                </Col>
            </Row>
            {/* Second row containing two columns */}
            <Row className="pt-1 border-top">
                {/* First column for Jackets */}
                <Col xs={6} className="px-3 py-2 mt-2 border-end">
                    {/* Render ItemGroup component for Jackets */}
                    <ItemGroup
                        heading="Jackets"
                        items={[
                            {
                                label: "Blazors",
                            },
                            {
                                label: "Bomber Jackets",
                            },
                            {
                                label: "Denim Jackets",
                            },
                            {
                                label: "Duffle Coats",
                            },
                            {
                                label: "Leather Jackets",
                            },
                            {
                                label: "Parkas",
                            },
                        ]}
                        additionalLinks={["All Jackets"]} />
                </Col>
                {/* Second column for Tops */}
                <Col xs={6} className="px-3 py-2 mt-2">
                    {/* Render ItemGroup component for Tops */}
                    <ItemGroup
                        heading="Tops"
                        items={[
                            {
                                label: "Cardigans",
                            },
                            {
                                label: "Coats",
                            },
                            {
                                label: "Polo Shirts",
                            },
                            {
                                label: "Shirts",
                            },
                            {
                                label: "T-Shirts",
                                chevron: true,
                            },
                            {
                                label: "Vests",
                            },
                        ]}
                        additionalLinks={["All Tops"]} />
                </Col>
            </Row>
            {/* Custom button component for All Clothing */}
            <CustomButton>All Clothing</CustomButton>
        </Row>
    );
}

export default Clothing;
