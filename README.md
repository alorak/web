# ALORAK Web

ALORAK'ın oyun, araçlar, eğitim ve bilim projelerini bir araya getiren statik web sitesi.

## Tasarım

- Anthropic'in tipografi ağırlıklı, sade yaklaşımından esinlenen ana sayfa
- **Oyun / Araçlar / Eğitim / Bilim** gezinmesi
- Navbar'da ayrılmış **TR / EN** dil seçimi; ilk ziyaret İngilizce, kullanıcı seçimi `localStorage` ile korunur; tüm sayfa ve proje detayları iki dilde
- Referans görseldeki gibi yuvarlatılmış, görselli proje kartları
- Kartlardan açılan erişilebilir detay penceresi ve gerçek GitHub proje bağlantıları
- Mobil uyumlu menü, klavye erişimi, düşük hareket tercihi desteği
- Harici font, framework, CDN veya çalışma zamanı bağımlılığı yok
- Navbar'da kare zeminsiz `ALORAK.` yazı logosu, sekme simgesinde uyumlu `A.` kullanılır.
- Önceki avatar görseli `sources/alorak-avatar.png` konumunda korunur.
- Kompakt navbar, daraltılmış sayfa boşlukları ve daha sıkı kart düzeni
- Kategori sayfaları yalnızca başlık/açıklama ile açılır; proje sayacı ve numaralı etiketler kaldırılmıştır
- Ana sayfa açıklaması hafif renkli yuvarlatılmış panelde, altbilgi tek satır içerik ve GitHub bağlantısı ile sunulur

Kart kapakları harici görsel dosyalar yerine hafif SVG illüstrasyonlardan üretilir. Projelerin Türkçe içerikleri `app.js` içindeki `sections` nesnesinde, İngilizce karşılıkları `enSections` içinde düzenlenebilir.

## Yerelde çalıştırma

```sh
python3 -m http.server 8000
```

Ardından `http://localhost:8000` adresini açın.

## Sayfalar

- `#/` — Ana sayfa
- `#/oyun` — Oyun
- `#/araclar` — Araçlar
- `#/egitim` — Eğitim
- `#/bilim` — Bilim

Hash tabanlı gezinme sayesinde site, ek yönlendirme ayarı olmadan GitHub Pages üzerinde çalışır. Yayına almak için depo ayarlarından **Pages → Deploy from a branch → main / root** seçilebilir. PR birleştirilmeden `main` etkilenmez.

> Görsel kapaklar bu ilk sürümde temsili illüstrasyonlardır; gerçek uygulama ekran görüntüleri sonradan eklenebilir.
