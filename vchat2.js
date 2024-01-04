document.addEventListener("DOMContentLoaded", function () {
    var boxes = document.querySelectorAll(".box");
    var selectedBoxes = [];
    var score = 0;
    var clickEnabled = true; // Variable to track whether click events are enabled

    textDistribute();

    function enableClick() {
        clickEnabled = true;
    }

    function checkMatch() {
        if (selectedBoxes.length === 2 && clickEnabled) {
            clickEnabled = false; // Disable click events
            setTimeout(enableClick, 1000); // Enable click events after 1 second

            if (selectedBoxes[0].textContent === selectedBoxes[1].textContent) {
                // Matching content, increase score and remove boxes
                score += 5;
                selectedBoxes.forEach(box => {
                    setTimeout(() => {
                        box.classList.add("finale");
                    }, 1000);
                });
            } else {
                // No match, hide the content after 1 second
                selectedBoxes.forEach(box => {
                    box.classList.remove("selected");
                    setTimeout(() => {
                        box.classList.add("hide");
                    }, 1000);
                });
            }

            // Clear the selectedBoxes array
            selectedBoxes = [];

            // Check if the score reaches 30
            console.log(score);
            if (score == 30) {
                // alert("Congratulations! You've won!");
                boxes.forEach(box => {
                    box.remove();
                });
                showMsg();
                // startGame();

            };
        }
    }

    function textDistribute() {
        var contentList = ["A", "B", "C", "D", "E", "F", "A", "B", "C", "D", "E", "F"];
        var rCposition = [];

        var num = 12;
        if (num == 0) {
            console.log(null);
        }
        do {
            const ram = Math.floor(Math.random() * 12);
            if (!rCposition.includes(ram)) {
                rCposition.push(ram);
            }
        } while (rCposition.length < num);

        var b1 = contentList[rCposition[0]];
        var b2 = contentList[rCposition[1]];
        var b3 = contentList[rCposition[2]];
        var b4 = contentList[rCposition[3]];
        var b5 = contentList[rCposition[4]];
        var b6 = contentList[rCposition[5]];
        var b7 = contentList[rCposition[6]];
        var b8 = contentList[rCposition[7]];
        var b9 = contentList[rCposition[8]];
        var b10 = contentList[rCposition[9]];
        var b11 = contentList[rCposition[10]];
        var b12 = contentList[rCposition[11]];
        var c = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12];
        console.log(c);

        boxes.forEach((box, i) => {
            box.innerHTML = c[i];
        });

    };

    boxes.forEach(box => {
        box.addEventListener("click", function () {
            // Check if click events are enabled
            if (clickEnabled && !box.classList.contains("selected")) {
                // Show content on click
                box.classList.remove("hide");

                // Add box to the selectedBoxes array
                selectedBoxes.push(box);
                
                // Mark the box as selected
                box.classList.add("selected");

                // Check for a match after the second click
                if (selectedBoxes.length === 2) {
                    checkMatch();
                }
            }
        });
    });

    let newG = document.querySelector("#stGame");
    newG.addEventListener("click", function () {
        textDistribute();
        
    });
});

function showMsg() {
    let show = document.querySelector("#show");
    show.classList.add("show");
    show.innerHTML = "Congratulations! You've matched all boxes!";
};

// function showMsg() {
//     let show = document.querySelector("#show");
//     show.classList.add("show");

//     // Log a message to check if the class is added
//     if (show.classList.contains("show")) {
//         console.log("Class 'show' added to the element with ID 'show'");
//     }

//     show.innerHTML = "done";
// };

