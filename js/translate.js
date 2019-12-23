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

    // Process translation
    $(function() {
      $('.translate').click(function() {
        var lang = $(this).attr('id');
        $('.lang').each(function(index, item) {
          $(this).text(arrLang[lang][$(this).attr('key')]);
        });
      });
    });