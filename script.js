window.onload = function() {
    // change active page
    let fileName = location.pathname.split("/").slice(-1)[0]
    let items = document.getElementsByClassName('navbar-inactive');
    switch (fileName) {
        case 'index.html':
            items[0].className = 'navbar-active';
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
