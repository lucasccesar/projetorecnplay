const menu = document.getElementById('menu');
menu.addEventListener('click', openSidebar);
var sidebarOpen = 0;
const slider = document.getElementById("sliderPhotos")
slider.addEventListener('touchstart', onMouseDown)
slider.addEventListener('touchend', onMouseUp)
var startPoint = 0
var endPoint = 0
var drag = 0
var currentImage = 0

function openSidebar() {
    let sidebar = document.querySelector('#sidebar');
    let sidebarHalf2 = document.querySelector('#sidebarHalf2');
    let closeSidebarBtn = document.querySelector("#closeSidebar")
    sidebarHalf2.addEventListener('click', closeSidebar) 
    closeSidebarBtn.addEventListener('click', closeSidebar) 
    sidebarHalf2.style.display = "block"
    sidebar.style.marginLeft = "0"
}

function closeSidebar(event) {
    let sidebar = document.querySelector('#sidebar');
    let sidebarHalf2 = document.querySelector('#sidebarHalf2');
    sidebarHalf2.style.display = "none"
    sidebar.style.marginLeft = "-40vw"
}

function onMouseDown(event){
    slider.classList.remove('transition')
    startPoint = event.touches[0].clientX
    slider.addEventListener('touchmove', onMouseMove)
}

function onMouseMove(event){
    let sliderImage = document.querySelector(".sliderImage")
    if(event.touches[0].clientX-startPoint<0 && currentImage<3){
        slider.style.transform = `translateX(${event.touches[0].clientX-startPoint - (sliderImage.offsetWidth * (currentImage))}px)`
    } else if(event.touches[0].clientX-startPoint>0 && currentImage>0){
        slider.style.transform = `translateX(${event.touches[0].clientX-startPoint - (sliderImage.offsetWidth * (currentImage))}px)`
    }
    drag = event.touches[0].clientX-startPoint
}

function onMouseUp(event){
    let sliderPosition = document.querySelectorAll('.sliderPositionCount')
    let sliderImage = document.querySelector(".sliderImage")
    slider.removeEventListener('touchmove', onMouseMove)
    if(drag < -120 && currentImage < 3){
        slider.classList.add('transition')
        slider.style.transform = `translateX(-${sliderImage.offsetWidth * (currentImage + 1)}px)`
        sliderPosition[currentImage].classList.remove("sliderPositionSelected")
        sliderPosition[currentImage+1].classList.add("sliderPositionSelected")
        currentImage++
    } else if(drag > 120 && currentImage > 0){
        slider.classList.add('transition')
        slider.style.transform = `translateX(-${sliderImage.offsetWidth * (currentImage-1)}px)`
        sliderPosition[currentImage].classList.remove("sliderPositionSelected")
        sliderPosition[currentImage-1].classList.add("sliderPositionSelected")
        currentImage--
    } else{
        slider.style.transform = `translateX(-${sliderImage.offsetWidth * (currentImage)}px)`
    }
}

