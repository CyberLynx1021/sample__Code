// template_4dldrmk
// nCrrK3pIcZVm9-J96
// service_ogpxwce
function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"
    emailjs
    .sendForm(
        "service_ogpxwce",
        'template_4dldrmk',
        event.target,
        'nCrrK3pIcZVm9-J96'
    ).then(() => {
        loading.classList.remove('modal__overlay--visible');
        success.classList += ' modal__overlay--visible';
    }).catch(() => {
        loading.classList.remove('modal__overlay--visible');
        alert(
            'the email service is temperarily unavailable. please contact me directly on email@email.com'
        );
    })
}