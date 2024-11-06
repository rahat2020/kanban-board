export const truncateText = (text, maxLength, ellipsis = '...') => {
    if (!text) return '';
    if (typeof text !== 'string' || typeof maxLength !== 'number') {
      return text;
    }
  
    if (text.length <= maxLength) return text;
  
    const charsToShow = maxLength - ellipsis.length;
    return text.substring(0, charsToShow) + ellipsis;
  };