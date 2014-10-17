XClass(function (xcl, XWiki) {
  var props = XWiki.model.properties;
  xcl.addProp("targetFossology", props.XString.create({
    "prettyName": "targetFossology",
    "size": "30"
  }));
  xcl.addProp("Sonar_host", props.XString.create({
    "prettyName": "Sonar_host",
    "size": "30"
  }));
  xcl.addProp("Sonar_resourceKey", props.XString.create({
    "prettyName": "Sonar_resourceKey",
    "size": "30"
  }));
  xcl.addProp("JIRA_URL", props.XString.create({
    "prettyName": "JIRA_URL",
    "size": "30"
  }));
  xcl.addProp("JIRA_AnonymousAuthentication", props.XString.create({
    "prettyName": "JIRA_AnonymousAuthentication",
    "size": "30"
  }));
  xcl.addProp("JIRA_Username", props.XString.create({
    "prettyName": "JIRA_Username",
    "size": "30"
  }));
  xcl.addProp("JIRA_Password", props.XString.create({
    "prettyName": "JIRA_Password",
    "size": "30"
  }));
  xcl.addProp("targetMarkmail", props.XString.create({
    "prettyName": "targetMarkmail",
    "size": "30"
  }));
  xcl.addProp("targetMaven", props.XString.create({
    "prettyName": "targetMaven",
    "size": "30"
  }));
  xcl.addProp("GitRepositoryURI", props.XString.create({
    "prettyName": "GitRepositoryURI",
    "size": "30"
  }));
});
