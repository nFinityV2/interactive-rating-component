const feedback = document.getElementById('feedback');
const cardLayout = document.getElementById('card-layout');


feedback.addEventListener('submit', function(e){
    e.preventDefault();
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
