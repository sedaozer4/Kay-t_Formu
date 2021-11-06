function koduret() {
    var kodlar = "";
    for (var i = 1; i <= 6; i++) {
        if (Math.round(Math.random()) == i)
            kodlar = kodlar + String.fromCharCode(65 + 25 * Math.random());
        else
            kodlar = kodlar + String.fromCharCode(48 + 29 * Math.random());
    }
    document.getElementById("uretilenkod").value = kodlar; //random ürettiğimiz kod uretilenkod id sine aktarılır
}
//Burada random kod üretip sayfamızda kullanıcaz.

function odaklan(x) {
    if (x == "ad" || x == "soyad" || x == "yas" || x == "kullanici_adi" || x == "sifre1" || x == "sifre2" || x == "email" || x == "tel") {
        document.getElementById(x).value = "";
        document.getElementById(x).style.background = "#fff8bb";
        document.getElementById(x).style.color = "#000";
    }
}

function islem() {

    var kural, yazi;
    yazi = document.getElementById("email").value;
    kural = /.+@.+\.+./;

    if (document.getElementById("ad").value == "Adınızı yazınız") {
        document.getElementById("aduyari").innerHTML = "Adınızı yazmalısınız!";
    }
    if (document.getElementById("soyad").value == "Soyadınızı yazınız") {
        document.getElementById("soyaduyari").innerHTML = "Soyadınızı yazmalısınız!";
    }
    if (document.getElementById("yas").value == "Yaşınızı yazınız") {
        document.getElementById("yasuyari").innerHTML = "Yaşınızı yazmalısınız!";
    }
    if (document.getElementById("sifre1").value == "Şifrenizi yazınız") {
        document.getElementById("sifre1uyari").innerHTML = "Şifrenizi yazmalısınız!";
    }
    if (document.getElementById("sifre2").value == "Şifrenizi tekrar yazınız") {
        document.getElementById("sifre2uyari").innerHTML = "Şifrenizi tekrar yazmalısınız!";
    }
    if (document.getElementById("email").value == "Mailinizi giriniz") {
        document.getElementById("mailuyari").innerHTML = "Mailinizi yazmalısınız!";
    }
    elseif(!kural.test(yazi))
    document.getElementById("mailuyari").innerHTML = "Geçersiz mail!";


    if (document.getElementById("tel").value == "Telefonuzu giriniz") {
        document.getElementById("teluyari").innerHTML = "Telefonuzu yazmalısınız!";
    }
    if (document.getElementById("gecmis").value == " ") {
        document.getElementById("ozgecmisuyari").innerHTML = "Özgeçmişinizi yazmalısınız!";
    }
    if (document.getElementById("girilenkod").value == "Güvenlik kodunu giriniz") {
        document.getElementById("guvenlikuyari").innerHTML = "Güvenlik kodunu yazmalısınız!";

    }
    elseif(document.getElementById("uretilenkod").value != document.getElementById("girilenkod").value)
    document.getElementById("guvenlikuyari").innerHTML = "Güvenlik kodu yanlış!";

}