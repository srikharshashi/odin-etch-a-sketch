const maincont = document.querySelector(".container");
const start = document.querySelector(".startbutton");
const reset = document.querySelector(".reset");
const slider = document.querySelector(".slider");
const sqno = document.querySelector(".sqno");
maincont.style.height = "600px";
maincont.style.width = "600px";
var squares = 20;
var side = 600 / squares;
var _isactive = false;
var inner = undefined;
var color="aqua";

function init() {
   side = 600 / squares;
   for (var i = 1; i <= squares; i++) {
      const newbox = document.createElement("div");
      newbox.style.height = `${side}px`;
      maincont.appendChild(newbox);
      newbox.classList.add("outer");
      newbox.classList.add(`data-key=${i}`);
      for (var j = 1; j <= squares; j++) {
         const newbo = document.createElement("div");
         newbo.classList.add("inner");
         newbo.style.width = `${side}px`;
         newbox.appendChild(newbo);
         newbo.classList.add(`data-key=${j}`);
      }
   }
   inner = document.querySelectorAll(".inner");
   sqno.textContent = `Sqaures  :  ${squares}`;
}
init();

//Reset button
const fun2 = function () {
   start.textContent = "Start";
   inner.forEach((inn) => {
      inn.removeEventListener("mouseover", myfunc);
   });
   _isactive = false;
}

const resetf = () => {
   _isactive = false;
   start.textContent = "Start";
   fun2();
   inner.forEach((e) => {
      e.style.backgroundColor="white";
   })
};

reset.onclick = resetf;

const myfunc = function (block) {
   this.style.backgroundColor=color;
}


start.onclick = () => {
   if (!_isactive)
   //if not active then start
   {
      // console.log(inner);

      start.textContent = "Pause";
      _isactive = true;

      inner.forEach(block => {
         block.addEventListener("mouseover", myfunc);

      });
   }
   else {
      fun2(); //removes the event listners
   }
}

slider.oninput = () => {
   squares = slider.value;
   resetf();//removes the color class
   _isactive = false;//sets the active status to false
   const allouter = document.querySelectorAll(".outer");
   allouter.forEach((each) => {
      each.remove();
   });
   init();
}

const colorselect = document.querySelector(".colorselect");
colorselect.onclick = (event) => {
   const inn=document.querySelectorAll(".inner");
   switch (colorselect.value) {
      case "red":
         {
            inn.forEach((each)=>{
               if(each.style.backgroundColor==color)
               {
                  each.style.backgroundColor="red";
               }
            });
            color="red";

         }
         break;
         case "green":
         {
            inn.forEach((each)=>{
               if(each.style.backgroundColor==color)
               {
                  each.style.backgroundColor="green";
               }
            });
            color="green";

         }
         break;
         case "aqua":
         {
            inn.forEach((each)=>{
               if(each.style.backgroundColor==color)
               {
                  each.style.backgroundColor="aqua";
               }
            });
            color="aqua";

         }
         break;
   
      default:
         break;
      
   }
};
