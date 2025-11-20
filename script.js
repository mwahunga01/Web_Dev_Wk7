// =====================
// Box Animation Function
// =====================
function toggleBoxAnimation() {
const box = document.getElementById('box');
box.classList.toggle('animate');
return box.classList.contains('animate'); // returns true if box is animated
}


document.getElementById('boxBtn').addEventListener('click', () => {
const isAnimated = toggleBoxAnimation();
console.log('Box animation state:', isAnimated);
});


// =====================
// Card Flip Function
// =====================
function flipCard(cardElement) {
cardElement.classList.toggle('flipped');
return cardElement.classList.contains('flipped');
}


const flipCardElement = document.getElementById('flipCard');
flipCardElement.addEventListener('click', () => {
const flipped = flipCard(flipCardElement);
console.log('Card flipped:', flipped);
});


// =====================
// Example of Scope, Parameters & Return
// =====================
function calculateDistance(x1, y1, x2, y2) {
// Local variables inside function
const dx = x2 - x1;
const dy = y2 - y1;
return Math.sqrt(dx * dx + dy * dy);
}


const distance = calculateDistance(0, 0, 3, 4);
console.log('Distance between points:', distance); // 5
