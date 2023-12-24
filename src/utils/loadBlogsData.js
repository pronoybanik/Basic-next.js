
const loadBlogsData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
        // that cache: 'force-cache' fetch static data 
        cache: 'force-cache'
    })
    return res.json();
};

export default loadBlogsData;