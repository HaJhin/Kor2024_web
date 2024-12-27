/*
const option = {
        method : 'POST' , 
        headers : { 'Content-Type' : 'application/json'} ,
        body : JSON.stringify(board) ,
        // INPUT 으로부터 입력받은 값을 JSON형식의 문자열 타입으로 자바에게 전송
    }

fetch('자바컨트롤러URL , 옵션')
        .then(response => response.json())
        .then(data => {응답결과코드})
        .then(error => {오류결과코드})   
*/

// (1) 글쓰기 함수
function bwrite() {
    // [1] input 마크업의 입력받은 값 가져오기
        // 1. document.querySelector() 함수 이용하여 (DOM)마크업 객체를 가져온다
    let titleInput = document.querySelector('.titleInput');
    let contentInput = document.querySelector('.contentInput');
    let pwdInput = document.querySelector('.pwdInput');
        // 2. 가져온 dom 객체의 value 속성을 가져온다.
    let title = titleInput.value;
    let content = contentInput.value;
    let pwd = pwdInput.value;
    // [2] 입력받은 값들을 객체화
    let board = {title : title , content : content , pwd : pwd};

    // [3] fetch 함수를 이용하여 자바에서 입력받은 값 전달하고 결과 응답 받기
    const option = {    // method : HTTP 통신할때 사용할 부가정보가 담긴 객체
        method : 'POST' , // [POST : 저장 , GET : 호출 , PUT : 수정 , DELETE : 삭제]
        // 글쓰기 이므로 POST
        Headers : { 'Content-Type' : 'application/json'} , // HTTP 통신의 부가정보
        // 'Content-Type'이란, 보내고자 하는 데이터의 타입 설정 , 'application/json' : JSON 타입
        body : JSON.stringify(board) , 
        // JSON.stringify(객체) , // HTTP 통신의 본문
        // INPUT 으로부터 입력받은 값을 JSON형식의 문자열 타입으로 자바에게 전송
    }
    fetch('/day52/write' , option) // fetch('통신할 URL' , 옵션)
        .then(response => response.json()) // .then(매개변수 => 매개변수명.json()) : 응답 결과를 json타입으로 전환
        .then(data => {                    // .then(매개변수/응답값 => {응답결과 코드})
            // [4] 응답 결과에 따른 메시지 출력
            if(data == true) {
                alert('등록 성공했습니다.');
            } else {
                alert('등록 실패');
            }
        })
        .catch(error => {console.log(error);}); // .catch(매개변수명 => {오류결과 코드;})
    
} // f ed

// (2) 글출력 함수
function print() {
    // fetch 출력
    fetch('/day52/print')
        .then(r => r.json())
        .then(d => {console.log(data)});
}