const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://pbs.twimg.com/media/Cuwdl_MWgAAGVMm.jpg",
      id: 1,
      LinkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl:
        "https://vignette.wikia.nocookie.net/berserk/images/7/7a/Manga_E224_Berserker_Armor.png",
      id: 2,
      LinkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      LinkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      LinkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl: "https://pbs.twimg.com/media/CuqKhWtWYAA8fr_.jpg",
      size: "large",
      id: 5,
      LinkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
