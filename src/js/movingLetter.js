import anime from "animejs/lib/anime.es";

export const movingLetter = () =>
    anime
        .timeline({ loop: false })
        .add({ delay: 1500 })
        .add({
            targets: ".introWord",
            // taux de grossissement
            scale: [10, 1],
            // 1er chiffre : visibilité du scale le plus gros, 2e chiffre, le scale le plus petit
            opacity: [0, 1],
            easing: "easeOutCirc",
            duration: 800,
            delay: (el, i) => 800 * i,
        })
        .add({
            targets: ".introMetier",
            translateX: 500,
            opacity: [0, 1],
            duration: 2000,
        });
// .add({
//     targets: ".AnimeEffect_word__3Mc9v",
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000,
// });
