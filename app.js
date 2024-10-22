// // Event listeners for SVG paths
// document.querySelectorAll(".allPaths").forEach(e => {
//     e.addEventListener("mouseover", function () {
//         window.onmousemove = function (j) {
//             const x = j.clientX;
//             const y = j.clientY;
//             document.getElementById('name').style.top = (y - 60) + 'px';
//             document.getElementById('name').style.left = (x + 10) + 'px';
//         }
//         document.getElementById("name").style.opacity = 1;
//         document.getElementById("namep").innerText = e.id;

//         // Highlight the hovered path
//         e.style.fill = "white";
//     });

//     e.addEventListener("mouseleave", function () {
//         document.getElementById("name").style.opacity = 0;
//         e.style.fill = e.getAttribute('fill'); // Reset fill color to original
//     });

//     e.addEventListener("click", function () {
//         // Show the sliding column and update content
//         document.getElementById("slidingColumn").classList.add("show");
//         document.getElementById("pins").innerHTML = `<div class="pin">You clicked on: ${e.id}</div>`;
//     });
// });

// // Close button functionality
// document.getElementById("closeButton").addEventListener("click", function () {
//     document.getElementById("slidingColumn").classList.remove("show");
// });

// // Zoom functionality
// const map = document.querySelector('svg');
// let scale = 1;

// document.addEventListener('wheel', function (event) {
//     event.preventDefault();
//     const zoomSpeed = 0.1;

//     if (event.deltaY < 0) {
//         // Zoom in
//         scale += zoomSpeed;
//     } else {
//         // Zoom out
//         scale -= zoomSpeed;
//         scale = Math.max(scale, 0.5); // Set a minimum zoom limit
//     }

//     map.style.transform = `scale(${scale})`;
// });

// // Event listeners for SVG paths
// document.querySelectorAll(".allPaths").forEach(e => {
//     e.addEventListener("mouseover", function () {
//         window.onmousemove = function (j) {
//             const x = j.clientX;
//             const y = j.clientY;
//             document.getElementById('name').style.top = (y - 60) + 'px';
//             document.getElementById('name').style.left = (x + 10) + 'px';
//         }
//         document.getElementById("name").style.opacity = 1;
//         document.getElementById("namep").innerText = e.id;

//         // Highlight the hovered path
//         e.style.fill = "white";
//     });

//     e.addEventListener("mouseleave", function () {
//         document.getElementById("name").style.opacity = 0;
//         e.style.fill = e.getAttribute('fill'); // Reset fill color to original
//     });

//     e.addEventListener("click", function () {
//         // Show the sliding column and update content
//         document.getElementById("slidingColumn").classList.add("show");
//         document.getElementById("pins").innerHTML = `<div class="pin">You clicked on: ${e.id}</div>`;
//     });
// });

// // Close button functionality
// document.getElementById("closeButton").addEventListener("click", function () {
//     document.getElementById("slidingColumn").classList.remove("show");
// });

// function showFloor(floor) {
//     document.getElementById('first-floor').style.display = floor === 1 ? 'block' : 'none';
//     document.getElementById('second-floor').style.display = floor === 2 ? 'block' : 'none';
// }

// // Zoom and Pan functionality
// const map = document.querySelector('svg');
// let scale = 1;
// let isPanning = false;
// let startX, startY;
// let offsetX = 0, offsetY = 0;

// map.addEventListener('mousedown', (event) => {
//     isPanning = true;
//     startX = event.clientX - offsetX;
//     startY = event.clientY - offsetY;
// });

// map.addEventListener('mouseup', () => {
//     isPanning = false;
// });

// map.addEventListener('mousemove', (event) => {
//     if (isPanning) {
//         offsetX = event.clientX - startX;
//         offsetY = event.clientY - startY;
//         map.style.transform = `scale(${scale}) translate(${offsetX}px, ${offsetY}px)`;
//     }
// });

// document.addEventListener('wheel', function (event) {
//     event.preventDefault();
//     const zoomSpeed = 0.1;

//     if (event.deltaY < 0) {
//         // Zoom in
//         scale += zoomSpeed;
//     } else {
//         // Zoom out
//         scale -= zoomSpeed;
//         scale = Math.max(scale, 0.5); // Set a minimum zoom limit
//     }

//     map.style.transform = `scale(${scale}) translate(${offsetX}px, ${offsetY}px)`;
// });

