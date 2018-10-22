CREATE TABLE [dbo].[DeliveryBoys] (
    [Id]          INT          IDENTITY (1, 1) NOT NULL,
    [Rid]         INT          NOT NULL,
    [DeliveryBoy] VARCHAR (50) NULL,
    [BoyphNum]    VARCHAR (50) NULL,
    [BoyStatus]   VARCHAR (50) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    FOREIGN KEY ([Rid]) REFERENCES [dbo].[RestaurantsData] ([Rid])
);

