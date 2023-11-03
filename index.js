const padlOrel = Math.random()< 0.5
//document.body.innerHTML += padlOrel

if (padlOrel) {
    const vysl = document.querySelector(".vysledek")
    vysl.textContent = "Padl orel"
    const mince = document.querySelector(".mince")
    mince.classList.add ("mince--orel")
} else {
    vysl.textContent = "Padla panna"
    mince.classList.add ("mince--panna")
}
