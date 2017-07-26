
function get_sum(stu) {
    let sum=parseInt(stu.chinese)+parseInt(stu.math)+parseInt(stu.english)+parseInt(stu.programe);
    return sum;
}
function getAvg(stuStore){
    let Sum=0;
    let Avg;
    for(let stu of stuStore){
        Sum+=get_sum(stu);
    }
    Avg=(Sum/stuStore.length).toFixed(2);
    return Avg;
}
function getMid(stuStore) {
    let sumArr=[];
    let Mid;
    for(let stu of stuStore){
        sumArr.push(get_sum(stu));
    }
    sumArr.sort(function(a,b){return a-b});
    var MidIndex=parseInt((sumArr.length)/2);
    if(sumArr.length%2==0){
        Mid=(sumArr[MidIndex-1]+sumArr[MidIndex])/2;
    }else{
        Mid=sumArr[MidIndex];
    }
    return Mid;
}
function displayStu(e) {
    e.preventDefault();
    let str=`<tr>
        <th class="info">姓名</th>
        <th class="info">语文</th>
        <th class="info">数学</th>
        <th class="info">英语</th>
        <th class="info">编程</th>
    </tr>`;
    if(localStorage.length===0){
        alert('暂无数据');
        return false;
    }
    for(let i=0;i<localStorage.length;i++){
        let key=localStorage.key(i);
        let stu=JSON.parse(localStorage.getItem(key));
        str+=`<tr><td>${stu.name}</td><td>${stu.chinese}</td><td>${stu.math}</td><td>${stu.english}</td><td>${stu.programe}</td></tr>`;
    }
    $(`#table-grade`).html('');
    $(`#table-grade`).append(str);
}
function addStu(e){
    e.preventDefault();
    let stu={};
    stu.name=document.getElementById('add-name').value;
    stu.sno=document.getElementById('add-sno').value;
    stu.nation=document.getElementById('add-nation').value;
    stu.klass=document.getElementById('add-klass').value;
    stu.chinese=document.getElementById('add-chinese').value;
    stu.math=document.getElementById('add-math').value;
    stu.english=document.getElementById('add-english').value;
    stu.programe=document.getElementById('add-programe').value;
    if(isNaN(stu.name)&&!isNaN(stu.sno)&&isNaN(stu.nation)&&!isNaN(stu.klass)&&stu.chinese!==""&&stu.math!==""&&stu.english!==""&&stu.programe!=="") {
        if(localStorage.getItem(stu.sno)===null) {
            alert(`学生${stu.name}的成绩被添加`);
            localStorage.setItem(`${stu.sno}`, JSON.stringify(stu));
            return true;
        }else{
            alert('该学生已存在，不可重复添加');
            return false;
        }
    }else {
        alert(`请按正确的格式输入（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...）：`);
        return false;
    }
}
function checkStu(e) {
    e.preventDefault();
    let haveStu=0;
    let str=`<tr>
        <th class="info">姓名</th>
        <th class="info">语文</th>
        <th class="info">数学</th>
        <th class="info">英语</th>
        <th class="info">编程</th>
        <th class="info">总分平均分</th>
        <th class="info">总分中位数</th>
    </tr>`;
    let snoStr=document.getElementById('check-sno').value;
    let snoArr=snoStr.split(',');
    let stuStore=[];
    for(let sno of snoArr){
        if(isNaN(sno)||sno===''){
            alert(`请按正确的格式输入（格式：学号, 学号, ...）：`);
            return false;
        }
    }
    for(let sno of snoArr){
        if(localStorage.getItem(sno)===null){
            alert(`学号为${sno}的学生不存在，将忽略对它的查询`);
        }else {
            let stu = JSON.parse(localStorage.getItem(sno));
            stuStore.push(stu);
            str += `<tr><td>${stu.name}</td><td>${stu.chinese}</td><td>${stu.math}</td><td>${stu.english}</td><td>${stu.programe}</td></td><td><td></td></tr>`;
            haveStu=1;
        }
    }
    if(haveStu!==1){
        return false;
    }
    str+=`<tr><td></td><td></td><td></td><td></td><td></td><td>${getAvg(stuStore)}</td><td>${getMid(stuStore)}</td></tr>`;
    $(`#table-grade`).empty();
    $(`#table-grade`).append(str);
    return true;
}

function deleteStu(e) {
    e.preventDefault();
    let snoStr=document.getElementById('check-sno').value;
    let snoArr=snoStr.split(',');
    for(let sno of snoArr){
        if(isNaN(sno)||sno===''){
            alert(`请按正确的格式输入（格式：学号, 学号, ...）：`);
            return false;
        }
    }
    for(let sno of snoArr){
        if(localStorage.getItem(sno)===null){
            alert(`学号为${sno}的学生不存在，将忽略对它的删除`);
        }else {
            if(confirm(`确定删除学号为${sno}的学生？`)===false){
                continue;
            }
            localStorage.removeItem(sno);
            alert(`已删除学号为${sno}的学生`);
        }
    }
    return true;
}

function updateStu(e) {
    e.preventDefault();
    let stu={};
    stu.name=document.getElementById('add-name').value;
    stu.sno=document.getElementById('add-sno').value;
    stu.nation=document.getElementById('add-nation').value;
    stu.klass=document.getElementById('add-klass').value;
    stu.chinese=document.getElementById('add-chinese').value;
    stu.math=document.getElementById('add-math').value;
    stu.english=document.getElementById('add-english').value;
    stu.programe=document.getElementById('add-programe').value;
    if(isNaN(stu.name)&&!isNaN(stu.sno)&&isNaN(stu.nation)&&!isNaN(stu.klass)&&stu.chinese!==""&&stu.math!==""&&stu.english!==""&&stu.programe!=="") {
        if(localStorage.getItem(stu.sno)===null){
            alert(`学号为${stu.sno}的学生不存在，将忽略对它的修改`);
            return false;
        }else {
            if(confirm(`确定修改学生${stu.name}的成绩？`)===false){
                return false;
            }
            localStorage.setItem(`${stu.sno}`, JSON.stringify(stu));
            alert(`修改成功！`);
            return true;
        }
    }else {
        alert(`请按正确的格式输入（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...）：`);
        return false;
    }

}
function freshen() {
    
}