
document.addEventListener("DOMContentLoaded", function(event) {

    var thumbnailElement = document.getElementById("smart_thumbnail");
    var thumbnailElement2 = document.getElementById("smart_thumbnail2");
    var scrollarrow = document.getElementById("arrow1");

    if (thumbnailElement){
        
        thumbnailElement.addEventListener("click", function() {
            if (thumbnailElement.className === 'small') thumbnailElement.className = ""
            else {
                thumbnailElement.className = "small";
            }
        });
        
        thumbnailElement2.addEventListener("click", function() {
            if (thumbnailElement2.className === 'small') thumbnailElement2.className = ""
            else {
                thumbnailElement2.className = "small";
            }
            
        });
    }

    if (scrollarrow){
        document.getElementById("arrow1").onclick = function() {
        
            window.scrollTo(0, 750);
            return false;
        };
    }




});
