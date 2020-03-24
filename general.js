/* click sur btn menu mobile */

let btnMobile = document.querySelector('.cadre_principal_menu_sandwich')

btnMobile.onclick = () => {

    let textMenuMobile = document.querySelector('.text_menu_mobile')
    let span1 = document.querySelector('.span1')
    let span2 = document.querySelector('.span2')
    let span3 = document.querySelector('.span3')

    let navMobile = document.querySelector('.nav_mobile')

    textMenuMobile.classList.toggle('text_menu_mobile_cacher')
    span1.classList.toggle('span1_cacher')
    span2.classList.toggle('span2_cacher')
    span3.classList.toggle('span3_cacher')

    navMobile.classList.toggle('affiche_nav_mobile')

    //ajouter arret scroll

}