const tabsBtn = document.querySelectorAll(".tabs__nav-btn");

tabsBtn.forEach(function (item) {
    item.addEventListener("click", function (){
        let currentBtn = item;

        tabsBtn.forEach(function (item){
            item.classList.remove("active");
        });

        currentBtn.classList.add("active");
    });
});