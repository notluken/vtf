(function(){
    var p = new URLSearchParams();
    p.append('content', 'Holaaaa');

    fetch('/comment', {
        method: 'POST',
        body: p,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
})();
