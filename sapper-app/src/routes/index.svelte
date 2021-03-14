<script>
	import successkid from "images/successkid.jpg";
</script>

<style>
	h1,
	figure,
	p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Study Sapper & Svelte</title>
</svelte:head>

<h1>Let's Study Svelte & Sapper</h1>

<figure>
	<img alt="Success Kid" src={successkid} />
	<figcaption>This website is about...</figcaption>
</figure>

<p>
	Svelte를 공부하고 간략하게 정리한 내용을 각 Svelte 페이지로 보여주고
	Sapper로 sever-side-rendering
</p>
