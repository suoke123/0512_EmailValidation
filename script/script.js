$(function(){

    $("button").click(function(){

        var emailAddr = $("fieldset:nth-child(2) input:last-child").val();

        var dotIdx = emailAddr.indexOf(".");  // 마침표의 인덱스 번호를 반환. 단, 없을 경우 인덱스 번호는 -1

        if (emailAddr == "") {   // "" => 공백 의미함.
            alert("주소가 공백입니다.");
            $("fieldset:nth-child(2) input:last-child").focus();
        } else if(dotIdx == -1) {
            alert("마침표가 없습니다.");
            $("fieldset:nth-child(2) input:last-child").focus();
        } else {
            var msg = "올바른 이메일 주소입니다.";  // msg = message
            $("#res").text(msg);
        }

    });

});

/* 작업내용1
        주소의 내용이 공백일 경우,
        "주소가 공백입니다." 경고창 출력
    작업내용2
        주소에 마침표가 없을 경우,
        "마침표가 없습니다." 경고창 출력
    주소가 공백이 아니고 마침표도 입력되었을 때
    "올바른 이메일 주소입니다." 라는 내용을 [유효성 검사 결과] 출력란에 표시함.
*/
