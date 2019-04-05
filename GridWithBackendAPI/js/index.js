
let products;

var a = document.getElementById('grid');

function getProducts(){
    fetch('http://demo1853299.mockable.io/products')
    .then(Response => Response.json())
    .then( data => {
        products = data.products;
        makeDOMElement(products);
    }) 
}

function searchValue(){
    var textBox = document.getElementById('searchBox').value;
    const result = products.filter(product => product.title.includes(textBox));
    while (a.firstChild) {
        a.removeChild(a.firstChild);
    }
    makeDOMElement(result);
}

function makeDOMElement(data){
    if(data.length > 0) {
        var table = document.createElement('table');
        a.appendChild(table);
        var tr1 = document.createElement('tr');
        var th1 = document.createElement('th');
        var th2 = document.createElement('th');
        var th3 = document.createElement('th');
        var text11 = document.createTextNode('Text1');
        var text12 = document.createTextNode('Text2');
        var text13 = document.createTextNode('Text3');
    
        text11.nodeValue = 'Brand';
        text12.nodeValue = 'Title';
        text13.nodeValue = 'Rating';

        th1.appendChild(text11);
        th2.appendChild(text12);
        th3.appendChild(text13);

        tr1.appendChild(th1);
        tr1.appendChild(th2);
        tr1.appendChild(th3);

        table.appendChild(tr1);
        for(var i=0; i< data.length; i++){
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            
            var text3 = document.createTextNode('Text1');
            var text4 = document.createTextNode('Text2');
            var text5 = document.createTextNode('Text3');
    
            text3.nodeValue = data[i].brand;
            text4.nodeValue = data[i].title;
            text5.nodeValue = data[i].rating;
    
            td1.appendChild(text3);
            td2.appendChild(text4);
            td3.appendChild(text5);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);

            table.appendChild(tr);
        }
    }
    
}

getProducts();

