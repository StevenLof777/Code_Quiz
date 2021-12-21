// Accessing element by id
        var firstChildUl = document.getElementById("first-child-ul");

// Access multiple elements using .querySelectorAll()
        var divTags = document.querySelectorAll("div");
        var pTags = document.querySelectorAll("p");
        var imgEl = document.querySelectorAll("img");

// Access element by ID using .querySelector()
        var changeP = document.querySelector("#change2");

// Sets first pTags to have a font-size of 40px
        Tags[0].setAttribute("style", "font-size: 40px;");

// Sets changeP to have multiple style attributes
        changeP.setAttribute("style", "font-size: 25px; font-weight: bold; text-decoration:underline; ");

 // Sets image source of the first image
        imgEl[0].setAttribute("src", "./assets/images/image_1.png");

// Adds size and width styling to image
        imgEl[0].setAttribute("style", "width:50%");

// Loops through divTags to set each one to have the color blue and the font size of 30px
        for (var i = 0; i < divTags.length; i++) {
        divTags[i].setAttribute("style", "color:blue; font-size: 30px");
        }

//  Act 7 unit 4
        // Appends tag as child of document body
        document.body.appendChild(tag);

//   act 8 unit 4
        // Create ordered list items
        var li1 = document.createElement("li");
        // Add text for list items
        li1.textContent = "Apples 🍎 ";
        li1.setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");

// TIMER INTERVALS!!! Act 9 unit 4
        // Selects element by class
        var timeEl = document.querySelector(".time");

        // Selects element by id
        var mainEl = document.getElementById("main");

        var secondsLeft = 10;

        function setTime() {
        // Sets interval in variable
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

            if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            sendMessage();
            }

        }, 1000);
        }

        // Function to create and append colorsplosion image
        function sendMessage() {
        timeEl.textContent = " ";
        var imgEl = document.createElement("img");
        imgEl.setAttribute("src", "images/image_1.jpg");
        mainEl.appendChild(imgEl);

        }

        setTime();

//o. Make a start button
        a. Start button as the beginning point 
        b. we need to make the start button disappear
                use .remove() method
        c. needs to call whatever the function for the setInterval is
        

//1. putt the q/a's in an array
[
question = {
        question: 'how old are your?',
        choices: ['a', 'b', 'c', 'd',],
        answer: 'a'
},
question = {
        question: 'how old are your?',
        choices: ['a', 'b', 'c', 'd',],
        answer: 'a'
},
question = {
        question: 'how old are your?',
        choices: ['a', 'b', 'c', 'd',],
        answer: 'a'
},
question = {
        question: 'how old are your?',
        choices: ['a', 'b', 'c', 'd',],
        answer: 'a'
},
question = {
        question: 'how old are your?',
        choices: ['a', 'b', 'c', 'd',],
        answer: 'a'
},
]   

2. How do i make a for loop that iterates through the array and displays
the questions

for (var i = 0; i <questionBank.length; i++) {
        var question = questionBank[i].question
        var choices = questionBank[i].choices
        var answer = questionBank[i].answer

        target some element on the page using querySelector and use
        textContent to display that question or choices or answers
        to the page?
}

3. How do I check and see if the chosen answer is correct?
        a. Generate an element that is a button 
        b. For each ofthe button, attach an addEventListener
        c. and for whichever it is clicked on, check against the answer
        while using if else statements

4. Calculate score
        a. if wrong you dont get a point
        b. if correct then you get one point

5. Need a timer to count down
        a.setInterval
        b.some kind of var with some random number in it  
        c.we would subtract by 1 
        d.we Run some kind of logic inside of the count
        e. check the soltion to the user Input 
                * If/Else if not correct, subtract time.
        f. when the timer goes to zero then 
                *Display youre all done
                *Display score 
                *Ask for initials
                *go to another page that shows the scores

6. Store the score to the browser
        a. LOCAL STORAGE 
        b. After we input in our intials, want to save our score and our
        initials to the local Storage
        c. use localStorage.setItem('score', value);
                * {initial: THING WE TYPE, highscore: number}
                localStorage.setItem('userScore', JSON.stringify(object))