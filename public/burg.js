document.getElementById("add").addEventListener("click", function(event) {
    event.preventDefault() 
    console.log("clicked")

    const newBurger = {
        name: document.getElementById("burg").value,
        devour: false 
    }
    console.log(newBurger)
    fetch('/api/burgers', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        // make sure to serialize the JSON body
        body: JSON.stringify(newBurger),
      }).then(() => {
        // Empty the form
        document.getElementById('burg').value = '';

        // Reload the page so the user can see the new quote
        console.log('Created a new burger!');
        location.reload();
      });

})

const devourButtons = document.querySelectorAll(".change-eat")
console.log(devourButtons)

devourButtons.forEach(button => { 
    button.addEventListener("click", function(event) {
        const clickedBurger = event.target.value 
        const devourInfo = event.target.getAttribute("data-eaten") 
        console.log(clickedBurger, devourInfo)

        const newState = {
            devoured: 1 
        }
        fetch(`/api/burgers/${clickedBurger}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
    
            // make sure to serialize the JSON body
            body: JSON.stringify(newState),
          }).then((response) => {
            // Check that the response is all good
            // Reload the page so the user can see the new quote
            if (response.ok) {
              
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });

    })

    
});

