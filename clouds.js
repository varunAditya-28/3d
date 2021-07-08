function spawnClouds(){
    if(frameCount % 120 === 0){
     cloud = createSprite(displayWidth+10,random(0,displayHeight/2));
     cloud.addImage(cloudImg)
     cloud.velocityX = -3
     cloud.scale = 0.2
     cloud.lifetime = 500;
     cloudsGroup.add(cloud);
    }
}