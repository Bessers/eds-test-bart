export default function decorate(block) {
  /* change to ul, li */

  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const buttonContainer = col.querySelector('.button-container');
      const button = buttonContainer.querySelector('a');
      if (button) {
        const link = document.createElement('a');
        link.href = button.href;
        buttonContainer.parentElement.removeChild(buttonContainer);

        const image = col.querySelector('picture > img');
        if (image) {
          const teaserContent = document.createElement('div');
          teaserContent.style.backgroundImage = `url(${image.src})`;
          // teaserContent.textContent = 'hello world teaser'
          teaserContent.classList.add('teaser-content');
          teaserContent.append(col);
          col.removeChild(image.closest('p'));
          link.append(teaserContent);
        }
        block.append(link);
      }
    });
    block.removeChild(row);
  });
}
