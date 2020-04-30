'use strict'

//const booksurl = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=jjW8zV1TbPLAbexFgRctCxoRtZMugayB';
//const popularurl = 'https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=ysgEbxsMniESOh5jhGlndAbiip1B5ogN';
const booksurl = 'https://apiexamplenytbooks.herokuapp.com/nps/svc/books/v3/lists/current/hardcover-fiction.json';



const bookSection0 = document.querySelector('#book0');
const bookTitle0 = document.querySelector('#book0 div a h3');
const bookLink0 = document.querySelector('#book0 div a');
const bookRanking0 = document.querySelector('#book0 div span');
const bookThumb0 = document.querySelector('#book0 div div a img');
const bookDescription0 = document.querySelector('#book0 p');

const bookSection1 = document.querySelector('#book1');
const bookTitle1 = document.querySelector('#book1 div a h3');
const bookLink1 = document.querySelector('#book1 div a');
const bookRanking1 = document.querySelector('#book1 div span');
const bookThumb1 = document.querySelector('#book1 div div a img');
const bookDescription1 = document.querySelector('#book1 p');
 
const bookSection2 = document.querySelector('#book2');
const bookTitle2 = document.querySelector('#book2 div a h3');
const bookLink2 = document.querySelector('#book2 div a');
const bookRanking2 = document.querySelector('#book2 div span');
const bookThumb2 = document.querySelector('#book2 div div a img');
const bookDescription2 = document.querySelector('#book2 p');

const bookSection3 = document.querySelector('#book3');
const bookTitle3 = document.querySelector('#book3 div a h3');
const bookLink3 = document.querySelector('#book3 div a');
const bookRanking3 = document.querySelector('#book3 div span');
const bookThumb3 = document.querySelector('#book3 div div a img');
const bookDescription3 = document.querySelector('#book3 p');

const bookSection4 = document.querySelector('#book4');
const bookTitle4 = document.querySelector('#book4 div a h3');
const bookLink4 = document.querySelector('#book4 div a');
const bookRanking4 = document.querySelector('#book4 div span');
const bookThumb4 = document.querySelector('#book4 div div a img');
const bookDescription4 = document.querySelector('#book4 p');

const bookSection5 = document.querySelector('#book5');
const bookTitle5 = document.querySelector('#book5 div a h3');
const bookLink5 = document.querySelector('#book5 div a');
const bookRanking5 = document.querySelector('#book5 div span');
const bookThumb5 = document.querySelector('#book5 div div a img');
const bookDescription5 = document.querySelector('#book5 p');

const updateUISuccess = function(books) {
    const parseData = JSON.parse(books);

    bookTitle0.textContent = parseData.results.books[0].title;
    bookLink0.href = parseData.results.books[0].amazon_product_url;
    bookThumb0.src = parseData.results.books[0].book_image;
    bookRanking0.textContent = parseData.results.books[0].rank;
    bookDescription0.textContent = parseData.results.books[0].description;

    bookTitle1.textContent = parseData.results.books[1].title;
    bookLink1.href = parseData.results.books[1].amazon_product_url;
    bookThumb1.src = parseData.results.books[1].book_image;
    bookRanking1.textContent = parseData.results.books[1].rank;
    bookDescription1.textContent = parseData.results.books[1].description;

    bookTitle2.textContent = parseData.results.books[2].title;
    bookLink2.href = parseData.results.books[2].amazon_product_url;
    bookThumb2.src = parseData.results.books[2].book_image;
    bookRanking2.textContent = parseData.results.books[2].rank;
    bookDescription2.textContent = parseData.results.books[2].description;

    bookTitle3.textContent = parseData.results.books[3].title;
    bookLink3.href = parseData.results.books[3].amazon_product_url;
    bookThumb3.src = parseData.results.books[3].book_image;
    bookRanking3.textContent = parseData.results.books[3].rank;
    bookDescription3.textContent = parseData.results.books[3].description;

    bookTitle4.textContent = parseData.results.books[4].title;
    bookLink4.href = parseData.results.books[4].amazon_product_url;
    bookThumb4.src = parseData.results.books[4].book_image;
    bookRanking4.textContent = parseData.results.books[4].rank;
    bookDescription4.textContent = parseData.results.books[4].description;

    bookTitle5.textContent = parseData.results.books[5].title;
    bookLink5.href = parseData.results.books[5].amazon_product_url;
    bookThumb5.src = parseData.results.books[5].book_image;
    bookRanking5.textContent = parseData.results.books[5].rank;
    bookDescription5.textContent = parseData.results.books[5].description;

    console.log(parseData);
   

   
   
    //const likns = results.books[0].buy_links
}
const updateUIError = function(error) {
    console.log(error);
}

const responseMethod = function(httpRequest) {
    if(httpRequest.readyState === 4) {
        if(httpRequest.status === 200) {
            updateUISuccess(httpRequest.responseText);
        }else{
            updateUIError(httpRequest.status + ': ' + httpRequest.responseText)
        }
    }
}

const createRequest = function(url) {
   const httpRequest = new XMLHttpRequest(url);
   httpRequest.addEventListener('readystatechange', (url) => responseMethod(httpRequest));
   httpRequest.open('GET', url);
   httpRequest.send();
};
//createRequest(popularurl);
//createRequest(booksurl);
/*windows.addEventListener('DOMContentLoaded', () => {
    
})*/

window.onload = function() {
    createRequest(booksurl);
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