

// team 1 game
const inputs1 = document.querySelectorAll('#input1');
const codeBlock = document.getElementById("code1-block");
const code = document.getElementById("code1");



inputs1.forEach((input, key) => {
  if (key !== 0) {
    input.addEventListener("click", function () {
      inputs1[0].focus();
    });
  }
  input.addEventListener("keyup", function () {
    if (input.value) {
      if (key === 3) {
        // Last one tadaa
        const userCode = [...inputs1].map((input) => input.value).join("");
  // Get the current level
  const levelElement = document.getElementById('komanda1-level');
  const level = levelElement.innerHTML;
         

        if (level === '1.uzdevums'){
            if(userCode === '2864'){
                levelElement.innerHTML = '2.uzdevums';
                codeBlock.classList.add("hidden");   
                showAndHideText();                      
            }                
            else {codeBlock.classList.remove("hidden");
            code.innerText = userCode;}

        }
        else if (level === '2.uzdevums'){
            if(userCode === '5586'){
                levelElement.innerHTML = '3.uzdevums';
                codeBlock.classList.add("hidden");
                showAndHideText();
            }
            else {codeBlock.classList.remove("hidden");
            code.innerText = userCode;}
        }
        else if (level === '3.uzdevums'){
            if(userCode === '1980'){
                levelElement.innerHTML = '4.uzdevums';
                codeBlock.classList.add("hidden");
                showAndHideText();
            }
            else {codeBlock.classList.remove("hidden");
            code.innerText = userCode;}
        }
        else if (level === '4.uzdevums'){
            if(userCode === '8448'){
                levelElement.innerHTML = '5.uzdevums';
                codeBlock.classList.add("hidden");
                showAndHideText();
            }
            else {codeBlock.classList.remove("hidden");
            code.innerText = userCode;}
        }
        else if (level === '5.uzdevums'){
            if(userCode === '6531'){
                levelElement.innerHTML = 'Ievadi 6 ciparu kodu otrā datorā';
                codeBlock.classList.add("hidden");
                gameComplete();
            }
            else {codeBlock.classList.remove("hidden");
            code.innerText = userCode;}
        }


        inputs1.forEach(input => {
            input.value = '';
          });
      } 
      else {
        inputs1[key + 1].focus();
      }
    }
  });
});

// team 2 game
const inputs2 = document.querySelectorAll('#input2');
const codeBlock2 = document.getElementById("code2-block");
const code2 = document.getElementById("code2");

inputs2.forEach((input, key) => {
  if (key !== 0) {
    input.addEventListener("click", function () {
      inputs2[0].focus();
    });
  }
  input.addEventListener("keyup", function () {
    if (input.value) {
      if (key === 3) {
        // Last one tadaa
        const userCode2 = [...inputs2].map((input) => input.value).join("");
  // Get the current level
  const levelElement = document.getElementById('komanda2-level');
  const level = levelElement.innerHTML;

        if (level === '1.uzdevums'){
            if(userCode2 === '2950'){
                levelElement.innerHTML = '2.uzdevums';
                codeBlock2.classList.add("hidden");
                showAndHideText();                             
            }                
            else {codeBlock2.classList.remove("hidden");
            code2.innerText = userCode2;}

        }
        else if (level === '2.uzdevums'){
            if(userCode2 === '4978'){
                levelElement.innerHTML = '3.uzdevums';
                codeBlock2.classList.add("hidden");
                showAndHideText();
            }
            else {codeBlock2.classList.remove("hidden");
            code2.innerText = userCode2;}
        }
        else if (level === '3.uzdevums'){
            if(userCode2 === '4455'){
                levelElement.innerHTML = '4.uzdevums';
                codeBlock2.classList.add("hidden");
                showAndHideText();
            }
            else {codeBlock2.classList.remove("hidden");
            code2.innerText = userCode2;}
        }
        else if (level === '4.uzdevums'){
            if(userCode2 === '4660'){
                levelElement.innerHTML = '5.uzdevums';
                codeBlock2.classList.add("hidden");
                showAndHideText();
            }
            else {codeBlock2.classList.remove("hidden");
            code2.innerText = userCode2;}
        }
        else if (level === '5.uzdevums'){
            if(userCode2 === '9114'){
                levelElement.innerHTML = 'Ievadi 6 ciparu kodu otrā datorā';
                codeBlock2.classList.add("hidden");
                gameComplete();
            }
            else {codeBlock2.classList.remove("hidden");
            code2.innerText = userCode2;}
        }


        inputs2.forEach(input => {
            input.value = '';
          });
      } 
      else {
        inputs2[key + 1].focus();
      }
    }
  });
});

