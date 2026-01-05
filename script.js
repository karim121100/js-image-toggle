function toggleImage() {
  const img = document.getElementById("photo");

  if (img.style.display === "none") {
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
}
