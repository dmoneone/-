document.addEventListener("DOMContentLoaded", e => {
    const pop_up_link_calc = document.querySelectorAll('.pop-up-link-calc');
    const close_pop_up_calc = document.querySelector('.close-pop-up-calc');
    const close_pop_up_risk = document.querySelector('.close-pop-up-risk')
    const pop_up_calc = document.querySelector('.pop-up-calc-wrap');
    const risk_management_button = document.querySelector('#risk-management');
    const pop_up_risk_management = document.querySelector('.pop-up-risk-management-wrap');
    
    risk_management_button.addEventListener('click', e => {
        pop_up_risk_management.classList.add('pop-up-show');
    })
    pop_up_risk_management.addEventListener('click', e => {
        pop_up_risk_management.classList.remove('pop-up-show');
    })
    close_pop_up_risk.addEventListener('click', e => {
        pop_up_risk_management.classList.remove('pop-up-show');
    })
    
    for ( let link of pop_up_link_calc ) {
        link.addEventListener('click', e => {
            pop_up_calc.classList.add('pop-up-show');
        })
    }
    pop_up_calc.addEventListener('click', e => {
        pop_up_calc.classList.remove('pop-up-show');
    })
    close_pop_up_calc.addEventListener('click', e => {
        pop_up_calc.classList.remove('pop-up-show');
    })
    
    
});
