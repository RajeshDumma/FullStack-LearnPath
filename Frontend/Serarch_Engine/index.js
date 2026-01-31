
let data = [];

let resultRootElement = document.querySelector('.results');

fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(json=> {
    data = json; 
    console.log(data);
})

document.querySelector('#serachInput').addEventListener('keyup', ()=>{
    let serachTerm = document.querySelector('#serachInput').value.toLowerCase();
    let reusltArray = [];
    reusltArray = data.filter(product => product.title.toLowerCase().includes(serachTerm));
    renderProducts(reusltArray)
})



function renderProducts(products){
    document.querySelectorAll('.result').forEach( prod =>{
        prod.remove(); // remove all product if you search
    })
// single product
    products.forEach(product => {
        renderSingleProduct(product);
    })
}


function renderSingleProduct(product){
    let resultDiv = document.createElement('div');
    resultDiv.classList.add('result'); 

    let resultImage = document.createElement('img');
    let resultTitle = document.createElement('h4');
    let resultPrice = document.createElement('p');
    let purchaseButton = document.createElement('button');

    resultImage.src = product.image;
    resultTitle.innerText = product.title;
    resultPrice.innerText = `Price: ${product.price}`;
    purchaseButton.innerText = 'Purchase';

    resultDiv.append(
        resultImage,
        resultTitle,
        resultPrice,
        purchaseButton
    );

    resultRootElement.appendChild(resultDiv);
}
