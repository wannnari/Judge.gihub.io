const start = document.getElementById('start');
const bentknee = document.getElementById('bentknee');
const lossof = document.getElementById('lossof');
const reset = document.getElementById('reset');
const result = document.getElementById('result');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
//再帰的にするため
let timerId;
//画像の配列

function adding(){ $('.imageArea img:first').addClass('active').show();}


var changeImg = function(){
    var $active = $('.imageArea img.active');
    var $next = $active.next('img').length?$active.next('img'):$('.imageArea img:first');
    $active.fadeOut(100).removeClass('active');
    $next.fadeIn(100).addClass('active');
  }

  
start.addEventListener('click',() =>{
  adding();
  timerId = setInterval(changeImg,100);
 });

bentknee.addEventListener('click',() =>{
  clearInterval(timerId);
  if($('#img1').attr('src') == $('.active').attr('src')){
    result.textContent="ベントニー！！！";
  }else{
    result.textContent="違うな・・・・";
  }
});

lossof.addEventListener('click',() =>{
    clearInterval(timerId);
    if($('#img2').attr('src') == $('.active').attr('src')){
       result.textContent="ロスオブコンタクト！！";
    }else{
        result.textContent="違うな・・・・"; 
    }
  });
