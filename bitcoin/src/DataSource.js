const myWallet = {
    bitcoins: 2000
};

const getBitcoins = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve(myWallet);
    }, 1000);
  });


const API = {
    getBitcoins
}
export default API;