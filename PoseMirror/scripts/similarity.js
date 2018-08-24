


var video1 = [3,4,6,7,6];
var video2 = [21,23,21,1,3,5];


var dtw = new DynamicTimeWarping(video1,video2,function(a,b){
    var xDiff = a[0] - b[0];
    var yDiff = a[1] - a[1];
    return diff = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
});

var distance = dtw.getDistance();
var path = dtw.getPath();
var distance = distance/path.length;

/** 
// poseVector1 and poseVector2 are 52-float vectors composed of:
// Values 0-33: are x,y coordinates for 17 body parts in alphabetical order
// Values 34-51: are confidence values for each of the 17 body parts in alphabetical order
// Value 51: A sum of all the confidence values
// Again the lower the number, the closer the distance

function weightedDistanceMatching(poseVector1, poseVector2) {

  let vector1ConfidenceSum = poseVector1.slice(51, 52);

  let vector2PoseXY = poseVector2.slice(0, 34);

  // First summation
  let summation1 = 1 / vector1ConfidenceSum;

  // Second summation
  let summation2 = 0;
  for (let i = 0; i < vector1PoseXY.length; i++) {
    let tempConf = Math.floor(i / 2);
    let tempSum = vector1Confidences[tempConf] * Math.abs(vector1PoseXY[i] - vector2PoseXY[i]);
    summation2 = summation2 + tempSum;
  }

  return summation1 * summation2;
}

*/


function weightedcosine(poseVector1, poseVector2) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i=0; i<poseVector1.length/3;i++) {
        i = i*3;
        let confidence = poseVector1[i+2];
        let tempSum = confidence * Math.abs(poseVector1[i] - poseVector2[i]);
        tempSum = tempSum + confidence * Math.abs(poseVector1[i+1] - poseVector2[i+1]);
        sum2 = sum2 + tempSum;
        sum1 = sum1 + confidence;
    }

    return (1/sum1) * sum2; 
}