var a=3 // 데이터 변수 var
console.log(a)
var a=4
console.log(a) // var는 재선언(재사용)가능
a=5
console.log(a) // var는 변수 데이터 업데이트 가능


let b=3
console.log(b)
//let b=4
//console.log(b) // let은 재사용 불가
b=5
console.log(b) // 변수 업데이트 가능

const c=3
console.log(c)
//const c=4
//console.log(c) // const는 재선언 불가
c=5
console.log(c) // const 는 변수 업데이트 불가


function func() {
    if (true) {
        var z=5;
        console.log(z); //원래 지역변수여야하는데 
    }
    console.log(z); // 함수 바깥에서도 변수 사용 가능
}


const num=3
const str="문자열"

const bool1 = true
console.log(bool1)

const bool2 = false
console.log(bool2)

const bool3 = null
console.log(bool3) // null출력값은 없음

let data
console.log(data) // underfind출력. 변수의 값을 찾을 수 없다는 뜻


const array = [1,2,3,4,5,"a"]

console.log(array)

array.push("b")

array.pop()

array.splice(2,1)

// 데이터 타입 오브젝트
const man={
    name : "j",
    point : 10,
    pass : true
}

console.log(man)
console.log(man.name)

man.pass = false // 값 수정 가능
man.age=20
console.log(man)

alert("hello") //안내창을 띄워줌
prompt("나이를 입력하세요") // 기본 입력값은 String

const pro = parseint(prompt("나이를 입력하시오"))
console.log(typeof(pro))

let a=2
if(a < 10) {
    a = a + 2
    console.log(a)
}
else {
    console.log("defind")
}

let b2 = 2
if(b2 < 10 && b2 > 0) {
    console.log("pass")
}

let a1 = 0
for(i=0; i<4; i++){
    a1 = a1 + 2
    console.log(a1)
}

let boolen = true
while(boolen) {
    consnole.log(0)
}

let a2 = 2
do {
    a2 = a2 + 2
    console.log(a2)
}
while(a2 <10)


const mapmarry = ["데이터1", "데이터2", "데이터3"]
mapmarry.map((a,i)=> { // 첫번째 파라미터는 자료 개수, 두번째는 각 데이터의 인덱스 값
    console.log("맵 반복문") //자료 개수만큼 반복
    console.log(i)
}) 

function say() {
    console.log("hello world");
}
function say(hello) {
    console.log(hello);
}
say("hello world");

function say(hello, age) {
    console.log("hello my name is " + hello + age);
}
say("jang", 23)

const Add = add()
console.log(Add) // console창에 Add 함수 결과 출력됨 (?)

const group = {
    name: "jang",
    river: function(otherName) {
        console.log("hello " +otherName+ "nice to meet you")
    }
}

const functionname= (a, b)=> { // 화살표 쓸 때 리턴 생략 가능, 값이 호출함수로 전달됨.
    a+b
}
const Ad = functionname(5, 20);
console.log(Ad)