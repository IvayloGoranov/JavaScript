USE [Test]
GO
/****** Object:  Table [dbo].[Categories]    Script Date: 4.8.2017 г. 16:19:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categories](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nchar](150) NOT NULL,
	[Description] [nchar](300) NULL,
	[CreatedDate] [datetime] NOT NULL,
	[Color] [tinyint] NOT NULL,
	[IsDeleted] [bit] NOT NULL,
	[ModifiedDate] [datetime] NULL,
	[OrderNo] [int] NOT NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Products]    Script Date: 4.8.2017 г. 16:19:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](150) NOT NULL,
	[Price] [decimal](12, 2) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CategoryID] [int] NOT NULL,
	[IsDeleted] [bit] NOT NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Categories] ON 

INSERT [dbo].[Categories] ([ID], [Name], [Description], [CreatedDate], [Color], [IsDeleted], [ModifiedDate], [OrderNo]) VALUES (1, N'Fruits                                                                                                                                                ', N'Fruits description 123                                                                                                                                                                                                                                                                                      ', CAST(N'2010-01-01T00:00:00.000' AS DateTime), 0, 0, CAST(N'2017-08-03T14:46:11.243' AS DateTime), 1)
INSERT [dbo].[Categories] ([ID], [Name], [Description], [CreatedDate], [Color], [IsDeleted], [ModifiedDate], [OrderNo]) VALUES (2, N'Alcohol                                                                                                                                               ', NULL, CAST(N'2007-08-09T00:00:00.000' AS DateTime), 2, 0, CAST(N'2017-08-03T14:46:41.507' AS DateTime), 21)
INSERT [dbo].[Categories] ([ID], [Name], [Description], [CreatedDate], [Color], [IsDeleted], [ModifiedDate], [OrderNo]) VALUES (20, N'Vegetables                                                                                                                                            ', N'Eat them to be healthy!                                                                                                                                                                                                                                                                                     ', CAST(N'2017-08-02T10:02:29.153' AS DateTime), 0, 0, CAST(N'2017-08-03T14:46:39.380' AS DateTime), 31)
INSERT [dbo].[Categories] ([ID], [Name], [Description], [CreatedDate], [Color], [IsDeleted], [ModifiedDate], [OrderNo]) VALUES (21, N'Toys                                                                                                                                                  ', N'Toys for little children.                                                                                                                                                                                                                                                                                   ', CAST(N'2017-08-02T10:14:50.280' AS DateTime), 1, 0, CAST(N'2017-08-03T14:46:41.500' AS DateTime), 24)
INSERT [dbo].[Categories] ([ID], [Name], [Description], [CreatedDate], [Color], [IsDeleted], [ModifiedDate], [OrderNo]) VALUES (24, N'Computers                                                                                                                                             ', N'Desktop computers only!                                                                                                                                                                                                                                                                                     ', CAST(N'2017-08-02T10:18:40.593' AS DateTime), 0, 1, CAST(N'2017-08-03T14:18:54.210' AS DateTime), 2)
INSERT [dbo].[Categories] ([ID], [Name], [Description], [CreatedDate], [Color], [IsDeleted], [ModifiedDate], [OrderNo]) VALUES (25, N'Water                                                                                                                                                 ', NULL, CAST(N'2017-08-02T10:19:56.897' AS DateTime), 0, 1, CAST(N'2017-08-02T12:03:59.110' AS DateTime), 25)
INSERT [dbo].[Categories] ([ID], [Name], [Description], [CreatedDate], [Color], [IsDeleted], [ModifiedDate], [OrderNo]) VALUES (30, N'Bread                                                                                                                                                 ', NULL, CAST(N'2015-08-02T00:00:00.000' AS DateTime), 0, 0, CAST(N'2017-08-03T14:29:36.940' AS DateTime), 20)
INSERT [dbo].[Categories] ([ID], [Name], [Description], [CreatedDate], [Color], [IsDeleted], [ModifiedDate], [OrderNo]) VALUES (31, N'Pastries                                                                                                                                              ', NULL, CAST(N'2017-08-03T10:37:56.697' AS DateTime), 1, 0, CAST(N'2017-08-03T14:29:31.747' AS DateTime), 30)
INSERT [dbo].[Categories] ([ID], [Name], [Description], [CreatedDate], [Color], [IsDeleted], [ModifiedDate], [OrderNo]) VALUES (32, N'Miscelaneous                                                                                                                                          ', NULL, CAST(N'2017-08-03T10:40:49.263' AS DateTime), 0, 1, NULL, 32)
INSERT [dbo].[Categories] ([ID], [Name], [Description], [CreatedDate], [Color], [IsDeleted], [ModifiedDate], [OrderNo]) VALUES (33, N'Some stuff                                                                                                                                            ', NULL, CAST(N'2017-08-03T14:30:05.793' AS DateTime), 2, 0, CAST(N'2017-08-03T14:46:35.723' AS DateTime), 33)
SET IDENTITY_INSERT [dbo].[Categories] OFF
SET IDENTITY_INSERT [dbo].[Products] ON 

INSERT [dbo].[Products] ([ID], [Name], [Price], [CreatedDate], [CategoryID], [IsDeleted], [ModifiedDate]) VALUES (1, N'Bananas', CAST(2.70 AS Decimal(12, 2)), CAST(N'2015-07-08T00:00:00.000' AS DateTime), 1, 1, NULL)
INSERT [dbo].[Products] ([ID], [Name], [Price], [CreatedDate], [CategoryID], [IsDeleted], [ModifiedDate]) VALUES (2, N'Cherries', CAST(3.50 AS Decimal(12, 2)), CAST(N'2014-09-08T00:00:00.000' AS DateTime), 1, 0, CAST(N'2017-08-03T14:41:41.197' AS DateTime))
INSERT [dbo].[Products] ([ID], [Name], [Price], [CreatedDate], [CategoryID], [IsDeleted], [ModifiedDate]) VALUES (3, N'Oranges', CAST(2.20 AS Decimal(12, 2)), CAST(N'2016-08-07T00:00:00.000' AS DateTime), 1, 1, CAST(N'2017-08-01T12:57:59.273' AS DateTime))
INSERT [dbo].[Products] ([ID], [Name], [Price], [CreatedDate], [CategoryID], [IsDeleted], [ModifiedDate]) VALUES (4, N'Smirnoff', CAST(21.00 AS Decimal(12, 2)), CAST(N'2010-07-06T00:00:00.000' AS DateTime), 2, 0, CAST(N'2017-08-01T13:24:06.693' AS DateTime))
INSERT [dbo].[Products] ([ID], [Name], [Price], [CreatedDate], [CategoryID], [IsDeleted], [ModifiedDate]) VALUES (5, N'Flirt', CAST(9.00 AS Decimal(12, 2)), CAST(N'2012-07-06T00:00:00.000' AS DateTime), 2, 0, NULL)
INSERT [dbo].[Products] ([ID], [Name], [Price], [CreatedDate], [CategoryID], [IsDeleted], [ModifiedDate]) VALUES (6, N'Figs', CAST(7.50 AS Decimal(12, 2)), CAST(N'2017-08-01T13:13:47.450' AS DateTime), 1, 0, CAST(N'2017-08-01T13:14:13.897' AS DateTime))
INSERT [dbo].[Products] ([ID], [Name], [Price], [CreatedDate], [CategoryID], [IsDeleted], [ModifiedDate]) VALUES (7, N'Strawberries', CAST(6.00 AS Decimal(12, 2)), CAST(N'2017-08-01T13:14:07.767' AS DateTime), 1, 1, NULL)
INSERT [dbo].[Products] ([ID], [Name], [Price], [CreatedDate], [CategoryID], [IsDeleted], [ModifiedDate]) VALUES (11, N'Onion', CAST(0.90 AS Decimal(12, 2)), CAST(N'2017-08-02T10:02:51.490' AS DateTime), 20, 0, CAST(N'2017-08-02T10:03:00.063' AS DateTime))
INSERT [dbo].[Products] ([ID], [Name], [Price], [CreatedDate], [CategoryID], [IsDeleted], [ModifiedDate]) VALUES (12, N'Cucumber', CAST(2.20 AS Decimal(12, 2)), CAST(N'2017-08-02T10:04:06.170' AS DateTime), 20, 0, CAST(N'2017-08-02T10:04:21.173' AS DateTime))
INSERT [dbo].[Products] ([ID], [Name], [Price], [CreatedDate], [CategoryID], [IsDeleted], [ModifiedDate]) VALUES (13, N'Tomato', CAST(1.80 AS Decimal(12, 2)), CAST(N'2017-08-02T10:04:15.863' AS DateTime), 20, 0, NULL)
INSERT [dbo].[Products] ([ID], [Name], [Price], [CreatedDate], [CategoryID], [IsDeleted], [ModifiedDate]) VALUES (14, N'Bazooka', CAST(20.00 AS Decimal(12, 2)), CAST(N'2017-08-02T10:14:58.587' AS DateTime), 21, 0, NULL)
INSERT [dbo].[Products] ([ID], [Name], [Price], [CreatedDate], [CategoryID], [IsDeleted], [ModifiedDate]) VALUES (15, N'Samurai sword', CAST(15.00 AS Decimal(12, 2)), CAST(N'2017-08-02T10:15:09.553' AS DateTime), 21, 0, NULL)
INSERT [dbo].[Products] ([ID], [Name], [Price], [CreatedDate], [CategoryID], [IsDeleted], [ModifiedDate]) VALUES (16, N'Tank', CAST(50.00 AS Decimal(12, 2)), CAST(N'2017-08-02T10:15:25.337' AS DateTime), 21, 0, NULL)
INSERT [dbo].[Products] ([ID], [Name], [Price], [CreatedDate], [CategoryID], [IsDeleted], [ModifiedDate]) VALUES (17, N'Grandpa Frost', CAST(2.00 AS Decimal(12, 2)), CAST(N'2017-08-02T10:15:40.073' AS DateTime), 21, 0, NULL)
INSERT [dbo].[Products] ([ID], [Name], [Price], [CreatedDate], [CategoryID], [IsDeleted], [ModifiedDate]) VALUES (18, N'HP', CAST(3000.00 AS Decimal(12, 2)), CAST(N'2017-08-02T10:18:50.530' AS DateTime), 24, 0, NULL)
INSERT [dbo].[Products] ([ID], [Name], [Price], [CreatedDate], [CategoryID], [IsDeleted], [ModifiedDate]) VALUES (19, N'Dell', CAST(3000.00 AS Decimal(12, 2)), CAST(N'2017-08-02T10:18:56.753' AS DateTime), 24, 0, NULL)
INSERT [dbo].[Products] ([ID], [Name], [Price], [CreatedDate], [CategoryID], [IsDeleted], [ModifiedDate]) VALUES (20, N'Lenovo', CAST(2500.00 AS Decimal(12, 2)), CAST(N'2017-08-02T10:19:02.730' AS DateTime), 24, 0, NULL)
INSERT [dbo].[Products] ([ID], [Name], [Price], [CreatedDate], [CategoryID], [IsDeleted], [ModifiedDate]) VALUES (21, N'Mineral', CAST(2.00 AS Decimal(12, 2)), CAST(N'2017-08-02T10:20:08.450' AS DateTime), 25, 0, NULL)
INSERT [dbo].[Products] ([ID], [Name], [Price], [CreatedDate], [CategoryID], [IsDeleted], [ModifiedDate]) VALUES (22, N'Spring', CAST(1.80 AS Decimal(12, 2)), CAST(N'2017-08-02T10:20:32.057' AS DateTime), 25, 0, NULL)
INSERT [dbo].[Products] ([ID], [Name], [Price], [CreatedDate], [CategoryID], [IsDeleted], [ModifiedDate]) VALUES (1014, N'Bananas', CAST(2.20 AS Decimal(12, 2)), CAST(N'2017-08-03T08:38:34.313' AS DateTime), 1, 0, NULL)
INSERT [dbo].[Products] ([ID], [Name], [Price], [CreatedDate], [CategoryID], [IsDeleted], [ModifiedDate]) VALUES (1015, N'Small stuff', CAST(2.00 AS Decimal(12, 2)), CAST(N'2017-08-03T14:30:18.897' AS DateTime), 33, 0, NULL)
INSERT [dbo].[Products] ([ID], [Name], [Price], [CreatedDate], [CategoryID], [IsDeleted], [ModifiedDate]) VALUES (1016, N'Tomatoes', CAST(2.00 AS Decimal(12, 2)), CAST(N'2017-08-03T14:39:34.200' AS DateTime), 1, 0, NULL)
INSERT [dbo].[Products] ([ID], [Name], [Price], [CreatedDate], [CategoryID], [IsDeleted], [ModifiedDate]) VALUES (1017, N'Tomatoes', CAST(2.00 AS Decimal(12, 2)), CAST(N'2017-08-03T14:39:43.537' AS DateTime), 1, 1, NULL)
INSERT [dbo].[Products] ([ID], [Name], [Price], [CreatedDate], [CategoryID], [IsDeleted], [ModifiedDate]) VALUES (1018, N'Berries', CAST(5.00 AS Decimal(12, 2)), CAST(N'2017-08-03T14:41:19.787' AS DateTime), 1, 0, NULL)
SET IDENTITY_INSERT [dbo].[Products] OFF
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Categories] FOREIGN KEY([CategoryID])
REFERENCES [dbo].[Categories] ([ID])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Categories]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [CK_Products_Price] CHECK  (([Price]>=(0)))
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [CK_Products_Price]
GO
/****** Object:  StoredProcedure [dbo].[GetFilteredCategories]    Script Date: 4.8.2017 г. 16:19:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetFilteredCategories](
	@itemsCount int = 5,
	@nameFilter nvarchar(150) = NULL)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	
    IF(@nameFilter IS NULL)
		SELECT TOP (@itemsCount) c.ID, c.[Name], c.Color, c.OrderNo, SUM(p.Price) AS [ProductsTotalPrice]  
		FROM Categories c
		LEFT OUTER JOIN Products p
		ON c.ID = p.CategoryID
		WHERE c.IsDeleted = 0
		GROUP BY c.ID, c.[Name], c.Color, c.OrderNo
	ELSE
		SELECT TOP (@itemsCount) c.ID, c.[Name], c.Color, c.OrderNo, SUM(p.Price) AS [ProductsTotalPrice]   
		FROM Categories c
		LEFT OUTER JOIN Products p
		ON c.ID = p.CategoryID
		WHERE c.IsDeleted = 0 AND c.[Name] = @nameFilter
		GROUP BY c.ID, c.[Name], c.Color, c.OrderNo
END




GO
/****** Object:  StoredProcedure [dbo].[GetProductsByCategoryID]    Script Date: 4.8.2017 г. 16:19:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetProductsByCategoryID](
	@categoryId int)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	
    SELECT ID, [Name], CreatedDate, Price
	FROM Products
	WHERE CategoryID = @categoryId AND IsDeleted = 0
	ORDER BY CreatedDate DESC
END


GO
