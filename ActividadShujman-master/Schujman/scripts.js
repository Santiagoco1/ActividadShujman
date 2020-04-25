function show_modal(id) {
    document.getElementById(id).style.display='block';

    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
}

function hide_modal(id) {
    document.getElementById(id).style.display='none';
    
    document.body.style.overflow = "scroll";
    document.body.style.height = "100vh";
}
