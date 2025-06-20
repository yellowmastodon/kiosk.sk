import * as focusTrap from 'focus-trap'; // ESM

export function initOffcanvas(offcanvas, toggleBtn) {
    let offcanvasContent = offcanvas.querySelector('.offcanvas-content');
    let trap = focusTrap.createFocusTrap([offcanvasContent, toggleBtn.closest('.offcanvas-toggle-wrap')], {
        escapeDeactivates: false,
        allowOutsideClick: true,
        clickOutsideDeactivates: false,
        initialFocus: false,
        returnFocusOnDeactivate: false
    });
    document.body.classList.add('has-offcanvas');
    let backdrop = document.createElement('div');
    backdrop.classList.add('offcanvas-backdrop');
    document.body.appendChild(backdrop);
    let transitionHandler = null;

    toggleBtn.addEventListener('click', () => {
        const isOpen = offcanvas.classList.contains('open');
        if (isOpen) {
            closeOffcanvas(offcanvas, toggleBtn);
        } else {
            openOffcanvas(offcanvas, toggleBtn);
            //trap.deactivate();
        }
    });

    function openOffcanvas() {
        offcanvas.style.visibility = 'visible';
        offcanvas.setAttribute('aria-hidden', 'false');
        toggleBtn.setAttribute('aria-expanded', 'true');
        offcanvas.classList.add('open'); 
        document.body.style.overflow = 'hidden';
        document.body.classList.add('offcanvas-open');
        backdrop.classList.add('offcanvas-open');
        // triggers transition

        // Remove any previous handler
        if (transitionHandler) {
            offcanvas.removeEventListener('transitionend', transitionHandler);
            transitionHandler = null;
        }

        transitionHandler = function handler(e) {
            if (e.target !== offcanvas) return; // only run for the main element
            // Your code to run after transition
            // e.g., activate focus trap
            trap.activate();
            
            // Cleanup
            offcanvas.removeEventListener('transitionend', handler);
            transitionHandler = null;
        };

        offcanvas.addEventListener('transitionend', transitionHandler);
    }

    function closeOffcanvas() {
        offcanvas.classList.remove('open'); // triggers transition
        document.body.style.overflow = '';
        offcanvas.setAttribute('aria-hidden', 'true');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.blur();
        backdrop.classList.remove('offcanvas-open');

        // Remove any previous handler
        if (transitionHandler) {

            offcanvas.removeEventListener('transitionend', transitionHandler);
            transitionHandler = null;
        }

        transitionHandler = function handler(e) {
            if (e.target !== offcanvas) return;
            offcanvas.style.visibility = 'hidden';
            document.body.classList.remove('offcanvas-open');
            trap.deactivate()

            // Cleanup
            offcanvas.removeEventListener('transitionend', handler);
            transitionHandler = null;
        };

        offcanvas.addEventListener('transitionend', transitionHandler);
    }
    document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && offcanvas.getAttribute('aria-hidden') === 'false') {
        closeOffcanvas();
    }
    });
    backdrop.addEventListener('click', (e) =>{
        if (offcanvas.classList.contains('open')){
            closeOffcanvas();
        } 
    });
    
}
