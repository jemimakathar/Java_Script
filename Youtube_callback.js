//callback is a function it is used to pass the function as a parameter in another function.





function uploadVideo(value,callback) //callback is a function in down
{
    console.log("uploading video");
    setTimeout(()=>{
        console.log("uploading done "+value.title);
        callback(value);
    },5000)
   
}

function publishVideo(dat,publishedCallback)
{
    console.log("publishing video");
  
    setTimeout(()=>{
        console.log("published video is done "+dat.description );
        publishedCallback(dat);  //callback function
    },5000)
}
function notificationSend(day)
{
    console.log("Notification is send "+day.title);
}
const data={
    title:"My java Script Project",
    description:"By using js we learn lots of experience in my life"
}



//all function is call here


//nested callback 
uploadVideo(data,function(values){ // callback function passed as a argument to the parameter
    publishVideo(values,function(d){
        notificationSend(d)
})
})
