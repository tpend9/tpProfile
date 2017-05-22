
//this function will be used for redrict a user on moible app
function contact_link(url) {
    if (window.outerWidth < 768) {
        window.location.replace(url);
    }
}