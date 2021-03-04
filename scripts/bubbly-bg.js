bubbly({
  blur:15, //ぼかし
  colorStart: '#194167', //背景グラデーション始まりの色
  colorStop: '#112144', //背景グラデーション終わりの色
  radiusFunc:() => 5 + Math.random() * 15, //大きさ
  angleFunc:() => -Math.PI / 2, //向き
  velocityFunc:() => Math.random() * 7.5, //速さ
  bubbleFunc:() => `hsla(${200 + Math.random() * 50}, 100%, 65%, .1)`, //色彩(hsla)
  bubbles:350, //個数
  compose: 'source-over', //色ブレンド
});
