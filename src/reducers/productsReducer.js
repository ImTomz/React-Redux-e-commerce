const products = [
  { name: "letenim",
    price: 10,
    featured: true,
    id: 1,
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue lacus ut urna gravida, non tempus ex aliquet. Donec nec elit interdum, vulputate felis eu, imperdiet velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse id magna eget velit facilisis vestibulum eu in orci. Nullam et tincidunt diam, non sollicitudin urna. Nam sed elementum ex, sit amet aliquam sem. Integer efficitur accumsan ornare." },
  { name: "2product",
    price: 30,
    featured: true,
    id: 2,
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue lacus ut urna gravida, non tempus ex aliquet. Donec nec elit interdum, vulputate felis eu, imperdiet velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse id magna eget velit facilisis vestibulum eu in orci." },
  { name: "shubylak",
    price: 15,
    featured: true,
    id: 3,
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue lacus ut urna gravida, non tempus ex aliquet. Donec nec elit interdum, vulputate felis eu, imperdiet velit. ." },
  { name: "4product",
    price: 13,
    id: 4,
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue lacus ut urna gravida, non tempus ex aliquet. Donec nec elit interdum, vulputate felis eu, imperdiet velit. Pellentesque habitant morbi tristique senectus ." },
  { name: "5product",
    price: 13,
    id: 5,
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue lacus ut urna gravida, non tempus ex aliquet. Donec nec elit interdum, vulputate felis eu, imperdiet velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse id magna eget velit facilisis vestibulum eu in orci." },
  { name: "5product",
    price: 13,
    id: 6,
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue lacus ut urna gravida, non tempus ex aliquet. Donec nec elit interdum, vulputate felis eu, imperdiet velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse id magna eget velit facilisis vestibulum eu in orci. Nullam et tincidunt diam, non sollicitudin urna. Nam sed elementum ex, sit amet aliquam sem. Integer efficitur accumsan ornare." },
  { name: "5product",
    price: 13,
    id: 7,
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue lacus ut urna gravida, non tempus ex aliquet. Donec nec elit interdum, vulputate felis eu, imperdiet velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse id magna eget velit facilisis vestibulum eu in orci. Nullam et tincidunt diam, non sollicitudin urna. Nam sed elementum ex, sit amet aliquam sem. Integer efficitur accumsan ornare." },
  { name: "5product",
    price: 13,
    id: 8,
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue lacus ut urna gravida, non tempus ex aliquet. Donec nec elit interdum, vulputate felis eu, imperdiet velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse id magna eget velit facilisis vestibulum eu in orci. Nullam et tincidunt diam, non sollicitudin urna. Nam sed elementum ex, sit amet aliquam sem. Integer efficitur accumsan ornare." },
  { name: "5product",
    price: 13,
    id: 9,
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue lacus ut urna gravida, non tempus ex aliquet. Donec nec elit interdum, vulputate felis eu, imperdiet velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse id magna eget velit facilisis vestibulum eu in orci. Nullam et tincidunt diam, non sollicitudin urna. Nam sed elementum ex, sit amet aliquam sem. Integer efficitur accumsan ornare." },
  { name: "5product",
    price: 13,
    id: 10,
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue lacus ut urna gravida, non tempus ex aliquet. Donec nec elit interdum, vulputate felis eu, imperdiet velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse id magna eget velit facilisis vestibulum eu in orci. Nullam et tincidunt diam, non sollicitudin urna. Nam sed elementum ex, sit amet aliquam sem. Integer efficitur accumsan ornare." }
];

const productsReducer = (state = products, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
