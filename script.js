const cssRoot = document.querySelector(':root');
const lightsElement = document.getElementById('toggle-lights');

lightsElement.addEventListener('click', () => {
    var rs = getComputedStyle(cssRoot);
    if(rs.getPropertyValue('--lights') === 'block') {
        cssRoot.style.setProperty('--lights', 'none');
        cssRoot.style.setProperty('--shadows', 'block');
        cssRoot.style.setProperty('--lights-helper', 'none');
    }
    else {
        cssRoot.style.setProperty('--lights', 'block');
        cssRoot.style.setProperty('--shadows', 'none');
    }
});