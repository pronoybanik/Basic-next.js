"use client"
import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';

// export const metadata = {
//     title: 'SingleBlog | Hero',
//     description: 'Hero Website',
// }

const SingleBlog = ({ params }) => {
    const [year, date] = params.id;
    const params2 = useParams();
    const searchParams2 = useSearchParams();
    console.log(params2.id, searchParams2.get("title"));

    return (
        <div className='text-center mt-96 border mx-auto w-96 '>
            Blog Years {year} of Date {date}
        </div>
    );
};

export default SingleBlog;