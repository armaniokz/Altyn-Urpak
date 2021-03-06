main_name = function () {
	return Home.findOne({place: 'title_usti'}).value + "<br/>" + Home.findOne({place: 'title_asti'}).value;
}

Template.allblogs.rendered = function () {
	$("body").removeClass("custom-body").removeClass("blog-post-body");
	$("footer").empty();
	$("title").text("Барлық блогтар | " + main_name());
}

Template.allblogs.helpers({
	janaliktar: function () {
		return Posts.find({category: 'Жаңалықтар'}, {sort: {added: -1}});
	},
	'ataanalar': function () {
		return Posts.find({category: 'Ата-аналар үшін'}, {sort: {added: -1}});
	},
	habarlandyru: function () {
		return Posts.find({category: 'Хабарландыру'}, {sort: {added: -1}});
	},
	paydaly: function () {
		return Posts.find({category: 'Пайдалы мәлімет'}, {sort: {added: -1}});
	},
});


Template.allblogs.events({
	'click .js-blog-section-nav__item': function (e) {
		e.preventDefault();
		var $entry = $('.entries-holder'), $this = $(e.currentTarget);
		$($this).addClass('active').siblings().removeClass('active');
		$entry.eq($($this).index()).addClass('active').siblings().removeClass('active');
	},
	'click .js-schedule-nav-item': function (e) {
		e.preventDefault();
		var $this = $(e.currentTarget);
		$this.addClass('active').siblings().removeClass('active');
		$("."+$this.data("table")).addClass("active").siblings("table").removeClass("active");

	},

});