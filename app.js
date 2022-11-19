function updateColor(event) {
  let xColor = (255 * event.pageX) / 1536;
  let yColor = (255 * event.pageY) / 714;
  document.body.style.backgroundColor = `rgb(${xColor}, 0, ${yColor})`;
  console.log(event.pageX, event.pageY);
}

document.addEventListener("mousemove", updateColor);
// document.addEventListener("mouseenter", updateColor, false);
// document.addEventListener("mouseleave", updateColor, false);
