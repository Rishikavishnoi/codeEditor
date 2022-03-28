const left=document.querySelector(".left");
const right=document.querySelector(".right");
const bar=document.querySelector(".bar");
const editor=document.querySelector(".editor");
const iframe=document.querySelector(".iframe");
const run=document.getElementById("run");
const dark=document.querySelector(".btn-Dark");
const light=document.querySelector(".btn-Light");

const drag = (e) => {
  e.preventDefault();
  document.selection ? document.selection.empty() : window.getSelection().removeAllRanges();
  left.style.width = (e.pageX - bar.offsetWidth / 2) + 'px';

}

bar.addEventListener('mousedown', () => {
  document.addEventListener('mousemove', drag);
});

bar.addEventListener('mouseup', () => {
  document.removeEventListener('mousemove', drag);
});
run.addEventListener('click',()=>{
  console.log('clicked to run');
  var html=editor.textContent;
  iframe.src="data:text/html;charset=utf-8,"+ encodeURI(html);
});
editor.addEventListener('keyup',()=>{
  var html = editor.textContent;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
})

editor.addEventListener("paste", function(e) {
        e.preventDefault();
        var text = e.clipboardData.getData("text/plain");
        document.execCommand("insertText", false, text);
    });
dark.addEventListener("click",()=>{
  left.style.backgroundColor='rgb(62 60 60 / 99%)';
  editor.style.color='white';
})
light.addEventListener("click",()=>{
  left.style.backgroundColor='white';
  editor.style.color='black';
})
