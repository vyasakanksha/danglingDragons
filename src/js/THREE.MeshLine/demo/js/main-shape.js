'use strict'

var container = document.getElementById( 'container' );

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
			var resolution = new THREE.Vector2( window.innerWidth, window.innerHeight );
var controls = new THREE.OrbitControls( camera, renderer.domElement );
var clock = new THREE.Clock();

var colors = [
	0xed6a5a,
	0xf4f1bb,
	0x9bc1bc,
	0x5ca4a9,
	0xe6ebe0,
	0xf0b67f,
	0xfe5f55,
	0xd6d1b1,
	0xc7efcf,
	0xeef5db,
	0x50514f,
	0xf25f5c,
	0xffe066,
	0x247ba0,
	0x70c1b3
];

var resolution = new THREE.Vector2( window.innerWidth, window.innerHeight );


var material = new MeshLineMaterial( {
	map: THREE.ImageUtils.loadTexture( 'assets/stroke.png' ),
	useMap: false,
	color: new THREE.Color( colors[ 3 ] ),
	opacity: .5,
	resolution: resolution,
	sizeAttenuation: false,
	lineWidth: 10,
	near: camera.near,
	far: camera.far,
	depthWrite: false,
	depthTest: false,
	transparent: true
});
makeLine()
animate();

function makeLine( ) {

	var cPoints = [[-10, 0, 0 ],[-5, 5, 0],[0, 0, 0],[5, -5, 0], [10, 0, 0]]

	var geometry3d = new THREE.Geometry();
			for( var j = 0; j < Math.PI; j += 2 * Math.PI / 100 ) {
				var v = new THREE.Vector3( Math.cos( j ), Math.sin( j ), 0 );
				geometry3d.vertices.push( v );
			}
	// console.log(cPoints)
	// for( var j = 0; j < cPoints.length; j++ ) {
	// 	var v = new THREE.Vector3( cPoints[j][0], cPoints[j][1], cPoints[j][2] );
	// 	geometry3d.vertices.push( v );
	// 	console.log(v)
	// }
	var line = new MeshLine();
	line.setGeometry( geometry3d );

	// var g = new MeshLine();
	// g.setGeometry( geo );

	var mesh = new THREE.Mesh( line.geometry, material );
	scene.add( mesh );

	return mesh;

}


function animate() {
				requestAnimationFrame( animate );
				renderer.render( scene, camera );
			}
			
// function render() {

// 	requestAnimationFrame( render );
// 	controls.update();

// 	renderer.render( scene, camera );

// }
