CREATE TABLE [dbo].[Area] (
    [AreaId]   INT          NOT NULL,
    [AreaName] VARCHAR (50) NOT NULL,
    [CityId]   INT          NOT NULL,
    PRIMARY KEY CLUSTERED ([AreaId] ASC),
    FOREIGN KEY ([CityId]) REFERENCES [dbo].[City] ([Id])
);

