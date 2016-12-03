/**
 * Created by weie on 2016/12/2.
 */
(function (){
    /*头部*/
    $('.index .innerHeader .boxer').mouseenter(function(){
        $(this).find('.innerBox').show(300);
        $(this).find('.pic').hide(300);
    });

    $('.index .innerHeader .boxer').mouseleave(function(){
        $(this).find('.innerBox').hide(300);
        $(this).find('.pic').show(300);
    });

    /*列表栏部分*/
    $('.index .leftPanel ul').mouseover(function(){
        //console.log(this);
        $(this).find('.tab5-button').show();
        //$(this).find('.tab2-title').css({'fontWeight':'800'});
    });
    $('.index  .leftPanel ul').mouseleave(function(){
        //console.log(this);
        $(this).find('.tab5-button').hide();
        //$(this).find('.tab2-title').css({'fontWeight':'700'});
    });
})();