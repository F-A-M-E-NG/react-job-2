"use strict";
(function ($) {
	$.fn.facebook_wall = function(options) {
		if (options.id === undefined || options.access_token === undefined) {
			return;
		}
		
		options = $.extend({
			id: '',
			access_token: '',
			limit: 15, // You can also pass a custom limit as a parameter.
			timeout: 400,
			speed: 400,
			effect: 'slide', // slide | fade | none
			locale: 'da_DK', // your contry code
			avatar_size: 'square', // square | small | normal | large
			message_length: 200, // Any amount you like. Above 0 shortens the message length
			show_guest_entries: true, // true | false
			text_labels: {
				shares: {
					singular: 'Delt % gang',
					plural: 'Delt % gange'
				},
				likes: {
					singular: '% synes godt om',
					plural: '% synes godt om'
				},
				comments: {
					singular: '% kommentar',
					plural: '% kommentarer'
				},
				like: 'Synes godt om',
				comment: 'Skriv kommentar',
				share: 'Del',
                days: ['S&oslash;ndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'L&oslash;rdag'],
                months: ['januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december']
			},
			on_complete: null
		}, options);
	
		var graphURL = 'https://graph.facebook.com/',
			graphTYPE = (options.show_guest_entries === false) ? 'posts' : 'feed',
			graphPOSTS = graphURL + options.id + '/' + graphTYPE + '/?access_token=' + options.access_token + '&limit=' + options.limit + '&locale=' + options.locale + '&date_format=U&callback=?',
			e = $(this);
		
		e.append('<div className="facebook-loading"></div>');

		$.getJSON(graphPOSTS, function(posts) {
			$.each(posts.data, function() {
				var output = '',
					post_className = '',
					media_className = '',
					split_id = '';

				if (this.is_hidden === false) {
					if (this.type === 'link') {
						post_className = 'type-link ';
					} else if (this.type === 'photo') {
						post_className = 'type-photo ';
					} else if (this.type === 'status') {
						post_className = 'type-status ';
					} else if (this.type === 'video') {
						post_className = 'type-video ';
					}
					output += '<li className="post ' + post_className + 'avatar-size-' + options.avatar_size + '">';
						output += '<div className="meta-header">';
							output += '<div className="avatar"><a href="http://www.facebook.com/profile.php?id=' + this.from.id + '" target="_blank" title="' + this.from.name + '"><img src="' + (graphURL + this.from.id + '/picture?type=' + options.avatar_size) + '" alt="' + this.from.name + '" /></a></div>';
							output += '<div className="author"><a href="http://www.facebook.com/profile.php?id=' + this.from.id + '" target="_blank" title="' + this.from.name + '">' + this.from.name + '</a></div>';
							output += '<div className="date">' + timeToHuman(this.created_time) + '</div>';
						output += '</div>';
						
						if (this.message !== undefined) {
							if (options.message_length > 0 && this.message.length > options.message_length) {
								output += '<div className="message">' + modText(this.message.substring(0, options.message_length)) + '...</div>';
							} else {
								output += '<div className="message">' + modText(this.message) + '</div>';
							}
						} else if (this.story !== undefined) {
							if (options.message_length > 0 && this.story.length > options.message_length) {
								output += '<div className="story">' + modText(this.story.substring(0, options.message_length)) + '...</div>';
							} else {
								output += '<div className="story">' + modText(this.story) + '</div>';
							}
						}
						
						if (this.type === 'link' || this.type === 'photo' || this.type === 'video') {
							if (this.picture !== undefined || this.object_id !== undefined) {
								media_className = ' border-left';
							} else {
								media_className = '';
							}
							output += '<div className="media' + media_className + ' clearfix">';
								if (this.picture !== undefined) {
									output += '<div className="image"><a href="' + this.link + '" target="_blank"><img src="' + this.picture + '" /></a></div>';
								} else if (this.object_id !== undefined) {
									output += '<div className="image"><a href="' + this.link + '" target="_blank"><img src="' + (graphURL + this.object_id + '/picture?type=album') + '" /></a></div>';
								}
								output += '<div className="media-meta">';
									if (this.name !== undefined) {
										output += '<div className="name"><a href="' + this.link + '" target="_blank">' + this.name + '</a></div>';
									}
									if (this.caption !== undefined) {
										output += '<div className="caption">' + modText(this.caption) + '</div>';
									}
									if (this.description !== undefined) {
										output += '<div className="description">' + modText(this.description) + '</div>';
									}
								output += '</div>';
							output += '</div>';
						}
						
						output += '<div className="meta-footer">';
							output += '<time className="date" datetime="' + this.created_time + '" pubdate>' + timeToHuman(this.created_time) + '</time>';
							if (this.likes !== undefined && this.likes.data !== undefined) {
								if (this.likes.count !== undefined) {
									if (this.likes.count === 1) {
										output += '<span className="seperator">&middot;</span><span className="likes">' + options.text_labels.likes.singular.replace('%', this.likes.count) + '</span>';
									} else {
										output += '<span className="seperator">&middot;</span><span className="likes">' + options.text_labels.likes.plural.replace('%', this.likes.count) + '</span>';
									}
								} else {
									if (this.likes.data.length === 1) {
										output += '<span className="seperator">&middot;</span><span className="likes">' + options.text_labels.likes.singular.replace('%', this.likes.data.length) + '</span>';
									} else {
										output += '<span className="seperator">&middot;</span><span className="likes">' + options.text_labels.likes.plural.replace('%', this.likes.data.length) + '</span>';
									}
								}
							}
							if (this.comments !== undefined && this.comments.data !== undefined) {
								if (this.comments.data.length === 1) {
									output += '<span className="seperator">&middot;</span><span className="comments">' + options.text_labels.comments.singular.replace('%', this.comments.data.length) + '</span>';
								} else {
									output += '<span className="seperator">&middot;</span><span className="comments">' + options.text_labels.comments.plural.replace('%', this.comments.data.length) + '</span>';
								}
							}
							if (this.shares !== undefined) {
								if (this.shares.count === 1) {
									output += '<span className="seperator">&middot;</span><span className="shares">' + options.text_labels.shares.singular.replace('%', this.shares.count) + '</span>';
								} else {
									output += '<span className="seperator">&middot;</span><span className="shares">' + options.text_labels.shares.plural.replace('%', this.shares.count) + '</span>';
								}
							} else {
								output += '<span className="seperator">&middot;</span><span className="shares">' + options.text_labels.shares.plural.replace('%', '0') + '</span>';
							}
							split_id = this.id.split('_');
							output += '<div className="actionlinks"><span className="like"><a href="http://www.facebook.com/permalink.php?story_fbid=' + split_id[1] + '&id=' + split_id[0] + '" target="_blank">' + options.text_labels.like + '</a></span><span className="seperator">&middot;</span><span className="comment"><a href="http://www.facebook.com/permalink.php?story_fbid=' + split_id[1] + '&id=' + split_id[0] + '" target="_blank">' + options.text_labels.comment + '</a></span><span className="seperator">&middot;</span><span className="share"><a href="http://www.facebook.com/permalink.php?story_fbid=' + split_id[1] + '&id=' + split_id[0] + '" target="_blank">' + options.text_labels.share + '</a></span></div>';
						output += '</div>';
						
						if (this.likes !== undefined && this.likes.data !== undefined) {
							output += '<ul className="like-list">';
								for (var l = 0; l < this.likes.data.length; l++) {
									output += '<li className="like">';
										output += '<div className="meta-header">';
											output += '<div className="avatar"><a href="http://www.facebook.com/profile.php?id=' + this.likes.data[l].id + '" target="_blank" title="' + this.likes.data[l].name + '"><img src="' + (graphURL + this.likes.data[l].id + '/picture?type=' + options.avatar_size) + '" alt="' + this.likes.data[l].name + '" /></a></div>';
											output += '<div className="author"><a href="http://www.facebook.com/profile.php?id=' + this.likes.data[l].id + '" target="_blank" title="' + this.likes.data[l].name + '">' + this.likes.data[l].name + '</a>' + options.text_labels.likes.singular.replace('%', '') + '</div>';
										output += '</div>';
									output += '</li>';
								}
							output += '</ul>';
						}
						if (this.comments !== undefined && this.comments.data !== undefined) {
							output += '<ul className="comment-list">';
								for (var c = 0; c < this.comments.data.length; c++) {
									output += '<li className="comment">';
										output += '<div className="meta-header">';
											output += '<div className="avatar"><a href="http://www.facebook.com/profile.php?id=' + this.comments.data[c].from.id + '" target="_blank" title="' + this.comments.data[c].from.name + '"><img src="' + (graphURL + this.comments.data[c].from.id + '/picture?type=' + options.avatar_size) + '" alt="' + this.comments.data[c].from.name + '" /></a></div>';
											output += '<div className="author"><a href="http://www.facebook.com/profile.php?id=' + this.comments.data[c].from.id + '" target="_blank" title="' + this.comments.data[c].from.name + '">' + this.comments.data[c].from.name + '</a></div>';
											output += '<time className="date" datetime="' + this.comments.data[c].created_time + '" pubdate>' + timeToHuman(this.comments.data[c].created_time) + '</time>';
										output += '</div>';
										output += '<div className="message">' + modText(this.comments.data[c].message) + '</div>';
										output += '<time className="date" datetime="' + this.comments.data[c].created_time + '" pubdate>' + timeToHuman(this.comments.data[c].created_time) + '</time>';
									output += '</li>';
								}
							output += '</ul>';
						}
					output += '</li>';
	
					e.append(output);
				}
			});
		}).complete(function() {
			$('.facebook-loading', e).fadeOut(800, function() {
				$(this).remove();
				for (var p = 0; p < e.children('li').length; p++) {
					if (options.effect === 'none') {
						e.children('li').eq(p).show();
					} else if (options.effect === 'fade') {
						e.children('li').eq(p).delay(p*options.timeout).fadeIn(options.speed);
					} else {
						e.children('li').eq(p).delay(p*options.timeout).slideDown(options.speed, function() {
							$(this).css('overflow', 'visible');
						});
					}
				}
			});
			if ($.isFunction(options.on_complete)) {
				options.on_complete.call();
			}
		});
	
		function modText(text) {
			return nl2br(autoLink(escapeTags(text)));
		}
		function nl2br(str) {
			return str.replace(/(\r\n)|(\n\r)|\r|\n/g, '<br />');
		}
		function autoLink(str) {
			return str.replace(/((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g, '<a href="$1" target="_blank">$1</a>');
		}
		function escapeTags(str) {
			return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
		}
		function timeToHuman(time) {
			var timestamp = new Date(time*1000),
                dateString = timestamp.toGMTString(),
                time_difference = Math.round(new Date().getTime()/1000)-time;
			
			if (time_difference < 10) {
				return 'F&aring; sekunder siden';
			} else if (time_difference < 60) {
				return Math.round(time_difference) + ' sekunder siden';
			} else if (Math.round(time_difference/60) === 1) {
				return Math.round(time_difference/60) + ' minut siden';
			} else if (Math.round(time_difference/60) < 60) {
				return Math.round(time_difference/60) + ' minutter siden';
			} else if (Math.round(time_difference/(60*60)) === 1) {
				return Math.round(time_difference/(60*60)) + ' time siden';
			} else if (Math.round(time_difference/(60*60)) < 24) {
				return Math.round(time_difference/(60*60)) + ' timer siden';
			} else if (Math.round(time_difference/(60*60*24)) === 1) {
				return Math.round(time_difference/(60*60*24)) + ' dag siden';
			} else if (Math.round(time_difference/(60*60*24)) <= 10) {
				return Math.round(time_difference/(60*60*24)) + ' dage siden';
			} else {
				return options.text_labels.days[timestamp.getDay()] + ' d. ' + timestamp.getDate() + '. ' + options.text_labels.months[timestamp.getMonth()] + ' ' + timestamp.getFullYear();
			}
		}
	};
})(jQuery);
