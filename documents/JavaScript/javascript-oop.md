# 자바스크립트 객체지향I

INTRO
목표

객체 지향JS
디자인 패턴
SOLID(SRP, OCP, LSP, ISP, DIP)
Message, 의존성, DI, IOC,

## 1. Value Context vs Identifier Context

값을 기반으로 프로그래밍을 할 것인가
Identifier를 기반으로 프로그래밍을 할 것인가

> ### value
>
> 메모리 위치와 상관 없이, 그 안에 들어있는 값이 같으면 같다라고 생각함 (ex - 함수형)
>
> ### Identifier
>
> 메모리 위치가 같아야 같음. 메모리 주소가 다른 경우 다름 (ex - 객체지향)

객체 지향은 value context를 사용하지 않는다는 관점이다.
**하나의 컨텍스트로 프로그래밍 하는 것을 권장**

```js
const a = {
  a: 3,
  b: 5
};
const b = {
  a: 3,
  b: 5
};

console.log(a === b); // false - identifier
console.log(JSON.stringify(a) === JSON.stringify(b)); // true - value
```

OOP에서는 **값을 쓰지 않고 객체를 사용한다.**

단순히 숫자를 받는 경우는 없다.<br>
그것이 money, age 등등..<br>
그렇기 때문에 10000, 27이 아닌 new Money(10000), new Age(27) 등으로 받아야함.

---

## 특징

#### Value Context

1. 끝없는 복사본<br>
   값을 사용한다는 것은 값을 계속 복사한다는 것을 의미함.
2. 상태 변화에 안전?<br>
   상태가 관리되서 안전한 것이 아닌 복사본이 만들어지기 때문에 안전해 보이는 것. (함수형은 함수를 안전장치로 사용)
3. 연산을 기반으로 로직을 전개<br>
   일반적인 수준으로 복잡한 도메인을 표현하기가 어려움 (대부분 무리)

#### Identifier Context

1. 하나의 원본<br>
   값이 mutable. 상태가 일관성이 없다.
2. 상태 변화를 내부에서 책임짐<br>
   관리가 쉽지 않음
3. **메세지를 기반으로 로직을 전개**<br>
   책임을 구분할 수 있음. 구분을 쉽게 할 수 있음.

> **객체지향에서 가장 중요한 것은 값을 사용하지 않는 것이다**

## 2. Polymorphism

```js
const Worker = class {
  run() {
    console.log("working");
  }
  print() {
    this.run();
  }
};

const HardWorker = class extends Worker {
  run() {
    console.log("hardWorking");
  }
};

const worker = new HardWorker();
console.log(worker instanceof Worker); // true - polymorphism
worker.print(); // hardWorking
```

자식은 부모를 대체할 수 있다.
hardWorker의 부분 집합이 Worker.

> `대체가능성` > **확장된 객체는 대상 클래스를 대체할 수 있다.**<br> > `내적일관성` > **어떤 상황에서도 객체가 생성될 때의 타입 유지**

## Polymorphism = Substitution & Internal identity

확장된 객체는 원본으로 대체 가능<br>
생성 시점의 타입이 내부에 일관성 있게 참조됨.

## Polymorphism of Prototype

```
Worker
  |
__proto__ (= HardWorker prototype)


HardWorker class(function) (constructor __proto__)
        |
HardWorker prototype
       |
constructor __proto__ run()
```

**내적일관성**

```
* 최상위 객체까지 가면 __proto__ null이 됨
* constructor는 생성자 함수를 가리킴
* 메서드 실행 시 체인을 타고 이동
```

**대체가능성**

```
A instancof B
constructor가 일치하는가?
일치하지 않으면 proto를 따라가면서 비교
```

#### 객체지향 언어인가? = Polymorphism이 언어차원에서 지원되면 객체 지향이다.

## 3. Object Essentials

```js
// es2020
const EssentialObject = class {
  #name = "";
  #screen = null;
  constructor(name) {
    this.#name = name;
  }
  camouflage() {
    this.#screen = (Math.random() * 10).toString(16).replace(".", "");
  }
  get name() {
    return this.#screen || this.#name;
  }
};
```

## Hide State

객체의 변수가 private인가?<br>
데이터 은닉이 가능한가?

