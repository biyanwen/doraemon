let doraemon = document.querySelector('.text')
let style = document.querySelector('style')

let text =
    `
 /**
 * 大家好，我给大家画一个哆啦A梦
 * 下面要正式开始画画了；
 * 首先画一个脑袋的轮廓
 */
 .head{
    border: 1px solid blue;
    width:310px;
    height:300px;
    border-radius:146px;
    background:#05abd2;
    position: relative;
}
/**
* 画一个左眼睛
*/
.left-eye{
    width:72px;
    height:83px;
    border-radius:35px;
    position: absolute;
    top:calc(25% - 35px);
    left: calc(50% - 73px);
    border:2px solid #000;
    background-color: #fff;
    z-index: 10;
}
.left-eye::before{
    content:"";
    width: 15px;
    height: 15px;
    background-color: #333;
    border-radius:10px;
    position: absolute;
    top: calc(25% + 33px);
    left: calc(50% + 10px);
}
/**
* 画一个右眼睛
*/
.right-eye{
    width:72px;
    height:83px;
    border-radius:35px;
    position: absolute;
    top:calc(25% - 35px);
    border:2px solid #000;
    background-color: #fff;
    left: 50%;
    z-index: 10;
}
.right-eye::before{
    content:"";
    width: 15px;
    height: 15px;
    background-color: #333;
    border-radius:10px;
    position: absolute;
    top: calc(25% + 33px);
    left: calc(25% - 10px);
}
 
/**
* 画一个脸
*/
.face{
    border: 1px solid black;
    position: absolute;
    background-color: white;
    width: 250px;
    height: 216px;
    top: calc(19% + 10px);
    left: calc(1% + 26px);
    border-radius: 50% / 50%;
    z-index: 0;
}
/**
* 画一个鼻子
*/
.nose{
    border: 1px solid red;
    position: absolute;
    width: 50px;
    height: 50px;
    top: calc(16% + 10px);
    left: calc(29% + 26px);
    border-radius: 50px;
    background-color: #ca3c00;
}
/**
* 画出它的人中
*/
.philtrum{
    width: 3px;
    height: 61px;
    background-color: #333;
    position: absolute;
    top:50%;
    left:50%;
    z-index: 6;
}
/**
* 画出左边的胡须
*/
.beard-left-top{
    width: 3px;
    height: 55px;
    background-color: #333;
    position: absolute;
    top:34%;
    left: 25%;
    transform: rotate(118deg);
    z-index: 6;
}
.beard-left-middle{
    width: 3px;
    height: 55px;
    background-color: #333;
    position: absolute;
    top:48%;
    left: 25%;
    transform: rotate(93deg);
    z-index: 6;
}
.beard-left-down{
    width: 3px;
    height: 55px;
    background-color: #333;
    position: absolute;
    top:59%;
    left: 25%;
    transform: rotate(74deg);
    z-index: 6;
}
/**
* 画出右边的胡须
*/
.beard-right-top{
    width: 3px;
    height: 55px;
    background-color: #333;
    position: absolute;
    top:34%;
    left: 75%;
    transform: rotate(74deg);
    z-index: 6;
}
.beard-right-middle{
    width: 3px;
    height: 55px;
    background-color: #333;
    position: absolute;
    top:48%;
    left: 75%;
    transform: rotate(93deg);
    z-index: 6;
}
.beard-right-down{
    width: 3px;
    height: 55px;
    background-color: #333;
    position: absolute;
    top:59%;
    left: 75%;
    transform: rotate(105deg);
    z-index: 6;
}
/**
* 画出它的嘴
*/
.mouth{
    top: 42%;
    left: 14%;
    width: 181px;
    height: 100px;
    border: solid 3px #000;
    position: absolute;
    border-color: transparent transparent #000 transparent;
    border-radius: 0 0 240px 151%/136px;
    z-index: 6;
}
/**
* 画出它的围脖
*/
.neck{
    border: red 1px solid;
    top: 91%;
    left: 11%;
    width: 241px;
    height: 28px;
    position: absolute;
    border-radius: 10px;
    background-color: #ca3c00;
    z-index: 6;
}
/**
* 画出它的铃铛
*/
.bells{
    top: 94%;
    left: 45%;
    width:40px;
    height:40px;
    border-radius:40px;
    border:2px solid #000;
    position: absolute;
    background-color: #e3db10;
    z-index: 7;
}
.bells::before{
    border: 1px solid black;
    content:"";
    top: -11%;
    left: 45%;
    width: 1px;
    height: 37px;
    position: absolute;
    background-color: black;
    transform: rotate(92deg);
}
 `

let textCopy = ""
let n = 0

function step() {
    setTimeout(() => {
        if (text[n] === "\n") {
            textCopy += "<br>";
        } else if (text[n] === " ") {
            textCopy += "&nbsp;";
        } else {
            textCopy += text[n];
        }
        doraemon.innerHTML = textCopy
        window.scrollTo(0, 99999);
        doraemon.scrollTo(0, 99999);
        style.innerHTML = text.substr(0, n)
        if (n < text.length - 1) {
            n++
            step()
        }
    }, 10)
}

step()