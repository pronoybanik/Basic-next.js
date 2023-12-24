// import { useParams, useSearchParams } from 'next/navigation';
import loadSingleBlogsData from '@/utils/loadSingleBlogsData';
import React from 'react';

export const metadata = {
    title: 'SingleBlog | Hero',
    description: 'Hero Website',
}

const SingleBlog = async ({ params }) => {
    // const [year, date] = params.id;
    // const params2 = useParams();
    // const searchParams2 = useSearchParams();
    // console.log(params2.id, searchParams2.get("title"));
    const { id, body, title } = await loadSingleBlogsData(params.id);

    return (
        <div className='text-center mt-52 border mx-auto w-96 '>
            <div className='font-bold py-2'>
                {id} . {title}
            </div>
            <div>
                {body}
            </div>
        </div>
    );
};

export default SingleBlog;