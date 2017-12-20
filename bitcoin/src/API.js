const sendTracker = (id,content) => new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(`Success sent tracker with id ${id}`);
    }, 1000);
});

const API = {
    sendTracker
}
export default API;