/**
  {
    "api":1,
    "name":"Defang",
    "description":"Defangs dangerous URLs and other IOCs",
    "author":"Ross",
    "icon":"link",
    "tags":"defang,url,ioc"
  }
**/

function main(input) {
    url = input.text;
    url = url.replace(/\./g, "[.]");
    url = url.replace(/http/gi, "hXXp");
    url = url.replace(/:\/\//g, "[://]");
    input.text = url;
}