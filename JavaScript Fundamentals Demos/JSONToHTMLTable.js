
function htmlEscape(text) {
    let map = { '"': '&quot;', '&': '&amp;',
        "'": '&#39;', '<': '&lt;', '>': '&gt;' };
    return text.replace(/[\"&'<>]/g, ch => map[ch]);
}

function JSONToHTMLTable(json) {
    let html = "<table>\n";
    let arr = JSON.parse(json);
    html += "  <tr>\n";
    for (let key of Object.keys(arr[0])) {
        html += `<th>${htmlEscape(key)}</th>\n`;
    }

    html += "</tr>\n";

    for (let obj of arr) {
        html += "<tr>\n";
        for(let objProperty of Object.keys(obj)) {
            html += `<td>${htmlEscape(obj[objProperty].toString())}</td>\n`;
        }

        html += "</tr>\n";
    }

    return html + "</table>";
}

console.log(JSONToHTMLTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'))

