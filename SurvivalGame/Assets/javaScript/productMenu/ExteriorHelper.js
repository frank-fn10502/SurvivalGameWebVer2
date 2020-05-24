function createEntity(objData, templateList, title = '', numberNo = -99) {
    if (Array.isArray(objData)) {
        let div = document.createElement('div');
        objData.forEach((x, y) => {
            div.appendChild(createEntity(x, templateList, y));
        });
        return div;
    }
    let templateID = templateList[0];

    let template = document.querySelector(templateID).content.cloneNode(true);
    let wrap = document.createElement('div');
    wrap.appendChild(template);

    var re = /{{\w+:*\w*}}/gi;

    wrap.innerHTML = wrap.innerHTML.replace(re, function (match) {
        let key = match.substring(2).slice(0, -2).toLowerCase().split(':');
        let replaceKey = Object.keys(objData).find(x => x.toLowerCase() == key[0]);

        if (replaceKey) {
            let data = objData[replaceKey];
            // console.log('data', data, templateList);
            if (key.length > 1) {
                let pattern = templateList.find(x => {
                    if (Array.isArray(x)) {
                        console.log(match ,x ,x.some(y => y.substring(1).toLowerCase() == key[1].toLowerCase()));
                        return x.some(y => y.substring(1).toLowerCase() == key[1].toLowerCase());
                    }
                    else return x.substring(1).toLowerCase() == key[1].toLowerCase();
                });
                let result = Array.isArray(pattern) ? pattern : [`${pattern}`];

                let testCreate = createEntity(data, result);
                
                return testCreate.innerHTML.toString();
            }
            else if (typeof data != 'object') {
                let imgReg = /(https:\/\/|.+)(\/.+)*(.jpg|.png|.+random)/ //
                if (data.toString().match(imgReg)) {
                    return `<img src="../../${data}" alt="imgGenByFunc">`;
                }
                else {
                    return data;
                }
            }
            else if (Array.isArray(data)) {
                let str = '';
                data.forEach((x, y) => {
                    str += createEntity(x, templateList.slice(1), Object.values(x)[y], y).outerHTML.toString();
                });
                return str;
            }
        }
        else {
            return `{{${key}}}`;
        }
    }).replace(re, `${title}-${numberNo}`);

    
    return wrap.children[0];
}