var spinner;

function startSpinner()
{
	var opts = {
		lines: 13, // The number of lines to draw
		length: 7, // The length of each line
		width: 4, // The line thickness
		radius: 10, // The radius of the inner circle
		corners: 1, // Corner roundness (0..1)
		rotate: 0, // The rotation offset
		color: '#000', // #rgb or #rrggbb
		speed: 1, // Rounds per second
		trail: 60, // Afterglow percentage
		shadow: false, // Whether to render a shadow
		hwaccel: false, // Whether to use hardware acceleration
		className: 'spinner', // The CSS class to assign to the spinner
		zIndex: 2e9, // The z-index (defaults to 2000000000)
		top: 'auto', // Top position relative to parent in px
		left: 'auto' // Left position relative to parent in px
	};
	var target = document.getElementById('posts');
	spinner = new Spinner(opts).spin(target);
	spinner.el.style.marginTop = "50vh";
}

function stopSpinner()
{
	spinner.stop();
}

function createPost(postData)
{
	var post = document.createElement("div");
	post.setAttribute("class", "post");
	var dot = document.createElement("div")
	dot.setAttribute("class", "dot");
	var redot = document.createElement("div");
	redot.setAttribute("class", "redot");
	redot.innerHTML = Math.floor(postData.score);
	var image = document.createElement("img")
	image.setAttribute("src", "images/redot.svg");
	image.setAttribute("width", "48");
	image.setAttribute("height", "48");
	dot.appendChild(image);
	dot.appendChild(redot);
	var title = document.createElement("h1");
	var title_a = document.createElement("a");
	title_a.setAttribute("href", postData.url);
	title_a.innerHTML = postData.title;
	title.appendChild(title_a);
	var timeago = document.createElement("h2");
	timeago.innerHTML = $.timeago(postData.created_at);
	var comments = document.createElement("h3");
	comments.innerHTML = postData.comment_count + " Comments"
	post.appendChild(dot);
	post.appendChild(title);
	post.appendChild(timeago);
	post.appendChild(comments);
	return post;

}

function insertPosts(data)
{
	stopSpinner();
	for (var i = 0; i < data.contents.length; i++) {
		var post = createPost(data.contents[i]);
		$("#posts").append(post);
	}
}

function getPosts()
{
	startSpinner();
	$.ajax({
		url: "http://anyorigin.com/get/?url=http%3A//thelist.io/posts.json",
		dataType: "jsonp"
	}).done(insertPosts);
}

window.onload = function() {
	getPosts();
};
