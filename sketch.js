let nbarray = [];
let bug = [];

// 初始內容
function setup() {
  createCanvas(600, 600, WEBGL); // 決定 使用 3D 方式進行渲染
  for(let i=0;i<5;i+=1){
    // 怎麼把東西放到 nbarray 袋子裡面的公式
    nbarray.push(new myBox(60-width/2+(height/5)*i,50,0,50));
  }

}
function draw() {
  background(0);
  // 將袋子中 所有 東西 稱為 V 執行他的相關函式
  
  nbarray.forEach((v)=>{
    v.display();
  })

}
// 自訂一個類別物件
class myBox{
  // 怎樣建構這個物件 只執行一次
  constructor(x,y,z,size){
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    this.mx = 1;
    this.my = 1;
    // 隨機產生物件顏色
    this.cc = color(random(255),0,0);
    // 衛星的中心xyz = 物件，衛星的大小 < 物件， 衛星的距離自訂
    this.stela = new stela(this.x,this.y,this.z,this.size*0.25,this.size*0.6);
  }
  // 定義一些能力 我們呼叫時 執行 
  // 能力1:顯現這box
  display(){   
    push();
      translate(this.x,this.y,this.z);  
      if (mouseX-width/2 > this.x-this.size/2 && 
          mouseX-width/2 < this.x+this.size/2 &&
          mouseY-height/2 > this.y-this.size/2 && 
          mouseY-height/2 < this.y+this.size/2){
        rotateX(frameCount*0.01);
        rotateY(frameCount*0.01);
        this.mx = this.mx+0.5;
        this.cc = color(random(255),0,random(255));
        }
      this.stela.display();
      fill(this.cc);
      noStroke();
      sphere(20);
    pop();
    
    push();
      translate(this.x,this.y,this.z);  
      if (mouseX-width/2 > this.x-this.size/2 && 
          mouseX-width/2 < this.x+this.size/2 &&
          mouseY-height/2 > this.y-this.size/2 && 
          mouseY-height/2 < this.y+this.size/2){
        rotateX(frameCount*0.01);
        rotateY(frameCount*0.01);
        this.mx = this.mx+0.5;
        this.cc = color(random(255),0,random(255));
        }
      noFill();
      stroke(this.cc);
      sphere(20);
    pop();
    
    push(); 
      translate(this.x,230+this.y,this.z); 
      rotateY(frameCount * 0.01);
    //rotateZ(frameCount * 0.01);
      noFill();
      stroke(225);
      cylinder(35, 350);
      pop();
    
    push();
      translate(this.x,-230+this.y,this.z); 
      //translate(100,-120,100);  
      rotateY(frameCount * 0.01);
      //rotateZ(frameCount * 0.01);
      noFill();
      stroke(225);
      cylinder(35, 350);
    pop();
    
    this.move();
    this.stop();
    
  }
  
  //能力2:移動規則
  move(){
    if (this.y>height/12){this.my = -1*this.my;}
    if (this.y<-height/12){this.my = -1*this.my;}  
    this.y = this.y + 3*this.my;
  }
  
  stop(){
    if (mouseIsPressed){this.y = 0;}
     }
}
// 衛星
class stela{
  constructor(x,y,z,size,cdx){
    //衛星的旋轉中心
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    // 衛星距離旋轉中心的x距離
    this.cdx=cdx;
    // 隨機產生物件顏色
    this.cc = color(random(255),0,0);
  }
  display(){
    push();
      rotateZ(frameCount*0.01);
      translate(this.cdx,0,0);  
      noFill();
      stroke(225);
      circle(7,7,7);
    pop();
    
     push();
      rotateZ(frameCount*-0.05);
      translate(this.cdx,0,0);  
      noFill();
      stroke(225);
      circle(7,7,7);
    pop();   
  }
}

/*class myOne {
    constructor(x,y,z,size){
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    this.mx = 1;
    }
  
  display(){
      push();
      translate(100,200,100);  
      rotateY(frameCount * 0.01);
    //rotateZ(frameCount * 0.01);
      cylinder(20, 200);
      noFill();
    pop();
  }
}*/