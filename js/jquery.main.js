jQuery(document).ready(function(){
    maskTel();
    textString();
    scrollToTop();
    scrollAnim();
});

// Добавляет маску инпуту для телефона
function maskTel() {
	$('.mask-input').inputmask("+9 (999) 999-9999");
};

// Сокращение текста в заголвоках акций
function textString() {
    $('.news__title p').each(function() {
        var text = $(this).text();
        if (text.length > 37) {
            text = text.substring(0, 37) + '...';
        }
        $(this).text(text);
    });
};

// Для показа кнопки при прокрутке и прокрутки страницы наверх
function scrollToTop() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
          $('.scroll-to-top').fadeIn(); // Появление кнопки
        } else {
          $('.scroll-to-top').fadeOut(); // Скрытие кнопки
        }
      });
  
      // Прокрутка страницы наверх при клике на кнопку
      $('.scroll-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'smooth'); // Плавная прокрутка
      });
};

// Плавный скролл для якорей
function scrollAnim() {
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });
  };