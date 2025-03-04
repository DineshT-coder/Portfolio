// Smooth scrolling for navigation links
$(document).ready(function(){
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Dynamic text effect
    const texts = ["Full-stack Developer",  "Data Science and Analyst" , "Software Testing","Data Engineer"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.getElementById('dynamic-text').textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000);  // Pause for 2 seconds before typing the next text
        } else {
            setTimeout(type, 150);
        }
    })();
});
