document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
});

