const html = document.querySelector('html');
const menu = document.getElementById('menu');
menu.addEventListener('click', openSidebar);
var sidebarOpen = 0;
const slider = document.getElementById('sliderPhotos');
slider.addEventListener('touchstart', onMouseDown);
slider.addEventListener('touchend', onMouseUp);
var startPoint = 0;
var endPoint = 0;
var drag = 0;
var currentImage = 0;
const saibaMaisBtns = document.querySelectorAll('.saibaMais');
saibaMaisBtns.forEach(btns => {
    btns.addEventListener('click', saibaMais);
});
var parentSlider = ''
var divSlider = ''
const linhaDoTempo = document.getElementById("linhaDoTempo")
linhaDoTempo.addEventListener('click', expand)

function expand(event){
    let teste = document.getElementById("teste")
    let sibling = event.target.nextElementSibling
    let dropDown = document.querySelector("#linhaDoTempo svg")
    dropDown.style.transition = '400ms'
    if(sibling.style.height == '' || sibling.style.height == "0px"){
        teste.parentElement.style.marginTop = '2vw'
        sibling.style.height = `${teste.offsetHeight}px`
        dropDown.style.rotate = '-180deg'
    } else{
        sibling.style.height = `0px`
        teste.parentElement.style.marginTop = '0vw'
        dropDown.style.rotate = '0deg'
    }
}

function saibaMais(event) {
    parentSlider = event.target.parentElement.parentElement;
    divSlider = document.createElement('div');
    divSlider.addEventListener('click', teste)
    divSlider.classList.add('wrapperBg');
    divSlider.innerHTML = `
    <div class="wrapper">
        <div class="images">
            <div class="img-1" style="background-image: url(imgs/${event.target.dataset.ponte}Depois.png)"></div>
            <div class="img-2" style="background-image: url(imgs/${event.target.dataset.ponte}Antes.png)"></div>
        </div>
        <div class="slider">
            <div class="drag">
                <div class="dragLineUpper"></div>
                <div class="dragBall">
                    <span style="border-left-color: #fff;"></span>
                    <span style="border-top-color: #fff;"></span>
                </div>
                <div class="dragLineLower"></div>
            </div>
            <input type="range" min="0" max="100" value="50">
        </div>
    </div>
    `;
    parentSlider.appendChild(divSlider );
    html.style.overflowY = 'hidden';
    const sliderInput = document.querySelector('.slider input');
    const img = document.querySelector('.images .img-2');
    const dragLine = document.querySelector('.slider .drag');
    sliderInput.oninput = () => {
        let sliderVal = sliderInput.value;
        dragLine.style.left = sliderVal + '%';
        img.style.width = sliderVal + '%';
    };
}

function teste(event){
    if(event.target == divSlider){
        parentSlider.removeChild(divSlider)
        html.style.overflowY = '';
    }
}

function openSidebar() {
    let sidebar = document.querySelector('#sidebar');
    let sidebarHalf2 = document.querySelector('#sidebarHalf2');
    let closeSidebarBtn = document.querySelector('#closeSidebar');
    sidebarHalf2.addEventListener('click', closeSidebar);
    closeSidebarBtn.addEventListener('click', closeSidebar);
    sidebarHalf2.style.display = 'block';
    sidebar.style.marginLeft = '0';
}

function closeSidebar(event) {
    let sidebar = document.querySelector('#sidebar');
    let sidebarHalf2 = document.querySelector('#sidebarHalf2');
    sidebarHalf2.style.display = 'none';
    sidebar.style.marginLeft = '-40vw';
}

function onMouseDown(event) {
    slider.classList.remove('transition');
    startPoint = event.touches[0].clientX;
    slider.addEventListener('touchmove', onMouseMove);
}

function onMouseMove(event) {
    let sliderImage = document.querySelector('.sliderImage');
    if (event.touches[0].clientX - startPoint < 0 && currentImage < 3) {
        slider.style.transform = `translateX(${event.touches[0].clientX - startPoint - sliderImage.offsetWidth * currentImage}px)`;
    } else if (event.touches[0].clientX - startPoint > 0 && currentImage > 0) {
        slider.style.transform = `translateX(${event.touches[0].clientX - startPoint - sliderImage.offsetWidth * currentImage}px)`;
    }
    drag = event.touches[0].clientX - startPoint;
}

function onMouseUp(event) {
    let sliderPosition = document.querySelectorAll('.sliderPositionCount');
    let sliderImage = document.querySelector('.sliderImage');
    slider.removeEventListener('touchmove', onMouseMove);
    if (drag < -120 && currentImage < 3) {
        slider.classList.add('transition');
        slider.style.transform = `translateX(-${sliderImage.offsetWidth * (currentImage + 1)}px)`;
        sliderPosition[currentImage].classList.remove('sliderPositionSelected');
        sliderPosition[currentImage + 1].classList.add('sliderPositionSelected');
        currentImage++;
    } else if (drag > 120 && currentImage > 0) {
        slider.classList.add('transition');
        slider.style.transform = `translateX(-${sliderImage.offsetWidth * (currentImage - 1)}px)`;
        sliderPosition[currentImage].classList.remove('sliderPositionSelected');
        sliderPosition[currentImage - 1].classList.add('sliderPositionSelected');
        currentImage--;
    } else {
        slider.style.transform = `translateX(-${sliderImage.offsetWidth * currentImage}px)`;
    }
}
