<script>
    document.querySelectorAll('nav ul li a').forEach(link => {
        if(link.href === window.location.href) {
            link.classList.add('active');
        }
    });
</script>