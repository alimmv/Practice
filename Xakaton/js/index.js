// const overlayFunc = () => {
//     const openOverlay = document.querySelector(".header__singIn");
//     const closeOverlay = document.querySelector(".closeOverlay");
//     const overlay = document.querySelector(".overlay");

//     openOverlay.addEventListener("click", () => {
//         overlay.classList.add("active");
//         document.body.style.overflow = "hidden";
//     });

//     closeOverlay.addEventListener("click", () => {
//         overlay.classList.remove("active");
//         document.body.style.overflow = "visible";
//     });
// };

// export default overlayFunc;

// // Move the import statement to the end
// import overlayFunc from "./overlay.js";

//   // ... (the rest of your code)

let person = {
    img: "assets/img/footers/python icon.png",
    h1: "Курс по Python",
    title: "Этот курс разработан для тех, кто хочет освоить язык программирования Python с нуля или улучшить свои навыки в этой области. Курс включает в себя комплексный подход, объединяя теоретические знания, практические задания, тестирование, советы экспертов и обучающие видеоуроки."
};

// Получаем доступ к контейнеру, куда мы хотим добавить созданные элементы
let selfstudyboxs = document.getElementById(".self-study__boxs");

// Создаем элементы и добавляем их в контейнер
selfstudyboxs.innerHTML += `
    <img class="self-study__boxs-img" src="${person.img}" alt="">
    <div class="self-study__box">
        <div class="self-study__box--title--h1">
            <h1>${person.h1}</h1>
        </div>
        <div class="self-study__box--title">
            <p>${person.title}</p>
        </div>
    </div>
`;

