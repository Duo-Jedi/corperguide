
// $(document).ready(function() {
$(function(){

    $('#alertMe').click(function(e){
        e.preventDefault();
        $('#successAlert').slideDown();
    });

    $('a.pop').click(function(e){
        e.preventDefault();
    });
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();


    $(document).ready(function(){
    	$(".pre-loader").fadeOut(1500);
    })
});