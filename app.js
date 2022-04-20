const content = document.getElementById("content")
const show = document.getElementById("coffee_menu")
const hide = document.getElementById("exit")
const cof = document.getElementById('cof')
const coffeeItem = document.getElementsByClassName('coffee_item')
const bao = document.getElementById('bao')
const baoContent = document.getElementById('container_bao')
const hideBao = document.getElementById('bao_exit')
const vasabi = document.getElementById('vasabi')
const vasabiContent = document.getElementById('container_vasabi')
const hideVasabi = document.getElementById('vasabi_exit')
const juice = document.getElementById('juice')
const juiceContent = document.getElementById('container_juice')
const hideJuice = document.getElementById('juice_exit')
const pokupka = document.getElementsByClassName ('pokupka')
const tea = document.getElementById('tea')
let a = ''
const oplata = document.getElementById ('oplata')
let num = 0



show.addEventListener("click", () => {
    setTimeout(function() {
    content.style.display = 'grid';
    hide.style.display = 'grid';
    }, 100)
    setTimeout(function() {
        cof.classList.add ('cof_visible')
    }, 150);
}) 

hide.addEventListener("click", () => {
    setTimeout(function() {
        content.style.display = 'none';
        hide.style.display = 'none';
        cof.classList.remove('cof_visible');
        for(let i = 0; i<coffeeItem.length; i++)
        coffeeItem[i].classList.remove ('active')
    }, 550);
}) 

let animation = anime({
    targets: content,
      width: '770px',
      height: '768px',
      delay: 350,
      duration: 750,
      easing: 'easeInQuint',
    });
  
document.querySelector('#coffee_menu').onclick = animation.play;

show.addEventListener("click", () => {
    let i = -1;
    const intervalId = setInterval(() => {
      if (i === 13) {
        clearInterval(intervalId);
}
      i += 1;
      coffeeItem[i].classList.add ('active') 
    }, 250);
});

let coffee_animation_exit = anime({
  targets: content,
  width: '770px',
  height: '668px',
  duration: 500,
  easing: 'easeInQuint',
  autoplay: false,
  direction: 'reverse',
});

document.querySelector('#exit').onclick = coffee_animation_exit.play;

bao.addEventListener('click', () => {
setTimeout(function(){
baoContent.style.display = 'grid';
hideBao.style.display = 'grid';
},350)
})
let bao_animation = anime({
    targets: baoContent,
      width: '770px',
      height: '768px',
      duration: 750,
      easing: 'easeInQuint',
      autoplay: false, 
});
  
document.querySelector('#bao').onclick = bao_animation.play;

hideBao.addEventListener("click", () => {
    setTimeout(function() {
    baoContent.style.display = 'none';
    },750)
    hideBao.style.display = 'none';
})
let bao_animation_exit = anime({
      targets: baoContent,
      width: '770px',
      height: '668px',
      duration: 500,
      easing: 'easeInQuint',
      autoplay: false,
      direction: 'reverse',
});

document.querySelector('#bao_exit').onclick = bao_animation_exit.play;

vasabi.addEventListener('click', () => {
  setTimeout(function(){
  vasabiContent.style.display = 'grid';
  hideVasabi.style.display = 'grid';
  },350)
})
let vasabi_animation = anime({
      targets: vasabiContent,
        width: '770px',
        height: '768px',
        duration: 750,
        easing: 'easeInQuint',
        autoplay: false, 
});
    
vasabi.onclick = vasabi_animation.play;
  
  hideVasabi.addEventListener("click", () => {
      setTimeout(function() {
      vasabiContent.style.display = 'none';
      },750)
      hideVasabi.style.display = 'none';
})
  let vasabi_animation_exit = anime({
        targets: vasabiContent,
        width: '770px',
        height: '668px',
        duration: 500,
        easing: 'easeInQuint',
        autoplay: false,
        direction: 'reverse',
});
  
hideVasabi.onclick = vasabi_animation_exit.play;

juice.addEventListener('click', () => {
  setTimeout(function(){
  juiceContent.style.display = 'grid';
  hideJuice.style.display = 'grid';
  },350)
})
let juice_animation = anime({
      targets: juiceContent,
        width: '770px',
        height: '768px',
        duration: 750,
        easing: 'easeInQuint',
        autoplay: false, 
});
      
juice.onclick = juice_animation.play;
    
    hideJuice.addEventListener("click", () => {
        setTimeout(function() {
          juiceContent.style.display = 'none';
        },750)
          hideJuice.style.display = 'none';
})
let juice_animation_exit = anime({
          targets: juiceContent,
          width: '770px',
          height: '668px',
          duration: 500,
          easing: 'easeInQuint',
          autoplay: false,
          direction: 'reverse',
});
    
hideJuice.onclick = juice_animation_exit.play;

function coffeeSelection() {
  const b = event.target.textContent;
  const textElement = document.querySelector('.pokupka');
  const newElement = document.createElement('div');
  newElement.classList.add ('coffee_pokupka')
  num++;
  newElement.textContent = num +'.' + b;
  textElement.append(newElement);
}

for (i = 0, len = coffeeItem.length; i < len; i++){
  coffeeItem[i].onclick = coffeeSelection;
}
 
oplata.onclick = removeElement;
function removeElement(){
  let oplatili = document.getElementsByClassName('coffee_pokupka');
  for(let i = 0; i<oplatili.length;)
  oplatili[i].remove();
  num = 0;
}
