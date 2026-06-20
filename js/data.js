// ============================================================
//  HOW TO ADD A NEW PROJECT:
//  1. Add a new folder under photos/ with your project name
//  2. Add your JPG photos to that folder
//  3. Copy one of the entries below and fill in:
//     - id:         folder name (must match the folder you created)
//     - title:      name shown on the card and project page
//     - year:       year shown under title on hover (leave "" for none)
//     - photoCount: total slots including future photos
//     - photos:     list of your photo filenames inside that folder
// ============================================================

const projects = [
  {
    id: "madrid-canon-r50",
    title: "Madrid Canon R50",
    year: "",
    thumbnail: "photos/thumbnails/madrid-canon-r50.jpg",
    photoCount: 19,
    photos: [
      "IMG_0072.JPG",
      "IMG_0076.JPG",
      "IMG_0077.JPG",
      "IMG_0088.JPG",
      "IMG_0097 copy.jpg",
      "IMG_0098 copy.jpg",
      "IMG_0100.JPG",
      "IMG_0103 copy.jpg",
      "IMG_0105.JPG",
      "IMG_0109.JPG",
      "IMG_0113.JPG",
      "IMG_0115.JPG",
      "IMG_0116 copy.jpg",
      "IMG_0122.JPG",
      "IMG_0124 copy.jpg",
      "IMG_0129.JPG",
      "IMG_0184.JPG",
      "IMG_0190.JPG",
      "IMG_0202.JPG"
    ]
  },
  {
    id: "madrid-film",
    title: "Madrid Film",
    year: "",
    thumbnail: "photos/thumbnails/madrid-film.jpg",
    photoCount: 20,
    photos: [
      "000013030001.jpg",
      "000013030003.jpg",
      "000013030005.jpg",
      "000013030006.jpg",
      "000013030007.jpg",
      "000013030008.jpg",
      "000013030009.jpg",
      "000013030011.jpg",
      "000013030014.jpg",
      "000013030015.jpg",
      "000013030016.jpg",
      "000013040002.jpg",
      "000013040036.jpg"
    ]
  },
  {
    id: "cars-on-film",
    title: "Cars on Film",
    year: "",
    thumbnail: "photos/thumbnails/cars-on-film.jpg",
    photoCount: 25,
    photos: [
      "000013030024.jpg",
      "000013030026.jpg",
      "000013030027.jpg",
      "000013030029.jpg",
      "000013030031.jpg",
      "000013030034.jpg",
      "000013030036.jpg",
      "000013030037.jpg"
    ]
  },
  {
    id: "nyc-chinatown-car-show-2026",
    title: "NYC Chinatown Car Show 2026",
    year: "",
    thumbnail: "photos/thumbnails/nyc-chinatown-car-show-2026.jpg",
    photoCount: 15,
    photos: [
      "IMG_0002.JPG",
      "IMG_0003.JPG",
      "IMG_0004.JPG",
      "IMG_0011.JPG",
      "IMG_0014.JPG",
      "IMG_0025.JPG",
      "IMG_0028.JPG"
    ]
  },
  {
    id: "boston",
    title: "Boston",
    year: "",
    thumbnail: "photos/thumbnails/boston.jpg",
    photoCount: 22,
    photos: []
  },
  {
    id: "gardens",
    title: "Gardens",
    year: "2025",
    thumbnail: "photos/thumbnails/gardens.jpg",
    photoCount: 19,
    photos: [
      "IMG_0425.JPG",
      "IMG_0428.JPG",
      "IMG_0437_1.jpg",
      "IMG_0440_1.jpg",
      "IMG_0442-1.jpg",
      "IMG_0444-1.jpg",
      "IMG_0453.JPG",
      "IMG_0456.JPG",
      "IMG_0461-1.jpg",
      "IMG_0462-1.jpg",
      "IMG_0466-1.jpg",
      "IMG_0468.JPG",
      "IMG_0471.JPG",
      "IMG_0486.JPG"
    ]
  },
  {
    id: "chicago",
    title: "Chicago",
    year: "2025",
    thumbnail: "photos/thumbnails/chicago.jpg",
    photoCount: 17,
    photos: [
      "IMG_0361.JPG",
      "IMG_0364.JPG",
      "IMG_0365.JPG",
      "IMG_0370.JPG",
      "IMG_0373.JPG",
      "IMG_0384.JPG",
      "IMG_0385.JPG",
      "IMG_0386.JPG",
      "IMG_0387_1.jpg",
      "IMG_0388.JPG",
      "IMG_0394.JPG",
      "IMG_0395.JPG",
      "IMG_0489.JPG",
      "IMG_0490.JPG",
      "IMG_0493.JPG",
      "IMG_0495.JPG",
      "IMG_0496.JPG"
    ]
  },
  {
    id: "south-korea",
    title: "South Korea",
    year: "2025",
    thumbnail: "photos/thumbnails/south-korea.jpg",
    photoCount: 60,
    photos: [
      "000067070004.JPEG",
      "000067070009.JPEG",
      "000067070011.JPEG",
      "000067070013.JPEG",
      "000067070015.JPEG",
      "000067070016.JPEG",
      "000067070017.JPEG",
      "000067070019.JPEG",
      "000067070021.JPEG",
      "000088950002.JPEG",
      "000088950003.JPEG",
      "000088950005.JPEG",
      "000088950010.JPEG",
      "000088950011.JPEG",
      "000088950012.JPEG",
      "000088950013.JPEG",
      "000088950014.JPEG",
      "000088950015.JPEG",
      "000088950016.JPEG",
      "000088950024.JPEG",
      "000088950025.JPEG",
      "000088950026.JPEG",
      "000088950027.JPEG",
      "000088950029.JPEG",
      "000088950030.JPEG",
      "000088950034.JPEG",
      "000088950036.JPEG",
      "000088950037.JPEG",
      "P1010012.JPG",
      "P1010013.JPG",
      "P1010015.JPG",
      "P1010016.JPG",
      "P1010017.JPG",
      "P1010018.JPG",
      "P1010021.JPG",
      "P1010022.JPG",
      "P1010023.JPG",
      "P1010024.JPG",
      "P1010027.JPG",
      "P1010029.JPG",
      "P1010030.JPG",
      "P1010034.JPG",
      "P1010035.JPG",
      "P1010036.JPG",
      "P1010044.JPG",
      "P1010055.JPG",
      "P1010057.JPG",
      "P1010058.JPG",
      "P1010059.JPG"
    ]
  },
  {
    id: "dallas",
    title: "Dallas",
    year: "2024",
    thumbnail: "photos/thumbnails/dallas.jpg",
    photoCount: 15,
    photos: [
      "DSCF0108.jpeg",
      "DSCF0112.jpeg",
      "DSCF0113.jpeg",
      "DSCF0126.jpeg",
      "DSCF0131.jpeg",
      "DSCF0137.jpeg",
      "IMG_0083.JPG",
      "IMG_0093-2.JPG",
      "IMG_0098.JPG"
    ]
  }
];
