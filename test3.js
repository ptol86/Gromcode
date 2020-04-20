var s = "*";
 
for(var q=0; q<10; ++q)
  s = s.replace(/^|$/gm, " ").replace(/ (.*) $/, " $1 \n*$1*");
 
console.log(s)

