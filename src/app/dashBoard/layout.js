import Link from 'next/link';
import React from 'react';


const DashBarInfo = [
    {
        path: "/dashBoard",
        title: "DashBoard",
    },
    {
        path: "dashBoard/addproduct",
        title: "Add Product",
    },
    {
        path: "/dashBoard/manageproduct",
        title: "Manager product",
    },
    {
        path: "/",
        title: "Home",
    },
];

const DashBoardLayout = ({ children }) => {
    return (
        <div className='flex container mx-auto mt-2 gap-2'>
            <div className='border py-2 px-10'>
                {DashBarInfo.map((NabBarData) => (
                    <Link className="block mt-2" key={NabBarData.path} href={NabBarData.path}>
                        {NabBarData.title}
                    </Link>
                ))}
            </div>
            <div>
                {children}
            </div>

        </div>
    );
};

export default DashBoardLayout;