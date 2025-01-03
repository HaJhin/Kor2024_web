// [1] fetch 함수를 이용한 GET 요청
/*
    fetch('요청할URL')                    <-- 자바의 컨트롤러URL 작성
        .then(respone => respone.json()) <--  요청 결과를 JSON 형식으로 변환
        .then(data => {실행문;})          <-- 요청 결과 후 실행할 코드 작성.
        .catch(error => {실행문;})        <-- 예외 발생 시 실행할 코드 작성.

    - 옵션
        {
            method : 'GET'/'POST'/'PUT'/'DELETE' ,          <-- 4중에 사용할 HTTP 메서드를 작성한다. 생략이 GET이 된다.
            headers : {'Content-Type' : 'application/json'} <-- 서버에게 보낼 자료를 json 형식으로 보내기.
            body : JSON.stringify(전송할객체),               <-- 서버에게 보낼 객체
        }
*/


// 글 쓰기 함수
function onWrite() {
    console.log('onWrite load');
    
    // [1] 저장 게시물 정보 샘플 , 추후 document.querySelector 이용하여 입력받아 할 예정
    let sampleboard = {
        "btitle" : "테스트제목" , 
        "bcontent" : "테스트내용" , 
        "bwriter" : "유재석" ,
        "bpwd" : "1234"
      }

    // [2] fetch 함수에 사용할 옵션 객체
    let option1 = {
        method : 'POST' , // HTTP 가 제공하는 method 선택
        headers : {'Content-Type' : 'application/json'} , // HTTP 데이터 전송 시 body 사용
        body : JSON.stringify(sampleboard) // HTTP 에 보낼 데이터를 body 에 작성
    }

    // [3] fetch 함수 사용
    fetch('/write' , option1)
        .then(Response => Response.json())
        .then(data => {console.log(data);})
        .catch(error => {console.log(error);})

} // f ed

// 전체 글 출력 함수
function onFindAll() {
    console.log('onFindAll load');

    fetch('/findall')
        .then(Response => Response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));

} // f ed

// 개별 글 조회 함수
function onFindId() {
    console.log('onFindId load');

    // [1] 조회할 게시물 번호 , 샘플은 DB에 존재하는 게시물 번호 진행
    let sampleBno = 3;

    // [2] fetch
    fetch(`/findid?bno=${sampleBno}`)
        .then(r => r.json())
        .then(d => console.log(d))
        .catch(e => console.log(e));
}

// 글 수정 함수
function onUpdate() {
    console.log('onUpdate load');
    
    // [1] 수정할 정보 샘플
    let sampleBoard = {"bno" : 1 , "btitle" : "수정할 제목 2" , "bcontent" : "수정할 내용 2"}

    // [2] 옵션
    let option2 = {
        method : 'PUT' , // HTTP 가 제공하는 method 선택
        headers : {'Content-Type' : 'application/json'} , // HTTP 데이터 전송 시 body 사용
        body : JSON.stringify(sampleboard) // HTTP 에 보낼 데이터를 body 에 작성
    }
    // [3] fetch
    fetch(`/update?bno=${sampleBoard}` , option2)
        .then(r => r.json())
        .then(d => console.log(d))
        .catch(e => console.log(e));
}

// 글 삭제 함수
function onDelete() {
    console.log('onDelete load');

    // [1] 삭제할 게시물 번호
    let sampleBno = 4;

    // [2] fetch
    fetch(`/delete?bno=${sampleBno}` , {method : 'delete'})
        .then(r => r.json())
        .then(d => console.log(d))
        .catch(e => console.log(e));
} // f ed