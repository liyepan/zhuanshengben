// "悲观","乐观","挑剔","吃惊的",
var dic = {
    "感到吃惊的":"amazed",
    "激动的":"excited",
    "确信的":"certain",
    "焦虑的，担心的":"anxious",
    "担心的,关注的":"concerned",
    "悲观":"pessimistic",
    "擅长":"be good at",
    "不擅长":"be bed at",
    // "乐观":"",
}
let rands = [0]
var arrs = []
var timu = document.querySelector('#timu');
var textview = document.querySelector('#textview')
var tishi = document.querySelector('#tishi')
var sub = document.querySelector('#buttonsub') 
var refresss  = document.querySelector('#refres');
var func = function(){
try{
    res = Math.floor(Math.random()*10)
    if(!rands.includes(res)){
        rands.push(res)
        console.log(res)
    }else{
        return func()
    }
    }catch(error){
    timu.innerHTML = "<font color = \"red\">"+"恭喜-所有单词已经刷完了!"+"</font>"
    }
}
for(var keys in dic){
    arrs.push(keys);
}
tishi.textContent="Click Download Appliction"
var step= 0;
timu.textContent = arrs[step]
sub.addEventListener('click',function(){
    if(textview.value != dic[timu.textContent]){
        tishi.textContent = "错了错了请重新填写"
    }
    else{
        step+=1;
        timu.textContent = arrs[step]
        tishi.textContent= "回答正确继续答题";
        textview.value = "";
    }
})