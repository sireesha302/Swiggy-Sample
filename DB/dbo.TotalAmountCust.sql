CREATE TABLE [dbo].[TotalAmountCust] (
    [OrderId]        INT          IDENTITY (1350, 1) NOT NULL,
    [phNum]          VARCHAR (10) NOT NULL,
    [Price]          INT          NOT NULL,
    [DeliveryCharge] INT          NOT NULL,
    [Topay]          INT          NOT NULL,
    [ActualPrice]    INT          NOT NULL,
    [itemName]       VARCHAR (50) NOT NULL,
    [Quantity]       INT          NOT NULL,
    [RestaurantName] VARCHAR (50) NOT NULL,
    [Status]         VARCHAR (50) NULL,
    [OrderedDate]    VARCHAR (50) NULL,
    [CancelledTime]  VARCHAR (50) NULL,
    [RestaurantId]   INT          NOT NULL,
    [DeliveryBoy]    VARCHAR (50) NULL,
    [BoyphNum]       VARCHAR (50) NULL,
    PRIMARY KEY CLUSTERED ([OrderId] ASC),
    FOREIGN KEY ([RestaurantId]) REFERENCES [dbo].[RestaurantsData] ([Rid]),
    FOREIGN KEY ([phNum]) REFERENCES [dbo].[SignUp] ([phNum])
);

