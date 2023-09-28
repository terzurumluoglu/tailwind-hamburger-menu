
const className = 'hamburger';
const menuButtonDocs = Array.from(document.getElementsByClassName(className));

const toggle = () => {
    menuButtonDocs.forEach(menuButtonDoc => menuButtonDoc.classList.toggle('open'));
}
