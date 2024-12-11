import { defineStore } from "pinia";

export const useTestStore = defineStore("test", {
   state: () => ({
      // lastTestObject: {
      //    test_slug: "vosmitsvetovoj-test-lyushera",
      //    answers_colors: [
      //       [
      //          {
      //             id: 6,
      //             title: "#231F20",
      //             image: null,
      //             points: 2,
      //          },
      //          {
      //             id: 11,
      //             title: "#C55223",
      //             image: null,
      //             points: 1,
      //          },
      //          {
      //             id: 7,
      //             title: "#1D9772",
      //             image: null,
      //             points: 3,
      //          },
      //          {
      //             id: 8,
      //             title: "#D42481",
      //             image: null,
      //             points: 4,
      //          },
      //          {
      //             id: 12,
      //             title: "#004983",
      //             image: null,
      //             points: 5,
      //          },
      //          {
      //             id: 13,
      //             title: "#F12F23",
      //             image: null,
      //             points: 6,
      //          },
      //          {
      //             id: 9,
      //             title: "#F2DD00",
      //             image: null,
      //             points: 7,
      //          },
      //          {
      //             id: 10,
      //             title: "#98938D",
      //             image: null,
      //             points: 8,
      //          },
      //       ],
      //       [
      //          {
      //             id: 6,
      //             title: "#231F20",
      //             image: null,
      //             points: 0,
      //          },
      //          {
      //             id: 10,
      //             title: "#98938D",
      //             image: null,
      //             points: 0,
      //          },
      //          {
      //             id: 11,
      //             title: "#C55223",
      //             image: null,
      //             points: 0,
      //          },
      //          {
      //             id: 8,
      //             title: "#D42481",
      //             image: null,
      //             points: 0,
      //          },
      //          {
      //             id: 12,
      //             title: "#004983",
      //             image: null,
      //             points: 0,
      //          },
      //          {
      //             id: 7,
      //             title: "#1D9772",
      //             image: null,
      //             points: 0,
      //          },
      //          {
      //             id: 13,
      //             title: "#F12F23",
      //             image: null,
      //             points: 0,
      //          },
      //          {
      //             id: 9,
      //             title: "#F2DD00",
      //             image: null,
      //             points: 0,
      //          },
      //       ],
      //    ],
      //    answers: null,
      //    type: 2,
      // }, // Инициализация свойства
      lastTestObject: null,
   }),
   actions: {
      setLastTest(obj) {
         this.lastTestObject = obj;
      },
   },
});
