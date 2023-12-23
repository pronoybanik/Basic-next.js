import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: 'Blogs | Hero',
    description: 'Hero Website',
}

const blogsInfo = [
    {
        id: 1,
        year: 2023,
        date: 3,
        title: "Title1"
    },
    {
        id: 2,
        year: 2022,
        date: 23,
        title: "Title2"
    },
    {
        id: 3,
        year: 2021,
        date: 12,
        title: "Title3"
    },
    {
        id: 4,
        year: 2020,
        date: 23,
        title: "Title4"
    },
];

const Blogs = () => {
    return (
        <div className='container mx-auto mt-4'>
            {
                blogsInfo.map(({ id, year, date, title }) => (
                    <Link key={id} href={{ pathname: `/blogs/${year}/${date}`, query: { title: title } }}>
                        <p className='border p-2 mt-2'>{title}</p>
                    </Link>
                ))
            }
        </div>
    );
};

export default Blogs;
