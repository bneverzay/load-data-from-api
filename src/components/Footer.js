import React from 'react';

const Footer = (props) => {
    const { credit, year } = props
    return (
        <div className="container-fluid">
            <hr />
            <div className="text-center">
                <small>
                    <span className="text-muted"> © {credit} | {year} </span>
                </small>
            </div>
        </div>
    )
}

export default Footer;