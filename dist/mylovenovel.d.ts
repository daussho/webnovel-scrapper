declare type Novel = {
    url: string;
    title: string;
    imageUrl: string;
    genre: string;
    status: string;
    newest: {
        title: string;
        date: string;
    };
    description: string;
};
declare const MyLoveNovel: {
    getNovelDetail: (url: string) => Promise<Novel>;
};
export default MyLoveNovel;
