export const getApiResources = async (url) =>{
    try {
        const res = await fetch(url);
        return res.ok ? await res.json() : false;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export const makeConcurrentRequest = async (urls) => {
    return await Promise.all(urls.map(url => {
        return fetch(url).then(res => res.json());
    }));
}