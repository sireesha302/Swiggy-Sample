CREATE TABLE [dbo].[RestaurantsData] (
    [Rid]            INT           NOT NULL,
    [RestaurantName] VARCHAR (500) NOT NULL,
    [AreaId]         INT           NOT NULL,
    [ResimageUrl]    VARCHAR (50)  NULL,
    [DeliveryType]   VARCHAR (50)  NULL,
    [DeliveryCharge] INT           NULL,
    [DeliveryTime]   INT           NULL,
    PRIMARY KEY CLUSTERED ([Rid] ASC),
    FOREIGN KEY ([AreaId]) REFERENCES [dbo].[Area] ([AreaId])
);

