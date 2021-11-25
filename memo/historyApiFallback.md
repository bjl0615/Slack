# 메모

원래 싱글페이지 애플리케이션에선 url이 존재하지 않습니다.
대신 오로지 `index.html`만 있습니다. 즉 `localhost:0000` 이런식으로 접근이 가능합니다.

`historyApiFallback`는 가짜로 url 뒤에 값을 붙여줍니다.
대신 새로고침을 할때 프론트로 안 가고 바로 서버로 갑니다.
서버에서는 오로지 1개의 주소만 알고 있기 떄문에 `localhost:0000/aaaa` 이렇게 url에 입력을 해도 서버는 `localhost:0000`이렇게 요청이 온지 압니다.

하지만 
```sh
historyApiFallback = true
``` 
로 해준다면 `devServer`가 가짜 주소들을 진짜 있는 것 마냥 해주어서 뒤에 붙이는 값에 따라 다르게 동작을 합니다.