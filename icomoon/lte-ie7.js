/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-dribbble' : '&#xe000;',
			'icon-forrst' : '&#xe001;',
			'icon-apple' : '&#xe002;',
			'icon-quill' : '&#xe003;',
			'icon-droplet' : '&#xe004;',
			'icon-fire' : '&#xe005;',
			'icon-link' : '&#xe006;',
			'icon-checkmark' : '&#xe007;',
			'icon-checkmark-2' : '&#xe008;',
			'icon-github' : '&#xe009;',
			'icon-html5' : '&#xe00a;',
			'icon-spinner' : '&#xe00b;',
			'icon-radio-checked' : '&#xe00c;',
			'icon-radio-unchecked' : '&#xe00d;',
			'icon-embed' : '&#xe00e;',
			'icon-code' : '&#xe00f;',
			'icon-css3' : '&#xe010;',
			'icon-tent' : '&#xe011;',
			'icon-mail' : '&#xe012;',
			'icon-paypal' : '&#xe013;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};