/* eslint-disable no-unused-vars */
function setIframe (subdomain, searchInput, schoolFilterNum, viewType, elemEmbedId) {
  /* eslint-enable no-unused-vars */
  var currentYear = new Date().getFullYear().toString();
  var currentMonth = (new Date().getMonth() + 1).toString();
  var iframeSrc = 'http://' + subdomain + '.tandemcal.com/index.php?search_input=' +
    encodeURI(searchInput) + '&amp;filter_school=' +
    schoolFilterNum.toString() +
    '&amp;filter_group=&amp;filter_location=&amp;type=view&amp;action=' +
    viewType + '&amp;cur_year=' + currentYear + '&amp;cur_month=' +
    currentMonth + '&amp;submit=Filter';
  var iframeStyles = 'width: 1000px; height: 800px; border: 0; -ms-transform: scale(0.8);' +
    ' -moz-transform: scale(0.8); -o-transform: scale(0.8); -webkit-transform: scale(0.8); ' +
    'transform: scale(0.8); -ms-transform-origin: 0 0; -moz-transform-origin: 0 0; ' +
    '-o-transform-origin: 0 0; -webkit-transform-origin: 0 0; transform-origin: 0 0;';
  var iframeHtml = '<iframe style="' + iframeStyles + '" src="' +
    iframeSrc + '"></iframe>';
  document.getElementById(elemEmbedId).innerHTML = iframeHtml;
}
