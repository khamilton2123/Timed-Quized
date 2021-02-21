var body = document.body;
var header= document.createElement("div");
var highscoresbtn=document.createElement("button");
var timer=document.createElement("p");
var h1El = document.createElement("h1");
var pEl = document.createElement("p");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var startbtn= document.createElement("button");
var Abutton = document.createElement("button");
var Bbutton = document.createElement("button");
var Cbutton = document.createElement("button");
var Dbutton = document.createElement("button");
var wrong = document.createElement("p");
var timeLeft = 75;
var timeInterval
//Form Variables
var score = document.createElement("p");
var form = document.createElement("form");
var nameEl = document.createElement("p");
var input = document.createElement("input");
var submit = document.createElement("button");
var div = document.createElement("div");
var response = document.createElement("h3");
var submissionResponseEl = document.createElement("p");
var scoreNumber1 = 0;
var scoreNumber2 = 0;
var scoreNumber3 = 0;
var scoreNumber4 = 0;
var scoreNumber5 = 0;
var highscoreList = document.createElement("ul");





//Add text to variables///
highscoresbtn.textContent = "Highscores";
timer.textContent = "Timer";
h1El.textContent = "Coding Quiz Challenge";
pEl.textContent= "Try to answer the following code-related questions within the time limit. Keep in mind that wrong answers will penalize your score time by ten seconds"
startbtn.textContent = "Start Quiz";

//Add to DOM//
body.appendChild(header);
header.appendChild(highscoresbtn);
header.appendChild(timer);
body.appendChild(h1El);
body.appendChild(pEl);
body.appendChild(startbtn);


//Style elements//
highscoresbtn.setAttribute("style", "position: absolute; left: 10px; top: 5px; font-size:14px; background: transparent; border: none; color:purple;");
timer.setAttribute("style", "position: absolute; right: 10px; top: -10px; font-size:17px; color:purple;");
body.setAttribute("style", "text-align:center;");
h1El.setAttribute("style", "margin-top: 150px;");
startbtn.setAttribute("style", "background-color: purple; color: white;")


