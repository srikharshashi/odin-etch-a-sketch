const maincont = document.querySelector(".container");
const start = document.querySelector(".startbutton");
const reset = document.querySelector(".reset");
const slider = document.querySelector(".slider");
console.log(slider);
maincont.style.height = "700px";
maincont.style.width = "700px";
var squares = 20;
var side = 700 / squares;
var _isactive = false;
var inner = undefined;


function init() {
   side = 700 / squares;
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
   inner=document.querySelectorAll(".inner");
}
init();




//Reset button


const resetf = () => {
   console.log("click on reset");
   _isactive = false;
   start.textContent = "Start";
   fun2();
   inner.forEach((e) => {
      e.classList.remove("colored");
   })
};

reset.onclick = resetf;

const myfunc = function (block) {
   this.classList.add("colored");
}

const fun2 = function () {
   start.textContent = "Start";
   inner.forEach((inn) => {
      inn.removeEventListener("mouseover", myfunc);
   });
   _isactive = false;
}
start.onclick = () => {
   if (!_isactive)
   //if not active then start
   {
      console.log(inner);

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
   const allouter=document.querySelectorAll(".outer");
   allouter.forEach((each)=>{
      each.remove();
   });
   init();
}