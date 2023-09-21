const menu = document.getElementById('menu');
menu.addEventListener('click', openSidebar);
var sidebarOpen = 0;

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
