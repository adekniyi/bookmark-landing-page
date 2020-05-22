var simple = document.querySelector('.simple');
var speedy = document.querySelector('.speedy');
var easy = document.querySelector('.easy');
var li1 = document.querySelector('.li1');
var li2  = document.querySelector('.li2');
var li3  = document.querySelector('.li3');


var arrow = document.querySelectorAll('.quest h6');

var bookmark = document.querySelector('#bookmark a');
var bookmarkPara = document.querySelector('.quest .bookmark');



var browser = document.querySelector('#browser a');
var browserPara = document.querySelector('.quest .browser');


var app = document.querySelector('#app a');
var appPara = document.querySelector('.quest .app');


var chrom = document.querySelector('#chrom a');
var chromPara = document.querySelector('.quest .chrom');

li2.addEventListener('click',function(){
    simple.style.display = 'none';
    easy.style.display = 'none';
    speedy.style.display = 'flex';
    this.classList.add('border');
    li1.classList.remove('border');
    li3.classList.remove('border')
});
li3.addEventListener('click',function(){
    simple.style.display = 'none';
    easy.style.display = 'flex';
    speedy.style.display = 'none';
    this.classList.add('border')
    li1.classList.remove('border');
    li2.classList.remove('border')
});

li1.addEventListener('click',function(){
    simple.style.display = 'flex';
    easy.style.display = 'none';
    speedy.style.display = 'none';
    this.classList.add('border')
    li3.classList.remove('border');
    li2.classList.remove('border')
});


bookmark.addEventListener('click', function(){
    bookmarkPara.style.display = 'block';
    browserPara.style.display = 'none';
    appPara.style.display = 'none';
    chromPara.style.display = 'none';
});


browser.addEventListener('click', function(){
    bookmarkPara.style.display = 'none';
    browserPara.style.display = 'block';
    appPara.style.display = 'none';
    chromPara.style.display = 'none';
});



app.addEventListener('click', function(){
    bookmarkPara.style.display = 'none';
    browserPara.style.display = 'none';
    appPara.style.display = 'block';
    chromPara.style.display = 'none';
});


chrom.addEventListener('click', function(){
    bookmarkPara.style.display = 'none';
    browserPara.style.display = 'none';
    appPara.style.display = 'none';
    chromPara.style.display = 'block';
})

// for(i=0;i<arrow.length;i++){
//     arrow[i].addEventListener('click', function(){
//         console.log('click')
//     })
// }