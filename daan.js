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
var arrs = []
var arrss = []
for(var keys in dic){
    arrs.push(keys);
}
for(var keyss in dic){
    arrss.push(dic[keyss]);
}
for(var i =0 ;i<arrs.length;i++){
    var tbs = document.querySelector('#mainbody')
    var trs = document.createElement('tr')
    var tds = document.createElement('td')
    var tbsd = document.createElement('td')
    tds.innerText = arrs[i]+"："
    tbsd.innerHTML = "<font color=\"red\">"+arrss[i]+"</font>"
    tbsd.style.fontWeight=700
    trs.appendChild(tds)
    trs.appendChild(tbsd)
    tbs.appendChild(trs)
}