> **상태를 외부에 보여주지 않는다**<br> > **외부에 노출된 상태는 값으로 간주될 수 있다.**

```js
  #name = '';
  #screen = null;
```

## Encapsulation

메서드를 추상화된 상태로 노출함.

> 은닉화는 상태에 대한 은닉임.<br> 둘을 혼동하지 말 것.

```
  get name() {
    return this.#screen || this.#name;
  }
```

**둘 중 하나라도 만족하지 못하면, 이것은 객체지향이 아니다. <br>언제라도 값 컨텍스트로 변할 수 있는 여지가 있기 때문이다.**

> 여유를 확보하고 항상 마음의 도를 닦자.

## 객체지향의 본질 정리

- Encalsulation of Functionality
  > setter, getter를 함부로 노출하는 것은 의미가 없음 <br>
  > ex) setAge를 그냥 노출하는 경우, 이것은 본질적으로 고민이 부족한 것임. 값처럼 사용하게 됨.<br>
  > setAge가 필요한 이유를 생각하고 메서드를 만들자.<br>
  > setAdult, setChild 등등..<br>
  > 메서드를 연속적으로 호출해서 사용해야하는 경우 캡슐화에 실패한 것.
- Maintenance of State
  > 내부의 상태 관리를 내부가 아닌 외부에 위임하는 순간 이것은 상태가 아니다.<br>
  > 내가 내 상태를 관리해야함.<br>
  > 내 지갑을 책상에 두고, 그냥 맘대로 관리하라고 하는 것과 같음..

이것이 객체지향의 어려움이다. <br>
모든 참여 객체가 위 두가지를 만족하고 있어야만 하기 때문이다.

### Isolation of change

객체지향을 이상적으로 설계 시, 변화에 대한 격리를 이룰 수 있다.<br>
그것이 개발자가 해야하는 일이고 프로그램이 지향하는 목표다.

위 두가지 특징을 만족하는 객체를 만든다는 것은 객체 별로 격리벽을 세워서 그 변화를 최소화한다는 것을 의미한다. <br>
프로그램은 내결함성을 갖고 있기 때문에, 이러한 실수가 쉽게 눈에 띄지 않는다.<br>
실제로 에러를 감지할 수 있을 때는 이미 많은 부분이 오염이 된 상태이다.

> OTL.. 모든 코드에 try - catch

## 알려진 기본 설계요령

### SOLID 원칙

#### 1. SRP Single Responsibility 단일 책임

> 일반적으로 일관성이 있는데, 이 코드를 고쳐야한다면 그 수정 원인은 하나 밖에 없어. <br>
> 연관 검색어 - 산탄총 수술(shotgun surgery)

#### 2. OCP Open Closed 개방폐쇄

> Open은 extends 혹은 implement의 의미<br>
> Closed의 의미는 새로운 이슈 발생 시, 대상 객체를 수정해서 고치는 것이 아닌 새로운 객체가 해결하도록 할 것

#### 3. LSP Liskov Substitusion 업캐스팅 안전

> 추상층의 정의가 너무 구체적이면 구상층의 구현에서 모순이 발생한다.<br>
> ex) <br>
> 추상층 - 생물 / 숨을 쉰다, 다리로 이동한다.<br>
> 구상층 - 사람, 타조 ok! / 아메바, 독수리 고래 no!<br><br> > **리스코프 치환 원칙 위배! (다리를 이동한다를 지우자)**<br>
> 추상층에선 숨을 쉰다만 포함 / 다리이동은 인터페이스로 분리하는 식으로 해결<br>

#### 4. ISP Interface Segregation 인터페이스 분리

```
객체 나 / 상태 돈 / 돈 주기, 월급 주기, 용돈 주기
> 모듈 와이프 - 돈 내놔
> 모듈 직원 - 월급 줘
> 모듈 아들 - 용돈 줘
```

**1) 소유(위임)를 사용한다.**

```
     객체 나 / 상태 돈
            |
분신 남편 / 분신 아빠 / 분신 사장
> 모듈 와이프 - 돈 내놔
> 모듈 직원 - 월급 줘
> 모듈 아들 - 용돈 줘
```

**2) 인터페이스를 분리한다**

