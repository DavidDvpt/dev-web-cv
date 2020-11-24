import anime from "animejs/lib/anime.es";

const maxY = Math.floor(window.innerHeight);
const maxX = Math.floor(window.innerWidth);

export const animationNav = () => {
    // const tl = anime.timeline({
    //     easing: "linear",
    //     duration: 1,
    // });

    anime({
        targets: "nav",
        translateY: [-60, 0],
        easing: "easeOutElastic(5, 0.4)",
        duration: 2500,
    });
};
export const animationIntro = () => {
    let profWidth = document.querySelector(".introProfession").offsetWidth;
    let letterBlockleft = document.querySelector(".letter").offsetLeft;
    console.log(
        "x: " + maxX,
        "y: " + maxY,
        "profWidth:" + profWidth,
        "letterBlockleft: " + letterBlockleft
    );

    const tl = anime.timeline({
        easing: "linear",
        duration: 100,
    });
    return (
        tl
            // white to dark blus gradient background
            .add({
                targets: "body",
                backgroundColor: ["#fff", "#0E0441"],
                easing: "linear",
                duration: 700,
            })
            // reverse all letters for special effect
            .add({
                targets: ".letter",
                translateY: 0,
                translateX: 0,
                duration: 1,
                rotate: {
                    value: 180,
                    duration: 1,
                    easing: "linear",
                },
            })
            // letters fall down and reverse
            .add({
                targets: ".letter",
                opacity: 1,
                translateY: [-maxY / 2, 0],
                translateX: [0, maxX * 0.2],
                duration: 1000,
                easing: "easeOutElastic(2, 0.4)",
                rotate: {
                    value: 360,
                    duration: 1000,
                    easing: "easeInExpo",
                },
                delay: anime.stagger(300),
            })
            // profession comes to right to
            .add({
                targets: ".introProfession",
                opacity: 1,
                translateX: [maxX, -maxX * 0.65 + profWidth],
                duration: 1000,
            })
    );
};
