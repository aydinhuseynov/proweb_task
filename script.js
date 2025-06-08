const companyData = [
  {
    name: "Anar Mammadov",
    position: "Frontend developer, XYZ Company",
    generalInfo:
      "QR Gate ilə vaxt və proses idarəçiliyində əvəzolunmaz bir vasitəyə çevrildi. Komandamızın fəaliyyətində şəffaflıq və nəzarət imkanları genişləndi.",
  },
  {
    name: "Leyla Əliyeva",
    position: "HR Meneceri, ABC Group",
    generalInfo:
      "Giriş-çıxış sistemlərini avtomatlaşdırmaq bizə həm vaxt, həm də insan resurslarına qənaət etməyə kömək etdi. Artıq hər şey daha asandır!",
  },
  {
    name: "Eldar Quliyev",
    position: "Maliyyə Direktoru, FinTech MMC",
    generalInfo:
      "Maliyyə analizləri üçün lazım olan əməkdaş mövcudluğunu daha dəqiq hesablaya bilirik. QR Gate bunun üçün çox rahat platformadır.",
  },
  {
    name: "Aysel Həsənova",
    position: "Marketinq üzrə mütəxəssis, Brandix",
    generalInfo:
      "İşçilərin davranış statistikalarını izləyərək marketinq fəaliyyətlərimizi daxili komandaya uyğunlaşdırmaqda QR Gate bizə yardımçı oldu.",
  },
  {
    name: "Tural Əliyev",
    position: "Əməliyyat Meneceri, Logix",
    generalInfo:
      "Əməliyyatların izlənməsi və resursların koordinasiyası üçün çox funksional bir alətdir. Komandamız gündəlik tapşırıqları daha sürətli yerinə yetirir.",
  },
  {
    name: "Nigar Məmmədova",
    position: "Biznes analitik, BakuSoft",
    generalInfo:
      "Verilənlərin toplanması və təhlili üçün mükəmməl inteqrasiya imkanları var. İndi daha məlumatlı qərarlar verə bilirik.",
  },
  {
    name: "Kamran Cəfərov",
    position: "Texniki rəhbər, NextGen",
    generalInfo:
      "QR Gate komandamızın gündəlik texniki nəzarətində əsas rol oynayır. Sadə interfeys və geniş funksionallıq təqdirəlayiqdir.",
  }
]


const toggleButton = document.getElementById("menuToggle");
const menu_icon = toggleButton.querySelector(".menu-icon");
const close_icon = toggleButton.querySelector(".close-icon");
const navbar_nav = document.getElementById("navbarNav");

const general_Info = document.querySelector(".general_info");
const name = document.querySelector(".name");
const position = document.querySelector(".position");
const companies_block = document.querySelector(".companies");

toggleButton.addEventListener("click", () => {
  const isShown = navbar_nav.classList.contains("show");

  if (isShown) {
    menu_icon.classList.remove("d-none");
    close_icon.classList.add("d-none");
  } else {
    menu_icon.classList.add("d-none");
    close_icon.classList.remove("d-none");
  }
});

navbar_nav.addEventListener("hidden.bs.collapse", () => {
  menu_icon.classList.remove("d-none");
  close_icon.classList.add("d-none");
});

navbar_nav.addEventListener("shown.bs.collapse", () => {
  menu_icon.classList.add("d-none");
  close_icon.classList.remove("d-none");
});



for (let i = 0; i < companyData.length; i++) {
  const companyDiv = document.querySelector(`.company${i + 1}`);
  if (companyDiv) {
    companyDiv.addEventListener("click", () => {
      general_Info.textContent = companyData[i].generalInfo;
      name.textContent = companyData[i].name;
      position.textContent = companyData[i].position;

      companies_block.classList.remove("slide-in");
      void companies_block.offsetWidth; 
      companies_block.classList.add("slide-in");
    });
  }
}