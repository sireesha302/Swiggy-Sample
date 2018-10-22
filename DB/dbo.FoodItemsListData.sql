CREATE TABLE [dbo].[FoodItemsListData] (
    [Rid]      INT          NOT NULL,
    [ItemName] VARCHAR (50) NOT NULL,
    [ItemType] VARCHAR (50) NOT NULL,
    [Price]    INT          NOT NULL,
    [Quantity] VARCHAR (50) NOT NULL,
    [ImageUrl] VARCHAR (50) NULL,
    [Plate]    INT          NULL,
    FOREIGN KEY ([Rid]) REFERENCES [dbo].[RestaurantsData] ([Rid])
);

