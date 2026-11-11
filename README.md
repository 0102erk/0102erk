# Can Erkurt Studio — Web Sitesi

Mimarlık · İç Mimarlık · Yat Tasarımı stüdyosu için tek sayfalık, statik web sitesi.
Herhangi bir derleme adımı gerekmez; `index.html` dosyasını açmanız yeterli.

## Yapı
```
index.html                 Sayfa iskeleti ve tüm metinler
assets/css/style.css       Tasarım (renkler en üstte :root içinde)
assets/js/main.js          Etkileşimler + PROJECTS listesi
assets/img/logo.svg        Logonun vektör hali
assets/img/favicon.svg     Tarayıcı sekmesi ikonu (c/e monogramı)
assets/img/projects/       Örnek proje görselleri
```

## Bölümler
Giriş (otomatik geçişli 3 disiplin görseli) · Stüdyo manifestosu ve rakamlar ·
Disiplinler (açılır liste, fareyle önizleme) · Filtrelenebilir projeler + detay penceresi ·
Çizim ↔ görsel karşılaştırma kaydırıcısı · Öne çıkan yat projesi · Süreç · İletişim formu.

## Yayına almadan önce değiştirilmesi gerekenler
- **Proje görselleri:** `assets/img/projects/` içindekiler stilize örnek çizimlerdir.
  Gerçek fotoğraf/render'larınızı (JPG/WebP, ~2000px genişlik) koyup
  `assets/js/main.js` içindeki `PROJECTS` listesinde `img`, başlık, açıklama ve
  bilgileri güncelleyin. Giriş görselleri `index.html` içindeki `hero__slide` bölümündedir.
- **İletişim bilgileri:** e-posta, telefon, adres ve sosyal medya linkleri
  (`index.html` ve `main.js` → `STUDIO_EMAIL`) yer tutucudur.
- **Rakamlar:** Stüdyo bölümündeki `data-count` değerleri örnektir.
- **Form:** Varsayılan olarak ziyaretçinin e-posta uygulamasını açar. Formspree vb.
  bir servis kullanacaksanız `main.js` içindeki `FORM_ENDPOINT` değerini doldurun.

## Yayınlama
GitHub Pages, Netlify veya Vercel'e klasörü olduğu gibi yükleyebilirsiniz.
Yerelde denemek için: `python3 -m http.server` → http://localhost:8000
