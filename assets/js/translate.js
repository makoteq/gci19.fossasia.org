var arrLang = {
    "en": {
        "students":"Students",
        "projects":"Projekty",
        "fossasiaOnSocialMedia":"FOSSASIA on Social Media",
        "footerText":"GCI2019 &copy; Theme created by",
        "viewMore":"Zobacz więcej",
        "mentors":"Mentorzy",
        "studentsDes":"Students who take part in Google Code-in with FOSSASIA",
        "latestContributions":"Latest Contributions",
        "Contributors":"Contributors",
        "projects":"Projects",
        "fossasiaDes":"Bringing together an inspiring community across borders and ages to form abetter future with Open Technologies and ICT",

    },
    "pl": {
        "students":"Studenci",
        "projects":"Projekty",
        "fossasiaOnSocialMedia":"Fossasia na mediach społecznościowych",
        "footerText":"GCI2019 © Motyw stworzony przez ",
        "viewMore":"Zobacz więcej",
        "mentors":"Mentorzy",
        "studentsDes":"Studenci którzy wzięli udział w Google Code-In razem z Fossasia",
        "latestContributions":"Ostatnie zmiany",
        "Contributors":"Uczestnicy",
        "projects":"Projekty",
        "fossasiaDes":"Łączymy w jedność kreatywną społeczność ponad podziałami wiekowymi dla lepszej przyszłości otwartych technologi i ICT"
    }
    };

    let list = ["en","pl"];
    let listText = ["English","Polski"];
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
    