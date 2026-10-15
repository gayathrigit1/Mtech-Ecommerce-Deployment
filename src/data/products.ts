
import type { Product } from "../types/product";

export const products: Product[] = [
    {
        productId: 1,
        productName: "Laptop",
        category: "Electronics",
        description: "15 inch laptop with high performance processor",
        price: 55000,
        stock: 10,
        imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
        rating: 4.5,
        status: "AVAILABLE"
    },
    {
        productId: 2,
        productName: "Smartphone",
        category: "Electronics",
        description: "Modern smartphone with excellent camera",
        price: 25000,
        stock: 15,
        imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
        rating: 4.3,
        status: "AVAILABLE"
    },
    {
        productId: 3,
        productName: "Headphones",
        category: "Electronics",
        description: "Wireless noise cancelling headphones",
        price: 3500,
        stock: 0,
        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        rating: 4.2,
        status: "OUT_OF_STOCK"
    },
    {
        productId: 4,
        productName: "Running Shoes",
        category: "Footwear",
        description: "Comfortable running shoes",
        price: 2800,
        stock: 20,
        imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        rating: 4.4,
        status: "AVAILABLE"
    },
    {
        productId: 5,
        productName: "Backpack",
        category: "Accessories",
        description: "Lightweight backpack for daily use",
        price: 1500,
        stock: 8,
        imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        rating: 4.1,
        status: "AVAILABLE"
    },
    {
    productId: 6,
    productName: "Smart Watch",
    category: "Electronics",
    description: "Smart watch with fitness and health tracking",
    price: 4500,
    stock: 12,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    rating: 4.6,
    status: "AVAILABLE"
    },
    {
    productId: 7,
    productName: "T-Shirt",
    category: "Clothing",
    description: "Comfortable cotton casual t-shirt",
    price: 999,
    stock: 25,
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    rating: 4.3,
    status: "AVAILABLE"
    },
    {
    productId: 8,
    productName: "Laptop Backpack",
    category: "Accessories",
    description: "Durable backpack suitable for laptops and daily use",
    price: 2200,
    stock: 10,
    imageUrl: "https://cdn.shopify.com/s/files/1/0364/7413/files/MacCase-iPad-Backpack-frnt-qtr.jpg?v=1766602069",
    rating: 4.5,
    status: "AVAILABLE"
    }
];