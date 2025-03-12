let index = 0;
function showSlide(){
  const slides = document.getElementsByClassName("kv-image-src")
 // console.log(slides)
  slides[index].classList.remove("show");

  index = (index + 1) % slides.length;
  slides[index].classList.add("show");

}


setInterval(showSlide, 3000);




const send_btn = document.getElementById("send-btn");
send_btn.addEventListener("click", function(e){
    e.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    let error_flag = false;
    if(!name.value){
        document.getElementById("error-name").innerHTML= "Fill in Name";
        error_flag = true;
    }else{
        document.getElementById("error-name").innerHTML= "";
        error_flag = false;
    }
    if(!email.value){
        document.getElementById("error-email").innerHTML= "Fill in email";
        error_flag = true;
    }else{
        document.getElementById("error-email").innerHTML= "";
        error_flag = false;
    }
    if(!subject.value){
        document.getElementById("error-subject").innerHTML= "Fill in subject";
        error_flag = true;
    }else{
        document.getElementById("error-subject").innerHTML= "";
        error_flag = false;
    }
    if(!error_flag){
      alert("Thank you for your message");
    }
})