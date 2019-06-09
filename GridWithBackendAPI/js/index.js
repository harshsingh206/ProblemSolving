
let products, brandProducts, filters;

var a = document.getElementById('grid');

function getProducts(){
    
    fetch('http://demo1853299.mockable.io/products')
    .then(Response => Response.json())
    .then( data => {
        products = data.products;
        fetch('http://demo1853299.mockable.io/filters')
        .then(Response => Response.json())
        .then( filterData => {
            filters = filterData;
            var brands = [];
            // makeDOMElement(products);
            makeDOMElement2(products);
            // for(let i=0; i<products.length; i++){
            //     brands.push(products[i].brand);
            // }
            // brandProducts = brands.filter(onlyUnique);
            // brandList(brandProducts);
    }) 
    }) 
}

function makeDOMElement2(data){
    for(let i=0; i<data.length; i++){
        var div1 = document.createElement('div');
        div1.setAttribute("class","card")
        var img1 = document.createElement('img');
        img1.setAttribute("src", data[i].image);
        img1.setAttribute("width", "100%");
    
        var header1 = document.createElement('div');
        header1.setAttribute("class", "header");
        header1.innerHTML = data[i].title;
        var para1 = document.createElement('p');

        para1.setAttribute("class","price");
        para1.innerHTML = `&#8360 ${data[i].price.final_price}`;

        header1.appendChild(para1);
        var para3 = document.createElement('p');
        var button1 = document.createElement('button');
        button1.innerHTML = "Add To Cart"
        para3.appendChild(button1);
    
        div1.appendChild(img1);
        div1.appendChild(header1);
        div1.appendChild(para3);
    
        a.appendChild(div1);
    }
}

function brandList(data){
    data.sort();
    for(var i = 0 ; i < data.length ; i++){
        data[i] = data[i].charAt(0).toUpperCase() + data[i].substr(1);
    }       
    var numOfColumns;
    if(data.length % 10 === 0){ numOfColumns = data.length / 10;}
    else {numOfColumns = (data.length / 10) + 1;}
    var divBrand = document.getElementById('brandList');
    var table = document.createElement('table');
    divBrand.appendChild(table);
    for(let i=0; i < 10; i++){
        var tr1 = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');


        var text11 = document.createTextNode('Text1');
        var text12 = document.createTextNode('Text2');
        var text13 = document.createTextNode('Text3');
        var text14 = document.createTextNode('Text4');
        var text15 = document.createTextNode('Text5');
        var text16 = document.createTextNode('Text6');

        if(data[i]!== 'undefined'){text11.nodeValue = data[i]};
        if(data[i+10] !== 'undefined'){text12.nodeValue = data[i+10]};
        if(data[i+20] !== 'undefined'){text13.nodeValue = data[i+20]};
        if(data[i+30] !== 'undefined'){text14.nodeValue = data[i+30]};
        if(data[i+40] !== 'undefined'){text15.nodeValue = data[i+40]};
        if(data[i+50] !== 'undefined'){text16.nodeValue = data[i+50]};
        
        var x = document.createElement("INPUT");
        x.setAttribute("type", "checkbox");
        var x1=x, x2=x, x3=x, x4=x, x5=x, x6= x;

        if(data[i]!== 'undefined'){x1.setAttribute("name", data[i])};
        if(data[i+10] !== 'undefined'){x2.setAttribute("name", data[i+10])};
        if(data[i+20] !== 'undefined'){x3.setAttribute("name", data[i+20])};
        if(data[i+30] !== 'undefined'){x4.setAttribute("name", data[i+30])};
        if(data[i+40] !== 'undefined'){x5.setAttribute("name", data[i+40])};
        if(data[i+50] !== 'undefined'){x6.setAttribute("name", data[i+50])};
        
        
        console.log(x1);
        td1.innerHTML+= x1.outerHTML;
        td2.innerHTML+= x2.outerHTML;
        td3.innerHTML+= x3.outerHTML;
        td4.innerHTML+= x4.outerHTML;
        td5.innerHTML+= x5.outerHTML;
        td6.innerHTML+= x6.outerHTML;


        td1.appendChild(text11);
        td2.appendChild(text12);
        td3.appendChild(text13);
        td4.appendChild(text14);
        td5.appendChild(text15);
        td6.appendChild(text16);

        
        if(numOfColumns >= 1){ tr1.appendChild(td1);}
        if(numOfColumns >= 2){ tr1.appendChild(td2);}
        if(numOfColumns >=3){ tr1.appendChild(td3);}
        if(numOfColumns >= 4){ tr1.appendChild(td4);}
        if(numOfColumns >= 5){ tr1.appendChild(td5);}
        if(numOfColumns >= 6){ tr1.appendChild(td6);}

        table.appendChild(tr1);
        
    }

}

function searchValue(){
    var textBox = document.getElementById('searchBox').value;
    const result = products.filter(product => product.title.toLowerCase().includes(textBox.toLowerCase()));
    while (a.firstChild) {
        a.removeChild(a.firstChild);
    }
    makeDOMElement2(result);
}

function priceLowToHigh(data){
    while (a.firstChild) {
        a.removeChild(a.firstChild);
    }
    if(data === 1){
        makeDOMElement2(products.sort(function(a, b){return a.price.final_price - b.price.final_price}));
    }
    else if(data === 2){
        makeDOMElement2(products.sort(function(a, b){return b.price.final_price  - a.price.final_price }));
    }
}

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}



function makeDOMElement(data){
    if(data.length > 0) {
        var table = document.createElement('table');
        a.appendChild(table);
        appendRowsForHeader(data, table);
        appendRowsForColummn(data, table);
    }
    
}

function appendRowsForHeader(data, table){
        var tr1 = document.createElement('tr');
        var th1 = document.createElement('th');
        var th2 = document.createElement('th');
        var th3 = document.createElement('th');
        var th4 = document.createElement('th');

        var text11 = document.createTextNode('Text1');
        var text12 = document.createTextNode('Text2');
        var text13 = document.createTextNode('Text3');
        var text14 = document.createTextNode('Text4');

        text11.nodeValue = 'Brand';
        text12.nodeValue = 'Title';
        text13.nodeValue = 'Rating';
        text14.nodeValue = 'Price';

        th1.appendChild(text11);
        th2.appendChild(text12);
        th3.appendChild(text13);
        th4.appendChild(text14);

        tr1.appendChild(th1);
        tr1.appendChild(th2);
        tr1.appendChild(th3);
        tr1.appendChild(th4);

        table.appendChild(tr1);
}

function appendRowsForColummn(data, table){
    for(var i=0; i< data.length; i++){
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        
        var text3 = document.createTextNode('Text1');
        var text4 = document.createTextNode('Text2');
        var text5 = document.createTextNode('Text3');
        var text6 = document.createTextNode('Text4');

        text3.nodeValue = data[i].brand;
        text4.nodeValue = data[i].title;
        text5.nodeValue = data[i].rating;
        text6.nodeValue = `Rs. ${data[i].price.final_price}`;

        td1.appendChild(text3);
        td2.appendChild(text4);
        td3.appendChild(text5);
        td4.appendChild(text6);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        table.appendChild(tr);
    }
}

function openModal() { 
    document.getElementById("myDialog").showModal(); 
  } 
function closeModal(){
       document.getElementById("myDialog").close();
  }

getProducts();

