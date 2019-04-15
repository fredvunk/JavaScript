const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Event handler

// clearBtn.addEventListener('dbclick', runEvent);

// clearBtn.addEventListener('mousedown', runEvent);
// clearBtn.addEventListener('mouseenter', runEvent);
// clearBtn.addEventListener('mouseleave', runEvent);
// clearBtn.addEventListener('mouseover', runEvent);
card.addEventListener('mousemove', runEvent);




function runEvent(e) {
    console.log(`Event type: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, 96) `;

}