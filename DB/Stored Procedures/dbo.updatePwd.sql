Create procedure updatePwd(
@phNum VARCHAR(50),
@pwd VARCHAR(50)
)
as
BEGIN
update SignUp set pwd=@pwd where phNum=@phNum
END