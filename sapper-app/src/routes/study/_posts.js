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
];

posts.forEach((post) => {
  post.code = post.code.replace(/^\t{3}/gm, "");
  post.result = post.result.replace(/^\t{3}/gm, "");
});

export default posts;
