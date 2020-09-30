
var Zenia,Tourus,Cyclap;
var wall1,wall2,wall3;
var ZeniaSpeed,ZeniaWeight;
var TourusSpeed,TourusWeight;
var CyclapSpeed,CyclapWeight;
var deformation;
var border1,border2;

function setup() {
  
createCanvas(1600,900);

wall1 = createSprite(1508,100,60,height/2)
wall1.shapeColor = color(139,69,19);
Zenia = createSprite(50,100,40,40);

wall2 = createSprite(1508,300,60,height/2)
wall2.shapeColor = color(139,69,19);
Tourus = createSprite(50,330,40,40);

wall3 = createSprite(1508,460,60,height/2)
wall3.shapeColor = color(139,69,19);
Cyclap = createSprite(50,500,40,40);

border1 = createSprite(1500,215,3000,15)
border2 = createSprite(1500,405,3000,15)

ZeniaSpeed = 60
ZeniaWeight = 2260

TourusSpeed = 50
TourusWeight = 1522

CyclapSpeed = 45
CyclapWeight = 3000

}

function draw() {
  
 background(255,255,255); 

 console.log(Tourus.x-wall2.x);
 
 console.log(Cyclap.x - wall3.x)
 
 console.log(Zenia.x - wall1.x);
 
 Tourus.velocityX = TourusSpeed;
 Zenia.velocityX = ZeniaSpeed;
 Cyclap.velocityX = CyclapSpeed;

 if(wall1.x-Zenia.x < (Zenia.width+wall1.width)/2) {
  
  Zenia.velocityX = 0;
  var deformation = 0.5 * ZeniaWeight*ZeniaSpeed*ZeniaSpeed/22500
 
 if(deformation > 180) {
 
  Zenia.shapeColor = color(255,0,0);

 }

 if(deformation < 180 && deformation > 100 ) {

  Zenia.shapeColor = color(230,230,0);

 }
 
 if(deformation < 100) {
  
  Zenia.shapeColor = color(0,255,0)
 
 }
 
 }
 
 if(wall2.x-Tourus.x < (Tourus.width + wall2.width)/2) {
 
  Tourus.velocityX = 0;
  var deformation = 0.5 * TourusWeight*TourusSpeed*TourusSpeed/22500
 
  if(deformation > 180) {
  
  Tourus.shapeColor = color(255,0,0);

 }

 if(deformation < 180 && deformation > 100 ) {

  Tourus.shapeColor = color(230,230,0);

 }
 
 if(deformation < 100) {
 
  Tourus.shapeColor = color(0,255,0)
 
 }
 
 } 
 
 if(wall3.x - Cyclap.x < ( Cyclap.width + wall3.width )/2) {
  
  Cyclap.velocityX = 0;
  var deformation = 0.5 *CyclapWeight*CyclapSpeed*CyclapSpeed/22500
 
 if(deformation > 180) {
  
  Cyclap.shapeColor = color(255,0,0);

 }

 if(deformation < 180 && deformation > 100 ) {

  Cyclap.shapeColor = color(230,230,0);

 }
 
 if(deformation < 100) {
 
  Cyclap.shapeColor = color(0,255,0)
 
 }
 
 } 
 
 
 drawSprites();
}