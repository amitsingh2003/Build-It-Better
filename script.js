document.addEventListener("DOMContentLoaded", function() {
    const b1 = document.getElementById('b1');
    const b2 = document.getElementById('b2');
    const b3 = document.getElementById('b3');
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');

    b1.addEventListener('click', function() {
        img1.style.display = 'block';
        img2.style.display = 'none';
        img3.style.display = 'none';
    });

    b2.addEventListener('click', function() {
        img1.style.display = 'none';
        img2.style.display = 'block';
        img3.style.display = 'none';
    });

    b3.addEventListener('click', function() {
        img1.style.display = 'none';
        img2.style.display = 'none';
        img3.style.display = 'block';
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.car-button');

    buttons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            // Remove 'active' class from all buttons
            buttons.forEach(function(btn) {
                btn.classList.remove('active');
            });

            // Add 'active' class to the clicked button
            this.classList.add('active');

            // Remove 'underline-white' class from all underlines
            document.querySelectorAll('.underline').forEach(function(line) {
                line.classList.remove('underline-white');
            });

            // Add 'underline-white' class to the corresponding underline
            document.getElementById(`underline${index + 1}`).classList.add('underline-white');
        });
    });
});


