import refs from './refs';
export default function getRightPadding(){
    let styles = (refs.header.getBoundingClientRect());
    const {height} = styles;
    document.body.style.paddingTop = `${height}px`;
    return height;
}