const maincont = document.querySelector(".container");
const start = document.querySelector(".startbutton");
const inner = document.querySelectorAll(".inner");
const reset = document.querySelector(".reset");
const outer= document.querySelector(".outer");


const outer_width=maincont.style.height;
var squares=16;
const side=outer_width/squares;
console.log(maincont);

for (var i = 1; i <= squares; i++) {
   const newbox = document.createElement("div");
   maincont.appendChild(newbox);
   newbox.style.height=side;
   newbox.classList.add("outer");
   newbox.classList.add(`data-key=${i}`);
   for (var j = 1; j <= squares; j++) {
      const newbo = document.createElement("div");
      newbo.classList.add("inner");
      newbo.style.width=side;
      newbox.appendChild(newbo);
      newbo.classList.add(`data-key=${j}`);
   }
}

//Reset button
reset.onclick = () => {
   console.log("click on reset");
   _isactive=false;
   start.textContent="Start";
   fun2();
   inner.forEach((e) => {
      e.classList.remove("colored");
   })
};

const myfunc = function (block) {
   this.classList.add("colored");
}

const fun2=function()
{
   start.textContent = "Start";

      inner.forEach((inn) => {
         // console.log(inn);
         inn.removeEventListener("mouseover", myfunc);
      });

      _isactive = false;
}
start.onclick = () => {
   if (!_isactive)
   //if not active then start
   {
      start.textContent = "Pause";
      _isactive = true;

      inner.forEach(block => {
         block.addEventListener("mouseover", myfunc);

      });

   }
   else {
      fun2();
      
   }


}