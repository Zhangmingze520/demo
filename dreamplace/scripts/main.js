let myImage = document.querySelector('img');


myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc = myImage.getAttribute('src'));
    if(mySrc === 'images/85f3621f5d19ebc85d77ac1ec4f8f12e.jpg'){
        myImage.setAttribute('src','images/didi.jpg');
    }else{
        myImage.setAttribute('src','images/85f3621f5d19ebc85d77ac1ec4f8f12e.jpg')
    }
}



let myButton = document.querySelector('button');
let myHeading = document.querySelector('hi');
function setUsername(){
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name',myName);
    myHeading.textContent = '欢迎，' + myName + '的到来';
}
if(!localStorage.getItem('name')){
    setUsername();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '欢迎来到我的小天地' + storedName;
}
myButton.onclick = function() {
    setUsername();
 }
 