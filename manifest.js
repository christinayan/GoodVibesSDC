{
  "name": "GoodVibes",
  "version": "1.0",
  "manifest_version": 2,
  "background": {
      "scripts": ["background.js"],
      "persistent": false
  },
  "content_scripts": [{
      "matches": ["<all_urls>"],
      "js": ["open-dialog.js"]
  }]
}
