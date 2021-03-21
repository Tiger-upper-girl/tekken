'use strict';
//ゲームスタート、プレイヤー名入力イベント
function butotnClick1(){
  let name = prompt('名前を入力してください');
  document.getElementById('js-question').textContent = ('Player名：' + name);
  document.getElementById('p1name').textContent = (name);
  document.getElementById('p1mei').textContent = (name);
}
function butotnClick2(){
  let name = prompt('名前を入力してください');
  document.getElementById('js-question2').textContent = ('Player名：' + name);
  document.getElementById('p2name').textContent = (name);
  document.getElementById('p2mei').textContent = (name);
}

//ゲームスタートボタン押下時処理（押すとボタンクリック関数へ進む）
let button1 = document.getElementById('game_start1');
button1.addEventListener('click', butotnClick1);

let button2 = document.getElementById('game_start2');
button2.addEventListener('click', butotnClick2);


const bt = document.getElementById('startB');
bt.addEventListener('click', function(){
  window.alert('先鋒、次鋒、大将の順にキャラクターを選択してください');
})


const tk = [
  ' キャラクターを選択して下さい ',
  'アーマーキング',
  'アリサ',
  'アンナ',
  'エディ',
  'エリザ',
  '風間飛鳥',
  '風間仁',
  'カタリーナ',
  '巌竜',
  'ギース',
  'ギガース',
  'キング',
  '州光',
  'クマ',
  'クラウディオ',
  '豪鬼',
  'ザフィーナ',
  'シャオユウ',
  'ジャック７',
  'シャヒーン',
  'ジュリア',
  'ジョシ―',
  'スティーブ',
  'デビル仁',
  'ドラグノフ',
  'ニーガン',
  'ニーナ',
  'ノクティス',
  'パンダ',
  'ファーカムラム',
  'ファラン',
  'フェン',
  'ブライアン',
  'ポール',
  'ボブ',
  'マードック',
  'ミゲル',
  '三島一八',
  '三島一美',
  '三島平八',
  '吉光',
  'ラース',
  'ラッキークロエ',
  '李超狼',
  'リリ',
  'リロイ',
  'レイ',
  'レイブン',
  'レオ',
  'ロウ'];

  let tkLength = tk.length;
  let tkchara = document.getElementById('tkchara');

  document.createElement('option')
  for(let i = 0; i < tkLength; i++){
    let option = document.createElement('option');
    option.setAttribute('value', i);
    option.innerHTML = tk[i];
    tkchara.appendChild(option);
  };

  document.createElement('option')
  for(let i = 0; i < tkLength; i++){
    let option = document.createElement('option');
    option.setAttribute('value', i);
    option.innerHTML = tk[i];
    tkchara2.appendChild(option);
  };

  document.createElement('option')
  for(let i = 0; i < tkLength; i++){
    let option = document.createElement('option');
    option.setAttribute('value', i);
    option.innerHTML = tk[i];
    tkchara3.appendChild(option);
  };

  document.createElement('option')
  for(let i = 0; i < tkLength; i++){
    let option = document.createElement('option');
    option.setAttribute('value', i);
    option.innerHTML = tk[i];
    tkchara4.appendChild(option);
  };
  
  document.createElement('option')
  for(let i = 0; i < tkLength; i++){
    let option = document.createElement('option');
    option.setAttribute('value', i);
    option.innerHTML = tk[i];
    tkchara5.appendChild(option);
  };

  document.createElement('option')
  for(let i = 0; i < tkLength; i++){
    let option = document.createElement('option');
    option.setAttribute('value', i);
    option.innerHTML = tk[i];
    tkchara6.appendChild(option);
  };


  let str1 = 0;



  function keisan(){

    // 設定開始
  
    // 先鋒
    var price1 = document.form1.goods1.options[document.form1.goods1.selectedIndex].value;
  
    // 次鋒
    var price2 = document.form1.goods2.options[document.form1.goods2.selectedIndex].value;
  
    // 大将
    var price3 = document.form1.goods3.options[document.form1.goods3.selectedIndex].value;
  
    
    // 合計を計算
    var total = parseInt(price1) + parseInt(price2) + parseInt(price3);
    
    // 設定終了

    document.form1.field_total.value = total; // 合計を表示
    if(total > 2){
      window.alert("Player1の勝ちです！");
    }
}
    // 設定開始
    function keisan2(){
    // 先鋒
    var price4 = document.form2.goods4.options[document.form2.goods4.selectedIndex].value;
  
    // 次鋒
    var price5 = document.form2.goods5.options[document.form2.goods5.selectedIndex].value;
  
    // 大将
    var price6 = document.form2.goods6.options[document.form2.goods6.selectedIndex].value;
  
    // 合計を計算
    var total2 = parseInt(price4) + parseInt(price5) + parseInt(price6);
  
    // 設定終了
  
  
    document.form2.field_total2.value = total2; // 合計を表示
  　if(total2 > 2){
     window.alert("Player2の勝ちです！");
  }
  }





	






// const quizLength = quiz.length;
// let quizIndex = 0;
// let score = 0;

// const $button = document.getElementsByTagName('button');
// const buttonLength = $button.length;

// //クイズの問題文、選択肢を定義
// const setupQuiz = () => {
//   document.getElementById('js-question').textContent = quiz[quizIndex].question;
//   let buttonIndex = 0;
//   while(buttonIndex < buttonLength){
//     $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
//     buttonIndex++;
//   }
// }
// setupQuiz();

// //ボタンクリック正誤判定

// const clickHandler = (e) => {
//   if(quiz[quizIndex].correct === e.target.textContent){
//     window.alert('正解！');
//   } else{
//     window.alert('不正解！');
//     score++
//   }

//   quizIndex++;

//   if(quizIndex < quizLength){
//     setupQuiz();
//   }else{
//     window.alert('終了！あなたの正解数は' + (quizLength-score) + '/' + quizLength + 'です！');
//   }

// };

// let handleIndex = 0;
// while (handleIndex < buttonLength) {
//   $button[handleIndex].addEventListener('click', (e) => {
//     clickHandler(e);
//   });
//   handleIndex++;
// }