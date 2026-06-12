import { useEffect } from 'react';

export const usePageTitle = (title) => {
  useEffect(() => {
    const baseTitle = 'BlueNova IT Services';
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;
  }, [title]);
};
