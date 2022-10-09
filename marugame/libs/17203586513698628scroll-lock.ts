const dataAttrName = 'data-js-scroll-lock';

export const ScrollLockControl = (state: boolean) => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const target = document.body;

  const lock = () => {
    if (target.hasAttribute(dataAttrName)) return;
    target.setAttribute(dataAttrName, '');
  };

  const unlock = () => {
    if (!target.hasAttribute(dataAttrName)) return;
    target.removeAttribute(dataAttrName);
  };

  if (state) {
    lock();
  } else {
    unlock();
  }
};
