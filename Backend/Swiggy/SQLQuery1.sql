Create procedure insertUser(

@UserName VARCHAR(50),
@phNum  VARCHAR(50),
@pwd   VARCHAR(50),
@EmailId VARCHAR(50),
@address VARCHAR(50)
)
as
BEGIN
Insert into SignUp (UserName,phNum,pwd,EmailId,address) Values(@UserName,@phNum,@pwd,@EmailId,@address)

END

