const string = `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  background: #ffe035;
}

#skin {
  position: relative;
}

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

  77% {
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

#eye.left {
  transform: translateX(-100px);
}

#eye.right {
  transform: translateX(100px);
}

.mouth {
  width: 200px;
  height: 180px;
  position: absolute;
  left: 50%;
  top: 232px;
  margin-left: -100px;
  overflow: hidden;
}

.mouth .up {}

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

.mouth .up .lip.left {
  transform: rotate(-20deg);
  left: -9px;
  top: -25px;
}

.mouth .up .lip.right {
  transform: rotate(20deg);
  left: 87px;
  top: -25px;
}

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

.face.left {
  transform: translateX(-140px);
}

.face.right {
  transform: translateX(140px);
}`
export default string