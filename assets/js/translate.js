var arrLang = {
    "en": {
        "students":"Students",
        "projects":"Projects",
        "fossasiaOnSocialMedia":"FOSSASIA on Social Media",
        "footerText":"GCI2019 © Theme created by",
        "viewMore":"View More",
        "mentors":"Mentors",
        "studentsDes":"Students who take part in Google Code-in with FOSSASIA",
        "latestContributions":"Latest Contributions",
        "Contributors":"Contributors",
        "projects":"Projects",
        "fossasiaDes":"Bringing together an inspiring community across borders and ages to form a better future with Open Technologies and ICT",
        "fossasiaAlbum":"FOSSASIA Album",
        "fossasiaAlbumDesc":"Take a look at FOSSASIA's fascinating image gallery!",
        "visitGallery":"Visit Gallery",
        "studentBlogs":"Student Blogs",
        "studentProjects":"Student Projects 🎓",
        "studentExplore":"Explore the projects built by our students 💕"
    },
    "pl": {
        "students":"Studenci",
        "projects":"Projekty",
        "fossasiaOnSocialMedia":"Fossasia na mediach społecznościowych",
        "footerText":"GCI2019 © Motyw stworzony przez",
        "viewMore":"Zobacz więcej",
        "mentors":"Mentorzy",
        "studentsDes":"Studenci którzy wzięli udział w Google Code-In razem z Fossasia",
        "latestContributions":"Ostatnie zmiany",
        "Contributors":"Uczestnicy",
        "projects":"Projekty",
        "fossasiaDes":"Łączymy w jedność kreatywną społeczność ponad podziałami wiekowymi dla lepszej przyszłości otwartych technologi i ICT",
        "fossasiaAlbum":"FOSSASIA Album (not translated)",
        "fossasiaAlbumDesc":"Take a look at FOSSASIA's fascinating image gallery! (not translated)",
        "visitGallery":"Visit Gallery (not translated)",
        "studentBlogs":"Student Blogs (not translated)",
        "studentProjects":"Student Projects 🎓 (not translated)",
        "studentExplore":"Explore the projects built by our students 💕 (not translated)"
    },
    "ind": {
      "students":"Siswa",
      "projects":"Projek",
      "fossasiaOnSocialMedia":"FOSSASIA di Sosial Media",
      "footerText":"GCI2019 &copy; Tema dibuat oleh",
      "viewMore":"Lihat Selengkapnya",
      "mentors":"Mentor",
      "studentsDes":"Siswa yang mengambil bagian dalam Google Code-in dengan FOSSASIA",
      "latestContributions":"Kontribusi Terbaru",
      "Contributors":"Kontributor",
      "projects":"Projek",
      "fossasiaDes":"Menyatukan komunitas yang menginspirasi lintas batas dan usia untuk membentuk masa depan yang lebih baik dengan Teknologi Terbuka dan TIK",
      "fossasiaAlbum":"Album FOSSASIA",
      "fossasiaAlbumDesc":"Mari lihat foto-foto menarik di FOSSASIA gallery",
      "visitGallery":"Kunjungi Galeri",
      "studentBlogs":"Blog Siswa",
      "studentProjects":"Projek Siswa 🎓",
      "studentExplore":"Jelajahi beberapa projek yang dibuat oleh siswa kami 💕"
    }
    };

    let list = ["en","ind","pl"];
    let listText = ["English","Indonesia","Polski"];
    let lang = "en";
     // Process translation
    function changeLang(language) {
      $('.lang').each(function(index, item) {
        $(this).text(arrLang[language][$(this).attr('key')]);
      });
      lang=language
      pushLang();
    };

    function pushLang() {
      let langList = ''
      for (let i = 0; i < list.length; i++) {          
        if (list[i] != lang) {       
          langList += '<div  style="cursor:pointer;" class="media d-flex align-items-center" onclick=changeLang(\''+list[i]+'\')>\
          <div class="media-body ml-3">\
          <h5 class="heading text-primary mb-md-1">'+listText[i]+'</h5>\
          <p class="description d-none d-md-inline-block mb-0">Change to '+listText[i]+'</p>\
          </div>\
          </div>'
        }
      }
      $('#langDrop').html(langList);
    }
    $(document).ready(function(){
      changeLang(lang);
    });
    