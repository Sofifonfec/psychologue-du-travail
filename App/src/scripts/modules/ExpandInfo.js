import $ from 'jquery';

class ExpandInfo {
	constructor() {
		this.modalOpen = $(".open-modal-par");
		this.modalClose = $(".modal__close__par");
		
		this.events();
	}
	
	events() {
		this.modalOpen.click(function() {
			$(".modal__par").addClass('modal__par--is-visible');
			$("body").addClass('noScroll');
		});
		this.modalOpen.click(function() {
			var id = $(this).data('id');
			$(".modal__container__par").removeClass("modal__container__par--is-visible");
			$('.modal__container__par#box-' + id).addClass('modal__container__par--is-visible');
			$(".services__right-block__box").removeClass("services__right-block__box--is-active");
			$('.services__right-block__box#parent-' + id).addClass('services__right-block__box--is-active');
		});
		this.modalClose.click(function() {
			$(".modal__par").removeClass('modal__par--is-visible');
			$("body").removeClass('noScroll');
			$(".modal__container__par").removeClass('modal__container__par--is-visible');
			$(".services__right-block__box").removeClass("services__right-block__box--is-active");
		});
	}	
}

export default ExpandInfo;