$("button").click(function() {
    let item = $(".to-pack-input").val();
    $(".packing-list").append("<li>I'm going to pack a " + item +"</li>");
    
    
    
});