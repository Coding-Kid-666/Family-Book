var x = 0;
function nextSlide(){
    x = x+1;
    if(x==1){
        document.getElementById("Name").innerHTML = "Mother";
        document.getElementById("image").src = "mom.png";
        document.getElementById("Desc").innerHTML = "My mother is kind and helpful. She teaches at a college."
    }
    if(x==2){
        document.getElementById("Name").innerHTML = "Father";
        document.getElementById("image").src = "dad.jpg";
        document.getElementById("Desc").innerHTML = "My father is good at jokes and answers many of my deep questions. He works at Godrej."
    }
    if(x==3){
        document.getElementById("Name").innerHTML = "Grandmother";
        document.getElementById("image").src = "dadi.jpg";
        document.getElementById("Desc").innerHTML = "My grandmother used to teach a tution. 1st to 4th she helped me get great grades at exam. She makes great food."
    }
    if(x==4){
        document.getElementById("Name").innerHTML = "Grandfather";
        document.getElementById("image").src = "baba.jpg";
        document.getElementById("Desc").innerHTML = "My grandfather used to work in a bank. He is good at jokes and I enjoy his company."
    }
    if(x==5){
        document.getElementById("Name").innerHTML = "Sister";
        document.getElementById("image").src = "siter.jpg";
        document.getElementById("Desc").innerHTML = "I can trust my sister to not tell my secrets. She is funny and is very good at making maggi. We fight sometimes but then apologiise later."
    }
    if(x==6){
        document.getElementById("Name").innerHTML = "Me";
        document.getElementById("image").src = "me.jpg";
        document.getElementById("Desc").innerHTML = "I like coding and playing roblox.";
    }
    if(x==7){
        x=x-7;
    }
}