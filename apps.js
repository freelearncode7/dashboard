let button = document.querySelectorAll('button');
let container = document.querySelectorAll('.con');




for (let index = 0; index < button.length; index++) {
    button[index].addEventListener('click', function() {
        for (let i = 0; i < container.length; i++) {
            container[i].style.display = "none";

        }

        container[index].style.display = "flex";


    })
}