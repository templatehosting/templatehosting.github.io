document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // АНИМАЦИИ

    let $textTitleSection = document.querySelectorAll('.title_section__text'),
        heightTriggerAnimation = 450;

    window.addEventListener("scroll", () => {
        if($textTitleSection[0].getBoundingClientRect().top <= heightTriggerAnimation) {
            $textTitleSection[0].classList.add("boingInUp");
        }
        if($textTitleSection[1].getBoundingClientRect().top <= heightTriggerAnimation) {
            $textTitleSection[1].classList.add("boingInUp");
        }
        if($textTitleSection[2].getBoundingClientRect().top <= heightTriggerAnimation) {
            $textTitleSection[2].classList.add("boingInUp");
        }
        if($textTitleSection[3].getBoundingClientRect().top <= heightTriggerAnimation) {
            $textTitleSection[3].classList.add("boingInUp");
        }
        if($textTitleSection[4].getBoundingClientRect().top <= heightTriggerAnimation) {
            $textTitleSection[4].classList.add("boingInUp");
        }
    });

});