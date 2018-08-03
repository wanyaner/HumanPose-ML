
/** normalizing the array */
function prepareData(data){
    var xMean = 0;
    var yMean = 0;
    var diffData = [];
    for (var i=0; i<data.length; i++){
        xMean = xMean + data[i][0];
        yMean = yMean + data[i][1];
    }
    xMean = xMean/data.length;
    yMean = yMean/data.length;
    for (var i=0; i<data.length; i++){
        diffData[i] = [data[i][0] - xMean, data[i][1] - yMean];
    }
    return diffData;
}


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