document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                var containerHeight = window.innerHeight;
                var scrollDistance = targetElement.offsetTop - (containerHeight - targetElement.offsetHeight) / 2;
                window.scrollTo({
                    top: scrollDistance,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.querySelector('.toggle-menu');
    var menu = document.querySelector('.menu');

    toggleButton.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});
