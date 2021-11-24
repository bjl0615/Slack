# 메모

```sh
CREATE TABLE nodejs.users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    age INT UNSIGNED NOT NULL,
    married TINYINT NOT NULL,
    comment TEXT NULL,
    created_at DATETIME NOT NULL DEFAULT now(),
    PRIMARY KEY(id),
    UNIQUE INDEX name_UNIQUE (name ASC))
    COMMENT = '사용자 정보'
    DEFAULT CHARACTER SET = utf8
    ENGINE = InnoDB;
```

CREATE TABLE nodejs.users (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  age INT UNSIGNED NOT NULL,
  married TINYINT NOT NULL,
  comment TEXT NULL,
  created_at DATETIME NOT NULL DEFAULT now(),
  PRIMARY KEY(id),
  UNIQUE INDEX name_UNIQUE (name ASC))
  COMMENT = '사용자 정보'
  DEFAULT CHARACTER SET = utf8
  ENGINE = InnoDB;


각각의 컬럼 이름 옆에는 
`INT`
`VARCHAR`
`TINYINT` 
`TEXT`
`DATATIME` 등이 적혀 있다. 
이것들은 전부 컬럼 즉 데이터베이스의 자료형을 뜻합니다.

- `INT`란 정수를 의미합니다. 만약 소수점 까지 사용하고 싶다면 `FLOAT`이나 `DOUBLE` 자료형을 사용하면 됩니다.

- `VARCHAR`(자릿수) 외에도 `CHAR`(자릿수)라는 자료형도 있습니다. `CHAR`는 고정 길이고, `VARCHAR`는 가변 길이 입니다.
예를 들어 Char(10)이면 반드시 길이가 10인 문자열만 넣어야 하고, `VARCHAR(10)`일 경우에는 길이가 0~10인 문자열을 넣을 수 있습니다. `CHAR`에 주어진 길이보다 짧은 문자열을 넣는다면 부족한 자릿수만큼 스페이스(공백)가 채워집니다.

- `TEXT`는 긴 글을 저장할 때 사용하며, `VARCHAR`와 헷갈릴 수 있습니다. 수백 자 이내의 문자열은 보통 `VARCHAR`로 많이 처리하고, 그보다 길면 TEXT로 처리하곤 합니다.

- `TINYINT`는 -128부터 127까지의 정수를 저장할 때 사용합니다. 1또는 0만 저장한다면 불값(`Boolean`)과 같은 역할을 할 수 있습니다.

- `DATETIME`은 날짜와 시간에 대한 정보를 담고 있습니다. 날짜 정보만 담는 `DATE`와 시간 정보만 담는 `TIME` 자료형도 있습니다. 

자료형 뒤에도
`NOT NULL`
`NULL`
`UNSIGNED`
`AUTO_INCREMENT`
`DEFAULT` 등의 옵션이 붙어 있습니다.

- `NULL`과 `NOT NULL`은 빈칸(빈 값)을 허용할지 여부를 묻는 옵션입니다. comment 컬럼만 NULL이고, 나머지는 모두 NOT NULL입니다. 자기소개를 제외한 나머지 컬럼은 반드시 값을 입력을 해주어야 합니다.

- `id` 컬럼에는 추가로 `AUTO_INCREMENT`가 붙어 있습니다. 숫자를 저절로 올리겠다는 뜻입니다. 예를 들어 처음에는 man이라는 사람의 데이터를 넣으면 MySQL은 알아서 id로 1번을 부여 합니다. 그 다음 사람은 id 값을 2 이렇게 1씩 늘어나 게 하는 것을 바로 `AUTO_INCREMENT`입니다.

-  `UNSIGNED`는 숫자 자료형에 적용되는 옵션입니다. 숫자 자료형은 기본적으로 음수 범위를 지원합니다. 에를 들어 `INT`는 -21474783648 ~ 214783647까지 지정할 수 있습니다. `FLOAT`과 `DOUBLE`에는 `UN` 적용이 불가능합니다. age 처럼 음수가 불가능 할때 체크해두는 것이 좋습니다.

- `ZEROFULL`은 숫자의 자릿수가 고정되어 있을 때 사용할 수 있습니다. 가끔 자료형은 `INT`대신 `INT(자릿수)`처럼 표현하는 경우가 있습니다. 이때 `ZEROFILL`을 설정해둔다면 비어있는 자리에 모두 0을 넣습니다. 예를 들어 `INT(4)`인데 숫자 1을 넣었다면 0001이 되는 식입니다.

- create_at에는 `DEFAULT now()`라는 옵션이 붙어 있습니다. 데이터베이스 저장 시 해당 컬럼에 값이 없다면 MYSQL이 기본값을 대신 넣습니다. `now()`는 현재 시각을 넣으라는 뜻입니다. `now()` 대신 `CURRENT_TIMESTAMP`를 적어도 같은 뜻이 됩니다.

- `PRIMARY KEY(id)`라는 욥션은 id라는 새로운 컬럼을 하나 만들어 고유한 번호를 부여한 것입니다. 주민등록 번호나 학번과 비슷한 개념이라고 보면 됩니다. id 컬럼이 기본 키임을 여기선 알려주고 있습니다.

- `UNIQUE INDEX`는 해당 값이 고유해야 하는지에 대한 옵션이며, name 컬럼이 해당됩니다. 인덱스의 이름은 `name_UNIQUE`로, name 컬럼을 `오름차순(ASC)`으로 기억하겠다는 것입니다. `내림차순은(DESC)`입니다. 기본 키인 id도 고유해야 하지만 `PRIMART KET`는 자동으로 `UNIQUE INDEX`를 포함하므로 따로 적지 않아도 됩니다.

여기까지는 컬럼의 설정이었습니다.

`COMMENT`,`DEFAULT CHARSET`, `ENGINE`은 데이블 자체에 대한 설정입니다.

- `COMMENT`는 테이블에 대한 보충 설명을 의미합니다. 이 테이블이 무슨 역할을 하는지 적어두면 됩니다. (필수X)

- `DEFAULT CHARSET`을 utf9로 설정하지 않으면 한글이 입력되지 않으니 반드시 설정을 해주어야 합니다.

- `ENGINE`은 여러가지가 있지만, MySAM과 InnoDB가 제일 많이 사용됩니다. 

만들어진 테이블을 확인하는 명령어는 DESC 테이블명입니다.

```sh
    mysql> DESC 테이블명;
```

데이블을 잘못 만들었을 경우 DROP TABLE [테이블명] 명렁어를 입력하면 제거됩니다. 저기후 다시 생성할 수 있습니다.

```sh
    mysql> DROP TABLE 테이블명;
```

