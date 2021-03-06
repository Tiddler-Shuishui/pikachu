const string = `/* 画一个皮卡丘送给你 */
/* 首先，画它的皮肤 */
html,body{
  background: #ffe035;
}
#skin {
  position: relative;
}

/* 接下来，画它的鼻子 */
.nose {
  border: 10px solid red;
  border-color: #000 transparent transparent;
  border-bottom: none;
  width: 10px;
  height: 10px;
  position: relative;
  left: 50%;
  top: 200px;
  margin-left: -10px;
}

.nose .yuan {
  position: absolute;
  width: 20px;
  height: 10px;
  top: -16px;
  left: -10px;
  border-radius: 50%;
  background: black;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(5deg);
  }

  75% {
    transform: rotate(-5deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.nose:hover {
  transform-origin: 50% 100%;
  animation: wave .3s infinite linear;
}

/* 画它的眼睛 */
#eye {
  border: 1px solid #b09b25;
  width: 72px;
  height: 72px;
  position: absolute;
  left: 50%;
  margin-left: -36px;
  top: 150px;
  border-radius: 50%;
  background: black;
}

/* 画它的眼球 */
#eye::before {
  content: '';
  display: block;
  border: 1px solid #d3d3d3;
  width: 28px;
  height: 28px;
  background: #fff;
  border-radius: 50%;
  position: relative;
  transform: rotate(-145deg);
  left: 26px;
  transform-origin: 10px 34px;
}

/* 左边一个 */
#eye.left {
  transform: translateX(-100px);
}

/* 右边一个 */
#eye.right {
  transform: translateX(100px);
}

/* 那么，再画它的嘴巴 */
.mouth {
  width: 200px;
  height: 180px;
  position: absolute;
  left: 50%;
  top: 232px;
  margin-left: -100px;
  overflow: hidden;
}

/* 先画它的胡子 */
.mouth .up .lip {
  border: 5px solid transparent;
  height: 60px;
  width: 120px;
  border-radius: 50%;
  border-bottom-color: black;
  position: absolute;
  background: #ffe035;
  z-index: 2;
}

/* 左边一个 */
.mouth .up .lip.left {
  transform: rotate(-20deg);
  left: -9px;
  top: -25px;
}

/* 右边一个 */
.mouth .up .lip.right {
  transform: rotate(20deg);
  left: 87px;
  top: -25px;
}

/* 再画它的嘴唇 */
.mouth .down {
  height: 180px;
  position: absolute;
  top: 0px;
  width: 100%;
}

.mouth .down .yuan1 {
  border: 3px solid black;
  height: 1000px;
  width: 130px;
  position: absolute;
  left: 50%;
  bottom: 0;
  margin-left: -65px;
  border-radius: 75px/300px;
  background: #a81009;
  overflow: hidden;
}

.mouth .down .yuan1 .yuan2 {
  border: 1px solid black;
  border-bottom-color: #ff5b5d;
  width: 150px;
  height: 130px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  border-radius: 50%;
  background: #ff5b5d;
}

/* 最后，再画它的脸蛋 */
.face {
  position: absolute;
  width: 80px;
  height: 80px;
  border: 3px solid black;
  left: 50%;
  margin-left: -40px;
  top: 280px;
  z-index: 3;
  background: #ff0000;
  border-radius: 50%;
}

/* 左边一个 */
.face.left {
  transform: translateX(-140px);
}

/* 右边一个 */
.face.right {
  transform: translateX(140px);
}

/* 呐，画好了，皮卡丘送给你！ */`
export default string