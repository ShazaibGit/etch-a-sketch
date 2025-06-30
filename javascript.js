const container = document.querySelector('.container');

// Initial 16x16 grid
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.style.height = "6.25%";
    div.style.width = "6.25%";
    div.classList.add("div");
    container.appendChild(div);
}

let boxes = document.querySelectorAll(".container div");

// Initial hover color change
boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "red";
    });
});

const buttons = document.querySelector('button');

buttons.addEventListener('click', () => {
    let userSquare = prompt("Enter number of squares you would like on each side of the grid (max 100)");

    // Clear old grid
    boxes.forEach((box) => {
        box.remove();
    });

    // Create new grid
    for (let i = 0; i < userSquare * userSquare; i++) {
        const div = document.createElement('div');
        let hw = Math.floor((960 / userSquare)); // Adjust for border
        div.style.height = hw + 'px' ;
        div.style.width = hw + 'px';
        div.classList.add("div");
        container.appendChild(div);
    }

    // Re-select new boxes
    boxes = document.querySelectorAll(".container div");

    // Add hover effect to new boxes
    boxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "red";
        });
    });
});
