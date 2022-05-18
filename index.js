const show = (className) => {
    const element = document.querySelector(`.${className}`);
    element.classList.toggle("hide");
}

setTimeout(() => {
    document.querySelector(`.loader`).classList.add("hide-loader");
}, 1500)
