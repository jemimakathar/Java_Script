function uploadVideo()
{
    console.log("uploading video");
    setTimeout(()=>{
        console.log("uploading done");
    },5000)
}
function publishVideo()
{
    console.log("publishing video");
    setTimeout(()=>{
        console.log("published video is done");
    },5000)
}
function notificationSend()
{
    console.log("Notification is send");
}
uploadVideo();
publishVideo();
notificationSend();