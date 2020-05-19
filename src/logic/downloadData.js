const downloadData = (fileType, dataArr) => {
  switch (fileType) {
    case 'JSON':
    case 'TXT': {
      const dataStr = `data:text/${
        fileType === 'JSON' ? 'json' : 'plain'
      };charset=utf-8, ${encodeURIComponent(
        JSON.stringify(dataArr),
      )}`;
      const downloadAnchorNode = document.createElement(
        'a',
      );
      downloadAnchorNode.setAttribute(
        'href',
        dataStr,
      );
      downloadAnchorNode.setAttribute(
        'download',
        `data.${fileType.toLowerCase()}`,
      );
      document.body.appendChild(
        downloadAnchorNode,
      );
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
      break;
    }
    default:
      return null;
  }
  return null;
};

export default downloadData;
