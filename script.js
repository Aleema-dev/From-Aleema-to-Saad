function openLetter() {
  const env = document.querySelector(".envelope");
  env.classList.toggle("open");

  const text = `My dear Saad,

I made this little website just for you, because you mean so much to me.
You make me feel safe, happy, and understood in ways I never thought possible.
Every moment with you is special, and I’m grateful for all our memories and the ones we haven’t made yet.
Thank you for being you.

Love,
Aleema ♡`;

  let i = 0;
  const speed = 35;
  const target = document.getElementById("loveText");
  target.innerHTML = "";

  function typeWriter() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
}
