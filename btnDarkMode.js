btnSwitchMode = (newTheme) => {
    if (newTheme === "light-theme") {
        document.getElementById("ball").style.transform = "translateX(24px)";
    } else {
        document.getElementById("ball").style.transform = "translateX(0px)";
    }
};

const newTheme = localStorage.getItem("data-theme");
btnSwitchMode(newTheme);
document.body.classList.add(newTheme);
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
    const container = document.body;
    const dataTheme = container.getAttribute("data-theme");

    if (dataTheme === "light-theme") {
        container.setAttribute("data-theme", "dark-theme");
        localStorage.setItem("data-theme", "dark-theme");
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
    } else {
        container.setAttribute("data-theme", "light-theme");
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
        localStorage.setItem("data-theme", "light-theme");
    }

    localStorage.getItem("data-theme");

    const newTheme = localStorage.getItem("data-theme");
    console.log(newTheme);
    btnSwitchMode(newTheme);
});
