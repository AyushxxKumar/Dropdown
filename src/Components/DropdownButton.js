import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItemWrapper from './DropdownItemWrapper';
import Clothing from './Clothing';
import Gallery from './Gallery';
import Services from './Services';
import { Col, Form, Row } from 'react-bootstrap';
import DropdownDivider from './DropdownDivider';

const DropdownButton = () => {
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const mouseEnterHandler = (index) => {
        setOpenItemIndex(index);
    }

    const mouseLeaveHandler = () => {
        setOpenItemIndex(-1);
    }

    const dropdownItems = [
        {
            title: "Clothing",
            children: <Clothing />,
        },
        {
            title: "Gallery",
            children: <Gallery />
        },
        {
            title: "Services",
            children: <Services />
        },
    ];

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown
            </Dropdown.Toggle>

            <Dropdown.Menu
                className="border-0 rounded-0 py-0"
                style={{ width: "16rem" }}>
                <Form.Control
                    type="text"
                    placeholder="Search..."
                    className='bg-gray rounded-0 border-0 py-3' />
                {dropdownItems.map((item, index) => (
                    <React.Fragment key={item.title}>
                        {index > 0 && <DropdownDivider />}
                        <Dropdown.Item
                            onMouseEnter={() => mouseEnterHandler(index)}
                            onMouseLeave={mouseLeaveHandler}
                            style={{
                                position: "relative"
                            }}
                            className={`my-0 py-2 ${index === openItemIndex && "text-success border-success border-start border-end"}`}
                        >
                            <Row>
                                <Col>
                                    {item.title}
                                </Col>
                                <Col xs={1}>
                                    &#8250;
                                </Col>
                            </Row>
                            {openItemIndex === index && (
                                <DropdownItemWrapper>
                                    {item.children}
                                </DropdownItemWrapper>
                            )}
                        </Dropdown.Item>
                    </React.Fragment>
                ))}
                <DropdownDivider />
                <Dropdown.Header className='py-1'>Divider</Dropdown.Header>
                <DropdownDivider />
                <Dropdown.Item className="py-2">Page 1</Dropdown.Item>
                <DropdownDivider />
                <Dropdown.Item className="py-2">Page 2</Dropdown.Item>
                <DropdownDivider />
                <Dropdown.Item className="py-2">Page 3</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropdownButton;