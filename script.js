//? sidebar function
const sidebar = document.querySelector('.sidebar');

function showSidebar() {
  sidebar.style.display = 'flex';
}
function hideSidebar() {
    sidebar.style.display = 'none';
}

//? auto update year
const year = new Date().getFullYear();
  
document.getElementById("year").textContent = year;