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

    // adding event listener to each imag by looping to listen click event on the image
    images.forEach((image) =>
         image.addEventListener("click",(e)=>{
            showImage(e.currentTarget);
         }));
    
    // adding event listener to each of image to listen keyup or keydown when user hit enter to focus.
    images.forEach((image)=>
        image.addEventListener("keydown",(e)=>{
            if(e.key === "Enter") showImage(e.currentTarget);
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
        // event listeners are bound when the modal is open only other wise it shows error when we console.log()
        window.addEventListener("keyup",handleKeyUp);
        nextBtn.addEventListener("click",showNextImage);
        previewBtn.addEventListener("click",showPreviousImage);
    }

    // show next image
    function showNextImage(){
        showImage(currentImage.nextElementSibling || gallery.firstElementChild);
    }

    // show previous image
    function showPreviousImage(){
        showImage(currentImage.previousElementSibling || gallery.lastElementChild);
    }

    function handleClickOutside(e){
        if(e.target===e.currentTarget){
            closeModal();
        }
    }

    function handleKeyUp(event){
        if(event.key==="Escape") return closeModal();
        if(event.key==="ArrowRight") return showNextImage();
        if(event.key==="ArrowLeft") return showPreviousImage();       
    }

    // closing the modal
    function closeModal(){
        modal.classList.remove("open");
        window.removeEventListener("keyup",handleKeyUp);
        nextBtn.removeEventListener("click",showNextImage);
    }
    
    // These are our Event Listeners 
    modal.addEventListener("click",handleClickOutside)
    
}
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));


