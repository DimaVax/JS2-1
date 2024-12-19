// 1
const sliderImg = document.querySelector(".slider__image");
const sliderInput = document.querySelector(".slider__input");
const sliderFunction = _.debounce(() => {
    // console.log('ji')
    sliderImg.style.width = `${sliderInput.value}px`;
    sliderImg.style.height = `${sliderInput.value}px`;
}, 300)
sliderInput.addEventListener("input", sliderFunction);

// 2
const element = document.querySelector('#box')
const body = document.querySelector('html')
body.addEventListener("mousemove", _.throttle((e) => {
    const rect = body.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    let left = x - element.offsetWidth / 2;
    let top = y - element.offsetHeight / 2;

    element.style.left = `${left}px`;
    element.style.top = `${top}px`;
  }, 30));