let arrowhead = document.querySelector(".arrowhead")
// 获取鸽子盒子
let dove = document.querySelector(".dove");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let onetext = document.querySelector(".onetext");
let twotext = document.querySelector(".twotext");
let twotitle = document.querySelector(".twotitle");
let bill = document.querySelector(".bill");
let text = document.querySelector(".text");
let time_text = document.querySelector(".time")
// 鸽子图片
let doveimg = document.querySelector(".doveimg");
// 所有梯子
let ladder = document.querySelectorAll(".ladder");
// 第二批梯子
let secondBatch = document.querySelectorAll(".secondBatch");
// 第三批梯子
let threeBatch = document.querySelectorAll(".threeBatch");
// 第四批梯子
let fourBatch = document.querySelectorAll(".fourBatch");
// 获取音频
let myaudio1 = document.querySelector("#myaudio1")
let myaudio2 = document.querySelector("#myaudio2");
let myaudio3 = document.querySelector("#myaudio3");
let myaudio4 = document.querySelector("#myaudio4");
// 获取光圈
let aperture = document.querySelectorAll(".aperture");
// 获取气泡聊天框
let dialogBox = document.querySelector(".dialogBox");
// 获取点击的柱子
let coordinate = document.querySelectorAll(".coordinate");
// 获取背景
let bg = document.querySelector(".bg");
let ladder_12 = document.querySelector(".ladder_12");
let top_phone = document.querySelector(".top_phone");
let scenery = document.querySelector(".scenery");
let ladder_01 = document.querySelector(".ladder_01");
let three = document.querySelector(".three");
let heavenlyBody = document.querySelectorAll(".heavenlyBody");
let down_box = document.querySelector(".down_box");

