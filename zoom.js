var canvas = d3.select("canvas"),
	context = canvas.node().getContext("2d"),
	width = canvas.property("width"),
	height = canvas.property("height"),
	radius = 2.5;

var points = d3.range(2000).map(phyllotaxis(10)),
	fx = points[0][0],
	fy = points[0][1];

var zoom = d3.zoom()
	.scaleExtent([1 / 2, 96])
	.on("zoom", zoomed);

canvas
	.call(zoom)
	.call(zoom.transform, d3.zoomIdentity);

function zoomed() {
	var t = d3.zoomIdentity
		.translate(width / 2, height / 2)
		.scale(d3.event.transform.k)
		.translate(-fx, -fy);

	context.save();
	context.clearRect(0, 0, width, height);
	context.translate(t.x, t.y);
	context.scale(t.k, t.k);
	drawPoints();
	context.restore();
}

function drawPoints() {
	context.beginPath();
	points.forEach(drawPoint);
	context.fill();
}

function drawPoint(point) {
	context.moveTo(point[0] + radius, point[1]);
	context.arc(point[0], point[1], radius, 0, 2 * Math.PI);
}

function phyllotaxis(radius) {
	var theta = Math.PI * (3 - Math.sqrt(5));
	return function(i) {
		var r = radius * Math.sqrt(i), a = theta * i;
		return [
			width / 2 + r * Math.cos(a),
			height / 2 + r * Math.sin(a)
		];
	};
}