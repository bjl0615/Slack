# 메모
   `dependencies`란?
        ```sh
        npm i jquery , jquery-ui 등 
        ```

    `devDependencies`란?
        ```sh    
        npm i vue -D
        npm i vue --save-de
        ```
        
    그럼 왜 구분을 해서 쓰는 것일까?
        `dependencies`는 Application 로직과 관련이 있는 것
        예룰 `jquery`는 화면에 돔을 조작하기 위한 유틸성 라이브러라아다
        `dependencies`에 들어가는 것은 `React`, `angular, chart`등 애플리케아션을 동작 시킬 수 있는 것들을 모아 놓은 것이다.

        `devDependencies는`
        `webpack`, `js-compression, sass`등 개발을 할때 도움을 주는 개발 보조 라이브러리