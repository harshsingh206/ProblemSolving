var price = [100, 180, 260, 310, 40, 535, 695];
var minimum=0, maximum=0,i=0,n, count=0;
n = price.length;

while (i < n - 1) { 
    while ((i < n - 1) && (price[i + 1] <= price[i])) 
    if (i == n - 1) 
        break; 
    minimum = i++; 
    while ((i < n) && (price[i] >= price[i - 1])) 
        i++; 
    maximum = i - 1; 
    count++; 
} 

console.log(`${minima1} and ${maxima1}`)