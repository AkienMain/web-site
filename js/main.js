window.onload = function() {
    let dataUrl = 'https://raw.githubusercontent.com/AkienMain/web-site/master/data/data.json';
    getData(dataUrl);
};

async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        showPage(data);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}

function showPage(data){
    let div = document.getElementById('projects-contents');
    for (let i=0; i < data.length; i++) {
        div.appendChild(createProjectCard(data[i]));
    }
}

function createProjectCard(projectData) {
    let div = document.createElement('div');
    div.classList.add('project');
    div.classList.add('card');
    div.classList.add('border-0');
    div.classList.add('shadow-outer');
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