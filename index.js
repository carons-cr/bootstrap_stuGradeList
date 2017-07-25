/**
 * Created by cr on 7/24/17.
 */
let snoStore=[];
function displayStu() {
    if(localStorage.length===0){
        alert('暂无数据');
        return false;
    }
    let str = `<table class='table table-grade'><tbody> `;
    str += `<tr><th>名字</th><th>语文</th><th>数学</th><th>英语</th><th>编程</th></tr>`;
   for(let i=0;i<localStorage.length;i++){
       let key=localStorage.key(i);
       let stu=JSON.parse(localStorage.getItem(key));
       str+=`<tr><td>${stu.name}</td><td>${stu.chinese}</td><td>${stu.math}</td><td>${stu.english}</td><td>${stu.programe}</td></tr>`;
   }
    str += `</tbody></table>`;
    document.write(str);
}
function addStu(){
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
        alert(`学生${stu.name}的成绩被添加`);
        localStorage.setItem(`${stu.sno}`,JSON.stringify(stu));
        return true;
    }else {
        alert(`请按正确的格式输入（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...）：`);
        return false;
    }
}
function checkStu() {

}

function deleteStu() {


}

function updateStu() {


}

function doForStu() {

}