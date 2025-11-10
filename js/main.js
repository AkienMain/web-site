
const dataJson = '[{"name":"sudokuSolver","abstract":"It solves Sudoku problem. It inputs image then overwrite and output it.","image":{"url":"https://github.com/AkienMain/sudoku_solver/blob/master/output/sample.png/output.png?raw=true"},"openSample":{"url":"https://colab.research.google.com/drive/1Sv39J8c2s3OvC8YfIHK6Sz2S284V5wqG"},"social":[{"type":"GitHub","url":"https://github.com/AkienMain/sudoku_solver"},{"type":"YouTube","url":"https://youtube.com/playlist?list=PLzXRGAno1PpEBNPDhm04EpcvdPlHtYrbK&si=cuJbIADaTkguUID_"},{"type":"PDF","url":"https://docs.google.com/viewer?url=https://raw.githubusercontent.com/AkienMain/sudoku_solver/master/sudoku_solver_slides.pdf"}]},{"name":"webQuizApp","abstract":"This is a web application for quiz. You can set your own questions on spreadSheet. It calculates correct answer rate.","image":{"url":"https://github.com/AkienMain/web-quiz-app/blob/main/images/i004.png?raw=true"},"openSample":{"url":"https://akienmain.github.io/web-quiz-app/?deployId=AKfycbzawU6UrMJ09U8XodGZQzRl4j7LWMtMp7qM4N4pAIvdhq9Jp-lG5n4uyPuYnoU4c-oA&spreadsheetId=1x6S9YuGaWFpyFIwLl3EXBtH1P32GPfE4T4iKdAVGBTg"},"social":[{"type":"GitHub","url":"https://github.com/AkienMain/web-quiz-app"}]}]';

window.onload = function() {

    var data = JSON.parse(dataJson);
    // document.getElementById("debug").innerHTML = data[0].name;

    let div = document.getElementById('projects-contents');
    for (let i=0; i < data.length; i++) {
        div.appendChild(createProjectCard(data[i]));
    }

};

function createProjectCard(projectData) {
    let div = document.createElement('div');
    div.classList.add('project');
    div.classList.add('card');
    div.appendChild(createProjectImg(projectData.image.url));
    div.appendChild(createProjectBody(projectData));
    return div;
}

function createProjectBody(projectData) {
    let div = document.createElement('div');
    div.classList.add('project-body');
    div.classList.add('card-body');
    div.appendChild(createProjectTitle(projectData.name));
    div.appendChild(createProjectText(projectData.abstract));
    div.appendChild(createOpenSample(projectData.openSample.url));
    div.appendChild(createIconSocial(projectData.social));
    return div;
}

function createProjectImg(url) {
    let img = document.createElement('img');
    img.classList.add('project-img');
    img.classList.add('card-img-top');
    img.src = url;
    img.img = "Image";
    return img;
};

function createProjectTitle(name) {
    let h3 = document.createElement('h3');
    h3.classList.add('project-title');
    h3.classList.add('card-title');
    h3.innerHTML = name;
    return h3;
};

function createProjectText(abstract) {
    let p = document.createElement('p');
    p.classList.add('project-text');
    p.classList.add('card-text');
    p.innerHTML = abstract;
    return p;
};

function createOpenSample(url) {

    let div = document.createElement('div');
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
    return div;
};

function createIconSocial(social) {

    let div1 = document.createElement('div');
    div1.classList.add('social');
    div1.classList.add('d-flex');
    div1.classList.add('flex-wrap');

    for (let i=0; i<social.length; i++) {

        let typeStr = social[i].type;
        let url = social[i].url;

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

    return div1;
};