const card1 = document.querySelector('#card1');


card1.addEventListener('click', () => {

    if(card1.src.includes('./imgs/loja/CAPINHA 3.png')){
        card1.src = './imgs/loja/CAPINHA 2.png';
    }
    else
        card1.src = './imgs/loja/CAPINHA 3.png';
});