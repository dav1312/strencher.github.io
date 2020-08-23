function getAllParams() {
    let res = {};
    const req = new URLSearchParams(location.search);
    req.forEach((e,r)=>(res[r] = e));
    return res;
};
const $ = document.querySelector.bind(document);
const tools = {
    /**
     * @param {string} type Element type
     * @param {object} options Object
     * @returns {HTMLElement} 
     */
    createElement(type, options) {
        const el = document.createElement(type);
        for(const i in options) {
            if(i == "style") for(let g in options[i]) el.style.setProperty(g, options[i][g]);
            else if(i == "children") {
                if(options[i] instanceof Array) {
                    for(const f of options[i]) if(f instanceof Element) el.appendChild(f)
                    else el.innerHTML += f;
                } else if(options[i] instanceof Element) el.appendChild(options[i]); 
                else el.innerHTML += options[i];
            } else el[i] = options[i];
        }
        return el;
    }
}
const createInput = (prop, val) => {
    const div = tools.createElement("div", {
        style: {
            color: "white",
            "font-family": "Arial"
        },
        children: prop
    });
    const input = tools.createElement("input", {
        style: {
            color: "white"
        },
        value: val
    });
    return tools.createElement("div", {
        children: [div, input]
    });
};
