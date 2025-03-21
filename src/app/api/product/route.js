import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  const productData = [
    {
      id: "KID001",
      name: "Casual T-Shirt",
      category: "Kids Clothing",
      price: 12.99,
      currency: "USD",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Green"],
      stock: 25,
      images: [
        "https://plus.unsplash.com/premium_photo-1724296696869-59cc80d104c4?q=80&w=1974",
      ],
    },
    {
      id: "KID002",
      name: "Printed Hoodie",
      category: "Kids Clothing",
      price: 24.99,
      currency: "USD",
      sizes: ["S", "M", "L"],
      colors: ["Black", "Gray"],
      stock: 18,
      images: [
        "https://plus.unsplash.com/premium_photo-1698305282759-0d295cbb96d6?q=80&w=1962",
      ],
    },
    {
      id: "KID003",
      name: "Denim Jacket",
      category: "Kids Clothing",
      price: 34.99,
      currency: "USD",
      sizes: ["M", "L", "XL"],
      colors: ["Blue", "Black"],
      stock: 12,
      images: [
        "https://plus.unsplash.com/premium_photo-1697183203524-3e7c6da4d4e1?q=80&w=1974",
      ],
    },
    {
      id: "KID004",
      name: "Winter Sweater",
      category: "Kids Clothing",
      price: 19.99,
      currency: "USD",
      sizes: ["XS", "S", "M", "L"],
      colors: ["White", "Beige"],
      stock: 15,
      images: [
        "https://images.unsplash.com/photo-1686823939646-69f76240e778?q=80&w=1976",
      ],
    },
    {
      id: "KID005",
      name: "Striped Shirt",
      category: "Kids Clothing",
      price: 14.99,
      currency: "USD",
      sizes: ["S", "M", "L"],
      colors: ["Yellow", "Blue"],
      stock: 22,
      images: [
        "https://images.unsplash.com/photo-1583656345883-5189c01c024f?q=80&w=2126",
      ],
    },
    {
      id: "KID006",
      name: "Graphic Sweatshirt",
      category: "Kids Clothing",
      price: 27.99,
      currency: "USD",
      sizes: ["M", "L"],
      colors: ["Gray", "Black"],
      stock: 10,
      images: [
        "https://images.unsplash.com/photo-1578897367002-2873f26520fd?q=80&w=1965",
      ],
    },
    {
      id: "KID007",
      name: "Fleece Jacket",
      category: "Kids Clothing",
      price: 29.99,
      currency: "USD",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Navy Blue"],
      stock: 20,
      images: [
        "https://plus.unsplash.com/premium_photo-1697183203538-08c30b0a6709?q=80&w=1974",
      ],
    },
    {
      id: "KID008",
      name: "Casual Shorts",
      category: "Kids Clothing",
      price: 15.99,
      currency: "USD",
      sizes: ["S", "M", "L"],
      colors: ["Blue", "Khaki"],
      stock: 30,
      images: [
        "https://plus.unsplash.com/premium_photo-1697183202005-0f506eb7d014?q=80&w=1974",
      ],
    },
    {
      id: "KID009",
      name: "Full Sleeve T-Shirt",
      category: "Kids Clothing",
      price: 17.99,
      currency: "USD",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White"],
      stock: 28,
      images: [
        "https://plus.unsplash.com/premium_photo-1707816501026-e618c34026da?q=80&w=1974",
      ],
    },
    {
      id: "KID010",
      name: "Summer Dress",
      category: "Kids Clothing",
      price: 21.99,
      currency: "USD",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Pink", "Light Blue"],
      stock: 16,
      images: [
        "https://images.unsplash.com/photo-1630345910963-1a697bb5262d?q=80&w=1974",
      ],
    },
    {
      id: "KID001",
      name: "Casual T-Shirt",
      category: "Kids Clothing",
      price: 12.99,
      currency: "USD",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Green"],
      stock: 25,
      images: [
        "https://plus.unsplash.com/premium_photo-1697183203294-f846144fde19?q=80&w=1974",
      ],
    },
    {
      id: "KID002",
      name: "Printed Hoodie",
      category: "Kids Clothing",
      price: 24.99,
      currency: "USD",
      sizes: ["S", "M", "L"],
      colors: ["Black", "Gray"],
      stock: 18,
      images: [
        "https://images.unsplash.com/photo-1638110006382-1480f3d4b98c?q=80&w=1943",
      ],
    },
    {
      id: "KID003",
      name: "Denim Jacket",
      category: "Kids Clothing",
      price: 34.99,
      currency: "USD",
      sizes: ["M", "L", "XL"],
      colors: ["Blue", "Black"],
      stock: 12,
      images: [
        "https://plus.unsplash.com/premium_photo-1723575737806-ecd7f74bf3a1?q=80&w=2016",
      ],
    },
    {
      id: "KID004",
      name: "Winter Sweater",
      category: "Kids Clothing",
      price: 19.99,
      currency: "USD",
      sizes: ["XS", "S", "M", "L"],
      colors: ["White", "Beige"],
      stock: 15,
      images: [
        "https://images.unsplash.com/photo-1728163807630-0f30b4eb9390?q=80&w=1974",
      ],
    },
    {
      id: "KID005",
      name: "Striped Shirt",
      category: "Kids Clothing",
      price: 14.99,
      currency: "USD",
      sizes: ["S", "M", "L"],
      colors: ["Yellow", "Blue"],
      stock: 22,
      images: [
        "https://images.unsplash.com/photo-1664982803698-b6b514e9928b?q=80&w=1974",
      ],
    },
    {
      id: "KID006",
      name: "Graphic Sweatshirt",
      category: "Kids Clothing",
      price: 27.99,
      currency: "USD",
      sizes: ["M", "L"],
      colors: ["Gray", "Black"],
      stock: 10,
      images: [
        "https://images.unsplash.com/photo-1661776091539-f6f0874d14b3?q=80&w=1974",
      ],
    },
    {
      id: "KID007",
      name: "Fleece Jacket",
      category: "Kids Clothing",
      price: 29.99,
      currency: "USD",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Navy Blue"],
      stock: 20,
      images: [
        "https://images.unsplash.com/photo-1714889307579-3dabfd972c49?q=80&w=1974",
      ],
    },
    {
      id: "KID008",
      name: "Casual Shorts",
      category: "Kids Clothing",
      price: 15.99,
      currency: "USD",
      sizes: ["S", "M", "L"],
      colors: ["Blue", "Khaki"],
      stock: 30,
      images: [
        "https://plus.unsplash.com/premium_photo-1722859248384-8cfdcaaa9ce1?q=80&w=1976",
      ],
    },
    {
      id: "KID009",
      name: "Full Sleeve T-Shirt",
      category: "Kids Clothing",
      price: 17.99,
      currency: "USD",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White"],
      stock: 28,
      images: [
        "https://plus.unsplash.com/premium_photo-1707816501030-d931ca6a5354?q=80&w=1974",
      ],
    },
    {
      id: "KID010",
      name: "Summer Dress",
      category: "Kids Clothing",
      price: 21.99,
      currency: "USD",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Pink", "Light Blue"],
      stock: 16,
      images: [
        "https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?q=80&w=1921",
      ],
    },
  ];

  return NextResponse.json({ data: productData });
}
