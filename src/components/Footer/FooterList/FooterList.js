import React from 'react';

// Imports For Styling
import "./FooterList.css";

const FooterList = (props) => {
    return (
        <div>
            <h6 className='footer-list-header fw-bold'>{props.items.list_header}</h6>
            <div id="example-collapse-text">
                <ul className="footer-list list-unstyled">
                    {props.items.list_items.map((list_item, index) => (
                        <li className="footer-list-item fs-6 mt-3 fw-normal" key={index}>{list_item}</li>
                    ))}
                </ul>
            </div>
        </div >
    );
};

export default FooterList;
