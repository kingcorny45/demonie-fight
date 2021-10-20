var floor;
var lime_thing,lime_image;

function preload(){
lime_image = loadImage("images/Lime.jpeg");

}
function setup(){
  createCanvas(windowWidth,windowHeight) 
  console.log(657.75/6) //floor 109.625 /height of everybox
  console.log(windowWidth/109.625)
  console.log(109.625*7/6)
  lime()
  
  //1st lane
  floor=createSprite(63.948,windowHeight/4+1+109.625/2,127.896,109.625); //A1
  floor2=createSprite(192.948,windowHeight/4+1+109.625/2,127.896,109.625); //B1
  floor3=createSprite(321.948,windowHeight/4+1+109.625/2,127.896,109.625); //C1
  floor4=createSprite(450.948,windowHeight/4+1+109.625/2,127.896,109.625); //D1
  floor5=createSprite(579.948,windowHeight/4+1+109.625/2,127.896,109.625); //E1
  floor6=createSprite(708.948,windowHeight/4+1+109.625/2,127.896,109.625); //F1
  floor7=createSprite(837.948,windowHeight/4+1+109.625/2,127.896,109.625); //G1
  floor8=createSprite(966.948,windowHeight/4+1+109.625/2,127.896,109.625); //H1
  floor9=createSprite(1095.948,windowHeight/4+1+109.625/2,127.896,109.625) //I1
  floor10=createSprite(1224.948,windowHeight/4+1+109.625/2,127.896,109.625) //J1
  floor11=createSprite(1353.948,windowHeight/4+1+109.625/2,127.896,109.625) //K1
  floor12=createSprite(1482.948,windowHeight/4+1+109.625/2,127.896,109.625) //L1
  floor13=createSprite(1611.948,windowHeight/4+1+109.625/2,127.896,109.625) //M1
  floor14=createSprite(1740.948,windowHeight/4+1+109.625/2,127.896,109.625) //N1
  floor15=createSprite(1869.948,windowHeight/4+1+109.625/2,127.896,109.625) //O1
  
  //2nd lane
  floor16=createSprite(63.948,windowHeight/3+31+109.625/2,127.896,109.625); //A2
  floor17=createSprite(192.948,windowHeight/3+31+109.625/2,127.896,109.625);//B2
  floor18=createSprite(321.948,windowHeight/3+31+109.625/2,127.896,109.625);//C2
  floor19=createSprite(450.948,windowHeight/3+31+109.625/2,127.896,109.625);//D2
  floor20=createSprite(579.948,windowHeight/3+31+109.625/2,127.896,109.625);//E2
  floor21=createSprite(708.948,windowHeight/3+31+109.625/2,127.896,109.625);//F2
  floor22=createSprite(837.948,windowHeight/3+31+109.625/2,127.896,109.625);//G2
  floor23=createSprite(966.948,windowHeight/3+31+109.625/2,127.896,109.625);//H2
  floor24=createSprite(1095.948,windowHeight/3+31+109.625/2,127.896,109.625);//I2
  floor25=createSprite(1224.948,windowHeight/3+31+109.625/2,127.896,109.625);//J2
  floor26=createSprite(1353.948,windowHeight/3+31+109.625/2,127.896,109.625);//K2
  floor27=createSprite(1482.948,windowHeight/3+31+109.625/2,127.896,109.625);//L2
  floor28=createSprite(1611.948,windowHeight/3+31+109.625/2,127.896,109.625);//M2
  floor29=createSprite(1740.948,windowHeight/3+31+109.625/2,127.896,109.625);//N2
  floor30=createSprite(1869.948,windowHeight/3+31+109.625/2,127.896,109.625);//O2

  //3rd lane
  floor31=createSprite(63.948,windowHeight/2+(-1)+109.625/3,127.896,109.625); //A3
  floor32=createSprite(192.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//B3
  floor33=createSprite(321.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//C3
  floor34=createSprite(450.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//D3
  floor35=createSprite(579.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//E3
  floor36=createSprite(708.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//F3
  floor37=createSprite(837.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//G3
  floor38=createSprite(966.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//H3
  floor39=createSprite(1095.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//I3
  floor40=createSprite(1224.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//J3
  floor41=createSprite(1353.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//K3
  floor42=createSprite(1482.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//L3
  floor43=createSprite(1611.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//M3
  floor44=createSprite(1740.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//N3
  floor45=createSprite(1869.948,windowHeight/2+(-1)+109.625/3,127.896,109.625);//O3
  //4th lane
  floor46=createSprite(63.948,windowHeight/2+(92)+109.625/2,127.896,109.625); //A4
  floor47=createSprite(192.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//B4
  floor48=createSprite(321.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//C4
  floor49=createSprite(450.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//D4
  floor50=createSprite(579.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//E4
  floor51=createSprite(708.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//F4
  floor52=createSprite(837.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//G4
  floor53=createSprite(966.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//H4
  floor54=createSprite(1095.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//I4
  floor55=createSprite(1224.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//J4
  floor56=createSprite(1353.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//K4
  floor57=createSprite(1482.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//L4
  floor58=createSprite(1611.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//M4
  floor59=createSprite(1740.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//N4
  floor60=createSprite(1869.948,windowHeight/2+(92)+109.625/2,127.896,109.625);//O4
  
  //5th lane
  floor61=createSprite(63.948,windowHeight/2+(204)+109.625/2,127.896,109.625); //A5
  floor62=createSprite(192.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//B5
  floor63=createSprite(321.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//C5
  floor64=createSprite(450.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//D5
  floor65=createSprite(579.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//E5
  floor66=createSprite(708.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//F5
  floor67=createSprite(837.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//G5
  floor68=createSprite(966.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//H5
  floor69=createSprite(1095.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//I5
  floor70=createSprite(1224.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//J5
  floor71=createSprite(1353.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//K5
  floor72=createSprite(1482.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//L5
  floor73=createSprite(1611.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//M5
  floor74=createSprite(1740.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//N5
  floor75=createSprite(1869.948,windowHeight/2+(204)+109.625/2,127.896,109.625);//O5

  //6th lane
  floor76=createSprite(63.948,windowHeight/2+(316)+109.625/2,127.896,109.625); //A5
  floor77=createSprite(192.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//B5
  floor78=createSprite(321.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//C5
  floor79=createSprite(450.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//D5
  floor80=createSprite(579.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//E5
  floor81=createSprite(708.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//F5
  floor82=createSprite(837.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//G5
  floor83=createSprite(966.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//H5
  floor84=createSprite(1095.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//I5
  floor85=createSprite(1224.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//J5
  floor86=createSprite(1353.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//K5
  floor87=createSprite(1482.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//L5
  floor88=createSprite(1611.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//M5
  floor89=createSprite(1740.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//N5
  floor90=createSprite(1869.948,windowHeight/2+(316)+109.625/2,127.896,109.625);//O5


}

function draw(){
  background("black")
  
  text(mouseX+","+mouseY,10,10)
  stroke("lime")
  
  
  line(0,windowHeight/4,windowWidth,windowHeight/4) //y=242.25
  line(0,912,windowWidth,912)
 //a total of   squares ps distance = 129
  floor.display()
  floor2.display()
  floor3.display()
  floor4.display()
  floor5.display()
  floor6.display()
  floor7.display()
  floor8.display()
  floor9.display()
  floor10.display()
  floor11.display()
  floor12.display()
  floor13.display()
  floor14.display()
  floor15.display()
  floor16.display()
  floor17.display()
  floor18.display()
  floor19.display()
  floor20.display()
  floor21.display()
  floor22.display()
  floor23.display()
  floor24.display()
  floor25.display()
  floor26.display()
  floor27.display()
  floor28.display()
  floor29.display()
  floor30.display()
  floor31.display()
  floor32.display()
  floor33.display()
  floor34.display()
  floor35.display()
  floor36.display()
  floor37.display()
  floor38.display()
  floor39.display()
  floor40.display()
  floor41.display()
  floor42.display()
  floor43.display()
  floor44.display()
  floor45.display()
  floor46.display()
  floor47.display()
  floor48.display()
  floor49.display()
  floor50.display()
  floor51.display()
  floor52.display()
  floor53.display()
  floor54.display()
  floor55.display()
  floor56.display()
  floor57.display()
  floor58.display()
  floor59.display()
  floor60.display()
  floor61.display()
  floor62.display()
  floor63.display()
  floor64.display()
  floor65.display()
  floor66.display()
  floor67.display()
  floor68.display()
  floor69.display()
  floor70.display()
  floor71.display()
  floor72.display()
  floor73.display()
  floor74.display()
  floor75.display()
  floor76.display()
  floor77.display()
  floor78.display()
  floor79.display()
  floor80.display()
  floor81.display()
  floor82.display()
  floor83.display()
  floor84.display()
  floor85.display()
  floor86.display()
  floor87.display()
  floor88.display()
  floor89.display()
  floor90.display()
  
  
  drawSprites()
}
function lime(){
  
  lime_thing = createSprite(1919,(random(0,windowHeight/4+20)),100,2)
  lime_thing.addImage(lime_image)
  
  lime_thing.scale = 0.5
  lime_thing.velocityX = -11
   lime_thing.lifetime = 200;
  

}