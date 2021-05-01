var komutlar_button = document.getElementById('copy_komutlar');
var komutlar_code = document.getElementById("code_komutlar") ? document.getElementById("code_komutlar").innerHTML : "-";
var main_button = document.getElementById('copy_main');
var main_code = document.getElementById("code_main") ? document.getElementById("code_main").innerHTML : "-";

if (komutlar_button) {
  komutlar_button.addEventListener('click', function(event) {
    copyTextToClipboard(komutlar_code);
  });
}
if (main_button) {
  main_button.addEventListener('click', function(event) {
    copyTextToClipboard(main_code);
  });
} 


function goBack() {
  window.history.back();
}
function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'kopyalandı' : 'kopyalanamadı';
    console.log('kod  ' + msg);
  } catch (err) {
    console.error('kod kopyalanamadı: ', err);
  }
  document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Kod başarıyla kopyalandı');
  }, function(err) {
    console.error('kod kopyalanamadı: ', err);
  });
}

  window.onload = function() {
    document.addEventListener("contextmenu", function(e){
      e.preventDefault();
    }, false);
    document.addEventListener("keydown", function(e) {
      if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        disabledEvent(e);
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        disabledEvent(e);
      }
      if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
      }
      if (e.ctrlKey && e.keyCode == 85) {
        disabledEvent(e);
      }
      if (event.keyCode == 123) {
        disabledEvent(e);
      }
    }, false);
    function disabledEvent(e){
      if (e.stopPropagation){
        e.stopPropagation();
      } else if (window.event){
        window.event.cancelBubble = true;
      }
      e.preventDefault();
      return false;
    }
  };