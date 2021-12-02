function saveIcon(){
    let e = $("i.fad.fa-10x");
    e.each((i)=>{
        html2canvas($(e[i])[0], {backgroundColor: null}).then((c)=>{
            let l = c.toDataURL("image/png").replace("image/png", "image/octet-stream");
            $(".rem").append(`<a href="${l}"><b>Icon#${i}}</b></a>`);
        });
    });
}

$(document).ready(()=>{
    saveIcon();
});