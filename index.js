
const input = document.getElementById('input');

function addingEventListener() {
    function clickAlert() {
        alert('I was clicked!')
    };
    input.addEventListener('click', clickAlert);
};


/*function clickAlert() {
    alert('I was clicked!');
  }

const five = document.querySelector('div:nth-child(5)')

function addingEventListener(element) {
    element.addEventListener('click', clickAlert);
}

addingEventListener(five);*/
