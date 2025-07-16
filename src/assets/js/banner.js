
(function () {
    const closeBanners = document.querySelectorAll(".c-banner__close");
    closeBanners.forEach( closeBanners => {
        closeBanners.addEventListener("click", event => {
            const banner= event.target.parentNode;
            banner.classList.add("collapse");

            banner.addEventListener("transitionend", function(event) {
                if (event.target === this) {
                    this.remove();
                }
            })
        })
    })

    
}) ();


 // JavaScript
// document.addEventListener("DOMContentLoaded", function () {
//   const closeBtn = document.querySelector(".c-banner__close");
//   const banner = document.querySelector(".c-banner");

//   if (closeBtn && banner) {
//     closeBtn.addEventListener("click", function () {
//       banner.classList.add("collapse");
//     });
//   }
// });