// const map1Paths = document.querySelectorAll('#first-floor .allPaths');
// const map2Paths = document.querySelectorAll('#second-floor .allPaths');
// const nameLabel = document.getElementById('name');
// const slidingColumn = document.getElementById('slidingColumn');
// const closeButton = document.getElementById('closeButton');

// let currentFloor = 'first-floor'; // Variable to track the current floor

// // Function to show the appropriate floor
// document.getElementById('secondFloor').style.display = 'none';

//         function showFloor(floor) {
//             const firstFloor = document.getElementById('firstFloor');
//             const secondFloor = document.getElementById('secondFloor');
            
//             if (floor === 1) {
//                 firstFloor.style.display = 'block';
//                 secondFloor.style.display = 'none';
//             } else if (floor === 2) {
//                 firstFloor.style.display = 'none';
//                 secondFloor.style.display = 'block';
//             }
//         }

// // Add hover event listeners for the paths in the first floor
// map1Paths.forEach(path => {
//     path.addEventListener('mouseover', () => {
//         nameLabel.innerText = path.id;
//         nameLabel.style.opacity = '1';
//     });

//     path.addEventListener('mousemove', (e) => {
//         nameLabel.style.left = `${e.pageX + 10}px`;
//         nameLabel.style.top = `${e.pageY - 20}px`;
//     });

//     path.addEventListener('mouseout', () => {
//         nameLabel.style.opacity = '0';
//     });

//     path.addEventListener('click', () => {
//         slidingColumn.classList.add('show');
//         const pin = document.createElement('div');
//         pin.classList.add('pin');
//         pin.innerText = path.id;
//         pin.addEventListener('click', () => {
//             alert(`You clicked on ${path.id}`);
//         });
//         document.getElementById('pins').appendChild(pin);
//     });
// });

// // Add hover event listeners for the paths in the second floor
// map2Paths.forEach(path => {
//     path.addEventListener('mouseover', () => {
//         nameLabel.innerText = path.id;
//         nameLabel.style.opacity = '1';
//     });

//     path.addEventListener('mousemove', (e) => {
//         nameLabel.style.left = `${e.pageX + 10}px`;
//         nameLabel.style.top = `${e.pageY - 20}px`;
//     });

//     path.addEventListener('mouseout', () => {
//         nameLabel.style.opacity = '0';
//     });

//     path.addEventListener('click', () => {
//         slidingColumn.classList.add('show');
//         const pin = document.createElement('div');
//         pin.classList.add('pin');
//         pin.innerText = path.id;
//         pin.addEventListener('click', () => {
//             alert(`You clicked on ${path.id}`);
//         });
//         document.getElementById('pins').appendChild(pin);
//     });
// });

// // Close button functionality
// closeButton.addEventListener('click', () => {
//     slidingColumn.classList.remove('show');
// });

// Handle floor toggle
// document.getElementById('secondFloor').style.display = 'none';

// function showFloor(floor) {
//     const firstFloor = document.getElementById('firstFloor');
//     const secondFloor = document.getElementById('secondFloor');
    
//     if (floor === 1) {
//         firstFloor.style.display = 'block';
//         secondFloor.style.display = 'none';
//     } else if (floor === 2) {
//         firstFloor.style.display = 'none';
//         secondFloor.style.display = 'block';
//     }
// }

// // Event listeners for SVG paths
// function addPathListeners(paths) {
//     const nameLabel = document.getElementById('name');
//     const slidingColumn = document.getElementById('slidingColumn');

//     paths.forEach(path => {
//         // Hover effect
//         path.addEventListener('mouseover', () => {
//             nameLabel.style.opacity = '1';
//             nameLabel.querySelector('#namep').innerText = path.id;
//         });

//         // Mouse move to follow cursor
//         path.addEventListener('mousemove', (e) => {
//             nameLabel.style.left = `${e.pageX + 10}px`;
//             nameLabel.style.top = `${e.pageY - 20}px`;
//         });

//         // Mouse leave to hide label
//         path.addEventListener('mouseout', () => {
//             nameLabel.style.opacity = '0';
//         });

//         // Click to show sliding column
//         path.addEventListener('click', () => {
//             slidingColumn.classList.add('show');
//             document.getElementById('pins').innerHTML = `<div class="pin">You clicked on: ${path.id}</div>`;
//         });
//     });
// }

// // Apply listeners for both floors
// addPathListeners(document.querySelectorAll('#firstFloor .allPaths'));
// addPathListeners(document.querySelectorAll('#secondFloor .allPaths'));