//timer//
function countdown (){
    
    timeInterval = setInterval(function(){
        timeLeft--;
        timer.textContent = "Time: "+ timeLeft;
            
        if (timeLeft === 0) {
            timer.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    },1000);
}

function deductTime(){
    timeLeft-= 10
    timer.textContent = "Time: "+ timeLeft
        if (timeLeft <= 0) {
            timer.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    }


function displayMessage (){
    finish();
}

startbtn.addEventListener("click",function(){
    countdown();
    quiz();
});


//quiz questions
 function quiz (){
    body.removeChild(h1El);
    body.removeChild(startbtn);

    pEl.textContent= "Commonly used data types DO NOT include:";
    Abutton.textContent = "Strings";
    Bbutton.textContent = "Booleans";
    Cbutton.textContent = "Alert";
    Dbutton.textContent = "Number";

    body.appendChild(listEl);

    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);


    li1.appendChild(Abutton);
    li2.appendChild(Bbutton);
    li3.appendChild(Cbutton);
    li4.appendChild(Dbutton);

    body.setAttribute("style", "text-align: left; margin-left: 30%;");
    pEl.setAttribute("style", "font-size: 20px; font-weight: bold; margin-top: 150px;");
    listEl.setAttribute("style", "list-style-type:none;");
    Abutton.setAttribute("style", "background:purple; color: white; margin-bottom:5px;");
    Bbutton.setAttribute("style", "background:purple; color: white; margin-bottom:5px;");
    Cbutton.setAttribute("style", "background:purple; color: white; margin-bottom:5px;");
    Dbutton.setAttribute("style", "background:purple; color: white; margin-bottom:5px;");

    Abutton.addEventListener("click", function(){
        wrong.textContent = "Wrong Answer.";
        body.appendChild(wrong);
        quiz2();
        deductTime()
        
    })
    Bbutton.addEventListener("click", function(){
        wrong.textContent = "Wrong Answer. ";
        body.appendChild(wrong);
        quiz2();
        deductTime()
    })
    Dbutton.addEventListener("click", function(){
        wrong.textContent = "Wrong Answer. ";
        body.appendChild(wrong);
        quiz2();
        deductTime()
    })

    Cbutton.addEventListener("click", function(){
        wrong.textContent = "Correct";
        body.appendChild(wrong);
        quiz2();
        scoreNumber1= + 20;
        console.log(scoreNumber1);
        
        
    })

 }


 function quiz2 (){
   
    
    pEl.textContent= "The condition in an if/else statement is enclosed within ___.";
    Abutton.textContent = "Quotes";
    Bbutton.textContent = "Curly Brackets";
    Cbutton.textContent = "Parentheses";
    Dbutton.textContent = "Square Brackets";
    

    
    Abutton.addEventListener("click", function(){
        wrong.textContent = "Wrong Answer.";
        body.appendChild(wrong);
        quiz3();
        deductTime()
    })
    Bbutton.addEventListener("click", function(){
        wrong.textContent = "Wrong Answer.";
        body.appendChild(wrong);
        quiz3();
        deductTime()
    })
    Dbutton.addEventListener("click", function(){
        wrong.textContent = "Wrong Answer.";
        body.appendChild(wrong);
        quiz3();
        deductTime()
    })

    Cbutton.addEventListener("click", function(){
        wrong.textContent = "Correct";
        body.appendChild(wrong);
        quiz3();
        scoreNumber2= + 20;
        
    })

 }
 
 function quiz3 (){
   
   
    pEl.textContent= "Arrays in JavaScript can be used to store ____.";
    Abutton.textContent = "Numbers and Strings";
    Bbutton.textContent = "Other Arrays";
    Cbutton.textContent = "Booleans";
    Dbutton.textContent = "All of the Above";

    
    Abutton.addEventListener("click", function(){
        wrong.textContent = "Wrong Answer.";
        body.appendChild(wrong);
        quiz4();
        deductTime()
    })
    Bbutton.addEventListener("click", function(){
        wrong.textContent = "Wrong Answer.";
        body.appendChild(wrong);
        quiz4();
        deductTime()
    })
    Cbutton.addEventListener("click", function(){
        wrong.textContent = "Wrong Answer.";
        body.appendChild(wrong);
        quiz4();
        deductTime()
    })

    Dbutton.addEventListener("click", function(){
        wrong.textContent = "Correct";
        body.appendChild(wrong);
        quiz4();
        scoreNumber3= + 20;
    })

 }

 function quiz4 (){
    
    pEl.textContent= "String values must be encolsed within ___ when being assigned to variables.";
    Abutton.textContent = "Commas";
    Bbutton.textContent = "Curly Brackets";
    Cbutton.textContent = "Quotes";
    Dbutton.textContent = "Parentheses";

    
    Abutton.addEventListener("click", function(){
        wrong.textContent = "Wrong Answer.";
        body.appendChild(wrong);
        quiz5();
        deductTime();
        

        
    })
    Bbutton.addEventListener("click", function(){
        wrong.textContent = "Wrong Answer.";
        body.appendChild(wrong);
        quiz5();
        deductTime()
    })
    Dbutton.addEventListener("click", function(){
        wrong.textContent = "Wrong Answer.";
        body.appendChild(wrong);
        quiz5();
        deductTime()
    })

    Cbutton.addEventListener("click", function(){
        wrong.textContent = "";
        body.appendChild(wrong);
        quiz5();
        scoreNumber4= + 20;
    })

 }

 function quiz5 (){
    
    pEl.textContent= "A very useful tool used during the development and debugging for printing content to the debugger is:";
    Abutton.textContent = "JavaScript";
    Bbutton.textContent = "Console Log";
    Cbutton.textContent = "Terminal/Bash";
    Dbutton.textContent = "For Loops";

    
    Abutton.addEventListener("click", function(){
        wrong.textContent = "Wrong Answer.";
        body.appendChild(wrong);
        finish();
    })
    Cbutton.addEventListener("click", function(){
        wrong.textContent = "Wrong Answer.";
        body.appendChild(wrong);
        finish();
    })
    Dbutton.addEventListener("click", function(){
        wrong.textContent = "Wrong Answer.";
        body.appendChild(wrong);
        finish();
    })

    Bbutton.addEventListener("click", function(){
        wrong.textContent = "Correct";
        body.appendChild(wrong);
        finish();
        scoreNumber5= + 20;
    })

 }

 function finish(){

        wrong.textContent = "";
        body.removeChild(pEl);
        body.removeChild(listEl);
        
        
        clearInterval(timeInterval);
        timer.textContent = '';

        h1El.textContent="All Done!"
        score.textContent="Your Score is:" + (scoreNumber1+scoreNumber2+scoreNumber3+scoreNumber4+scoreNumber5) + ("/100")
        nameEl.textContent="Enter Initials:"
        submit.textContent = "Submit"

        body.appendChild(h1El);
        body.appendChild(score);
        body.appendChild(form);
        form.appendChild(nameEl);
        form.appendChild(input);
        form.appendChild(submit);
        form.appendChild(div);
        div.appendChild(response);

        score.setAttribute("style", "font-size: 18px; font-weight: bold;")
        nameEl.setAttribute("style", "font-size: 18px; font-weight: bold;")     
        submit.setAttribute("style", "background:purple; color:white; font-size:18px; font-weight:bold;")
        input.setAttribute("style", "font-size: 18px;")

        

        submit.addEventListener("click", showResponse);

 }
 

 highscoresbtn.addEventListener("click", showResponse);
 
 function showResponse(event) {
            event.preventDefault();
            var response = input.value;
            
            
            body.removeChild(score);
            body.removeChild(form);
            body.appendChild(highscoreList);
            

           
            h1El.textContent="Highscores";

            var scoreNumber = scoreNumber1+scoreNumber2+scoreNumber3+scoreNumber4+scoreNumber5;
            submissionResponseEl.textContent= response + (" - ")+ scoreNumber;
            console.log(submissionResponseEl);
            
 
            var li = document.createElement("li");
            li.textContent = submissionResponseEl.textContent;
             highscoreList.appendChild(li);

           var score = {
                repsonse: response.value.trim(),
                scoreNumber: scoreNumber.value,
           }

           localStorage.setItem("scores", JSON.stringify(score));
 }

 