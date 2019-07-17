# Vue JS Spinner 적용하기



##  Vue js Spinner 라이브러리

[vue-spinner](https://github.com/greyby/vue-spinner)


`UI 매끄러움을 표현하기 사용!!!`


## Vue spinner #1 (설치)

1. 설치
[NPM-vue-spinner](https://www.npmjs.com/package/vue-spinner)<br>

`yarn add vue-spinner`

## Vue spinner #2 (HOW)

```html
<pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
<grid-loader :loading="loading" :color="color" :size="size"></grid-loader>
<clip-loader :loading="loading" :color="color" :size="size"></clip-loader>
<rise-loader :loading="loading" :color="color" :size="size"></rise-loader>
<beat-loader :loading="loading" :color="color" :size="size"></beat-loader>
<sync-loader :loading="loading" :color="color" :size="size"></sync-loader>
<rotate-loader :loading="loading" :color="color" :size="size"></rotate-loader>
<fade-loader :loading="loading" :color="color" :height="height" :width="width"></fade-loader>
<pacman-loader :loading="loading" :color="color" :size="size"></pacman-loader>
<square-loader :loading="loading" :color="color" :size="size"></square-loader>
<scale-loader :loading="loading" :color="color" :height="height" :width="width"></scale-loader>
<skew-loader :loading="loading" :color="color" :size="size"></skew-loader>
<moon-loader :loading="loading" :color="color" :size="size"></moon-loader>
<ring-loader :loading="loading" :color="color" :size="size"></ring-loader>
<bounce-loader :loading="loading" :color="color" :size="size"></bounce-loader>          
<dot-loader :loading="loading" :color="color" :size="size"></dot-loader>
```
## Vue spinner #3 (적용하기)
```html
<template>
<div>
   <div class=“menu” v-if=“loading”>  // 스피너가 필요한 부분
     <clip-loader :loading=“loading” :color=“‘#5dc596’” size=“2rem” class=“float-center”></clip-loader>
   </div>
   <div v-else>
      // 스피너가 끝나고 보여줄 정보
       .....
</template>

<script>
/**
 *  설치한 vue-spinner commponent 가져오기
 */
import ClipLoader from “vue-spinner/src/ClipLoader”;

export default {
    data() {
        return {
            loading: true
        }
    },
    components: {
        ClipLoader, // 컴포넌트 등록
    }
    methods:{
        ...mapActions(['list']),
        dataList(){
            // 데이터를 받는 로직
            // ex) actions(['list]) 한다고 했을떄
            this.actions(['list']).then({data} => {
                console.log(data);
                // 데이터를 다 받았다면  
                this.loading = false  // 스피너 동작을 멈춰준다.
            })
        }
    }
}
</script>
```
## 결과

### Spinner 실행중
<Spinner />

### Spinner 완료
<List />
## References
<br>

> - [vue-spinner](https://github.com/greyby/vue-spinner)