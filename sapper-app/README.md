# src

## client.js

```
import * as sapper from '@sapper/app';

sapper.start({
	target: document.querySelector('#sapper')
});
```
앱에서 필수적으로 선언해주어야 하는 sapper method.

## server.js

3가지 조건을 만족하는 Express, Polka app
* it should serve the contents of the static folder, using for example 
* it should call app.use(sapper.middleware()) at the end, where sapper is imported from @sapper/server
* it must listen on process.env.PORT

## service-worker.js

Service workers act as proxy servers that give you fine-grained control over how to respond to network requests. 

## template.html

서버 응답을 위한 템플릿 파일. 아래의 문구들을 해당 태그들로 바꿔줄 것이다.
* %sapper.base% — a <base> element (ex: <base href="/">)
* %sapper.styles% — critical CSS for the page being requested
* %sapper.head% — HTML representing page-specific <head> contents, like <title>
* %sapper.html% — HTML representing the body of the page being rendered
* %sapper.scripts% — script tags for the client-side app
*  — CSP nonce taken from res.locals.nonce

## routes

실제 route할 페이지들에 대한 파일들의 상위 디렉토리

## static

fonts, images 담아두는 폴더
Sapper doesn't serve these files — you'd typically use sirv or serve-static for that — but it will read the contents of the static folder so that you can easily generate a cache manifest for offline support
