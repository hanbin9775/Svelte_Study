// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
  {
    title: "Add Data",
    slug: "add",
    code: `<pre>
    &lt;script&gt; 
      let name = "world"; 
    &lt;/script&gt; 
      
    &lt;h1&gt;Hello &#123;name&#125;&lt;/h1&gt;
    </pre>`,
    result: `<h1>Hello world</h1>`,
    memo: `script 태그 내에 변수를 선언. 해당 변수는 svelte 파일내에서 {[변수명]} 으로 사용 가능. `,
  },
  {
    title: "Styling",
    slug: "styling",
    code: `<pre>
    &lt;style&gt; 
      p {
        color: red;
      }
    &lt;/style&gt; 
      
    &lt;p&gt;Hello Paragraph&lt;/p&gt;
    </pre>`,
    result: `<p style="color: red">Hello Paragraph</p>`,
    memo: `style 태그 내에서 선택자에 대한 스타일 선언. css 문법과 동일. </br>
    각 svelte 파일에 대한 css 선언은 scoped 속성을 가지기 때문에 해당 파일의 컴퍼넌트에만 영향을 끼친다.`,
  },
  {
    title: "Nested Component",
    slug: "nested-component",
    code: `<pre>
    //Nested.svelte
    &lt;p&gt;Nested Paragraph&lt;/p&gt;

    ========================================

    //App.svelte
    &lt;script&gt; 
      import Nested from './Nested.svelte'
    &lt;/script&gt; 
     
    &lt;style&gt; 
      p {
        color: red;
      }
    &lt;/style&gt; 
    
    &lt;p&gt;Hello Paragraph&lt;/p&gt;
    &lt;Nested/&gt;
    </pre>`,
    result: `<p style="color: red">Hello Paragraph</p>
    <p>Nested Paragraph</p>`,
    memo: `컴포넌트를 분리해서 작성하고 가져오는 방법. script 태그에서 import로 불러오고 사용하면 된다. </br>
    이렇게 가져온 컴포넌트는 style이 겹치지 않는다. Hello Paragraph 만 color: red; 가 적용된 것을 볼 수 있다.
    `,
  },
];

posts.forEach((post) => {
  post.code = post.code.replace(/^\t{3}/gm, "");
  post.result = post.result.replace(/^\t{3}/gm, "");
});

export default posts;
