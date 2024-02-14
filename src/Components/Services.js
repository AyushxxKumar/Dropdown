import { Row, Col, Image } from "react-bootstrap";
import ServiceIcon from "../assets/servicesIcon.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import CustomButton from "./CustomButton";

const ServiceItem = ({ label, image, description }) => {
    return (
        <Col xs={6} className="my-2 hover">
            <Row className="align-items-center">
                <Col xs={2}>
                    <Image
                        style={{
                            width: "100%"
                        }}
                        src={image} />
                </Col>
                <Col>
                    <h6 className="text-success">{label}</h6>
                    <p>{description}</p>
                </Col>
            </Row>
        </Col>
    );
}

const serviceItems = [
    {
        label: "Service #1",
        image: ServiceIcon,
        description: "This is the item description",
    },
    {
        label: "Service #2",
        image: img2,
        description: "This is the item description",
    },
    {
        label: "Service #3",
        image: img3,
        description: "This is the item description",
    },
    {
        label: "Service #4",
        image: img4,
        description: "This is the item description",
    },
    {
        label: "Service #5",
        image: img5,
        description: "This is the item description",
    },
    {
        label: "Service #6",
        image: img6,
        description: "This is the item description",
    },
    {
        label: "Service #7",
        image: img7,
        description: "This is the item description",
    },
    {
        label: "Service #8",
        image: img8,
        description: "This is the item description",
    },
    {
        label: "Service #9",
        image: img9,
        description: "This is the item description",
    },
    {
        label: "Service #10",
        image: img10,
        description: "This is the item description",
    },
    {
        label: "Service #11",
        image: img11,
        description: "This is the item description",
    },
    {
        label: "Service #12",
        image: img12,
        description: "This is the item description",
    },
];

const Services = () => {
    return (
        <Row
            className="px-2"
            style={{
                width: "40rem"
            }}>
            {serviceItems.map(item => (
                <ServiceItem
                    key={item.label}
                    {...item} />
            ))}
            <CustomButton>Browse Services</CustomButton>
        </Row>
    );
}

export default Services;