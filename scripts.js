
// all of our draggable elements have the class draggable
const draggables = document.querySelectorAll('.ul_element_container .draggable');

//this is our canvas in which we intend to drag and drop an element
const containers = document.querySelectorAll('.canvas_area');

const element_container = document.querySelectorAll('.div_element_container');

//code for adding dragstart event listener to each draggable element
draggables.forEach(draggable =>{
    draggable.addEventListener('dragstart', ()=>{
        draggable.classList.add('dragging');
        console.log('dragging');
    })

    draggable.addEventListener('dragend', ()=>{
        draggable.classList.remove('dragging');
    })
});


//code for leaving and adding a new element to the canvas area
containers.forEach(container =>{

        container.addEventListener('dragover', event => {
            event.preventDefault(); // Necessary to allow dropping
          });
        
          container.addEventListener('drop', event => {
            event.preventDefault();
        
            const draggable = document.querySelector(".dragging");
            if (!draggable) return;
        
            const clone = document.createElement(draggable.value);
            clone.textContent = draggable.dataset.container;
            
            // Clone the dragged element
            clone.classList.add('draggable');
            clone.classList.add('inside_canvas');
            clone.classList.remove('dragging');
            clone.setAttribute('draggable', 'true');
            
            //code for properties of cloned element
            clone.addEventListener('click', ()=>{
                console.log(clone.id);
            })
        
            // Optionally, assign a new ID to the clone to avoid duplicates
            clone.id = `clone-${Date.now()}`;
        
            container.appendChild(clone);
            console.log('Element dropped and cloned');
          });
    });


//code for removing element from 


//code for properties
const inside_the_canvas = document.querySelectorAll('.inside_canvas');

inside_the_canvas.forEach(inside_element =>{
    inside_element.addEventListener('click', ()=>{
        console.log(inside_element.id);


        inside_element.classList.add('border');
        inside_element.classList.add('border-primary');
        const properties = document.querySelectorAll('.element_propery');
        properties.forEach(property => {
        property.setAttribute('style', 'display: block;');
        });
    })
})



//document.body.style('font-family: ')