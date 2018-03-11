// $(document).ready(function(){
  // $("#js").on('click',function(){
  //   var elem = '<a href="#"> 次ページ</a>';
  //   // $("#js").html(elem);
  //   // $("#js").text(elem);
  //   // $("#js").css("color","#ff0");
  //   // $("#js").show(4000);
  //   // $("#js").prepend(elem);
  //   $("#js").append(elem);
  //   // $("#js").empty();
  //   // $("#js").remove();
  //   // $(.'BOX').on('click',function(){
  //   //   alert('押されたよ');
  //   //   console.log('押されたよ！');
  //   // });
  // });

 // showとhideの処理
 // show
//   $("#show").on('click',function(){
//     setTimeout(function(){
//     $("#ex").show();
//     },2000);
//   });
// // hide
//   $("#hide").on('click',function(){
//     setTimeout(function(){
//       $("#ex").hide();
//       },2000);
//   });

// 『かきくけこのフェードインの処理』
$(document).ready(function() {
// 最初は消しておく
  $("#ex").hide();
  $("#show").on('click',function(){
    // div#exの最初の表示時にフェードインから表示 ※4秒
    $("#ex").fadeIn(4000);
    // div#exを作成、文字列 ”<p>かきくけこ</p>” を挿入
    $("#ex").html("<p>かきくけこ</p>");
    // div#exの背景を黒、文字色を白に変更
    $("#ex").css("color","#fff");
    $("#ex").css("background-color","#000");
    // div#exの中、行頭に”<p>あいうえお</p>”を挿入
    $("#ex").prepend("<p>あいうえお</p>");
    // div#exの中、末尾に”<p>さしすせそ</p>”を挿入
    $("#ex").append("<p>さしすせそ</p>");
    // 難問)div#ex内の偶数行だけ背景白にする
  });
});
