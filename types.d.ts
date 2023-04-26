type Anime = {
  id: string;
  type: string;
  links: {
    self: string;
  };
  attributes: {
    createdAt: string;
    updatedAt: string;
    slug: string;
    synopsis: string;
    titles: {
      en_jp: string;
      ja_jp: string;
    };
    posterImage: {
      small: string;
      tiny: string;
      large: string;
      medium: string;
    };
    coverImage: {
      original: string;
    };
    averageRating: number;
    ageRatingGuide: string;
    status: string;
    youtubeVideoId: string;
  };
};
