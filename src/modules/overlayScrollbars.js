import 'overlayscrollbars/overlayscrollbars.css';
import {
  OverlayScrollbars,
  ScrollbarsHidingPlugin,
  SizeObserverPlugin,
  ClickScrollPlugin
} from 'overlayscrollbars';

export function initializeCustomScrollbars(scrollingElement) {
  OverlayScrollbars.plugin(ClickScrollPlugin);
  const osInstance = OverlayScrollbars(
    {
      target: scrollingElement,
      elements: {
        viewport: scrollingElement,
        scrollbars: {
          slot: scrollingElement,
        }
      }
    },
    {
      scrollbars: {
        dragScroll: true,
        clickScroll: true
      },
      overflow: {
        x: 'scroll',
        y: 'visible',
      },
    },
  );

  enableDragToScroll(scrollingElement);

}

function enableDragToScroll(element) {
  
  let isDown = false;
  let startX;
  let scrollLeft;
  let isDragging = false;

  element.addEventListener('dragstart', (e) => {
    e.preventDefault();
  });
  
  element.addEventListener('mousedown', (e) => {
    //prevent drag scrolling to override custom scrollbar
    if (e.target.classList.contains('os-scrollbar-handle')  || e.target.classList.contains('os-scrollbar-track')){
      return;
    }
    isDown = true;
    isDragging = false;
    startX = e.pageX - element.offsetLeft;
    scrollLeft = element.scrollLeft;
  });

  element.addEventListener('mouseleave', () => {
    isDown = false;
    element.classList.remove('dragging');
  });

  element.addEventListener('mouseup', (e) => {
    isDown = false;
    setTimeout(() => { isDragging = false; }, 0); // reset after click
    element.classList.remove('dragging');
  });

  element.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const x = e.pageX - element.offsetLeft;
    const walk = (x - startX) * 3;
    if (Math.abs(walk) > 5) { // threshold to consider as drag
      isDragging = true;
      element.classList.add('dragging');
      e.preventDefault();
      element.scrollLeft = scrollLeft - walk; 
    }
  });

  // Prevent link clicks if dragging
  element.addEventListener('click', (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

}