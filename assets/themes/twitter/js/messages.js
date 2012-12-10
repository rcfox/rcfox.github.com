function urlify(s) {
    return s.replace(/((https?:\/\/)([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?)/g,'<a href="$1">$1</a>');
}

var github_event_handler = {
    PushEvent : function (data,msg)
    {
        var com = data.payload.commits;
        var num_commits = data.payload.size;
        var repo = data.repo.name;
        if(num_commits > 1) {
            msg.url = "https://github.com/" + repo + "/compare/" + data.payload.before + "..." + com[com.length-1].sha;
        } else {
            msg.url = "https://github.com/" + repo + "/commit/" + com[0].sha;
        }
        msg.text = "Pushed " + num_commits + " commit" + (num_commits == 1 ? "" : "s") + " to <a href=\"https://github.com/" + repo + "\">" + repo + "</a>: <ul>"
        if(com) {
            for(var c = 0; c < com.length; ++c) {
                msg.text += "<li>" + com[c].message + "</li>";
            }
        }
        msg.text += "</ul>";
        return msg;
    },
    CreateEvent : function (data,msg)
    {
        var repo = data.repo.name;
        if(data.payload.ref_type == "branch" || data.payload.ref_type == "tag") {
            var ref = data.payload.ref;
            var ref_url = 'https://github.com/'+repo+'/tree/'+ref;
            var ref_link = '<a href="'+ref_url+'">'+ref+'</a>';
            var repo_link = '<a href="https://github.com/'+repo+'">'+repo+'</a>';
            msg.text = "Created the " + ref_link + " " + data.payload.ref_type + " in the " + repo_link + " repo."
            msg.url = ref_url;
        } else {
            return;
        }
        return msg;
    },
    CommitCommentEvent : function (data,msg) {},
    DeleteEvent : function (data,msg) {},
    DownloadEvent : function (data,msg) {},
    FollowEvent : function (data,msg) {},
    ForkEvent : function (data,msg) {},
    ForkApplyEvent : function (data,msg) {},
    GistEvent : function (data,msg) {},
    GollumEvent : function (data,msg) {},
    IssueCommentEvent : function (data,msg) {},
    IssuesEvent : function (data,msg) {},
    MemberEvent : function (data,msg) {},
    PublicEvent : function (data,msg) {},
    PullRequestEvent : function (data,msg) {},
    PullRequestReviewCommentEvent : function (data,msg) {},
    TeamAddEvent : function (data,msg) {},
    WatchEvent : function (data,msg) {},
};

function github_user_activity (response) {
    var meta = response.meta;
    var data = response.data;
    for(var i = 0; i < data.length; ++i) {
        var msg = { time: data[i].created_at,
                    source: "github",
                    text : data[i].type };
        messages.push(github_event_handler[data[i].type](data[i],msg));
    }    
    next_source();
}

function twitter_user_activity (response) {
    for(var i = 0; i < response.length; ++i) {
        var msg = { time : Date.parseExact(response[i].created_at,"ddd MMM dd HH:mm:ss zzz yyyy").toISOString(),
                    source : "twitter",
                    url : "https://twitter.com/RyanFox/status/" + response[i].id_str };
        var content = "";
        if(response[i].retweeted_status) {
            content += "RT @"+response[i].retweeted_status.user.screen_name+": <br/>";
            content += response[i].retweeted_status.text;
        } else {
            content = response[i].text;
        }
        msg.text = 
            urlify(content)
            .replace(/@(.+?)\b/g,'<a href="https://twitter.com/$1">@$1</a> ');
        messages.push(msg);
    }
    next_source();
}

function gplus_user_activity (response) {
    var items = response.items;
    for(var i = 0; i < items.length; ++i) {
        if(items[i].verb == "share") { continue; }

        var msg = { time : items[i].published,
                    text : "",
                    source : "gplus",
                    url : items[i].object.url };
        var comment = items[i].object.content || "";
        var attachment = "";
        var attachment_title = "";
        var attachment_url = "";
        var has_attachment = false;
        var has_image = false;
        var image = "";
        if(items[i].object.attachments) {
            attachment = items[i].object.attachments[0].content;
            attachment_title = items[i].object.attachments[0].displayName;
            attachment_url = items[i].object.attachments[0].url;
            has_attachment = attachment != "";
            if(items[i].object.attachments[0].image) {
                image = items[i].object.attachments[0].image.url;
                has_image = image != "";
            }
        }
        var has_comment = comment != "";
        if(has_image) {
            msg.text += "<div class=\"imgbox\"><img src=\"" + image + "\"/></div>";
        }
        msg.text += "<div class=\"textbox\">";
        if(has_attachment) {
            msg.text += 'Shared: <a href="' + attachment_url + '">' + attachment_title + '</a><br/>';
            msg.text += urlify(attachment);
        }
        if(has_attachment && has_comment) {
            msg.text += "<br/><br/>Commented: <br/>";
        }
        msg.text += comment;
        msg.text += "</div>";
        messages.push(msg);
    }
    next_source();
}

function hackernews_user_activity (response) {
    for(var i = 0; i < response.results.length; ++i) {
        var item = response.results[i].item;
        console.log(item);
        var msg = { time : item.create_ts,
                    text : "",
                    source : "hackernews",
                    url : "http://news.ycombinator.com/item?id=" + item.id };
        if(item.type == "submission") {
            msg.text += '<a href="'+item.url+'">'+item.title+'</a>';
        }
        if(item.type == "comment") {
            msg.text += '<p>'+item.text+'</p>';
            msg.text += '<p class="response">In response to: <a href="http://news.ycombinator.com/item?id='+item.discussion.id+'">'+item.discussion.title+'</a></p>';
        }
        messages.push(msg);
    }
    next_source();
}

var sources = [
    "https://api.github.com/users/rcfox/events?callback=github_user_activity",
    "https://www.googleapis.com/plus/v1/people/113431013843451438802/activities/public?callback=gplus_user_activity&key=AIzaSyCYJsoof7xtrehdw-mBdC-Afr8IMPNyceI",
    "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=ryanfox&exclude_replies=true&count=100&include_rts=true&callback=twitter_user_activity",
    "http://api.thriftdb.com/api.hnsearch.com/items/_search?pretty_print=true&filter[fields][username]=rcfox&sortby=create_ts%20desc&callback=hackernews_user_activity&limit=30",
];

var messages = [];

function next_source() {
    if(sources.length > 0) {
        var script = document.createElement("script");
        script.src = sources.pop();
        document.body.appendChild(script);
    } else {        
        messages.sort(function(one,two) {
            var a = one.time,
            b = two.time;
            return (a<b?-1:(a>b?1:0));  
        }).reverse();
        
        for(var i = 0; i < messages.length; ++i) {
            if(!messages[i]) { continue; }

            var time = Date.parse(messages[i].time.replace("T"," ").replace(/\..*/,"").replace("Z","")).toString("MMMM d, yyyy - HH:mm");
            var div = document.createElement("div");
            div.className = "message";
            div.className += " " + messages[i].source;
            div.innerHTML += '<div class="timebox"><a href="'+messages[i].url+'"><img src="' + asset_path + messages[i].source +'.png"/>' + time + '</a></div>';
            div.innerHTML += messages[i].text;
            document.getElementById("messages").appendChild(div);
        }
    }
}

next_source();