```
객체 나 / 상태 돈
인터페이스 남편 / 인터페이스 아빠 / 인터페이스 사장
> 모듈 와이프 - 돈 내놔
> 모듈 직원 - 월급 줘
> 모듈 아들 - 용돈 줘
```

너무 구체화시켜서 만들어버리면, 하나를 바꾸려고 해도 나머지 부분에도 영향이 갈 수 있다.

#### 5. DIP Dependency Inversion 다운캐스팅금지

> 의존성 역전 금지
> 의존성은 부모 쪽으로 흘러야한다.

고차원의 모듈은 저차원의 모듈에 의존하면 안된다.<br> 이 두 모듈 모두 추상화된 것에 의존해야 한다.

### 추가

- DI Dependency Injection 의존성 주입(IoC Inversion of Control 제어역전)
- DRY Don't Repeat Yourself 중복방지
- Hollywood Principle 의존성 부패방지 - 물어보지 말고 요청하라 - 시간 날 때, 연락 좀 줘. O - 연락처 좀 줘 X - 원전 같은 critical system을 생각하라 - 이 원칙을 지키고 있지 않을 경우, 데이터 은닉이나 메서드의 캡슐화를 깨먹고 있을 가능성이 높다.
- Law of demeter 최소 지식 - 너무 많이 알고 있으면, 다른 객체의 상태값이 바뀌었을 때 잘못 될 가능성이 크다. - xxx.xxx.xxx.xxx 이런식으로 호출해선 안됨 (의존성이 매우 복잡해짐) - classA.methodA의 최대지식 한계 - classA의 필드 객체 - methodA가 생성한 객체 - methodA의 인자로 넘어온 객체
  - **Train Wreck(열차전복)**

## Message

### SRP를 준수하는 객체망(Object Network)이 문제를 해결

복잡한 이슈를 해결하기 위해 마치 링크드리스트처럼, 내가 할 일만 처리하고 다른 객체에게 위임하는 행위가 반복.<br>
설계는 조직의 상황 및 환경을 보고, 잘 도입하자.

단일 책임 원칙을 준수하는 객체에게 책임 이상의 업무를 부여하면?

> 1. 만능 객체가 되려한다.
> 2. 다른 객체에게 의뢰한다.

다른 객체에게 의뢰하는 것 = 다른 객체에게 메세지를 보내는 것

> 1. 메세지 - 의뢰할 내용
> 2. 오퍼레이션 - 메시지를 수신할 객체가 제공하는 서비스 (메서드가 외부에 노출된 형태)
> 3. 메소드 - 오퍼레이션이 연결될 실제 처리기 (오퍼레이터를 구체적으로 매핑한 것을 메소드라 함)

**동적 바인딩**
오퍼레이션과 메소드를 구분하는 것이 중요한 이유.<br>
사실 hardWorking.run()을 호출할 때, 실제로 실행되는 것이 무엇일지는 외부에선 알 수 없음.

## Dependency

### 의존성의 종류

의존성이 심할 수록, 영향을 받을 곳이 많음.

> ex) 서버 개발자가 안식 휴가 가서 개발을 할 수가 없어.
>
> **객체 지향이 어려운 이유**
> 너무 많이 알아도 안되고 (만능객체 탄생)
> 너무 적게 알아도 안됨 (누가 휴가가면 일 못해).
> => 결론: 퇴사

#### 1. 객체의 생명 주기 전체에 걸친 의존성

- 상속(extends)
- 연관(association)
  > 상속 -> 연관 으로 변환하려는 것. 소유로 바꾸려는 것

#### 2. 각 오퍼레이션 실행 시 임시적인 의존성

- 의존(dependency) / 메서드 단위로만 존재. 호출할 떄만 생기고 실행이 끝나면 종료

#### 의존성이 높으면 생기는 현상

1. 수정 여파 규모 증가
2. 수정하기 어려운 구조 생성
   > 전체 if...else
   > 코드를 파악하지 못해서가 아닌 여파가 어디까지인지 알 수 없어서.
3. 순환 의존성
   > a -> b, b -> c, c -> a 인 경우, a가 c를 알고 있는 것과 같다.

## DIP / Dependency Inversion

어떠한 경우에도 다운캐스팅 금지
폴리모피즘(추상인터페이스) 사용

