// using closure concept to access all buttons
function Gallery(gallery){
    if(!gallery){
        throw new Error("No gallery Found!");
    }  

    // selecting images from gallery class  
    const images=Array.from(gallery.querySelectorAll("img"));
   
    // selecting modal and button in the modal
    const modal=document.querySelector(".modal");
    const previewBtn=modal.querySelector(".prev");
    const nextBtn=modal.querySelector(".next");
    let currentImage;
    // console.log({modal,previewBtn,nextBtn})

    // adding event listener to each imag by looping
    images.forEach((image) =>
         image.addEventListener("click",(e)=>{
            // console.log(e);
            showImage(e.currentTarget);
         }));
    

    // showing of image
    function showImage(el){
        if(!el){
            throw new Error("No images show!");
            return // how to return from function  
        }else{
            modal.querySelector('img').src=el.src;
            modal.querySelector('figure figcaption h2').innerText=el.title;
            modal.querySelector('figure figcaption p').innerText=el.dataset.description;
            currentImage=el;
            openModel();
        }
    }

    // opening modal
    function openModel(){
        if(modal.matches(".open")){
            console.log("opening modal.....");
            return;
        }
        modal.classList.add("open");
        // closeModal()
    }

    function handleClickOutside(e){
        console.log({"e.target":e.target,"e.currentTarget":e.currentTarget})
        if(e.target===e.currentTarget){
            closeModal();
        }
    }

    // closing the modal
    function closeModal(){
        modal.classList.remove("open")
    }
    
    
    // These are our Event Listeners 
    modal.addEventListener("click",handleClickOutside)
}
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
// gallery1();
// gallery2();


