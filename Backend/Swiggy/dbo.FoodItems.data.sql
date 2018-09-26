SET IDENTITY_INSERT [dbo].[FoodItems] ON
INSERT INTO [dbo].[FoodItems] ([Id], [RestaurantName], [Category], [Item Type], [Delivery type], [Price], [Delivery Charge]) VALUES (1, N'Pizza Hut', N'Veg', N'Pizza', N'Charge', 100, 30)
INSERT INTO [dbo].[FoodItems] ([Id], [RestaurantName], [Category], [Item Type], [Delivery type], [Price], [Delivery Charge]) VALUES (2, N'Pizza Hut', N'NonVeg', N'Pizza', N'Free', 100, 0)
INSERT INTO [dbo].[FoodItems] ([Id], [RestaurantName], [Category], [Item Type], [Delivery type], [Price], [Delivery Charge]) VALUES (3, N'Hyderabad Hosts', N'NonVeg', N'Chicken Lolipop', N'Charge', 130, 30)
INSERT INTO [dbo].[FoodItems] ([Id], [RestaurantName], [Category], [Item Type], [Delivery type], [Price], [Delivery Charge]) VALUES (4, N'Hyderabad Hosts', N'NonVeg', N'Chicken 65', N'Free', 90, 0)
INSERT INTO [dbo].[FoodItems] ([Id], [RestaurantName], [Category], [Item Type], [Delivery type], [Price], [Delivery Charge]) VALUES (5, N'Qube Cafe', N'Veg', N'Manchuria', N'Charge', 90, 40)
INSERT INTO [dbo].[FoodItems] ([Id], [RestaurantName], [Category], [Item Type], [Delivery type], [Price], [Delivery Charge]) VALUES (6, N'Qube Cafe', N'NonVeg', N'Chicken Rolls', N'Free', 90, 0)
INSERT INTO [dbo].[FoodItems] ([Id], [RestaurantName], [Category], [Item Type], [Delivery type], [Price], [Delivery Charge]) VALUES (7, N'Dominos', N'NonVeg', N'KFC', N'Charge', 200, 30)
INSERT INTO [dbo].[FoodItems] ([Id], [RestaurantName], [Category], [Item Type], [Delivery type], [Price], [Delivery Charge]) VALUES (8, N'Dominos', N'NonVeg', N'Burger', N'Free', 180, 0)
SET IDENTITY_INSERT [dbo].[FoodItems] OFF
