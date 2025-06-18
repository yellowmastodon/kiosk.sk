class FocusTrap {
  constructor({ trapElement, autofocus = true } = {}) {
    this.trapElement = trapElement;
    this.autofocus = autofocus;
    this._isActive = false;
    this._lastTabNavDirection = null;

    this._handleFocusin = this._handleFocusin.bind(this);
    this._handleKeydown = this._handleKeydown.bind(this);
  }

  activate() {
    if (this._isActive) return;

    if (this.autofocus && this.trapElement) {
      this.trapElement.focus();
    }

    document.removeEventListener('focusin', this._handleFocusin);
    document.removeEventListener('keydown', this._handleKeydown);

    document.addEventListener('focusin', this._handleFocusin);
    document.addEventListener('keydown', this._handleKeydown);

    this._isActive = true;
  }

  deactivate() {
    if (!this._isActive) return;

    document.removeEventListener('focusin', this._handleFocusin);
    document.removeEventListener('keydown', this._handleKeydown);

    this._isActive = false;
  }

  _handleFocusin(event) {
    if (
      event.target === document ||
      event.target === this.trapElement ||
      (this.trapElement && this.trapElement.contains(event.target))
    ) {
      return;
    }

    const elements = this._focusableChildren(this.trapElement);

    if (elements.length === 0) {
      this.trapElement.focus();
    } else if (this._lastTabNavDirection === 'backward') {
      elements[elements.length - 1].focus();
    } else {
      elements[0].focus();
    }
  }

  _handleKeydown(event) {
    if (event.key !== 'Tab') return;
    this._lastTabNavDirection = event.shiftKey ? 'backward' : 'forward';
  }

  _focusableChildren(element) {
    if (!element) return [];
    return Array.from(
      element.querySelectorAll(
        'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable]'
      )
    ).filter(el => el.offsetWidth > 0 || el.offsetHeight > 0 || el === document.activeElement);
  }
}

export default FocusTrap;

// Usage example:
// const trap = new FocusTrap({ trapElement: document.getElementById('myDialog'), autofocus: true });
// trap.activate();
// trap.deactivate();