function FindProxyForURL(url, host) {
  if (shExpMatch(host, "bitbarg.*")) {
    return "DIRECT";
  }
  return "SOCKS5 127.0.0.1:2334";
}
