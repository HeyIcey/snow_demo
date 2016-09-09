var snowflakes = [];
var can = document.getElementById("m-can");
var ct = can.getContext('2d');
init();
// 定时器 设定动画刷新的时间周期
setInterval(function(){
	snowflakeNum();
	ct.clearRect(0,0,600,400);
	init();
	dropDown();
},50);
// 初始化
function init(){
	ct.rect(0,0,600,400);
	ct.fillStyle = '#000';
	ct.fill();
}
// 产生随机雪花
function createSnow(){
	var ix = Math.random()*600;
	var iy = Math.random()*50;
	var ir = Math.random()*2;
	var ivy = Math.random()*5+2;
	var snowflake = {
		x:ix,
		y:iy,
		r:ir,
		vy:ivy,
		// g:8
	};
	snowflakes.push(snowflake);
}
// 雪花量
function snowflakeNum(){
	createSnow();
}
// 下落
function dropDown(){
	var len = snowflakes.length;
	for(var i = 0; i<len; i++){
		drawSnow(snowflakes[i].x,snowflakes[i].y,snowflakes[i].r,ct);
		// snowflakes[i].v += snowflakes[i].g;
		snowflakes[i].y+=snowflakes[i].vy;
	}
}
// 画雪花???
function drawSnow(x,y,r,obj){
	obj.fillStyle = '#fff';
	obj.beginPath();
	obj.arc(x,y,r,0,Math.PI*2,true);
	obj.closePath();
	obj.fill();
}