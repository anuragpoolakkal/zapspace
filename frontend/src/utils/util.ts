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
  { category: "Cool Drinks", color: "#FFCC00", image: "https://static.vecteezy.com/system/resources/previews/011/619/421/original/wine-bottle-3d-render-icon-illustration-png.png" },
  { category: "Food Industry", color: "#FF0000", image: "https://cdn3d.iconscout.com/3d/premium/thumb/food-and-drink-5727926-4800418.png" },
  { category: "Handmade Crafts", color: "#FF99CC", image: "https://cdn3d.iconscout.com/3d/premium/thumb/crafting-6625182-5522772.png?f=webp" },
  { category: "Home Decor Crafts", color: "#66CCFF", image: "https://cdn3d.iconscout.com/3d/premium/thumb/home-6546378-5376641.png"},
  { category: "Plants", color: "#459544", image: "https://static.vecteezy.com/system/resources/previews/021/445/732/original/monstera-in-a-pot-tropical-plant-for-interior-decor-of-home-or-office-3d-icon-cartoon-style-rendering-illustration-png.png" },
  { category: "Pottery", color: "#8B4513", image: "https://cdn-icons-png.flaticon.com/512/2448/2448364.png" },
  { category: "Textile Art", color: "#FF66CC", image: "https://cdn3d.iconscout.com/3d/premium/thumb/fabric-8832447-7192376.png" },
];

export { serverURL, onboardingMessages, businessCategories };
