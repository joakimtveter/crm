// Move the footer to the bottom of the view port if the content is less than 100vh
document.addEventListener( "DOMContentLoaded",  footerToBottom, false); 

function footerToBottom() {
    let headerHeight = document.querySelector(".page-header").clientHeight;
    let footerHeight = document.querySelector(".page-footer").clientHeight;
    let headerFooterHeight = headerHeight + footerHeight;
    let content = document.querySelector(".page-content");
    content.style.minHeight = "calc( 100vh - " + headerFooterHeight + "px )";
}