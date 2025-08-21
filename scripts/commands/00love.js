const fs = require("fs");
module.exports.config = {
  name: "00love",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@গো্ঁধু্ঁলি্ঁর্ঁ আ্ঁলো্ঁ")==0 || (event.body.indexOf(",")==0 || (event.body.indexOf(",")==0 || (event.body.indexOf(",")==0)))) {
		var msg = {
				body: "কিরে ওরে ডাকিস কেন দেখস না আমার বস ফাহিম এর সাথে বিজি আসে গাধা 🤬🤬 :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
