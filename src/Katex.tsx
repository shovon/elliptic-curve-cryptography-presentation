import katex from "katex";

export default function ({ latex }: { latex: string }) {
	return (
		<div
			dangerouslySetInnerHTML={{
				__html: katex.renderToString(latex),
			}}
		></div>
	);
}
