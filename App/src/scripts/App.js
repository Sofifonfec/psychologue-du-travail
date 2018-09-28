
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import HeaderMatchingLinks from './modules/HeaderMatchingLinks';
import ExpandInfo from './modules/ExpandInfo';
import ExpandInfoEnt from './modules/ExpandInfoEnt';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".about__item"), "80%");
new RevealOnScroll($(".about__item--p"), "90%");
var headerMatchingLinks = new HeaderMatchingLinks();
var expandInfo = new ExpandInfo();
var expandInfoEnt = new ExpandInfoEnt();