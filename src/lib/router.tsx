import { useEffect, useState, type AnchorHTMLAttributes, type MouseEvent } from 'react';

const NAVIGATE_EVENT = 'app:navigate';

// База развёртывания (напр. '/-/' на GitHub Pages). Локально — '/'.
const BASE = import.meta.env.BASE_URL || '/';
const BASE_NORM = BASE.endsWith('/') && BASE !== '/' ? BASE.slice(0, -1) : BASE; // '/-'

function stripBase(pathname: string): string {
  if (BASE_NORM === '/' || BASE_NORM === '') return pathname;
  if (pathname === BASE_NORM) return '/';
  if (pathname.startsWith(BASE_NORM + '/')) return pathname.slice(BASE_NORM.length);
  return pathname;
}

function withBase(to: string): string {
  if (BASE_NORM === '/' || BASE_NORM === '') return to;
  if (to === '/') return BASE_NORM + '/';
  return BASE_NORM + to;
}

export function navigate(to: string) {
  if (stripBase(window.location.pathname) !== to) {
    window.history.pushState(null, '', withBase(to));
    window.dispatchEvent(new Event(NAVIGATE_EVENT));
  }
  window.scrollTo({ top: 0 });
}

export function usePathname() {
  const [pathname, setPathname] = useState(() => stripBase(window.location.pathname));

  useEffect(() => {
    const sync = () => setPathname(stripBase(window.location.pathname));
    window.addEventListener('popstate', sync);
    window.addEventListener(NAVIGATE_EVENT, sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener(NAVIGATE_EVENT, sync);
    };
  }, []);

  return pathname;
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

export function Link({ to, onClick, ...props }: LinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigate(to);
  };

  return <a href={withBase(to)} {...props} onClick={handleClick} />;
}
