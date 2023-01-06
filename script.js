window.onload = function() {
    // change active page
    let fileName = location.pathname.split("/").slice(-1)[0]
    let items = document.getElementsByClassName('navbar-inactive');
    // set footer to be correct position
    let footer = document.getElementsByClassName('footer');
    switch (fileName) {
        case 'index.html':
            items[0].className = 'navbar-active';
            console.log(footer)
            footer[0].id = 'footer-about';
            break
        case 'skills.html':
            items[1].className = 'navbar-active'
            break
        case 'projects.html':
            items[2].className = 'navbar-active'
            break
        default:
            break
    }
};
