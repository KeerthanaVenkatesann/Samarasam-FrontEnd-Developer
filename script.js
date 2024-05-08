let aboutPage = document.getElementById('aboutPage');
let resumePage = document.getElementById('resumePage');
let worksPage = document.getElementById('worksPage');
let contactPage = document.getElementById('contactPage');

const page = [ aboutPage,resumePage,worksPage,contactPage ];

function pages(arg) {    //page navigation
   
    page.forEach( (val) => {     

        if (val.id == arg) {

            val.classList.add("view");
            val.classList.remove("hide");

        }else{

            val.classList.remove("view");
            val.classList.add("hide");
            
        };

    });

};