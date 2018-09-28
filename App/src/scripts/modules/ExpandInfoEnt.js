import $ from 'jquery';

class ExpandInfoEnt {
	constructor() {
		this.modalOpenEnt = $(".open-modal-ent");
		this.modalCloseEnt = $(".modal__close__ent");
		
		this.events();
	}
	
	events() {
		this.modalOpenEnt.click(function() {
			$(".modal__ent").addClass('modal__ent--is-visible');
			$("body").addClass('noScroll');
		});
		this.modalOpenEnt.click(function() {
			var id = $(this).data('id');
			$(".modal__container__ent").removeClass("modal__container__ent--is-visible");
			$('.modal__container__ent#box-' + id).addClass('modal__container__ent--is-visible');
			$(".services__right-block__box__3").removeClass("services__right-block__box__3--is-active");
			$('.services__right-block__box__3#parent-' + id).addClass('services__right-block__box__3--is-active');
		});
		this.modalCloseEnt.click(function() {
			$(".modal__ent").removeClass('modal__ent--is-visible');
			$("body").removeClass('noScroll');
			$(".modal__container__ent").removeClass('modal__container__ent--is-visible');
			$(".services__right-block__box__3").removeClass("services__right-block__box__3--is-active");
		});
	}	
}

export default ExpandInfoEnt;