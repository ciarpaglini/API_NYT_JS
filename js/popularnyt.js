'use strict'

//const booksurl = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=jjW8zV1TbPLAbexFgRctCxoRtZMugayB';
const popularurl = 'https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=ysgEbxsMniESOh5jhGlndAbiip1B5ogN';



const popupdateUISuccess = function (popular) {
    const parseData = JSON.parse(popular);

    console.log(parseData);

    //const likns = results.books[0].buy_links
}
const popupdateUIError = function (error) {
    console.log(error);
}

/*const responseMethod = function (httpRequest) {
    if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
            updateUISuccess(httpRequest.responseText);
        } else {
            updateUIError(httpRequest.status + ': ' + httpRequest.responseText)
        }
    }
}

const createRequest = function (url) {
    const httpRequest = new XMLHttpRequest(url);
    httpRequest.addEventListener('readystatechange', (url) => responseMethod(httpRequest));
    httpRequest.open('GET', url);
    httpRequest.send();
};
//createRequest(popularurl);
//createRequest(booksurl);
windows.addEventListener('DOMContentLoaded', () => {  
})*/
const createRequestPop = function(url) {
    fetch(url)
     .then((response) => {console.log(response)})
};

window.onload = function () {
    createRequestPop(popularurl);
};



/*const createRequest = function(url) {
   const httpRequest = new XMLHttpRequest(url);
   httpRequest.addEventListener('readystatechange', (url) => {
       if (httpRequest.readyState === 4) {
          console.log(httpRequest.responseText)
       }
   });
   httpRequest.open('GET', url);
   httpRequest.send();
};
createRequest(url);*/