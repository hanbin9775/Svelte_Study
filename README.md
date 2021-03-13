# Svelte_Study

# Why we should use Svelte

## 과연 Virtual Dom이 진짜 빠른걸까?

참고 : https://svelte.dev/blog/virtual-dom-is-pure-overhead

### 의문점 제시

The virtual DOM operations are in addition to the eventual operations on the real DOM.

The original promise of React was that you could re-render your entire app on every single state change without worrying about performance. 
In practice, I don't think that's turned out to be accurate. 
If it was, there'd be no need for optimisations like shouldComponentUpdate (which is a way of telling React when it can safely skip a component).

Even with shouldComponentUpdate, updating your entire app's virtual DOM in one go is a lot of work. 
A while back, the React team introduced something called React Fiber which allows the update to be broken into smaller chunks. 
This means (among other things) that updates don't block the main thread for long periods of time, 
though it doesn't reduce the total amount of work or the time an update takes.

### Virtual Dom 오버헤드

* DOM, Virtual DOM 비교 알고리즘

* 컴포넌트의 상태값(state)의 불필요한 연산

### Virtual DOM 왜 씀?

Virtual DOM is valuable because it allows you to build apps without thinking about state transitions, with performance that is generally good enough. That means less buggy code, and more time spent on creative tasks instead of tedious ones.

### Svelte?

But it turns out that we can achieve a similar programming model without using virtual DOM — and that's where Svelte comes in. 

# Sapper Study

### 출처 https://svelte.dev/blog/sapper-towards-the-ideal-web-app-framework

## Ideal Node.js web application framework

* It should do server-side rendering, for fast initial loads and no caveats around SEO
* As a corollary, your app's codebase should be universal — write once for server and client
* The client-side app should hydrate the server-rendered HTML, attaching event listeners (and so on) to existing elements rather than re-rendering them
  * (hydrate는 client 단에서 sever-rendered html에 javascript를 이용한 상태관리, 반응성 기능들을 추가하는 작업이다. 위에서 말한 것 처럼 event listener들을 추가하는 작업 등...) 
* Navigating to subsequent pages should be instantaneous
* Offline, and other Progressive Web App characteristics, must be supported out of the box
  * (Progressive Web App은 브라우저를 사용해 native app 경험을 주는 형태의 웹 어플리케이션: PWA) 
* Only the JavaScript and CSS required for the first page should load initially. That means the framework should do automatic code-splitting at the route level, and support dynamic import(...) for more granular manual control
* No compromise on performance
* First-rate developer experience, with hot module reloading and all the trimmings
* The resulting codebase should be easy to grok and maintain
* It should be possible to understand and customise every aspect of the system — no webpack configs locked up in the framework, and as little hidden 'plumbing' as possible
* Learning the entire framework in under an hour should be easy, and not just for experienced developers

## Next?

사실 위에서 소개한 내용은 이상적인 Node.js web application framework의 특징이다. 그리고 Next.js는 위 이상에 매우 가깝다. 하지만 완벽하진 않다.

* Next uses something called 'route masking' to create nice URLs (e.g. /blog/hello-world instead of /post?slug=hello-world). This undermines the guarantee about directory structure corresponding to app structure, and forces you to maintain configuration that translates between the two forms
* All your routes are assumed to be universal 'pages'. But it's very common to need routes that only render on the server, such as a 301 redirect or an  that serves the data for your pages, and Next doesn't have a great solution for this. You can add logic to your server.js file to handle these cases, but it feels at odds with the declarative approach taken for pages
* To use the client-side router, links can't be standard <a> tags. Instead, you have to use framework-specific <Link> components, which is impossible in the markdown content for a blog post such as this one, for example
* 그리고 Next는 용량이 크다. The simplest possible Next app — a single 'hello world' page that renders some static text — involves 66kb of gzipped JavaScript. Unzipped, it's 204kb, which is a non-trivial amount of code for a mobile device to parse at a time when performance is a critical factor determining whether or not your users will stick around. And that's the baseline.

## Svelte & Sapper의 등장

Svelte는 UI framework로써 javascript compiler의 역할만 하기 때문에 (virtualDOM 메모리나 성능 고려 x) Svelte page를 routing 하는 Sapper 또한 훨씬 가볍다.

* The same 'hello world' app that took 204kb with React and Next weighs just 7kb with Sapper.
* [Real World App](https://github.com/sveltejs/realworld) costs 132.7kb (39.9kb zipped), which is significantly smaller than the reference React/Redux implementation at 327kb (85.7kb), 

## Trade-Off
 
* 풍부한 React & Next 생태계
* JSX의 유연함 (Svelte의 template 언어와 대비)


## 이 Repository의 목표

Svelte의 주요 기능을 확인할 수 있는 페이지로 이루어진 웹사이트 구현. 
Sapper로 server-side-rendering을 하고 firebase로 deploy해서 간단한 Svelte Tutorial Website를 만들어 볼 예정이다!
