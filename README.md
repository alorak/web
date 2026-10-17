# ALORAK Web

ALORAK'ın oyun, araçlar, eğitim ve bilim projelerini bir araya getiren statik web sitesi.

## Tasarım

- Anthropic'in tipografi ağırlıklı, sade yaklaşımından esinlenen ana sayfa
- **Oyun / Araçlar / Eğitim / Bilim** gezinmesi
- Navbar'da ayrılmış **TR / EN** dil seçimi; ilk ziyaret İngilizce, kullanıcı seçimi `localStorage` ile korunur; tüm sayfa ve proje detayları iki dilde
- Referans görseldeki gibi yuvarlatılmış, görselli proje kartları
- Kartlardan açılan erişilebilir detay penceresi, GitHub depo bağlantıları ve öne çıkan oyunlar için canlı uygulama bağlantıları
- Mobil uyumlu menü, klavye erişimi, düşük hareket tercihi desteği
- Harici font, framework, CDN veya çalışma zamanı bağımlılığı yok
- Navbar'da kare zeminsiz `ALORAK.` yazı logosu, sekme simgesinde uyumlu `A.` kullanılır.
- Önceki avatar görseli `sources/alorak-avatar.png` konumunda korunur.
- Kompakt navbar, daraltılmış sayfa boşlukları ve daha sıkı kart düzeni
- Kategori sayfaları yalnızca başlık/açıklama ile açılır; proje sayacı ve numaralı etiketler kaldırılmıştır
- Ana sayfada açıklama kutusu yerine `sources/hero-geometric-red.png` geometrik illüstrasyonu bulunur; turuncu üçgenleri marka bordosu `#ba0918` ile uyumludur
- Marka vurgularında `#ba0918` kullanılır; ana sayfadaki beş köşeli yıldız koyu laciverttir. Altbilgi tek satır içerik ve GitHub bağlantısı ile sunulur

Kart kapakları harici görsel dosyalar yerine hafif SVG illüstrasyonlardan üretilir. Projelerin Türkçe içerikleri `app.js` içindeki `sections` nesnesinde, İngilizce karşılıkları `enSections` içinde düzenlenebilir.

## Öne çıkan oyunlar

Oyun sayfasının ilk dört kartı aşağıdaki sıradadır ve detay penceresinden doğrudan canlı uygulamaya gider:

1. [brickids](https://alorak.github.io/brickids/)
2. [WebTrain](https://alorak.github.io/webtrain/)
3. [Sayı Çubukları](https://alorak.github.io/sayicubuk/)
4. [Sayma](https://alorak.github.io/sayma/)

## Bilim ve Araçlar öne çıkan uygulamalar

Bilim sayfasının ilk kartları: [Kristal Yapı](https://alorak.github.io/kristalyapi/), [Enerji](https://alorak.github.io/enerji/), [Dalgalar](https://alorak.github.io/dalgalar/).

Araçlar sayfasının ilk kartları: [EXS](https://alorak.github.io/exs/), [MathNote](https://alorak.github.io/mathnote/), [MarkNote](https://marknote.alorak.com/), [PDF Araçları](https://alorak.github.io/pdf/), [Gereksinim ve İş Takibi](https://alorak.github.io/gereksinimler/).

Bu öne çıkan kartların detay pencerelerindeki butonlar, GitHub depoları yerine doğrudan canlı uygulama adreslerine gider.

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
