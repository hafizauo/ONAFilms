import { useEffect } from 'react';

const useHamburgerMenu = () => {
    useEffect(() => {
        const menuIcon = document.querySelector("#hamburger-menu");
        const overlay = document.querySelector("#menuOverlay");
        const menuLinks = document.querySelectorAll(".overlay-content a");

        const toggleOverlay = () => {
            overlay.classList.toggle("active");
            menuIcon.classList.toggle("active");
        };

        const hideOverlay = () => {
            overlay.classList.remove("active");
            menuIcon.classList.toggle("active");
        };

        if (menuIcon) {
            menuIcon.addEventListener("click", toggleOverlay);
        }

        menuLinks.forEach(link => {
            link.addEventListener("click", hideOverlay);
        });

        return () => {
            if (menuIcon) {
                menuIcon.removeEventListener("click", toggleOverlay);
            }
            menuLinks.forEach(link => {
                link.removeEventListener("click", hideOverlay);
            });
        };
    }, []);
};

export default useHamburgerMenu;
