function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
}

canvas = createCanvas(550, 550);
canvas.position(550, 150);

function draw() {
    background('#969A97');

    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}

function modelLoded() {
    console.log('PoseNet Is Initialized');
}

 function gotPoses() {
    if(SpeechRecognitionResultList.length > 0)
    {
        console.log(results);
    }
 }