// // Close button functionality
// document.getElementById("closeButton").addEventListener("click", function () {
//     document.getElementById("slidingColumn").classList.remove("show");
// });

// // Zoom and Pan functionality
// const map = document.querySelector('svg');
// let scale = 1;
// let isPanning = false;
// let startX, startY;
// let offsetX = 0, offsetY = 0;

// map.addEventListener('mousedown', (event) => {
//     isPanning = true;
//     startX = event.clientX - offsetX;
//     startY = event.clientY - offsetY;
// });

// map.addEventListener('mouseup', () => {
//     isPanning = false;
// });

// map.addEventListener('mousemove', (event) => {
//     if (isPanning) {
//         offsetX = event.clientX - startX;
//         offsetY = event.clientY - startY;
//         map.style.transform = `scale(${scale}) translate(${offsetX}px, ${offsetY}px)`;
//     }
// });

// document.addEventListener('wheel', function (event) {
//     event.preventDefault();
//     const zoomSpeed = 0.1;

//     if (event.deltaY < 0) {
//         // Zoom in
//         scale += zoomSpeed;
//     } else {
//         // Zoom out
//         scale -= zoomSpeed;
//         scale = Math.max(scale, 0.5); // Set a minimum zoom limit
//     }

//     map.style.transform = `scale(${scale}) translate(${offsetX}px, ${offsetY}px)`;
// });

// Handle floor toggle
document.getElementById('secondFloor').style.display = 'none';

function showFloor(floor) {
    const firstFloor = document.getElementById('firstFloor');
    const secondFloor = document.getElementById('secondFloor');
    
    if (floor === 1) {
        firstFloor.style.display = 'block';
        secondFloor.style.display = 'none';
    } else if (floor === 2) {
        firstFloor.style.display = 'none';
        secondFloor.style.display = 'block';
    }
}

// Common function to handle hover and click events for paths
function addPathListeners(paths, svgId) {
    const nameLabel = document.getElementById('name');
    const slidingColumn = document.getElementById('slidingColumn');

    paths.forEach(path => {
        // Hover effect
        path.addEventListener('mouseover', () => {
            nameLabel.style.opacity = '1';
            nameLabel.querySelector('#namep').innerText = `${svgId} - ${path.id}`;
        });

        // Mouse move to follow cursor
        path.addEventListener('mousemove', (e) => {
            nameLabel.style.left = `${e.pageX + 10}px`;
            nameLabel.style.top = `${e.pageY - 20}px`;
        });

        // Mouse leave to hide label
        path.addEventListener('mouseout', () => {
            nameLabel.style.opacity = '0';
        });

        // Click to show sliding column
        path.addEventListener('click', () => {
            slidingColumn.classList.add('show');
            document.getElementById('pins').innerHTML = `<div class="pin">You clicked on: ${svgId} - ${path.id}</div>`;
        });
    });
}

// Apply listeners for both first and second floors
addPathListeners(document.querySelectorAll('#firstFloor .allPaths'), 'First Floor');
addPathListeners(document.querySelectorAll('#secondFloor .allPaths'), 'Second Floor');

// Close button functionality
document.getElementById("closeButton").addEventListener("click", function () {
    document.getElementById("slidingColumn").classList.remove("show");
});

// Zoom and Pan functionality
const map = document.querySelector('svg');
let scale = 1;
let isPanning = false;
let startX, startY;
let offsetX = 0, offsetY = 0;

map.addEventListener('mousedown', (event) => {
    isPanning = true;
    startX = event.clientX - offsetX;
    startY = event.clientY - offsetY;
});

map.addEventListener('mouseup', () => {
    isPanning = false;
});

map.addEventListener('mousemove', (event) => {
    if (isPanning) {
        offsetX = event.clientX - startX;
        offsetY = event.clientY - startY;
        map.style.transform = `scale(${scale}) translate(${offsetX}px, ${offsetY}px)`;
    }
});

document.addEventListener('wheel', function (event) {
    event.preventDefault();
    const zoomSpeed = 0.1;

    if (event.deltaY < 0) {
        // Zoom in
        scale += zoomSpeed;
    } else {
        // Zoom out
        scale -= zoomSpeed;
        scale = Math.max(scale, 0.5); // Set a minimum zoom limit
    }

    map.style.transform = `scale(${scale}) translate(${offsetX}px, ${offsetY}px)`;
});
