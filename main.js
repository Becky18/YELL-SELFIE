var SpeechRecognition = window.webkitSpeechRecognition
var recognition= new SpeechRecognition()
function start_button(){
    document.getElementById("textbox").innerHTML=""
    recognition.start()
}
recognition.onresult = function(event)
{
    console.log(event)
    speech=event.results[0][0].transcript
    document.getElementById("textbox").innerHTML=speech
    console.log(speech)
    speak()
}
function speak()
{
    var synth=window.speechSynthesis;
    speak_data=document.getElementById("textbox").value;
    var utter_this=new SpeechSynthesisUtterance(speak_data);
synth.speak(utter_this);
Webcam.attach(camera)
}
Webcam.set
({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
})
camera=document.getElementById("camera")