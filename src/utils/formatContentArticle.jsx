export const getFirstParagraph = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const firstParagraph = doc.querySelector('p');

    return firstParagraph ? firstParagraph.outerHTML : '';
};