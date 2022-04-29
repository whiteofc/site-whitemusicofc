const item1 = document.querySelector('#card1-hover');
const item2 = document.querySelector('#card2-hover');
const item3 = document.querySelector('#card3-hover');
const item4 = document.querySelector('#card4-hover');
const item5 = document.querySelector('#card5-hover');
const item6 = document.querySelector('#card6-hover');
const item7 = document.querySelector('#card7-hover');
const item8 = document.querySelector('#card8-hover');



// produtos = [item1,item2,item3,item4,item5,item6,item7,item8]

// console.log(produtos[2]);



// const cards = {
//     item1 = document.querySelector(#)
// }

//for x cards




item1.addEventListener('mouseover', () =>{

    if(item1.src.includes('bone_white_preto_frente.png')){
        item1.src = '../imgs/loja/bone_white_preto_tras.png';
    }
});

item1.addEventListener('mouseout', () =>{
    if(!item1.src.includes('bone_white_preto_frente.png')){
        item1.src = '../imgs/loja/bone_white_preto_frente.png';
    }
});

item2.addEventListener('mouseover', () =>{

    if(item2.src.includes('bone_white_vermelho_frente.png')){
        item2.src = '../imgs/loja/bone_white_daleinsano_tras.png';
    }
});

item2.addEventListener('mouseout', () =>{
    if(!item2.src.includes('bone_white_vermelho_frente.png')){
        item2.src = '../imgs/loja/bone_white_vermelho_frente.png';
    }
});

item3.addEventListener('mouseover', () =>{

    if(item3.src.includes('bone_white_daleinsano_azul_frente.png')){
        item3.src = '../imgs/loja/bone_white_dale_insano_tras.png';
    }
});

item3.addEventListener('mouseout', () =>{
    if(!item3.src.includes('bone_white_daleinsano_azul_frente.png')){
        item3.src = '../imgs/loja/bone_white_daleinsano_azul_frente.png';
    }
});

item4.addEventListener('mouseover', () =>{

    if(item4.src.includes('white_dale_insano_vinho_frente.png')){
        item4.src = '../imgs/loja/white_dale_insano_vinho_tras.png';
    }
});

item4.addEventListener('mouseout', () =>{
    if(!item4.src.includes('white_dale_insano_vinho_frente.png')){
        item4.src = '../imgs/loja/white_dale_insano_vinho_frente.png';
    }
});

item5.addEventListener('mouseover', () =>{

    if(item5.src.includes('camisa_white_divide_frente.png')){
        item5.src = '../imgs/loja/camisa_white_divide_tras.png';
    }
});

item5.addEventListener('mouseout', () =>{
    if(!item5.src.includes('camisa_white_divide_frente.png')){
        item5.src = '../imgs/loja/camisa_white_divide_frente.png';
    }
});

item6.addEventListener('mouseover', () =>{

    if(item6.src.includes('camisa_white_frente.png')){
        item6.src = '../imgs/loja/camisa_white_tras.png';
    }
});

item6.addEventListener('mouseout', () =>{
    if(!item6.src.includes('camisa_white_frente.png')){
        item6.src = '../imgs/loja/camisa_white_frente.png';
    }
});

item7.addEventListener('mouseover', () =>{

    if(item7.src.includes('camisa_white_daleinsano_black_frente.png')){
        item7.src = '../imgs/loja/camisa_white_daleinsano_black_tras.png';
    }
});

item7.addEventListener('mouseout', () =>{
    if(!item7.src.includes('camisa_white_daleinsano_black_frente.png')){
        item7.src = '../imgs/loja/camisa_white_daleinsano_black_frente.png';
    }
});

item8.addEventListener('mouseover', () =>{

    if(item8.src.includes('camisa_daleinsano_frente.png')){
        item8.src = '../imgs/loja/camisa_daleinsano_tras.png';
    }
});

item8.addEventListener('mouseout', () =>{
    if(!item8.src.includes('camisa_daleinsano_frente.png')){
        item8.src = '../imgs/loja/camisa_daleinsano_frente.png';
    }
});