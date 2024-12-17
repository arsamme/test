function FindProxyForURL(url, host) {

        return "SOCKS 127.0.0.1:2334";

    if (shExpMatch(host, "slack.com") ||
        shExpMatch(host, "*.slack.com") ||
        shExpMatch(host, "*.slack-msgs.com") ||
        shExpMatch(host, "*.slack-files.com") ||
        shExpMatch(host, "*.slack-imgs.com") ||
        shExpMatch(host, "*.slack-edge.com") ||
        shExpMatch(host, "*.slack-core.com") ||
        shExpMatch(host, "*.slack-redir.net") ||
        shExpMatch(host, "iplocation.net")) {
        // Use SOCK proxy, or fall back to a DIRECT traffic.
        // ssh -D 8000 [user]@[server]
        return "SOCKS 127.0.0.1:2334";
    }

    return "DIRECT";
}
