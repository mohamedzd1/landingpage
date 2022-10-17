let bar = document.querySelector(".bars-icon i");
let nav = document.querySelector("header nav");

bar.addEventListener("click",(e)=>{

    if(nav.classList.contains("affichier")){
        bar.classList.replace("uil-times","uil-bars")
       
    }else{
        bar.classList.replace("uil-bars","uil-times")
        
    }
    nav.classList.toggle("affichier");
})

let darkMode = document.getElementById("darkMode");
let darkModeIcon = document.querySelector("#darkMode i")
darkMode.addEventListener("click",(e)=>{
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.remove('dark');
            darkModeIcon.classList.replace("uil-moon","uil-sun");
            localStorage.setItem("theme","light");
          } else {
            document.documentElement.classList.add('dark');
            darkModeIcon.classList.replace("uil-sun","uil-moon");
            localStorage.setItem("theme","dark");
            console.log("light");
            
          }
    
    
      
});

if(localStorage.theme === undefined){
    localStorage.setItem("theme","dark");
    document.documentElement.classList.add('dark');
     darkModeIcon.classList.replace("uil-sun","uil-moon");
}else{
    if (localStorage.theme == 'dark') {
        document.documentElement.classList.add('dark');
        darkModeIcon.classList.replace("uil-sun","uil-moon");

      } else {
        document.documentElement.classList.remove('dark');
        darkModeIcon.classList.replace("uil-moon","uil-sun");

        
      }
}

let navLinks = document.querySelectorAll("header nav ul li ");
navLinks.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        document.querySelector("header nav ul li.active").classList.remove("active")
        ele.classList.add("active");
        console.log(ele);

    })
})



let elements = document.querySelectorAll("[data-lang]");

let setLang= (lang)=>{
    fetch(`src/js/lang/${lang}.json`).then((res)=>  res.json()).then((data)=>{
        console.log(data);
        elements.forEach((ele)=>{
            ele.innerHTML = data[ele.dataset.lang]
        })
    })
}
if(localStorage.lang  === undefined){
         setLang("an");
        localStorage.setItem("lang","an");
        document.documentElement.dir = "ltr"
}else{
    if (localStorage.lang == 'ar') {
        setLang("ar");
        document.documentElement.dir = "rtl"

      } else {
        setLang("an");
        document.documentElement.dir = "ltr"

        
      }
}

let langBtn= document.getElementById("lang");
langBtn.addEventListener("click",(e)=>{
    if(langBtn.innerHTML == "An"){
        setLang("ar");
        localStorage.setItem("lang","ar");
        document.documentElement.dir = "rtl"
    }else{
        setLang("an");
        localStorage.setItem("lang","an");
        document.documentElement.dir = "ltr"
        
    }
})
