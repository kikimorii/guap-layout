const backBtn = document.getElementById('backBtn');
const listItems = document.querySelectorAll(".mobile-menu_list > li, .mobile-menu_list_inner > li");
const headerText = document.querySelector('.header_mobile-text');
const menuMobileSublists = document.querySelectorAll('.mobile-menu_sublist');
const headerLogo = document.querySelector('#headerLogo');

listItems.forEach(item => {
    const nestedList = item.querySelector("ul");

    if (nestedList) {
        item.addEventListener("click", function (event) {
            event.stopPropagation();

            nestedList.classList.add("active");
            if (!item.classList.contains('mobile-menu_list_inner-next')) {
                for (const element of item.textContent.split('\n')) {
                    if (element) {
                        headerText.textContent = element;
                        break;
                    }
                }
            }
            backBtn.classList.remove("d-none");
            headerLogo.classList.add("d-none");
            menuMobileSublists.forEach(list => list.classList.add("d-none"));
        });
    }
});