import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class HeaderMatchingLinks {
	constructor() {
		this.lazyImages = $('.lazyload');
		this.headerMenu = $('.site-header');
		this.menuIcon = $(".site-header__menu-icon");
		this.menuIconMiddle = $(".site-header__menu-icon__middle");
		this.logo = $(".site-header__logo");
		this.headerTriggerElement = $(".large-hero__title");
		this.contactLink = $("#contact-link");
		this.createHeaderWaypoint();
		this.siteSections = $(".page-section");
		this.headerLinks = $(".primary-nav__list-item a");
		this.createSiteSectionWaypoints();
		this.categoriesTriggerElement = $("#particuliers");
		this.removeSiteSectionWaypoint();
		this.addSmoothScrolling();
		this.refreshWaypoints();
	}

	refreshWaypoints() {
		this.lazyImages.on('load', function() {
			Waypoint.refreshAll();
		});
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
		this.contactLink.smoothScroll();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: this.headerTriggerElement[0],
			handler: function(direction) {
				if (direction == "down") {
					that.headerMenu.addClass("site-header--dark");
					that.menuIcon.addClass("site-header__menu-icon--dark");
					that.menuIconMiddle.addClass("site-header__menu-icon__middle--dark");
					that.logo.addClass("site-header__logo--dark");
				} else {
					that.headerMenu.removeClass("site-header--dark");
					that.menuIcon.removeClass("site-header__menu-icon--dark");
					that.menuIconMiddle.removeClass("site-header__menu-icon__middle--dark");
					that.logo.removeClass("site-header__logo--dark");
				}
			},
			offset: "7%"
		});
	}	

	createSiteSectionWaypoints() {
		var that = this;
		this.siteSections.each(function() {
			var currentSiteSection = this;
			new Waypoint({
				element: currentSiteSection,
				handler: function(direction) {
					if (direction == "down") {
						var matchingHeaderLink = currentSiteSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: "12%"
			});

			new Waypoint({
				element: currentSiteSection,
				handler: function(direction) {
					if (direction == "up") {
						var matchingHeaderLink = currentSiteSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: "-12%"
			});
		});
	}

	removeSiteSectionWaypoint() {
		var that = this;
		new Waypoint({
			element: this.categoriesTriggerElement[0],
			handler: function(direction) {
				if (direction == "up") {
					that.headerLinks.removeClass("is-current-link");
				}
			},
			offset: "30%"
		});
	}
}

export default HeaderMatchingLinks;