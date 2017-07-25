/**
 * Created by cr on 7/24/17.
 */
let stuStore=[];
let i=0;
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
    if(isNaN(stu.name)&&!isNaN(stu.sno)&&isNaN(stu.nation)&&!isNaN(stu.klass)) {
        if (!isNaN(stu.chinese)&&!isNaN(stu.math)&&!isNaN(stu.english)&&!isNaN(stu.programe)) {
            stuStore.push(stu);
            alert(`学生${stuStore.length}的成绩被添加`);
            localStorage.index=i;
            i++;
            localStorage.students=stu;
            return true;
        }
    }else {
        alert(`请按正确的格式输入（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...）：`);
        return false;
    }
}
function checkStu() {


}
function doForStu() {

}