import React from 'react';

const NoData = ({data}) => {
    return (
        <>
            <ul id="stickyNote">
                <li>
                    <span>
                        <h2>HEEBEE</h2>
                        <p>{data}</p>
                    </span>
                </li>
            
            </ul>
        </>
    );
};

export default NoData;