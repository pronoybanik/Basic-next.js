import loadBlogsData from '@/utils/loadBlogsData';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: 'Blogs | Hero',
    description: 'Hero Website',
}

// const blogsInfo = [
//     {
//         id: 1,
//         year: 2023,
//         date: 3,
//         title: "Title1"
//     },
//     {
//         id: 2,
//         year: 2022,
//         date: 23,
//         title: "Title2"
//     },
//     {
//         id: 3,
//         year: 2021,
//         date: 12,
//         title: "Title3"
//     },
//     {
//         id: 4,
//         year: 2020,
//         date: 23,
//         title: "Title4"
//     },
// ];

const Blogs = async () => {

   const blogsInfo = await loadBlogsData();

    return (
        <div className='container mx-auto mt-4'>
            {
                blogsInfo.map(({ id, title }) => (
                    <Link key={id} href={`/blogs/${id}`}>
                        <p className='border p-2 mt-2'>{id}. {title}</p>
                    </Link>
                ))
            }
            {/* href={{ pathname: `/blogs/${id}`, query: { title: title } }} */}
        </div>
    );
};

export default Blogs;
