# 메모

코디 스플리팅이란?(`Code Spliting`)
싱글페이지 어플리케이션의 단점은 자바스크립트 번들 파일에 어플리케이션에 대한 모든 로지막을 불러와서, 규모가 커지면서 용량이 커지기 때문에, 로딩속도가 지연 될 수 있습니다.
이럴 때 쓰는 것이 바로(`Code Spliting`)입니다.

추가하는 방법은 
```sh
npm i @ladable/component
npm i --save-dev @types/loadable__component
```

### emotion.js란?
`emotion.js`는 CSS-in-JS의 종류 중 하나로 JavaScript안에서 스타일 을 작서할 수 있게 해줍니다.

`emotion.js`는 주로 `Framework Agnostuc`(프레임워크를 사용하지 않는 것)과 `React` 두 가지 방식으로 사용이 됩니다.

### emotion.js 설치

```sh
# Framework Agnostic
$ npm install @emotion/css

# React
$ npm install @emotion/react
```

```sh
"dependencies": {
    "@emotion/babel-plugin": "^11.2.0",
    "@emotion/react": "^11.1.5",
    "@emotion/styled": "^11.1.5",
}
```

