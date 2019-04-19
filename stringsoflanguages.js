import React from 'react';
import LocalizedStrings from 'react-native-localization';
const strings = new LocalizedStrings({
  in: {
    first:"Hai, Apa Kabar ?",
    second:"Saya baik-baik saja?",
  },
  "ma":{
    first:"Apa kabar?",
    second:"Baik ?",
  },
  "en":{
    first:"How are You ?",
    second:"I am fine ",
  },
"fr":{
  first:"comment allez vous",
  second:"je vais bien",
}
});
export default strings;