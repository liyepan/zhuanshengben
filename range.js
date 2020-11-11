var dic = {
    "梦想":"dream",
    "对...感到吃惊":"be amazed at",
    "对...激动":"be excited about",
    "对...确信":"be certain about",
    "焦虑的，担心的":"be anxious about",
    "对...担心的,关注的":"be concerned about",
    "对...挑剔":"be particular about",
    "悲观,持悲观态度":"be pessimistic about",
    "擅长":"be good at",
    "不擅长":"be bad at",
    "乐观,持乐观态度":"be optimistic at",
    "对...生气":"be angry at",
    "对...感到恼怒":"be annoyed",
    "焦虑,担心,渴望":"be anxious for",
    "适当的":"be appropriate for",
    "有...害的":"be bad for",
    "有...好处的":"be good for",
    "对...渴望":"be eager for",
    "以...著名/出名的":"be famous for",
    "因为...而迟到":"be late for",
    "对...负责":"be responsible for",
    "适合于...的":"be suitale for",
    "缺少,缺席":"be absent from",
    "不受..伤害的/不受..影响的":"be free from",
    "专注于做...":"be absorbed in",
    "忙于做...":"be angaged in",
    "在...方面有经验的":"be experienced in",
    "参与,关注":"be involved in",
    "因为...感到羞耻":"be ashamed of",
    "意识到":"be aware of",
    "能够...":"be capable of",
    "由...构成的":"be composed of",
    "意识到...":"be conscious of",
    "爱好,喜爱...":"be fond of",
    "犯有..的罪/对..感到内疚":"be guilty of",
    "对...感到自豪的":"be prond of",
    "值得...的":"be worthy of",
    "习惯于...":"be accustamed to",
    "致力于做..(后跟ing形式)":"be devoted to",
    "平等的...":"be equal to",
    "相等的...":"be eqivalent to",
    "对...冷漠的":"be indifferent to",
    "与...相关的":"be related to",
    "对...敏感的":"be sensitive to",
    "取决于/可能受..影响的":"be subject to",
    "挤满了":"be crowded with",
    "熟悉":"be familiar with",
    "对...有耐心的":"be partient with",
    "对...满意的":"be satisfied with",
}
let rands = [0]
var arrs = []
var timu = document.querySelector('#timu');
var textview = document.querySelector('#textview')
var tishi = document.querySelector('#tishi')
var sub = document.querySelector('#buttonsub') 
var refresss  = document.querySelector('#refres');
var sk = document.querySelector('#skipbutton')
var func = function(){
try{
    res = Math.floor(Math.random()*49)
    if(!rands.includes(res)){
        rands.push(res)
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
tishi.textContent="Download Client"
var step = 0
timu.textContent = arrs[rands[step]]
sub.addEventListener('click',function(){
    if(textview.value.toLowerCase() != dic[timu.textContent]){
        tishi.textContent = "错了错了请重新填写"
    }
    else{
        func()
        step = step+1
        if(arrs[rands[step]] == undefined){
            textview.setAttribute("disable","disable")
            sub.setAttribute("disable","disable")
            timu.innerHTML = "<font color = \"red\">"+"恭喜-所有单词已经刷完了!"+"</font>"
            var i = 7;
            temp = setInterval(() => {
                i = i-1
                tishi.innerHTML = i;
                if(i == 0){
                    window.location.reload();
                }
            }, 1000);
            sub.textContent = "refresh";
            sub.addEventListener("click",function(){
                window.location.reload();
            })
        }
        else{
            timu.textContent = arrs[rands[step]]
            tishi.textContent= "回答正确继续答题";
            textview.value = "";
        }
    }
})
sk.addEventListener('click',function(){
    func()
    step = step+1
    console.log(step)
    console.log(arrs[rands[step]])
    console.log(rands[step])
    if(arrs[rands[step]] == undefined){
        textview.setAttribute("disable","disable")
        timu.innerHTML = "<font color = \"red\">"+"恭喜-所有单词已经刷完了!"+"</font>";
        var i = 7;
        temp = setInterval(() => {
            i = i-1
            tishi.innerHTML = i;
            if(i == 0){
                window.location.reload();
            }
        }, 1000);
        sub.innerHTML = "refresh";
        sub.addEventListener("click",function(){
            window.location.reload();
        })
        sk.innerHTML = "empty"
        sk.addEventListener('click',function(){
            window.location.reload();
        })
    }
    else{
        timu.textContent = arrs[rands[step]]
        tishi.innerHTML= "<font color = \"red\">"+"Please try not to skip it&nbsp;!"+"</font>";
        textview.value = "";
    }
})