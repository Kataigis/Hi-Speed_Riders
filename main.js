$(document).ready(function () {
    document.getElementById("btn_home").addEventListener('click', function () {
        pageTransition("home");
    });

    document.getElementById("btn_core").addEventListener('click', function () {
        pageTransition("core");
    });

    document.getElementById("btn_generics").addEventListener('click', function (e) {
        pageTransition("generics");
    });

    document.getElementById("btn_g_main").addEventListener('click', function (e) {
        pageTransition("generics");
        document.getElementById("content_g_main").scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById("btn_g_extra").addEventListener('click', function (e) {
        pageTransition("generics");
        document.getElementById("content_g_extra").scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById("btn_variants").addEventListener('click', function (e) {
        pageTransition("variants");
    });

    document.getElementById("btn_v_dragon").addEventListener('click', function (e) {
        pageTransition("variants");
        document.getElementById("content_v_dragon").scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById("btn_v_wasp").addEventListener('click', function (e) {
        pageTransition("variants");
        document.getElementById("content_v_wasp").scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById("btn_v_magnet").addEventListener('click', function (e) {
        pageTransition("variants");
        document.getElementById("content_v_magnet").scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById("btn_v_kash").addEventListener('click', function (e) {
        pageTransition("variants");
        document.getElementById("content_v_kash").scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById("btn_v_symph").addEventListener('click', function (e) {
        pageTransition("variants");
        document.getElementById("content_v_symph").scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById("btn_v_trap").addEventListener('click', function (e) {
        pageTransition("variants");
        document.getElementById("content_v_trap").scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById("btn_engines").addEventListener('click', function (e) {
        pageTransition("engines");
    });

    document.getElementById("btn_e_gunity").addEventListener('click', function (e) {
        pageTransition("engines");
        document.getElementById("content_e_gunity").scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById("btn_e_kash").addEventListener('click', function (e) {
        pageTransition("engines");
        document.getElementById("content_e_kash").scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById("btn_e_machina").addEventListener('click', function (e) {
        pageTransition("engines");
        document.getElementById("content_e_machina").scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById("btn_e_symph").addEventListener('click', function (e) {
        pageTransition("engines");
        document.getElementById("content_e_symph").scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById("btn_lists").addEventListener('click', function () {
        pageTransition("lists");
    });

    document.getElementById("btn_combos").addEventListener('click', function () {
        pageTransition("combos");
    });

    document.getElementById("btn_md").addEventListener('click', function () {
        pageTransition("md");
    });

    document.getElementById("btn_discussions").addEventListener('click', function () {
        pageTransition("discussions");
    });
});

function pageTransition(id) {
    window.scrollTo(0, 0);
    var btns = document.getElementsByClassName("nav-link");
    var contents = document.getElementsByClassName("tabContent");
    Array.from(btns).forEach((el) => {
        el.classList.remove("active");
        console.log("removed");
    });
    Array.from(contents).forEach((el) => {
        el.style.display = "none";
    })
    document.getElementById(`btn_${id}`).classList.add("active");
    $(`#content_${id}`).fadeIn(600);
}

function swapcontent(id) {
    $(`#${id}`).find(".rationale").toggle();
    $(`#${id}`).find(".cardtext").toggle();
}
