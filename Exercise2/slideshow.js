
let pics =[];
let i = 1;

   pics.push("welcome.jpg")
   pics.push("watching.jpg")
   pics.push("dreaming.jpg")
   pics.push("napping.jpg")
   pics.push("snoring.jpg")

   function nextPic()
   {
       if(i == pics.length)
       {
           i = 1;
           document.slide.src = pics[0]
       }
       else
       {
           document.slide.src = pics[i++]
       }
   }

