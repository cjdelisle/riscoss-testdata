XClass(function (xcl, XWiki) {
  var props = XWiki.model.properties;
  xcl.addProp("layer", props.XString.create({
    "customDisplay": "",
    "picker": "0",
    "prettyName": "Layer",
    "size": "30",
    "validationMessage": "",
    "validationRegExp": ""
  }));
  xcl.addProp("rdids", props.StaticList.create({
    "customDisplay": "",
    "displayType": "input",
    "picker": "0",
    "prettyName": "Risk Data IDs",
    "sort": "none",
    "validationMessage": "",
    "validationRegExp": ""
  }));
});
