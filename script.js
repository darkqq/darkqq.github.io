let h, w, nh, nw, s;

window.onclick = function () {
    document.getElementById("audio").play();
}

let audio = document.getElementById("audio");
audio.volume = 0.5;

function newPosition() {
    h = parent.innerHeight;
    w = window.innerWidth;
    nh = Math.floor(Math.random() * h) - 50;
    nw = Math.floor(Math.random() * w) - 100;
    s = Math.floor(Math.random() * 1000) + 1000;
    return [nh, nw, s];
}

(function () {
    let circ = document.querySelectorAll('#sunglasses');

    circ.forEach(
        function circ(myclass) {
            let newq = newPosition();
            $(myclass).addClass("rotate")
            $(myclass).animate({
                    top: newq[0], left: newq[1]
                },
                newq[2],
                function () {
                    circ(myclass);
                });

            $(myclass).animate()
        });
})();

function animateTitle() {
    let title = 'LABMONITORING';
    let titleArr = title.split('');
    let titles = [];

    titleArr.forEach(((value, index) => {
        titles.push(title.slice(0, index + 1));
    }))

    titles.forEach((value, index) => {
        setTimeout(function () {
            document.title = value;
        }, 250 * index)
    })

    titles.sort((o, e) => e.length - o.length)
        .forEach((value, index) => {
            setTimeout(function () {
                document.title = value;
            }, 3500 + 250 * index)
        });

    setInterval(function () {
        animateTitle();
    }, 7000);
}

animateTitle();

