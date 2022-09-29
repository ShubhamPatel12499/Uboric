let image= [
    "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8306363/pexels-photo-8306363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5418890/pexels-photo-5418890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5418897/pexels-photo-5418897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
 ];
 let index=0;
 let id;

 let SlideShow=()=>{
     let container = document.getElementById("slide");

     id = setInterval(()=>{
         if(index===image.length){
             index=0;
         }
         container.innerHTML = null;
         let img= document.createElement("img");
         img.src= image[index];
         container.append(img);
         index++;
     },2000)
 };

 // let stop=()=>{
 //   clearInterval(id);
 // }

 // let start = ()=>{
 //     SlideShow();
 // };
 let previous= ()=>{
     let container = document.getElementById("slide");
     let img= document.createElement("img");
         if(index===0){
             index=image.length-1;
             img.setAttribute('src',image[index]);
         }
         else{
             index--;
             img.setAttribute('src',image[index]);
         }
       container.innerHTML = null;
       container.append(img);
 }
 let next= ()=>{
     let container = document.getElementById("slide");
     let img= document.createElement("img");
         if(index===image.length-1){
             index=0;
             img.setAttribute('src',image[index]);
         }
         else{
             index++;
             img.setAttribute('src',image[index]);
         }

         container.innerHTML = null;
         container.append(img);
     }