import { Row, Col, Image } from "react-bootstrap";
import PlaceholderImage from "../assets/placeholderImage.png";
import CustomButton from "./CustomButton";

const GalleryItem = ({ label, image }) => {
    return (
        <Col xs={6} className="my-3">
            <Image
                style={{
                    width: "100%"
                }}
                src={image} />
            <h6 className="text-success">{label}</h6>
        </Col>
    );
}

const galleryItems = [
    {
        label: "Product #1",
        image: PlaceholderImage,
    },
    {
        label: "Product #2",
        image: PlaceholderImage,
    },
    {
        label: "Product #3",
        image: PlaceholderImage,
    },
    {
        label: "Product #4",
        image: PlaceholderImage,
    },
];

const Gallery = () => {
    return (
        <Row
            style={{
                width: "35rem"
            }}
            className="px-2">
            {galleryItems.map(item => (
                <GalleryItem {...item} />
            ))}

            <CustomButton>Browse Gallery</CustomButton>
        </Row>
    );
}

export default Gallery;