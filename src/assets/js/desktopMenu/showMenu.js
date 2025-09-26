import { dynamicTop, classToggler } from "../utils";
import { scrollTabsRender } from "./scrollTabs";

const menuDesktopBtn = document.querySelector('#menuBtnDesktop');
const menuDesktopIcon = document.querySelector('#menuDesktopIcon');
const desktopMenuTabs = document.querySelector('#desktopMenuTabs');
const desktopMenu = document.querySelector('#desktopMenu');
const headerLogo = document.querySelector('#headerLogo');
const siteMapLink = document.querySelector('#siteMapLink');
const siteSearchLink = document.querySelector('#siteSearchLink');
const header = document.querySelector('.header');
const mainContent = document.querySelector('main');
const footerContent = document.querySelector('footer');
const container = document.querySelector('.container');

if (menuDesktopBtn != null) {
    dynamicTop(desktopMenu);

    menuDesktopBtn.addEventListener('click', () => {
        classToggler([menuDesktopIcon, desktopMenuTabs, desktopMenu], 'active');
        classToggler([headerLogo, siteMapLink, siteSearchLink], 'd-none');
        classToggler(header, 'fixed');
        classToggler(mainContent, 'header-fixed');
        
        const containerWidth = parseInt(getComputedStyle(container).width);
        if (desktopMenu.classList.contains('active')) {
            scrollTabsRender(containerWidth);
        }
        setTimeout(() => {
            classToggler([mainContent, footerContent], 'd-none');
        }, !menuDesktopIcon.classList.contains('active') ? 0 : 500);
    });
}