```js
const Manager = class {
  #workers;
  constructor(...workers) {
    if(workers.every(w => instatnceof Worker)) this.#workers = workers;
    else throw 'invalid workers'
  }
  doWork() {
    this.#workers.forEach(w=>w.run())
  }
}

const manager = new Manager(new Worker(), new Hardworker());
manager.doWork();
```

Worker를 통해 인스턴스를 인식했기 때문에, Worker로 부터 만들어진 extension들을 사용할 수 있음.
OCP 달성할 수 있게 됨.

**구상 클래스가 아닌 추상 클래스에 의존성을 갖고 있게 됨.**

## Inversion of Control (제어역전)

DIP는 IOC를 달성하기 위한 재료.
객체 지향의 마지막 지점.

### 제어역전의 개념과 필요성

1. Control = `flow control`(흐름제어)
2. 광의의 흐름 제어 = 프로그램 실행 통제
3. 동기흐름제어, 비동기흐름제어 등

inversion은 역전보다는 위임과 유사한 의미를 가짐.

> 택시를 타면 기사가 운전해줌. <br>
> 하지만 외부에서 보면 뛰어난 운전을 하는 것과 유사한 의미가 됨.

#### 문제점

1. 흐름 제어는 상태와 결합하여 진행됨
2. 상태통제와 흐름제어 = 알고리즘
3. 변화에 취약하고 구현하기도 어려움
   > 세계의 구루들이 메서드를 10줄 미만으로 추천하는 이유..<br>
   > 너네는 안돼..

#### 제어 역전의 예

> 어려운 건 사수 시키고,<br>
> 잡스러운건 너가 해.<br>
> 안되면 사수가 안해줬다고 해.

#### 대안

1. 제어를 추상화하고
2. 개별 제어의 차이점만 외부에서 주입받는다.

일반화라는 개념이 필요하게 됨.

> 연역적 추리의 필요성. (현상 -> 원리)
> 귀납법 사고의 필요성. (원리 -> 현상)

Step1

```js
const Renderer = class {
  #base = null;
  constructor(baseElemeent) {
    this.#base = baseElement;
  }
};
```

Step2

```js
const Renderer = class {
  #view = null;
  #base = null;
  constructor(baseElemeent) {
    this.#base = baseElement;
  }
  set view(v) {
    if (v instanceof View) this.#view = v;
    else throw `invalide :${v}`;
  }
};

const View = class {};
```

Step3

```js
const Renderer = class {
  #view = null;
  #base = null;
  constructor(baseElemeent) {
    this.#base = baseElement;
  }
  set view(v) {
    if (v instanceof View) this.#view = v;
    else throw `invalide :${v}`;
  }
  render(data) {
    const base = this.#base,
      view = this.#view;
    if (!base || !view) throw "no base or view";
    let target = base.firstElementChild;
    do base.removeChild(target);
    while ((target = target.nextElementSibling));
    base.appendChild(view.getElement(data));
    view.initAni();
    viewe.startAni();
  }
};

const View = class {
  getElement(data) {
    throw "override";
  }
  initAni() {
    throw "override";
  }
  startAni() {
    throw "override";
  }
};
```

> 라이브러리는 제어역전을 하지 않음.
> 모든 프레임워크는 IoC 프레임워크다.

## 제어역전 실제 구현

**전략 패턴 & 템플릿 메소드 패턴 < 컴포지트 패턴 < 비지터 패턴**<br>
보다 넓은 범위의 제어역전을 실현함

**추상 팩토리 메소드 패턴**<br>
메서드를 호출하는 것이 아닌 패턴을 통해서 만들어주는 팩토리를 사용한다.

이미 만들어진 객체의 행위를 제어역전에 참여시킬 수 있지만 참여할 객체 자체를 생성할 수 없음.<br>
참영할 객체를 상황에 맞게 생성하고 행위까지 위임하기 위해 추상팩토리 메소드를 사용함

## 결론

객체지향을 배우는 이유 > 격리구간 > 의존성관리

## 잡담

> 컴퓨터 사이언스는 이과 분야 중 유일하게 공리가 없다.<br>
> 패러다임 shift가 발생하지 않는다.<br>
> 개인을 배제하고, 합리성을 찾는 훈련을 하는 것이 중요하다.