// team 3 game
const inputs3 = document.querySelectorAll('#input3');
const codeBlock3 = document.getElementById("code3-block");
const code3 = document.getElementById("code3");

inputs3.forEach((input, key) => {
  if (key !== 0) {
    input.addEventListener("click", function () {
      inputs3[0].focus();
    });
  }
  input.addEventListener("keyup", function () {
    if (input.value) {
      if (key === 3) {
        // Last one tadaa
        const userCode3 = [...inputs3].map((input) => input.value).join("");
  // Get the current level
  const levelElement = document.getElementById('komanda3-level');
  const level = levelElement.innerHTML;

        if (level === '1.uzdevums'){
            if(userCode3 === '8389'){
                levelElement.innerHTML = '2.uzdevums';
                codeBlock3.classList.add("hidden");  
                showAndHideText();                             
            }                
            else {codeBlock3.classList.remove("hidden");
            code3.innerText = userCode3;}

        }
        else if (level === '2.uzdevums'){
            if(userCode3 === '1268'){
                levelElement.innerHTML = '3.uzdevums';
                codeBlock3.classList.add("hidden");
                showAndHideText();
            }
            else {codeBlock3.classList.remove("hidden");
            code3.innerText = userCode3;}
        }
        else if (level === '3.uzdevums'){
            if(userCode3 === '2475'){
                levelElement.innerHTML = '4.uzdevums';
                codeBlock3.classList.add("hidden");
                showAndHideText();
            }
            else {codeBlock3.classList.remove("hidden");
            code3.innerText = userCode3;}
        }
        else if (level === '4.uzdevums'){
            if(userCode3 === '1288'){
                levelElement.innerHTML = '5.uzdevums';
                codeBlock3.classList.add("hidden");
                showAndHideText();
            }
            else {codeBlock3.classList.remove("hidden");
            code3.innerText = userCode3;}
        }
        else if (level === '5.uzdevums'){
            if(userCode3 === '2086'){
                levelElement.innerHTML = 'Ievadi 6 ciparu kodu otrā datorā';
                codeBlock3.classList.add("hidden");
                gameComplete();
            }
            else {codeBlock3.classList.remove("hidden");
            code3.innerText = userCode3;}
        }


        inputs3.forEach(input => {
            input.value = '';
          });
      } 
      else {
        inputs3[key + 1].focus();
      }
    }
  });
});

// team 4 game
const inputs4 = document.querySelectorAll('#input4');
const codeBlock4 = document.getElementById("code4-block");
const code4 = document.getElementById("code4");

inputs4.forEach((input, key) => {
  if (key !== 0) {
    input.addEventListener("click", function () {
      inputs4[0].focus();
    });
  }
  input.addEventListener("keyup", function () {
    if (input.value) {
      if (key === 3) {
        // Last one tadaa
        const userCode4 = [...inputs4].map((input) => input.value).join("");
  // Get the current level
  const levelElement = document.getElementById('komanda4-level');
  const level = levelElement.innerHTML;

        if (level === '1.uzdevums'){
            if(userCode4 === '0621'){
                levelElement.innerHTML = '2.uzdevums';
                codeBlock4.classList.add("hidden");   
                showAndHideText();                            
            }                
            else {codeBlock4.classList.remove("hidden");
            code4.innerText = userCode4;}

        }
        else if (level === '2.uzdevums'){
            if(userCode4 === '4925'){
                levelElement.innerHTML = '3.uzdevums';
                codeBlock4.classList.add("hidden");
                showAndHideText();
            }
            else {codeBlock4.classList.remove("hidden");
            code4.innerText = userCode4;}
        }
        else if (level === '3.uzdevums'){
            if(userCode4 === '3816'){
                levelElement.innerHTML = '4.uzdevums';
                codeBlock4.classList.add("hidden");
                showAndHideText();
            }
            else {codeBlock4.classList.remove("hidden");
            code4.innerText = userCode4;}
        }
        else if (level === '4.uzdevums'){
            if(userCode4 === '4060'){
                levelElement.innerHTML = '5.uzdevums';
                codeBlock4.classList.add("hidden");
                showAndHideText();
            }
            else {codeBlock4.classList.remove("hidden");
            code4.innerText = userCode4;}
        }
        else if (level === '5.uzdevums'){
            if(userCode4 === '3184'){
                levelElement.innerHTML = 'Ievadi 6 ciparu kodu otrā datorā';
                codeBlock4.classList.add("hidden");
                gameComplete();
                
            }
            else {codeBlock4.classList.remove("hidden");
            code4.innerText = userCode4;}
        }


        inputs4.forEach(input => {
            input.value = '';
          });
      } 
      else {
        inputs4[key + 1].focus();
      }
    }
  });
});

