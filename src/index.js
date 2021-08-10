document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById("container").style.display = 'block';
        document.getElementById("nav__links").style.display = 'flex';
        document.getElementById("load").style.display = 'none';
    }, 3000);
});