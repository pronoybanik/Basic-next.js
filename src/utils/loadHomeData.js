
const loadHomeData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        next: {
            revalidate: 5,
        }
    })
    return res.json();
};

export default loadHomeData;