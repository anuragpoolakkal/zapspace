const serverURL = "http://localhost:6001";

const onboardingMessages = [
  {
    title: "What is the name of your business?",
  },
  {
    title: "Describe your business in a few words.",
  },
  {
    title: "What category does your business fall under?",
  },
];

const businessCategories = [
  { category: "Bottle Art", color: "#FFCC00" },
  { category: "Food Industry", color: "#FF0000" },
  { category: "Handmade Crafts", color: "#FF99CC" },
  { category: "Home Decor Crafts", color: "#66CCFF" },
  { category: "Plants", color: "#99FF33" },
  { category: "Pottery", color: "#8B4513" },
  { category: "Textile Art", color: "#FF66CC" },
  { category: "Weavery", color: "#9933FF" },
];

export { serverURL, onboardingMessages, businessCategories };
