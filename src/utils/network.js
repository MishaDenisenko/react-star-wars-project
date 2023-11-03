export const getApiResources = async (url) =>{
    try {
        const res = await fetch(url);
        return res.ok ? await res.json() : false;
    } catch (e) {
        console.log(e);
        return false;
    }
}
