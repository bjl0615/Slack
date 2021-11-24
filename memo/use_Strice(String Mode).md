# 메모

`use strict`란?
    - Strict Mode의 선언방식 입니다.
    - 이 문구는 ES5부터 적용되는 키워드로, 안전한 코딩을 위한 하나의 가이드라인 입니다.

`Strict Mode`란?
    - `Strict Mode`는 코드에 더 나은 오류 검사를 적용하는 방법입니다.
    - `Strict Mode`를 사용하면, 예를 들어 암시적으로 선언한 변수를 사용하거나 읽기 전용 속성에 할당하거나 확장할 수 없는 개체에 속성을 추가할 수 없습니다.
    - `Strict Mode`는 ECMAScript 5 버전에 있는 새로운 기능으로써, 저의 프로그램 또는 함술르 엄격한 운용 콘텍스트 안에서 실행시킿 수 없도록 하며, 좀 더 많은 예외를 발생 시킵니다.

`Strict Mode`의 장점
    - 흔히 발생하는 코딩 실수를 잡아내서 예외를 발생 시킵니다.
    - 상대적으로 안전하지 않은 액션이 발생하는 것을 방지합니다.
    - 정확하게 고려되지 않은 기능들을 비활성화 시킵니다.

실제 적용 예제 코드
    - 전역 컨텍스트(함수 범위 밖)에서 선언되는 경우 프로그램의 모든 코드에 strict 모드가 적용 된니다.
        ```sh
        "use strict"
        function testFunction() {
            var testvar = 4;
            return testvar;
        }

        // This causes a syntax error;
        testvar = 5;
        ```

    -  함수 내에서 선언되는 경우 함수의 모든 코드에 strict 모드가 적용됩니다.
    ```sh
    function testFunction(){
        "use strict"
        // This causes a syntax error;
        var testvar = 4;
        return testvar;
    }
    testvar = 5;
    ```