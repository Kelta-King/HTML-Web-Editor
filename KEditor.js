function start(){
	setUp();
	update();
}
function setUp(){
	window.editor = ace.edit("editor");
	editor.setTheme("ace/theme/monokai");
	editor.getSession().setMode("ace/mode/html");
editor.setValue(`<!DOCTYPE html>
<html>
<head>
<title></title>
<style>
	
</style>
</head>

<body>
	
</body>
</html>`,1); 
//1 = moves cursor to end
editor.getSession().on('change', function(){
	update();
});
editor.focus();editor.setOptions({
	fontSize: "16pt",
	showLineNumbers: false,
	showGutter: false,
	vScrollBarAlwaysVisible:true,
	enableBasicAutocompletion: false, 
	enableLiveAutocompletion: false
});

editor.setShowPrintMargin(false);
editor.setBehavioursEnabled(false);}
				
function update(){
	var idoc = document.getElementById('iframe').contentWindow.document;
	idoc.open();idoc.write(editor.getValue());idoc.close();
}
