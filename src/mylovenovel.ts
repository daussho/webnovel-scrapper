import axios from "axios";
import cheerio from "cheerio";

const ROOT_DOMAIN = `https://www.mylovenovel.com/`;

type Novel = {
  url: string;
  title: string;
  imageUrl: string;
  author: string;
  genre: string;
  status: string;
  newest: {
    title: string;
    date: string;
  };
  description: string;
};

const getNovelDetail = async (url: string) => {
  const html = await axios.get(url).then((r) => r.data);

  const $ = cheerio.load(html);

  const [author, genre, status, tempNewest] = $(".detail p")
    .map((_i, el) => {
      return $(el).text().trim().split("：")[1];
    })
    .toArray();

  const novel: Novel = {
    url,
    title: $(".detail h1").text().trim(),
    imageUrl: $(".detail img").attr("src").trim(),
    author,
    genre,
    status,
    newest: {
      title: tempNewest,
      date: "",
    },
    description: "",
  };

  return novel;
};

const MyLoveNovel = {
  getNovelDetail,
};

export default MyLoveNovel;
