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

But it turns out that we can achieve a similar programming model without using virtual DOM — and that's where Svelte comes in. (그래서 Svelte 왜 쓰냐고...)
