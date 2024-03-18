if (typeof jQuery === "undefined") {
    throw new Error("jQuery plugins need to be before this file");
}
$(function() {
    "use strict";
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    $('.select-all').on('click',function(){
    
        if(this.checked){
            $(this).parents('table').find('.form-check-input').each(function(){
            this.checked = true;
            });
            }else{
                $(this).parents('table').find('.form-check-input').each(function(){
                this.checked = false;
            });
        }
    });
    
    $('.form-check-input').on('click',function(){
        if($(this).parents('table').find('.form-check-input:checked').length == $(this).parents('table').find('.form-check-input').length){
            $(this).parents('table').find('.select-all').prop('checked',true);
        }else{
            $(this).parents('table').find('.select-all').prop('checked',false);
        }
    });

    // date time
    var dt = new Date();
    document.getElementById("datetime").innerHTML = (("0"+(dt.getMonth()+1)).slice(-2)) +"/"+ (("0"+dt.getDate()).slice(-2)) +"/"+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()+1).slice(-2)) +":"+ (("0"+dt.getMinutes()+1).slice(-2));
     
});

