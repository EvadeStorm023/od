status = '';
objects = [];


function preload(){
    img = loadImage('dog_cat.jpg')
}


function setup(){
    canvas = createCanvas(640,420)
    canvas.center()

    object_detection = ml5.objectDetector('cocossd',model_loaded)
  
}
function model_loaded(){
    console.log('model has been loaded')
    status = true;
    object_detection.detect(img, gotresults)

}

function gotresults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
   
}
function draw(){
    image(img,0,0,640,420)
   if(status!=''){
    for(var i =0; i< objects.length; i++){

    
    fill('red');
    p = floor(objects[i].confidence*100)
    text(objects[i].label +' '+ p + ' % ', objects[i].x, objects[i].y)
    noFill()
    stroke('red');
    rect(object[i].x, objects[i].y, objects[i].width, objects[i].height)
     
    }
    }
}