// team 5 game
const inputs5 = document.querySelectorAll('#input5');
const codeBlock5 = document.getElementById("code5-block");
const code5 = document.getElementById("code5");

inputs5.forEach((input, key) => {
  if (key !== 0) {
    input.addEventListener("click", function () {
      inputs5[0].focus();
    });
  }
  input.addEventListener("keyup", function () {
    if (input.value) {
      if (key === 3) {
        // Last one tadaa
        const userCode5 = [...inputs5].map((input) => input.value).join("");
  // Get the current level
  const levelElement = document.getElementById('komanda5-level');
  const level = levelElement.innerHTML;

        if (level === '1.uzdevums'){
            if(userCode5 === '7481'){
                levelElement.innerHTML = '2.uzdevums';
                codeBlock5.classList.add("hidden"); 
                showAndHideText();                              
            }                
            else {codeBlock5.classList.remove("hidden");
            code5.innerText = userCode5;}

        }
        else if (level === '2.uzdevums'){
            if(userCode5 === '9368'){
                levelElement.innerHTML = '3.uzdevums';
                codeBlock5.classList.add("hidden");
                showAndHideText();
            }
            else {codeBlock5.classList.remove("hidden");
            code5.innerText = userCode5;}
        }
        else if (level === '3.uzdevums'){
            if(userCode5 === '8586'){
                levelElement.innerHTML = '4.uzdevums';
                codeBlock5.classList.add("hidden");
                showAndHideText();
            }
            else {codeBlock5.classList.remove("hidden");
            code5.innerText = userCode5;}
        }
        else if (level === '4.uzdevums'){
            if(userCode5 === '9611'){
                levelElement.innerHTML = '5.uzdevums';
                codeBlock5.classList.add("hidden");
                showAndHideText();
            }
            else {codeBlock5.classList.remove("hidden");
            code5.innerText = userCode5;}
        }
        else if (level === '5.uzdevums'){
            if(userCode5 === '2722'){
                levelElement.innerHTML = 'Ievadi 6 ciparu kodu otrā datorā';
                codeBlock5.classList.add("hidden");
                gameComplete();
            }
            else {codeBlock5.classList.remove("hidden");
            code5.innerText = userCode5;}
        }


        inputs5.forEach(input => {
            input.value = '';
          });
      } 
      else {
        inputs5[key + 1].focus();
      }
    }
  });
});


// team 6 game
const inputs6 = document.querySelectorAll('#input6');
const codeBlock6 = document.getElementById("code6-block");
const code6 = document.getElementById("code6");

