function main () {
  const input = document.getElementById('input')
  const figure = document.getElementById('figure')
  const figureImage = document.getElementById('figureImage')

    const [file] = event.target.files;
     const file2 = event.target.files[0];
    console.log(file2)
    if (file) {
      figureImage.setAttribute('src', URL.createObjectURL(file2))
      figure.style.display = 'block'
    } else {
      figure.style.display = 'none'
    }
  
}


function checkNumber(num) {
    if(num > 0){
      return "Positive";
    }else if (num < 0){
      return "Negative";
    }else{
      return 0;
    }
}

console.log(checkNumber(5));   // "Positive"
console.log(checkNumber(-3));  // "Negative"
console.log(checkNumber(0));   // "Zero"

for(let i=0; i<11; i++ ){
  console.log(i);
}