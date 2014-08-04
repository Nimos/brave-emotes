
doEmotes = function () {
	var file = chrome.extension.getURL('berachs/theme')

	$.get(file, function (data) {
		var emotes = {};
		data = data.split("\n");

		for (var x=6;x<data.length;x++) {
			var line = data[x].split(/\s+/);
			
			for (var y=2;y<line.length;y++) {
				if (line[y] == "") continue; //for some reason I have to do this, help!
				emotes[line[y]] = line[1];
			}
		}	

		$('.comment-content').each(function () {//doing each comment on its own because the brave forums js went nuts when I did the same on the whole body

				var html = $(this).html();
				for (var key in emotes) {
					html = html.replace(key, "<img src='"+chrome.extension.getURL('berachs/')+emotes[key]+"'>");
				}
	
			$(this).html(html);
		});
	});
}

doEmotes()