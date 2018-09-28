import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.siteHeader = $(".site-header");
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		this.logo = $(".site-header__logo");
		this.btn = $(".site-header__btn-container");
		this.events();
	}
	
	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}	
	
	toggleTheMenu() {
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.logo.toggleClass("site-header__logo--is-expanded");
		this.btn.toggleClass("site-header__btn-container--is-expanded");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}
}

export default MobileMenu;
