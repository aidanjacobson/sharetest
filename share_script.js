function dragOverHandler(ev) {
    ev.preventDefault();
  }

function doDrop(e) {
    e.preventDefault();
    var data = {
        files: e.dataTransfer.files
    }
    if (navigator.canShare(data))
        navigator.share(data);
}