const feedback = document.getElementById('feedback');
const cardLayout = document.getElementById('card-layout');
const btnCircle = document.querySelectorAll('.circle');

// Loops over the circle divs
for(let i = 0; i < btnCircle.length; i++){

     btnCircle[i].addEventListener('click', function(){

        // Loops over the button to remove the selected button style
        for(let i = 0; i < btnCircle.length; i++){
            btnCircle[i].classList.contains('selected');
            btnCircle[i].classList.remove('selected');
        }
        
        btnCircle[i].classList.add('selected');
     })
}


feedback.addEventListener('submit', function(e){
    e.preventDefault();

    // Checks which input is selected, and applies to the thank you message
    let rating = document.querySelector('input[name="rate"]:checked').value;

    cardLayout.innerHTML = `
    <div class="card-thankyou">
    <img src="images/illustration-thank-you.svg" alt="thankyou-icon"/>
    <div class="selected-rating">You selected <span id="rating"> ${rating} </span> out of 5</div>
    <h2>Thank you!</h2>
    <p>We appreciate you taking the time to give a rating. If
    you ever need more support, don't hesitate to get in touch!</p>
    </div>
    `
})
