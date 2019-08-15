(function() {
   //lightbox

//All Images 
let imageList = [];
//let fruits = ['apple','mango','grape'];
let counter = 0;

    const images = document.querySelectorAll('.store-img');
    const container = document.querySelector('.lightbox-container');
    const  item = document.querySelector('.lightbox-item');
    const  closeModal = document.querySelectorAll('.lightbox-close');
    //const  control = document.querySelectorAll('.lightbox-control');
    const  btnLeft = document.querySelector('.btnLeft');
    const  btnRight = document.querySelector('.btnRight');
    //let imageSrc;

 //add all images to ImageList arr
images.forEach((img)=>{
    imageList.push(img.src);

});

//console.log(imageList);
    
//console.log(images[0]);
    
//Open Modal
images.forEach( (img)=>{

        img.addEventListener('click',(event)=> {
            //Get clicked image source
           let imageSrc = event.target.src;
            //show lightbox modal on click event
            container.classList.add("show");
            
            //set modal background to clicked image
            item.style.backgroundImage = `url('${imageSrc}')`;  
            //counter = imageList.findIndex((index)=>{return index == imageSrc;});
           //console.log(counter);
           counter = imageList.indexOf(imageSrc); 
         })



    });

//Close Modal
 closeModal.forEach((closeModal)=> {
     closeModal.addEventListener('click', ()=>{
            //console.log(imageSrc);
            //console.log(imageList.indexOf("http://127.0.0.1:5500/img/cake-2.jpeg"));
            container.classList.remove("show");

     })
 });


 btnLeft.addEventListener('click',()=>{
     counter--;
     if(counter < 0){
         counter = imageList.length - 1;
     }
    item.style.backgroundImage = `url('${imageList[counter]}')`;
    console.log(counter);
 });

 btnRight.addEventListener('click',()=>{
     console.log(counter);
     counter++;
     if(counter === imageList.length){
         counter = 0;
     }
    item.style.backgroundImage = `url('${imageList[counter]}')`;
 });

})();

//filter btns
(
    ()=>{
    
        const filterBtn =  document.querySelectorAll('.filter-btn');
        const storeItems = document.querySelectorAll('.store-item');
    
    
    filterBtn.forEach((element)=>{
            element.addEventListener('click',(event)=>{
                event.preventDefault();
     const filterOpt = event.target.dataset.filter;
     //console.log(filterOpt);
    
     storeItems.forEach((item)=>{
        if (filterOpt === 'all'){
            item.style.display = 'block';
        }
    
    else if(item.classList.contains(filterOpt)){
        item.style.display = 'block';
    }
    
    else
    {
        item.style.display = 'none';   
    }
     })
     //console.log(filterOpt);
     //console.log(storeItems[7].dataset.item);
     
        })});
        //console.log(filterBtn);
        //console.log(storeItems[1].dataset.item);
        
    })();
    
    
    //search input
    (function(){
        const search = document.getElementById('search-item');
        const items = document.querySelectorAll('.store-item'); 
    
        search.addEventListener('keyup',(event)=>{
            event.preventDefault();
        let value = search.value.trim().toLowerCase();
    
        console.log(value);
        
     items.forEach((item)=>{
         let type = item.dataset.item;
         
        //  if(type.includes(value)){
        //     item.style.display = 'block'; 
        //  }
        //  else{
        //     item.style.display = 'none'; 
        //  }
        let length = value.length;
        let match = type.slice(0,length);
        // console.log(value);
        // console.log(match);
        
        
        if(value === match){
            item.style.display = 'block'; 
        }
        else{
            item.style.display = 'none'; 
        }
        
    
     })   
        
        })
    })();
    