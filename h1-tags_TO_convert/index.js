function changeHTMLTag() {
  //use only class
  var e = document.getElementsByClassName("Heading"); //by name
  e.outerHTML = "<h1>" + e.innerHTML + "</h1>";
  //use only id
  var ell = document.getElementById("id"); //by id use
  ell.outerHTML = "<h1>" + ell.innerHTML + "</h1>";
  var el = document.getElementById("replace_h3_tag_by_h2_tag"); // by id use
  el.outerHTML = "<h1>" + el.innerHTML + "</h1>";
  //without class and id
  var all_headings = document.getElementsByTagName("h4")[0];
  all_headings.outerHTML = "<h1>" + all_headings.innerHTML + "</h1>";
  var all_headings1 = document.getElementsByTagName("h5")[0];
  all_headings1.outerHTML = "<h1>" + all_headings1.innerHTML + "</h1>";
}
