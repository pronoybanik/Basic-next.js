
const loadSingleBlogsData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        // that cache: 'no-cache' fetch dynamic server site data rendering 
        cache: 'no-cache'
    })
    return res.json();
};

export default loadSingleBlogsData;