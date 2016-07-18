window.onload = function makeUltiUniversityGreatAgain() {

    function addCarouselHeader() {
        // header
        var newHeader = document.createElement("header");
        // carousel
        var carousel = document.createElement("div");
        carousel.className += "carousel fade-carousel slide";
        carousel.setAttribute("data-ride", "carousel");
        carousel.setAttribute("data-interval", "5000");
        carousel.setAttribute("id", "bs-carousel");
        // overlay
        var overlay = document.createElement("div");
        overlay.className += "overlay";
        // carousel-indicators
        var carousel_indicators = document.createElement("ol");
        carousel_indicators.className += "carousel-indicators";
        // indicators
        // indicator1
        var indicator1 = document.createElement("li");
        indicator1.setAttribute("data-target", "#bs-carousel");
        indicator1.setAttribute("data-slide-to", "0");
        // indicator2
        var indicator2 = document.createElement("li");
        indicator2.setAttribute("data-target", "#bs-carousel");
        indicator2.setAttribute("data-slide-to", "1");
        // indicator3
        var indicator3 = document.createElement("li");
        indicator3.setAttribute("data-target", "#bs-carousel");
        indicator3.setAttribute("data-slide-to", "2");
        // attach overlay
        carousel.appendChild(overlay);
        // attach carousel-indicators
        carousel.appendChild(carousel_indicators);
        // attach carousel
        newHeader.appendChild(carousel);
    }

    var d = document.getElementsByClassName("widgetDropped");

    for (var i=0; i<d.length; i++) {
        d.item(i).className = "portlet";
    }

    makeEverythingAMenuItem();

    function makeEverythingAMenuItem() {
        var menuElement = document.querySelector(".widget-menu");
        var menuList = document.createElement("ul");
        menuList.className += "list-unstyled";
        menuElement.appendChild(menuList);
        var menuItems = container1.children.item(1).children;
        for (var i = 0; i < menuItems.length; i++) {
            if (menuItems.item(i).querySelector("[title]").getAttribute("title") != "Calendar") {
                var nameMenuItem = menuItems.item(i).querySelector("h2").innerHTML;
            } else {
                var nameMenuItem = "Calendar";
            }
            var menuButt = document.createElement("li");
            var menuLink = document.createElement("a");
            menuLink.setAttribute("href", "#");
            menuLink.setAttribute("id", nameMenuItem);
            var menuIcon = document.createElement("span");
            menuIcon.className += "fa glyphicon";
            var menuItemTitle = document.createTextNode(nameMenuItem);
            menuIcon.appendChild(menuItemTitle);
            menuLink.appendChild(menuIcon);
            menuButt.appendChild(menuLink);
            menuList.appendChild(menuButt);
        }
    }
}