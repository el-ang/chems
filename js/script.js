function saveIcon(){
    let e = $("i.fad.fa-10x");
    e.forEach((i)=>{
        html2canvas($(this), {backgroundColor: null}).then((c)=>{
            let img = c.toDataURL("image/png").replace("image/png", "image/octet-stream");
            $(".rem").append(`a[href=\"${img}\"]{Icon#${i}}`);
        });
    });
}

$(document).ready(()=>{
    saveIcon();
});