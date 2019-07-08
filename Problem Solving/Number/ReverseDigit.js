function reversDigits(num) {
  var rev_num = 0;
  var base_pos = 1;
  if (num > 0) {
    reversDigits(num / 10);
    rev_num += (num % 10) * base_pos;
    base_pos *= 10;
  }
  return rev_num;
}

var num = 4562;
console.log(reversDigits(num));
