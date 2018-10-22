CREATE TABLE [dbo].[SignUp] (
    [Id]       INT           IDENTITY (1, 1) NOT NULL,
    [UserName] VARCHAR (50)  NOT NULL,
    [phNum]    VARCHAR (10)  NOT NULL,
    [pwd]      VARCHAR (50)  NOT NULL,
    [EmailId]  VARCHAR (50)  NOT NULL,
    [address]  VARCHAR (500) NULL,
    [Otp]      INT           NULL,
    CONSTRAINT [PK_SignUp] PRIMARY KEY CLUSTERED ([phNum] ASC)
);

