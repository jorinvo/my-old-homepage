define(['jquery', 'underscore', 'hogan'], function ($, _, hogan) {

	var Templates = function () {
		this.cache = {};
		this.compile();
	};

	_.extend(Templates.prototype, {

		compile: function () {

			$('.template').each( $.proxy(function (i, el) {
				var $el = $(el)
					,	id = el.id;
				this.cache[id] = {
					el: $el,
					//Or can I use 'DomEl.outerHTML here?'
					temp: hogan.compile(
						'{{#' + id + '}}'
						+ $el.html()
						+ '{{/' + id + '}}'
					)
				};
				$el.children().remove();
			}, this) );

		},

		render: function (selector, data) {

			var cache = this.cache[selector]
				,	temp = {};

			temp[selector] = data;
			log(temp);
			cache.el.html( cache.temp.render(temp) );

		}

	});

	return Templates;
});