inputs6.forEach((input, key) => {
  if (key !== 0) {
    input.addEventListener("click", function () {
      inputs6[0].focus();
    });
  }
  input.addEventListener("keyup", function () {
    if (input.value) {
      if (key === 3) {
        // Last one tadaa
        const userCode6 = [...inputs6].map((input) => input.value).join("");
  // Get the current level
  const levelElement = document.getElementById('komanda6-level');
  const level = levelElement.innerHTML;

        if (level === '1.uzdevums'){
            if(userCode6 === '9087'){
                levelElement.innerHTML = '2.uzdevums';
                codeBlock6.classList.add("hidden");  
                showAndHideText();                             
            }                
            else {codeBlock6.classList.remove("hidden");
            code6.innerText = userCode6;}

        }
        else if (level === '2.uzdevums'){
            if(userCode6 === '1479'){
                levelElement.innerHTML = '3.uzdevums';
                codeBlock6.classList.add("hidden");
                showAndHideText();
            }
            else {codeBlock6.classList.remove("hidden");
            code6.innerText = userCode6;}
        }
        else if (level === '3.uzdevums'){
            if(userCode6 === '4770'){
                levelElement.innerHTML = '4.uzdevums';
                codeBlock6.classList.add("hidden");
                showAndHideText();
            }
            else {codeBlock6.classList.remove("hidden");
            code6.innerText = userCode6;}
        }
        else if (level === '4.uzdevums'){
            if(userCode6 === '1332'){
                levelElement.innerHTML = '5.uzdevums';
                codeBlock6.classList.add("hidden");
                showAndHideText();
            }
            else {codeBlock6.classList.remove("hidden");
            code6.innerText = userCode6;}
        }
        else if (level === '5.uzdevums'){
            if(userCode6 === '2872'){
                levelElement.innerHTML = 'Ievadi 6 ciparu kodu otrā datorā';
                codeBlock6.classList.add("hidden");
                gameComplete();
                
            }
            else {codeBlock6.classList.remove("hidden");
            code6.innerText = userCode6;}
        }


        inputs6.forEach(input => {
            input.value = '';
          });
      } 
      else {
        inputs6[key + 1].focus();
      }
    }
  });
});

 // Snow from https://codepen.io/radum/pen/xICAB

 var particleCount = 300;
 var particleMax   = 1000;
 var sky           = document.querySelector('.sky');
 var canvas        = document.createElement('canvas');
 var ctx           = canvas.getContext('2d');
 var width         = sky.clientWidth;
 var height        = sky.clientHeight;
 var i             = 0;
 var active        = false;
 var snowflakes    = [];
 var snowflake;
 
 canvas.style.position = 'absolute';
 canvas.style.left = canvas.style.top = '0';
 
 var Snowflake = function () {
   this.x = 0;
   this.y = 0;
   this.vy = 0;
   this.vx = 0;
   this.r = 0;
 
   this.reset();
 };
 
 Snowflake.prototype.reset = function() {
   this.x = Math.random() * width;
   this.y = Math.random() * -height;
   this.vy = 1 + Math.random() * 3;
   this.vx = 0.5 - Math.random();
   this.r = 1 + Math.random() * 2;
   this.o = 0.5 + Math.random() * 0.5;
 };
 
 function generateSnowFlakes() {
   snowflakes = [];
   for (i = 0; i < particleMax; i++) {
     snowflake = new Snowflake();
     snowflake.reset();
     snowflakes.push(snowflake);
   }
 }
 
 generateSnowFlakes();
 
 function update() {
   ctx.clearRect(0, 0, width, height);
 
   if (!active) {      
     return;
   }
 
   for (i = 0; i < particleCount; i++) {
     snowflake = snowflakes[i];
     snowflake.y += snowflake.vy;
     snowflake.x += snowflake.vx;
 
     ctx.globalAlpha = snowflake.o;
     ctx.beginPath();
     ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
     ctx.closePath();
     ctx.fill();
 
     if (snowflake.y > height) {
       snowflake.reset();
     }
   }
 
   requestAnimFrame(update);
 }
 
 function onResize() {
   width = sky.clientWidth;
   height = sky.clientHeight;
   canvas.width = width;
   canvas.height = height;
   ctx.fillStyle = '#FFF';
 
   var wasActive = active;
   active = width > 600;
 
   if (!wasActive && active) {
     requestAnimFrame(update);
   }
 }
 
 // shim layer with setTimeout fallback
 window.requestAnimFrame = (function() {
   return  window.requestAnimationFrame       ||
           window.webkitRequestAnimationFrame ||
           window.mozRequestAnimationFrame    ||
           function( callback ){
             window.setTimeout(callback, 1000 / 60);
           };
 })();
 
 onResize();
 window.addEventListener('resize', onResize, false);
 
 sky.appendChild(canvas);
 
 var gui = new dat.GUI();
 gui.add(window, 'particleCount').min(1).max(particleMax).step(1).name('Particles count').onFinishChange(function() {
   requestAnimFrame(update);
 });



 function showAndHideText() {
  // Get the element with the ID "hiddenText"
  var hiddenText = document.getElementById("text");

  // Show the element by removing the "hidden" class
  hiddenText.classList.remove("hidden2");

  // Set a timeout to hide the element again after 3 seconds
  setTimeout(function() {
    // Add the "hidden" class with a delay to allow the transition to complete
    setTimeout(function() {
      hiddenText.classList.add("hidden2");
    }, 500);
  }, 1500);
}


function gameComplete() {
  // Get the element with the ID "hiddenText"
  var hiddenText = document.getElementById("text3");

  // Show the element by removing the "hidden" class
  hiddenText.classList.remove("hidden3");

  // Set a timeout to hide the element again after 3 seconds
  setTimeout(function() {
    // Add the "hidden" class with a delay to allow the transition to complete
    setTimeout(function() {
      hiddenText.classList.add("hidden3");
    }, 500);
  }, 7000);
}
