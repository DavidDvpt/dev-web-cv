import anime from "animejs/lib/anime.es";

const valueY = Math.floor(window.innerHeight * 0.4);
const valueX = Math.floor(window.innerWidth * 0.2);

export const animationIntro = () => {
    const tl = anime.timeline({
        easing: "linear",
        duration: 750,
    });
    return tl
        .add({
            targets: ".introContainer",
            backgroundColor: ["#fff", "#0E0441"],
            easing: "linear",
            duration: 1000,
        })
        .add({
            targets: ".letter",
            opacity: 1,
            translateY: [-600, 0],
            translateX: [0, 100],
            duration: 500,
            easing: "easeInExpo",
            rotate: {
                value: 360,
                duration: 1000,
                easing: "easeInExpo",
            },
            // // difference de taille entre la
            // scale: anime.stagger([0.7, 1], { from: "center" }),
            // // tps entre chaque descente de lettre
            delay: anime.stagger(400, { start: 1000 }),
            // delay: anime.stagger(400, { start: 1000 }),
            //
        })
        .add({
            targets: ".introProfession",
            opacity: 1,
            translateX: [+400, -200],
            duration: 500,
        });
};
// export const movingLetter = () => {
//     const tl = anime.timeline({
//         easing: "linear",
//         duration: 750,
//     });

//     tl.add({ delay: 1500 })
//         .add({
//             targets: ".introWord",
//             // taux de grossissement
//             scale: [10, 1],
//             // 1er chiffre : visibilité du scale le plus gros, 2e chiffre, le scale le plus petit
//             opacity: [0, 1],
//             // backgroundColor: ["#fff", "#000"],
//             // color: ["#000", "#fff"],
//             easing: "easeOutCirc",
//             duration: 5000,
//             delay: (el, i) => 800 * i,
//         })
//         .add({
//             targets: ".introMetier",
//             translateX: -300,
//             opacity: [0, 1],
//             duration: 500,
//         });
// };
// .add({
//     targets: ".AnimeEffect_word__3Mc9v",
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000,
// });
