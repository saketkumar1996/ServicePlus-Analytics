$(document).ready(()=>{
    //sandwich icon
    $('.mobile_menu_btn').click(()=>{
        $('.mobile_menu').css('display', 'block')
    })

    //mobile menu close
    $('.mobile_menu_close>i').click(()=>{
        $('.mobile_menu').css('display', 'none')
    })
})
