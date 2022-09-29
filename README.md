# 프로젝트

서비스 링크 : https://dashboard-dnd-gj79.vercel.app/

## 스택

- Next.js
- TypeScript
- RTK (Redux Tool Kit)
- Tansk Query
- Emotion

## 구조

```
├─components
│  ├─Common
│  ├─Dashboard
│  │  └─SubTotal
│  │      ├─Context
│  │      └─helper
│  └─GridLayout
│      └─helper
├─constants
├─hooks
│  └─query
├─pages
├─store
│  └─modules
├─styles
├─types
└─utils
    ├─fetcher
    └─query
```

## 기능

|summaryUnique와 summaryTotal|Pie Chart|
| :----------: | :-----------: |
| <img width="554" alt="image" src="https://user-images.githubusercontent.com/78518132/192916992-691d0091-415e-4d0f-b186-a087d8f992c3.png"> <img width="556" alt="image" src="https://user-images.githubusercontent.com/78518132/192917105-1cc522ed-4eee-4e0e-93c2-ebcafcb87658.png">  |<img width="553" alt="image" src="https://user-images.githubusercontent.com/78518132/192917791-48ee9843-6a91-4d11-82f2-5bacb35763b3.png">|
|모든 Endpoint에서 데이터를 받을 수 있도록 useEventQuery 커스텀 훅을 생성했습니다. summary에서 summarySum 함수를 사용하고 있습니다. 프로젝트의 모든 박스는 공통 컴포넌트르 이용합니다.  |Event3 Endpoint에서 데이터를 받아 Pie 차트를 그리고 있습니다. 차트의 조각마다 Color 설정 등 커스터마이징을 했습니다.|

<br>

|summaryChart|
| :----------: |
|<img width="1110" alt="image" src="https://user-images.githubusercontent.com/78518132/192918068-99709822-c40b-45d5-b1ab-f72a5f4a7ca3.png">|
|summary 데이터를 이용하여 막대와 선 차트를 그리고 있습니다. 상단의 작은 차트는 전체 데이터를 기반한 차트입니다. 하단에 두 개의 차트는 최근 30일의 데이터를 기반하여 출력합니다. 차트의 커스텀, Data Transform, 정렬 등 사용합니다.|

<br>

|subTotal(부분 합)|부분 합 정렬|
| :----------: | :-----------: |
| ![sub](https://user-images.githubusercontent.com/78518132/192918514-37c55db0-7621-4311-a076-8bcb0c6673a7.gif)|![정렬](https://user-images.githubusercontent.com/78518132/192918997-9ee33d8e-591c-49e8-b066-690f202ab56a.gif)|
|Event4 Endpoint에서 전달받은 2차원 배열의 rows 데이터를 이용하여 부분합을 구현했습니다. groupBy하기 위해 reduce를 이용하여 Data Transform을 수행합니다. 부분 합에서 사용하는 공통 컴포넌트 ItemList를 이용하여 UI를 출력하고 있습니다. |부분합에서 Sum 버튼을 클릭하면, 화살표 방향이 반전이 되며 Desc, Asc 정렬을 결정합니다. 버튼의 상태를 ContextAPI로 관리하며, 정렬 여부에 따라 country region city에서 상황에 맞게 정렬합니다.|

<br>


|DND, Resize, 위치 및 사이즈 저장|
| :----------: |
|![dnd](https://user-images.githubusercontent.com/78518132/192919892-70c8e067-9bb4-48fa-90ae-1e96c9685bcc.gif)|
|DND, Resize, Grid UI를 위해 react-grid-layout 라이브러리를 사용합니다. 박스마다 현재 위치 및 사이즈 크기를 유저가 설정한대로 유지하기 위해 LocalStorage를 사용합니다.|
