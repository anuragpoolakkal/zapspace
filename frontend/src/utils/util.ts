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

const potteryProducts = [
	{
		name: "Koban Raku Art Pottery Vase",
		image: "https://i.etsystatic.com/29276225/c/3000/3000/0/0/il/e7463d/3486308746/il_600x600.3486308746_hr4m.jpg",
		description:
			"Handmade Ceramic Home Decor - KOBAN Raku Art Pottery Vase",
		price: "2757",
	},
	{
		name: "Italian Ceramic Art Pottery Jar",
		image: "https://i.etsystatic.com/11256618/r/il/7e1b83/4256352767/il_600x600.4256352767_znbc.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		price: "7889",
	},
	{
		name: "Orange Drop Unique Minimalistic Coffee Cup",
		image: "https://i.etsystatic.com/38257618/r/il/39395e/4934658034/il_600x600.4934658034_edhh.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		price: "3704",
	},
	{
		name: "Celadon Green Mug",
		image: "https://i.etsystatic.com/32612493/r/il/ccd298/3767381487/il_600x600.3767381487_8go5.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		price: "2518",
	},
	{
		name: "The Seeds of Life",
		image: "https://i.etsystatic.com/36766953/r/il/10d118/4026543828/il_600x600.4026543828_a95o.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		price: "10604",
	},
	{
		name: "Black Gazed Mojave Stoneware Ceramic Mug",
		image: "https://i.etsystatic.com/29447291/r/il/37872a/3312509035/il_600x600.3312509035_a87g.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		price: "1401",
	},
	{
		name: "Fern Mug",
		image: "https://i.etsystatic.com/6720393/c/750/750/157/0/il/e5bb6d/2252166340/il_600x600.2252166340_ofnl.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		price: "2121",
	},
	{
		name: "Large Ceramic Mug",
		image: "https://i.etsystatic.com/36516242/r/il/4a4038/4040270611/il_600x600.4040270611_3n74.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		price: "2545",
	},
];

const orders = [
	{
		product: {
			name: "Large Ceramic Mug",
			image: "https://i.etsystatic.com/36516242/r/il/4a4038/4040270611/il_600x600.4040270611_3n74.jpg",
		},
		order: 12,
		price: "23,000",
	},
	{
		product: {
			name: "Black Gazed Mojave Stoneware Ceramic Mug",
			image: "https://i.etsystatic.com/29447291/r/il/37872a/3312509035/il_600x600.3312509035_a87g.jpg",
		},
		order: 10,
		price: "14010",
	},
	{
		product: {
			name: "Fern Mug",
			image: "https://i.etsystatic.com/6720393/c/750/750/157/0/il/e5bb6d/2252166340/il_600x600.2252166340_ofnl.jpg",
		},
		order: 10,
		price: "15353",
	},
	{
		product: {
			name: "Orange Drop Unique Minimalistic Coffee Cup",
			image: "https://i.etsystatic.com/38257618/r/il/39395e/4934658034/il_600x600.4934658034_edhh.jpg",
		},
		order: 10,
		price: "12344",
	},
	{
		product: {
			name: "Black Gazed Mojave Stoneware Ceramic Mug",
			image: "https://i.etsystatic.com/29447291/r/il/37872a/3312509035/il_600x600.3312509035_a87g.jpg",
		},
		order: 10,
		price: "14010",
	},
	{
		product: {
			name: "Orange Drop Unique Minimalistic Coffee Cup",
			image: "https://i.etsystatic.com/38257618/r/il/39395e/4934658034/il_600x600.4934658034_edhh.jpg",
		},
		order: 10,
		price: "12344",
	},
	{
		product: {
			name: "Large Ceramic Mug",
			image: "https://i.etsystatic.com/36516242/r/il/4a4038/4040270611/il_600x600.4040270611_3n74.jpg",
		},
		order: 12,
		price: "23,000",
	},
	{
		product: {
			name: "Black Gazed Mojave Stoneware Ceramic Mug",
			image: "https://i.etsystatic.com/29447291/r/il/37872a/3312509035/il_600x600.3312509035_a87g.jpg",
		},
		order: 10,
		price: "14010",
	},
	{
		product: {
			name: "Fern Mug",
			image: "https://i.etsystatic.com/6720393/c/750/750/157/0/il/e5bb6d/2252166340/il_600x600.2252166340_ofnl.jpg",
		},
		order: 10,
		price: "15353",
	},
];

const businessCategories = [
	{
		category: "Cool Drinks",
		color: "#FFCC00",
		image: "https://static.vecteezy.com/system/resources/previews/011/619/421/original/wine-bottle-3d-render-icon-illustration-png.png",
	},
	{
		category: "Food Industry",
		color: "#FF0000",
		image: "https://cdn3d.iconscout.com/3d/premium/thumb/food-and-drink-5727926-4800418.png",
	},
	{
		category: "Handmade Crafts",
		color: "#FF99CC",
		image: "https://cdn3d.iconscout.com/3d/premium/thumb/crafting-6625182-5522772.png?f=webp",
	},
	{
		category: "Home Decor Crafts",
		color: "#66CCFF",
		image: "https://cdn3d.iconscout.com/3d/premium/thumb/home-6546378-5376641.png",
	},
	{
		category: "Plants",
		color: "#459544",
		image: "https://static.vecteezy.com/system/resources/previews/021/445/732/original/monstera-in-a-pot-tropical-plant-for-interior-decor-of-home-or-office-3d-icon-cartoon-style-rendering-illustration-png.png",
	},
	{
		category: "Pottery",
		color: "#8B4513",
		image: "https://cdn-icons-png.flaticon.com/512/2448/2448364.png",
	},
	{
		category: "Textile Art",
		color: "#FF66CC",
		image: "https://cdn3d.iconscout.com/3d/premium/thumb/fabric-8832447-7192376.png",
	},
];

export { serverURL, onboardingMessages, businessCategories, potteryProducts };
