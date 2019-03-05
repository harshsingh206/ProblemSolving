var rating = "";
 function starmark(item){
     var count = item.id[0];
     rating = count;
     var subid = item.id.substring(1);
     for(let i=0;i<5;i++){
         if(i<count){
             document.getElementById((i+1)+subid).style.color = "#fd0";
         }
         else{
            document.getElementById((i+1)+subid).style.color = "black";
         }
     }
 }

 function showRating(){
     var a = document.getElementById('textArea1').value;
     if(!rating){alert('Please Select Rating')}
     else if(!a){alert('Please Enter Your Comments')}
     else{
        document.getElementById('response').innerHTML = `Your Rating is ${rating} and feedback is ${a}`
     }
 }