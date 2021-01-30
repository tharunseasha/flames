"use strict";

function process(){
  
  let str1 = document.querySelector(".yname").value;
  let str2 = document.querySelector(".cname").value;
  str1 = str1.replace(" ", "");
  str2 = str2.replace(" ", "");
  let ar_str1 = [];
  let ar_str2 = [];
  for (let k = 0; k < str1.length; k++) {
    ar_str1.push(str1[k]);
  }
  for (let l = 0; l < str2.length; l++) {
    ar_str2.push(str2[l]);
  }

  for (let i = 0; i < ar_str1.length; i++) {
    for (let j = 0; j < ar_str2.length; j++) {
      if (ar_str1[i] === ar_str2[j]) {
        ar_str1[i] = "";
        ar_str2[j] = "";
      }
    }
  }
  let tot_str = ar_str1.concat(ar_str2).join("");
  console.log(tot_str, tot_str.length);

  const len_fstr = tot_str.length;
  console.log(len_fstr, typeof len_fstr);

  if (len_fstr > 0) {
    let fl_list = [
      "FRIEND",
      "LOVE",
      "AFFECTION",
      "MARRIAGE",
      "ENEMY",
      "SISTER",
    ];
    while (fl_list.length > 1) {
      let count = (len_fstr % fl_list.length) - 1;
      if (count >= 0) {
        let l_index = fl_list.slice(0, count);
        let r_index = fl_list.slice(count + 1);
        fl_list = r_index.concat(l_index);
      } else {
        fl_list = fl_list.slice(fl_list.length - 1);
      }
    }
    let relationship = fl_list[0];
    document.querySelector(".relation").classList.remove("hidden");
    document.querySelector(
      ".relation"
    ).textContent = `${str1.toUpperCase()}'s Relation ship with ${str2.toUpperCase()} is ${relationship}`;
  }
}
document.querySelector(".again").addEventListener("click",function(){
  document.querySelector(".yname").value = " ";
  document.querySelector(".cname").value = " ";
  document.querySelector(".relation").classList.add("hidden");
})

document.querySelector(".submit").addEventListener("click", process);
