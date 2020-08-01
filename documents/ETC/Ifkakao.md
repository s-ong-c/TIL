# IF KAKAO 2019 후기...

![ifkakao  image](../img/ifkakao/ifkakao.png "ifkakao image")

## `React : 그것마저도 정해주마`

> - 컴포넌트 코드를 일관성 있게 작성하고 싶어요.
> - 기존 클래스형 컴포넌트를 훅으로 변경해야 할까요?
> - 서버사이드 렌더링을 해야할까요?
> - 렌더 함수 안에서 새로운 객체를 생성해도 되나요?
> - 리덕스를 써야하나요?
> - 주위에서 타입스크립트 얘기가 많이 들리는데요, 정적 타입을 도입하는 게 좋을까요?

```s
1) 코드컨벤션을 정하자 (eslint , prettierrc)
    `협업에 있어서 코드 규칙을 적용하여 혼선을 방지하자`
2) hooks 을 사용하면 코드가 짧아지고 유지보수 편해진다 (대세를 따르자)
3) SSR 은 복잡하기 떄문에 되도록이면 안쓰는 방향으로 하지만 필요하다면 필수
4) 성능 신경은 서비스를 만들고 해도 늦지 않다  성능까지 신경쓰면서 하면 좋겠지만 그것은 개발에 효율을 떨어뜨린다.
5) 렌더함수안에 새로운객체를 생성해도 된다. 그렇게 쓰고 있다.
6) 리덕스는 안전빵이면서 이미 완벽한 lib 이다.
7) 유지보수 또는 6개월 이상 유지보수가 필요한거라면 그냥 타입스크립트 쓰자
```

## `FE 개발자 브라우저 확장하기`

👨🏻‍💻Paint API

👨🏻‍💻Layout Cloud API

👨🏻‍💻Animation 3D carousel

👨🏻‍💻Audio NoiseMixer

### `👍Advantages`

- 쉬운 메뉴얼
- ❗️성능 향상
- 명확한 역할 분리
- 웹 발전에 기여

### `❗️브라우저를 확장하는 일이란`

표준화 개발자 주도적 진행

```
개발자가 새로운 API 제안
해서 즉시 사용할 수 있는 형태로 제안

커뮤니티들의 피드백으로 인해 효과입증
후에 안정화 과정을 거치고 웹표준에 무리없이 추가
```

## `프론트엔드 기술로 조직에 기여하기`

### 💪🏻`프론트엔드 기술로 조직에 기여하기`

👨🏻‍💻필요하는 것을 발견하고 일로 만들어보기
👨🏻‍💻단계가 복잡한 일은 단순화해보기 ( 동료에 손발을 편하게)
👨🏻‍💻가끔은 생각지 못했던 깜짝선물을 주기
👨🏻‍💻일하는 문화 개선에 직접 참여해보기

- 카카오뱅크 유연근로제 서비스 - “WorkOn”
- 고객센터 신분증 검수업무를 게임처럼 - “OCR Slayer”
- 헤매지말고 3D로 찾아보자! 카카오뱅크 오피스 검색서비스 - “Floor!"

> 가볍게 들으면서 가장 재밌으면서 충격적인 세션
> 가장 주제와 맞는 느낌이였다 세상 만사가 개발거리

`가장충격적인 프로젝트`
![ifkakao  image](../img/ifkakao/kakao5.png "ifkakao image")

3D 모델링해서 개발에 도입해서 만든 Kakaobank Floor

## 그외에

### `👨🏻‍💻카카오톡 적용 사례를 통해 살펴보는 카카오 클라우드의 Kubernetes as a Service`

    서비스 중단 없는 쿠버네티스 기반 컨테이너 클라우드 운영 (dennis.hong)
    * 카카오의 Kubernetes as a Service, DKOSv3 소개
    * 사내 인증과 통합된 쿠버네티스 멀티 클러스터 CI/CD 서비스 제공
    * 자동화된 쿠버네티스 클러스터의 라이프사이클 관리 기능을 통한 무중단 운영
    * Custom Controller, Custom Resource Definition 을 통한 On-premise 환경에서의 쿠버네티스와 물리 인프라 자원 통합

    - 서비스 중단 없는 쿠버네티스 기반 카카오톡 백엔드 배포 및 운영 (greg.47)
    * 카카오톡 메시징 운영
    * 카카오톡 메시징 배포의 어제와 오늘 그리고 내일
    * Redis와 Kubernetes 그리고 카카오톡

### `클라우드 환경에서의 Serverless Service 개발`

    - Serverless 아키텍쳐
    - 보안 및 데이터 처리
    - 적용 사례 : 카카오게임 사전예약 서비스

## Refer

[https://if.kakao.com/program](https://if.kakao.com/program)
![ifkakao  image](../img/ifkakao/kakao4.png "ifkakao image")