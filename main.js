// may be more efficient to store 255-vals depending on vals?
// 
// [255,255,255,255,255,255,255,255]
let ac = new AudioContext(), fq = [73.42, 65.41, 61.74, 55.00], pn = (f,t2,s="triangle") => {
  var o = ac.createOscillator(), g = ac.createGain();
  o.type = s;
  o.frequency.value = f;

  o.connect(g)
  g.connect(ac.destination)
  g.gain.exponentialRampToValueAtTime(
  	1e-5, ac.currentTime + t2
  )
  //o.start();
}


	let ca = document.getElementById("test"), c = ca.getContext("2d"), e=[], b=[],t=0,px=80,arr = ["ðøøøþÿ","ÈÀàÍðôÀô À","p}¶¼<","¸}6<<",I\"A\"", "|¢|", "þ", "Ä¢", "Bf", "0($þ ", "Nr", "|d", "â
", "ll", "L|"], f2, no=0, d=(a,x,y,m)=>{
c.fillStyle = a<2 ? "#0f0" : "#fff";
for (let i = 0, b = arr[a],l=b.length; i < l; i++)
	for (let j = 0; j < 8; j++)
		(b.charCodeAt(i) >> j) & 1 ? c.f(i+x,j+y,1,1)||(m||c.f(l*2-2-i+x,j+y,1,1)) : 0;
}, st = 0, su=0, sv=0,dir = 1,y=3,x=0,sp=.25,al=1,at=0,li=3,sc=0,r=z=>{
	t++ > at+60 && li>=0 && (al=1);
  al && (x += dir*sp);

	c.clearRect(0,0,200,200);
  
  su++;
  su % (15/sp<<0) == 0 && (sp *= 1.03) && ((su=0) || pn(fq[no], 2.5) || (no=(no+1)%4));

  let s = -1,f = 0, i,j;
  e=e.filter(b=>b.v<10);
  sv++;
  al && sv % (15/sp<<0) == 0 && (s = e.reduce((c,b,u) => b.i>e[c].i&&(b.i/5<<0)==(e[c].i/5<<0) ? u : c, Math.random()*e.length << 0)) && (sv=0);
  
  for(i=0; i < li; i++) d(0, 150+i*15, 3);
  
  for(i in e) {
  
  	let v = e[i], x2 = 15*(v.i/5<<0)+x<<0, y2=12*(v.i%5) + y * 6;
    v.v<1 && (x2>189 && (x2=189,f=1), x2<0 && (x2=0,f=1));

  	s==i &&b.push({x:x2+6,y:y2+8,d:1});
  	v.v < 9 && d(v.v>0?4:(t / 20 << 0) % 2 ? 2:3, x2, y2);
    v.v > 0 && v.v++;
    
    for (j in b) {
    	let u=b[j],r=0;
    	v.v==0&&u.d<0 && u.x >= x2 && u.x <= x2+11 && u.y >= y2 && u.y <= y2+8 && (v.v=1)&& b.splice(j,1)&&(r=1)&&(sc+=20);
      if(r) break;
    }
  }
 	if (f && al) dir *= -1, y++;
  
  for (i in b) {
  	let v = b[i];
    if (v.x>px && v.x < px+11 && v.y > 178 && v.y < 186) b.splice(i,1), at=t, al=0, li--;
    if (!al) break;
  	c.f(v.x, v.y+=v.d, 1,2);
  }
  !al && (b=[]);
  
  for(i in ""+sc) {
  	d(5-(0-(""+sc)[i]), 5+i*7, 5, 1);
  }
  
	if (al || at+7 > t) d(al?0:1, px, 180,al?0:1);
  self.setTimeout(r, 20);
};

c.f=c.fillRect;

for(let i = 0; i < 55; i++) e.push({i,v: 0});


r();


// right 39, left = 37
document.body.addEventListener('keydown', e=> {
	if (!al) return;
	let k = e.keyCode, m = (k==39)-(k==37);
	px += m*4;
  m == 0 && t>st+10 && b.push({x:px+5,y:178,d:-1}) && (st = t) && pn(58.27, 1,"sawtooth");
});



//d(0,0,0);
//d(1,12,0);