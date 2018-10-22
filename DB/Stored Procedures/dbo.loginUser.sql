Create Procedure loginUser(
@phNum VARCHAR(50),
@pwd VARCHAR(50)
)
as
BEGIN
select * from SignUp where phNum=@phNum and pwd=@pwd
END