// 点击播放初始音乐 
document.onclick = function () {
    played(myaudio1, 0)
}
// 生成箭头图片
for (let i = 0; i < 3; i++) {
    var imgs = document.createElement("img");
    arrowhead.appendChild(imgs);
    imgs.src = "../image/arrowhead.png";
    // let img = arrowhead.querySelector("img")
    imgs.style.top = i * (imgs.offsetHeight) + "px";
    imgs.setAttribute("class", "arrowheadimg")
}
let arrowheadimg = document.querySelectorAll(".arrowheadimg");
// 第一部分箭头延迟生成
setTimeout(() => {
    console.log(arrowheadimg);
    for (let i = 0; i < arrowheadimg.length; i++) {

        for (let j = 0; j < arrowheadimg.length; j++) {
            arrowheadimg[arrowheadimg.length - 1 - j].setAttribute("class", "arrowheadimg")
        }
        setTimeout(() => {
            arrowheadimg[arrowheadimg.length - 1 - i].setAttribute("class", "arrowheadimg arrowheadmove")
        }, 600 * i)
    }
}, 1500)
// 鸽子上升动画
dove.setAttribute("class", "dove rise")
// 等第一部分动画全部出现才能上滑
setTimeout(() => {
    // 监听移动端屏幕滑动
    document.addEventListener("touchmove", slide)
}, 3000)
// 上滑隐藏第一部分  显示第二部分
function slide() {
    //  事件解绑
    document.removeEventListener("touchmove", slide
    )
    paused(myaudio1, 0)
    document.onclick = null;
    // 调用屏幕隐藏函数
    hide(one);
    show(two)
    // 2秒后调用梯子升起动画
    setTimeout(() => {
        upward(0, ladder)
        // 梯子升起声音
        played(myaudio2, 700)
    }, 2000)
    // 出现第一个光圈
    setTimeout(() => {
        show(aperture[0]);
        show(dialogBox);
        hide(onetext);
        show(twotext);
        paused(myaudio2, 0)
    }, 7000)
    // 循环遍历光圈
    for (let i = 0; i < aperture.length; i++) {
        // 自定义下标对应点击下标
        post(Number(aperture[i].getAttribute("rel")))
    }
}
// 梯子下标
var j = 0
// 梯子上升动画
function upward(ladderindex, obj) {
    let laddertimes = setInterval(() => {
        obj[j].classList.add("laddermove")
        j = ladderindex;
        ladderindex++
        if (ladderindex == 8) { clearInterval(laddertimes); }
        if (ladderindex == 13) { clearInterval(laddertimes); }
        if (ladderindex == 18) { clearInterval(laddertimes); }
        if (j > obj.length - 1) { j = 0; clearInterval(laddertimes) }
    }, 400)
}
// 音乐播放    myaudio---音频   PlaybackStarts---播放时间
function played(myaudio, PlaybackStarts) {
    setTimeout(() => {
        myaudio.play()
    }, PlaybackStarts)
}
// 音乐关闭    myaudio---音频   playbackEnd---结束时间
function paused(myaudio, playbackEnd) {
    setTimeout(() => {
        myaudio.pause()
    }, playbackEnd)
}
// 四张不同运动轨迹的鸽子图片数组
let Arrimg1 = ["../image/gz01.png", "../image/gz02.png", "../image/gz03.png", "../image/gz04.png", "../image/gz05.png"]
let Arrimg2 = ["../image/gz11.png", "../image/gz12.png", "../image/gz13.png", "../image/gz14.png", "../image/gz15.png"]
let Arrimg3 = ["../image/gz21.png", "../image/gz22.png", "../image/gz23.png", "../image/gz24.png", "../image/gz25.png"]
let Arrimg4 = ["../image/gz31.png", "../image/gz32.png", "../image/gz33.png", "../image/gz34.png", "../image/gz35.png"]
// 图片初始下标
var itme = 0
// 切换鸽子图片函数
function doveimg1(arr) {
    if (itme > arr.length - 1) {
        itme = 0
    } else {
        doveimg.setAttribute("src", arr[itme])
        itme++
    }
}
// 固定鸽子替换图片时间
var speed = 100;
// 鸽子运动函数  runtime 鸽子运动时间   fndove调用鸽子切换图片函数  objimg 对应方向的图片数组
function doveRun(runtime, fndove, objimg) {
    setTimeout(() => {
        clearInterval(timer)
        timer = setInterval(() => { fndove(objimg);}, speed);
    }, runtime)
}
// 显示函数
function show(Obj1) {
    Obj1.style.display = "block";
}
// 隐藏函数
function hide(Obj2) {
    Obj2.style.display = "none";
}
// 其他柱子的下标 
var k = 0
// 其他柱子上升动画
function upward1(ladderindex1, obj1) {
    let laddertimes = setInterval(() => {
        obj1[k].classList.add("laddermove");
        setTimeout(() => {
            obj1[0].classList.add("upMove")
        }, 2000)
        k = ladderindex1;
        ladderindex1++
        if (k > obj1.length - 1) { k = 0; clearInterval(laddertimes) }
    }, 0)
}
// 光圈点击
function post(index) {
    aperture[index].onclick = function () {
        that = this
        if (index == 0) {
            played(myaudio4, 0)

            dove.setAttribute("class", "dove dovemove")

            hide(dialogBox);

            timer = setInterval(() => { doveimg1(Arrimg1) }, speed)

            hide(this)

            doveRun(1800, doveimg1, Arrimg2);

            doveRun(3087, doveimg1, Arrimg1);

            doveRun(6258, doveimg1, Arrimg2);
            // 鸽子走路音效
            paused(myaudio4, 8008)
            setTimeout(() => {
                hide(bill)
                show(text)
                textdata(index)
                clearInterval(timer)
                upward1(0, secondBatch)
            }, 8308)
            played(myaudio2, 11408)
            // 梯子升起
            setTimeout(() => { upward(8, ladder); }, 10808)
            // 下一个光圈显示
            setTimeout(() => {show(aperture[index + 1])}, 14808)         
            paused(myaudio2, 13808)
        } else if (index == 1) {
            dove.setAttribute("class", "dove dovemove1")
            // 隐藏当前点击的光圈
            hide(this)

            played(myaudio4, 0)
            // 鸽子走路
            timer = setInterval(() => { doveimg1(Arrimg1) }, speed)

            doveRun(478, doveimg1, Arrimg2);

            setTimeout(() => {
                clearInterval(timer)
                // 停止音乐
                paused(myaudio4, 0)
                // 显示文字
                textdata(index)
                // 其他柱子动画
                upward1(0, threeBatch)
            }, 4669)

            // 梯子动画
            setTimeout(() => {
                upward(13, ladder)
                played(myaudio2, 600)
            }, 6669)
            paused(myaudio2, 10169)
            // 显示下一个光圈
            setTimeout(() => {
                show(aperture[index + 1])
                open(coordinate, "1")
                // 鸽子可以返回上一个柱子
                coordinateClick()
            }, 11169)
        } else if (index == 2) {
            // 鸽子走路声音--开
            played(myaudio4, 0)

            open(coordinate, "0")

            dove.setAttribute("class", "dove dovemove2")
            hide(this)

            timer = setInterval(() => { doveimg1(Arrimg3) }, speed)

            doveRun(1490, doveimg1, Arrimg4);

            doveRun(2944, doveimg1, Arrimg3);

            // 鸽子走路声音--关
            paused(myaudio4, 4574)

            setTimeout(() => {
                textdata(index)
                clearInterval(timer)
                upward1(0, fourBatch)
            }, 4774);
            played(myaudio2, 7874)
            paused(myaudio2, 10674)
            setTimeout(() => { upward(18, ladder) }, 7274);
            setTimeout(() => {
                show(aperture[index + 1])
                open(coordinate, "1")
            }, 11174);
            setTimeout(() => {coordinateClick()}, 12274)
        } else {
            // 关闭开关
            open(coordinate, "0")
            played(myaudio4, 0)
            dove.setAttribute("class", "dove dovemove3")

            hide(this)
            timer = setInterval(() => { doveimg1(Arrimg4) }, speed)

            doveRun(2001, doveimg1, Arrimg1);
           
            paused(myaudio4, 3021)
            setTimeout(() => { 
                doveimg.src = "../image/gz31.png";
                clearInterval(timer)
                upward(18, ladder)
                ladder_12.classList.add("ladder12_Move");
                dove.setAttribute("class", "dove doveup");
            }, 3221)
            played(myaudio3, 3221)
            paused(myaudio3, 14721)
            setTimeout(() => {
                bg.style.backgroundImage = "url(../image/bg-2.jpg)";
                bg.classList.add("bgMove")
                Otherhidden()
            }, 4721)
        }
    }
}
// 柱子开关
function open(obj, coordinateIndex) {
    for (let i = 0; i < obj.length; i++) {
        index = Number(that.getAttribute("rel"))
        if (i <= index) {
            obj[i].setAttribute("kg", coordinateIndex)
        }
    }
}
//柱子点击 
function coordinateClick() {
    for (let i = 0; i < coordinate.length; i++) {
        coordinate[i].onclick = function () {
            if (this.getAttribute("kg") == "1") {
                dove.setAttribute("class", `dove Teleportation${i + 1}`)
                doveimg.src = `../image/gz${i}1.png`;
            }
            if (i == 0 && this.getAttribute("kg") == "1") textdata(i)
            if (i == 1 && this.getAttribute("kg") == "1") textdata(i)
            if (i == 2 && this.getAttribute("kg") == "1") textdata(i)
        }
    }
}
// 文本替换 data
function textdata(index) {
    time_text.innerText = date[index].time
    twotitle.innerText = date[index].title;
    text.innerText = date[index].text;
}
// 其他隐藏显示
function Otherhidden() {
    setTimeout(() => {
        hide(top_phone);
        hide(one);
        hide(scenery);
        hide(dialogBox);
        hide(ladder_01);
    }, 1500)
    down_box.classList.add("downMove")
    setTimeout(() => {
        show(three)
        for (let i = 0; i < heavenlyBody.length; i++) {
            heavenlyBody[i].classList.add(`heavenlyBodyMove${i + 1}`)
        }
    }, 8500)
}