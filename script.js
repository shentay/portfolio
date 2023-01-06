// navbar
// change active page
let navbarItems = document.getElementsByClassName("navbar-parent")
let items = navbarItems.getElementsByClassName("navbar-child")
for (let i = 0; i < items.length - 1; i++) {
    items[i].addEventListener("click", function()  {
        let current = document.getElementsByClassName("active")
        current[0].className = current[0].className.replace("-active", "")
        this.className += "-active"
    })
}