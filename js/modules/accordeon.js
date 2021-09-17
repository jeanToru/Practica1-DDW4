function accordeon(accordeons){
    for (let i = 0; i < accordeons.length; i++) {
        accordeons[i].addEventListener("click", function(){
            this.classList.toggle('active');
            let content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
}


export {accordeon}