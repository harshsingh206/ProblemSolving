let filterInput = document.getElementById('fiterInput');

filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    let filterValue = filterInput.value.toUpperCase();
    
    let ul = document.getElementById('names');

    let li = ul.querySelectorAll('li.collection-item');

    for(let i=0; i<li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];

        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            // console.log(a.innerHTML.toUpperCase().indexOf(filterValue));
            li[i].style.display = '';
        }
        else{
            // console.log(a.innerHTML.toUpperCase().indexOf(filterValue));
            li[i].style.display = 'none';
        }
    }
}