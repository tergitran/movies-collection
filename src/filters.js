const countrycode = [
  {
    code: "all",
    name: "- Tất cả -",
  },
  {
    code: "th",
    name: "Thái Lan",
  },
  {
    code: "zh",
    name: "Trung Quốc",
  },
  {
    code: "zh",
    name: "Hong Kong",
  },
  {
    code: "zh",
    name: "Đài Loan",
  },
  {
    code: "fr",
    name: "Pháp",
  },
  {
    code: "ru",
    name: "Nga",
  },
  {
    code: "en",
    name: "Anh",
  },
  {
    code: "en",
    name: "Mỹ",
  },
  {
    code: "es",
    name: "Tây Ban Nha",
  },
  {
    code: "ko",
    name: "Hàn Quốc",
  },
  {
    code: "ja",
    name: "Nhật Bản",
  },
  {
    code: "pt",
    name: "Braxin",
  },
  {
    code: "hi",
    name: "Ấn Độ",
  },
  {
    code: "it",
    name: "Italia",
  },
  {
    code: "id",
    name: "Indonesia",
  },
  {
    code: "tl",
    name: "Philippines",
  },
];

const nam = [
  "- Tất cả -",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
  "2012",
  "Trước 2012",
];

const thoiluong = [
  { id: 0, name: "- Tất cả -", value: [-1] },
  { id: 1, name: "Dưới 1 tiếng", value: [60] },
  { id: 2, name: "1 - 1.5 tiếng", value: [60, 90] },
  { id: 3, name: "1.5 - 2 tiếng", value: [90, 120] },
  { id: 4, name: "2 - 2.5 tiếng", value: [120, 250] },
  { id: 5, name: "Trên 2.5 tiếng", value: [150] },
];

const sapxep = ["- Không -", "Ngày phát hành", "Điểm đánh giá"];

export { countrycode, nam, thoiluong, sapxep };
