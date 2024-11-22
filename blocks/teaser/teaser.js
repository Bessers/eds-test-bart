export default function decorate(block) {
  /* change to ul, li */

  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      let button = col.querySelector('.button-container a');
      if (button) {
        let link = document.createElement('a');
        link.href = button.href;
        button.parentElement.removeChild(button);

        let image = col.querySelector('picture > img');
        if (image) {
          let teaserContent = document.createElement('div');
          teaserContent.style.backgroundImage = `url(${image.src})`;
          // teaserContent.textContent = 'hello world teaser'
          teaserContent.classList.add('teaser-content');
          teaserContent.append(col);
          col.removeChild(image.closest('p'));
          link.append(teaserContent);
        }
        block.append(link);
    }});
    block.removeChild(row);
  });
}
