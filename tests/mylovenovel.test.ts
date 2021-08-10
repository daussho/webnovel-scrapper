import { MyLoveNovel } from "../src/index";

test("getNovelDetail", async () => {
  const url = "https://www.mylovenovel.com/Masked-Knight-12200/";

  const data = await MyLoveNovel.getNovelDetail(url);

  expect(data.url).toBe(url);
  expect(data.title).toBe("Masked Knight");
  expect(data.imageUrl).toBe(
    "https://www.mylovenovel.com/upload/images/article/20200924/1Masked-Knight-193x278.jpg"
  );
  expect(data.author).toBe("Dancing ;Tiao Wu ;跳舞");
  expect(data.genre).toBe("Action");
  expect(data.status).toBe("Completed");
  expect(data.newest.title).toBe("Chapter 338(End)");
  expect(data.newest.date).toBe("2021-08-03 22:19");
  expect(data.description).toBe(
    `In a world where magic and sorcery flourish came a tale of a nobody who grew into a legend. Partake in the conquests and tribulations of a great army where warriors live day-to-day, seeking the thrill of combat. Experience heart-rending drama and hilarious situations while awaiting the impending arrival of the malevolent evil stirring in the darkest depths of the world`
  );
});
