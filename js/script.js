function makeJSON(){
    let data = [];
    for(let i = 0; i < 118; i++){
        data[i] = {
            id: {
                z: (i+1),
                sym: "",
                m: ((i+1.1)*2),
                pos: {
                    group: "",
                    period: Math.round((i+1)/16.85)
                },
                class: "",
                cpkColor: "#null",
                discovery: 1620
            },
            physic: {
                phase: "",
                melt: {
                    kelv: 0,
                    fahr: 0,
                    celc: 0
                },
                boil: {
                    kelv: 0,
                    fahr: 0,
                    celc: 0
                },
                density: 0
            },
            prop: {
                electron: {
                    config: ["1s^1"],
                    neg: 0
                },
                radius: {
                    cov: 0,
                    vanDerWaals: 0
                }
            }
        };
    }
    let url = URL.createObjectURL(new Blob([JSON.stringify(data)], {type: "text/plain"}));
    let a = $(`<a href="${url}" download="elements.json"></a>`);
    a.click();
}

$(document).ready(()=>{
    makeJSON();
});