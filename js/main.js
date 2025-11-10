
const dataJson = '[[["sudokuSolverOpenSample","https://colab.research.google.com/drive/1Sv39J8c2s3OvC8YfIHK6Sz2S284V5wqG"],["sudokuSolverSocial",[["GitHub","https://github.com/AkienMain/sudoku_solver"],["YouTube","https://youtube.com/playlist?list=PLzXRGAno1PpEBNPDhm04EpcvdPlHtYrbK&si=cuJbIADaTkguUID_"],["PDF","https://docs.google.com/viewer?url=https://raw.githubusercontent.com/AkienMain/sudoku_solver/master/sudoku_solver_slides.pdf"]]]],[["webQuizAppOpenSample","https://akienmain.github.io/web-quiz-app/?deployId=AKfycbzawU6UrMJ09U8XodGZQzRl4j7LWMtMp7qM4N4pAIvdhq9Jp-lG5n4uyPuYnoU4c-oA&spreadsheetId=1x6S9YuGaWFpyFIwLl3EXBtH1P32GPfE4T4iKdAVGBTg"],["webQuizAppSocial",[["GitHub","https://github.com/AkienMain/web-quiz-app"]]]]]'

window.onload = function() {

    var data = JSON.parse(dataJson);

    for (let i=0; i < data.length; i++) {
        createOpenSample(data[i][0][0],data[i][0][1]);
        createIconSocial(data[i][1][0],data[i][1][1]);
    }

};

function createOpenSample(id, url) {
    div = document.getElementById(id);
    div.classList.add('open-sample-button-div');
    div.classList.add('row');

    let a = document.createElement('a');
    a.classList.add('open-sample-button');
    a.classList.add('btn');
    a.classList.add('btn-primary');
    a.href = url;
    a.role = 'button';
    a.innerHTML = 'Open Sample';

    div.appendChild(a);
}

function createIconSocial(id, valueList) {

    let div1 = document.getElementById(id);
    div1.classList.add('social');
    div1.classList.add('d-flex');
    div1.classList.add('flex-wrap');
    for (let i=0; i<valueList.length; i++) {

        let typeStr = valueList[i][0];
        let url = valueList[i][1];

        let div2 = document.createElement('div');
        div2.classList.add('social-icon');

        let a = document.createElement('a');
        a.href = url;

        let img = document.createElement('img');
        if (typeStr == 'GitHub') {
            img.src = 'vector/github-mark.svg';
            img.classList.add('icon-github');
        } else if (typeStr == 'YouTube') {
            img.src = 'image/yt_icon_red_digital.png';
            img.classList.add('icon-youtube');
        } else if (typeStr == 'PDF') {
            img.src = 'vector/file-earmark-pdf-fill.svg';
            img.classList.add('icon-pdf');
        }
        img.alt = typeStr;
        a.appendChild(img);

        div2.appendChild(a);

        div1.appendChild(div2);
    }

};