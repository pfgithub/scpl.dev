function autosize(t){t.setAttribute("rows", Math.max(t.value.split(`\n`).length, 5));}

Array.from(document.getElementsByClassName("code")).forEach(el => {
	let t = el.children[0];
	let tryitbtn = el.children[2];
	autosize(t);
	t.removeAttribute("disabled");
	t.addEventListener("keyup", () => {
		autosize(t);
		tryitbtn.setAttribute("href", "https://editor.scpl.dev/?scpl="+encodeURIComponent(t.value))
	});
})
