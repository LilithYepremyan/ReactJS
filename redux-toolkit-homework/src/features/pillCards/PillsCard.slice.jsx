import { createSlice } from "@reduxjs/toolkit";

const PillCardsSlice = createSlice({
  name: "pills",
  initialState: {
    pills: [
      {
        id: 101,
        name: "Vitamin A",
        rating: 2,
        image:
          "https://www.vitaminexpress.org/_next/image?url=https%3A%2F%2Fimages.cdn.europe-west1.gcp.commercetools.com%2F783def08-dd2b-475d-b671-c397c0c2dbd7%2F6892-Vitamin-A-10000-iQGLu-nS.png&w=1920&q=70",
      },
      {
        id: 102,
        name: "Vitamin B",
        rating: 4,
        image:
          "https://www.vitahealth.com.my/wp-content/uploads/2024/02/Vitamin-B-complex-100s-front.png",
      },
      {
        id: 103,
        name: "Vitamin C",
        rating: 3,

        image:
          "https://vitahealth.com.my/wp-content/uploads/2024/02/vit-c-with-zinc-front-1.png",
      },
      {
        id: 104,
        name: "Vitamin D",
        rating: 5,

        image:
          "https://www.vitahealth.com.my/wp-content/uploads/2024/02/vit-D3-front-2.png",
      },
      {
        id: 105,
        name: "Headache Relief",
        rating: 4,

        image:
          "https://shop.radiantwonder.com/cdn/shop/products/headache-relief-tp_6deffa53-3c9d-4f74-8e4b-bcd33c03a984_300x300.png?v=1597966244",
      },
      {
        id: 106,
        name: "Eczema Cream",
        rating: 1,
        image:
          "https://www.davidjonespharmacy.com.au/assets/full/963546.png?20210309034946",
      },
    ],
  },
  reducers: {
    findPill: (state, action) => {
      console.log(action.payload, "action payload");
      state.pills = state.pills.filter((pill) =>
        pill.name.includes(action.payload)
      );
    },
    changeRating: (state, action) => {
      const { id, rating } = action.payload;
      const pill = state.pills.find((pill) => pill.id == id);
      if (pill) {
        pill.rating = rating;
      }
    },
  },
});

export const userReducer = PillCardsSlice.reducer;
export const { findPill, changeRating } = PillCardsSlice.actions;
