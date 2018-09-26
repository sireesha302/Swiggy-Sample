using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Net;
using System.IO;
using System.Net;
using System.Data;
using System.Net.Mail;
using System.Configuration;
using System.Collections.Specialized;

namespace Swiggy.Models
{
    public class DataAccess
    {
        string  connectionString = ConfigurationSettings.AppSettings.Get("ConString");
       // SqlConnection connection = new SqlConnection(connectionString);
        SqlConnection connection = new SqlConnection("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Swiggy;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
        public IEnumerable<Cities> GetCities()
        {
            try
            {
                connection.Open();

                SqlCommand cmnd = new SqlCommand("select * from City", connection);
                SqlDataReader reader = cmnd.ExecuteReader();
                List<Cities> list = new List<Cities>();

                while (reader.Read())
                {
                    Cities item = new Cities();
                    item.cityId = Convert.ToInt32(reader["Id"]);
                    item.cityName = reader["CityName"].ToString();

                    list.Add(item);
                }

                connection.Close();
                return list;
            }
            catch
            {
                throw;
            }
        }
        public IEnumerable<AreaNames> GetAreaNames()
        {
            try
            {
                connection.Open();

                SqlCommand cmnd = new SqlCommand("select * from Area", connection);
                SqlDataReader reader = cmnd.ExecuteReader();
                List<AreaNames> list = new List<AreaNames>();

                while (reader.Read())
                {
                    AreaNames item = new AreaNames();
                    item.AreaId = Convert.ToInt32(reader["AreaId"]);
                    item.Areaname = reader["AreaName"].ToString();

                    list.Add(item);
                }

                connection.Close();
                return list;
            }
            catch
            {
                throw;
            }
        }


        /*  public IEnumerable<Locations> GetSwiggyData()
          {

              try
              {

                  connection.Open();
                  SqlCommand cmd = new SqlCommand("select * from Locations", connection);
                  SqlDataReader rdr = cmd.ExecuteReader();

                  List<Locations> list = new List<Locations>();
                  while (rdr.Read())
                  {
                      Locations item = new Locations();
                      item.Id = Convert.ToInt32(rdr["Id"]);
                      item.Area = rdr["Area"].ToString();
                      item.City = rdr["City"].ToString();
                      list.Add(item);
                  }

                  connection.Close();

                  return list;
              }
              catch
              {
                  throw;
              }

          }





          public IEnumerable<Restaurants> GetItems()
          {
              try
              {
                  connection.Open();

                  SqlCommand cmnd = new SqlCommand("select * from Foodies",connection);
                  SqlDataReader reader = cmnd.ExecuteReader();
                  List<Restaurants> list = new List<Restaurants>();

                  while (reader.Read())
                  {
                      Restaurants rs = new Restaurants();
                      rs.ResName = reader["RestaurantName"].ToString();
                      rs.item = reader["ItemType"].ToString();
                      rs.price = Convert.ToInt32(reader["Price"]);
                      rs.Deliverytype= reader["Deliverytype"].ToString();
                      rs.Deliverycharge=Convert.ToInt32(reader["DeliveryCharge"]);
                          rs.category = reader["Category"].ToString();
                      rs.AreaName = reader["AreaName"].ToString();
                      list.Insert(list.Count, rs);
                  }

                  connection.Close();
                  return list;
              }
              catch
              {
                  throw;
              }
          }



          public IEnumerable<RestaurantsData> GetRestaurantsDatas()
          {
              try
              {
                  connection.Open();

                  SqlCommand cmnd = new SqlCommand("select * from RestaurantData", connection);
                  SqlDataReader reader = cmnd.ExecuteReader();
                  List<RestaurantsData> list = new List<RestaurantsData>();

                  while (reader.Read())
                  {
                      RestaurantsData rs = new RestaurantsData();
                      rs.ResName = reader["RestaurantName"].ToString();
                      rs.AreaName = reader["Area"].ToString();
                      list.Insert(list.Count, rs);
                  }
                  connection.Close();
                  return list;
              }
              catch
              {
                  throw;
              }
          }*/
        public IEnumerable<Example> GetAreacitynames()
        {
            try
            {
                connection.Open();

                SqlCommand cmnd = new SqlCommand("select * from City,Area where City.Id=Area.CityId", connection);
                SqlDataReader reader = cmnd.ExecuteReader();
                List<Example> list = new List<Example>();

                while (reader.Read())
                {
                    Example item = new Example();
                    item.AreaId = Convert.ToInt32(reader["AreaId"]);
                    item.AreaName = reader["AreaName"].ToString();
                    item.CityName = reader["CityName"].ToString();

                    list.Add(item);
                }

                connection.Close();
                return list;
            }
            catch
            {
                throw;
            }
        }
        public IEnumerable<RestaurantList> GetRestaurantLists()
        {
            try
            {
                connection.Open();
                SqlCommand cmnd = new SqlCommand("select * from Area,RestaurantsData where Area.AreaId = RestaurantsData.AreaId", connection);
                SqlDataReader reader = cmnd.ExecuteReader();
                List<RestaurantList> list = new List<RestaurantList>();
                while (reader.Read())
                {
                    RestaurantList item = new RestaurantList();
                    item.RestaurantName = reader["RestaurantName"].ToString();
                    item.AreaName = reader["AreaName"].ToString();
                    item.Rid = Convert.ToInt32(reader["Rid"]);
                    item.ImageUrl = reader["ResimageUrl"].ToString();
                    item.DeliveryType = reader["DeliveryType"].ToString();
                    item.DeliveryCharge = Convert.ToInt32(reader["DeliveryCharge"]);
                    item.DeliveryTime = Convert.ToInt32(reader["DeliveryTime"]);
                    list.Add(item);
                }
                connection.Close();
                return list;
            }
            catch { throw; }
        }
        public IEnumerable<ItemsList> GetItemLists()
        {
            try
            {
                connection.Open();
                SqlCommand cmnd = new SqlCommand("select * from FoodItemsListData,RestaurantsData,Area where FoodItemsListData.Rid = RestaurantsData.Rid and RestaurantsData.AreaId=Area.AreaId", connection);
                SqlDataReader reader = cmnd.ExecuteReader();
                List<ItemsList> list = new List<ItemsList>();
                while (reader.Read())
                {
                    ItemsList item = new ItemsList();
                    item.RestaurantName = reader["RestaurantName"].ToString();
                    if (item.RestaurantName == "Hotel Samskruti")
                    {
                        item.ItemName = reader["ItemName"].ToString();
                        item.Rid = Convert.ToInt32(reader["Rid"]);
                        item.ItemType = reader["ItemType"].ToString();
                        item.Price = Convert.ToInt32(reader["Price"]);
                        item.OfferPrice=(item.Price - (item.Price * 0.2));
                        item.Quantity = reader["Quantity"].ToString();
                        item.DeliveryTime = Convert.ToInt32(reader["DeliveryTime"]);
                        item.DeliveryCharge = Convert.ToInt32(reader["DeliveryCharge"]);
                        item.DeliveryType = reader["DeliveryType"].ToString();
                        item.AreaName = reader["AreaName"].ToString();
                        item.ImageUrl = reader["ImageUrl"].ToString();
                        item.ResimageUrl = reader["ResimageUrl"].ToString();
                        item.Plate = Convert.ToInt32(reader["Plate"]);

                    }
                    else
                    {
                        item.ItemName = reader["ItemName"].ToString();
                        item.Rid = Convert.ToInt32(reader["Rid"]);
                        item.ItemType = reader["ItemType"].ToString();
                        item.Price = Convert.ToInt32(reader["Price"]);
                        item.Quantity = reader["Quantity"].ToString();
                        item.DeliveryTime = Convert.ToInt32(reader["DeliveryTime"]);
                        item.DeliveryCharge = Convert.ToInt32(reader["DeliveryCharge"]);
                        item.DeliveryType = reader["DeliveryType"].ToString();
                        item.AreaName = reader["AreaName"].ToString();
                        item.ImageUrl = reader["ImageUrl"].ToString();
                        item.ResimageUrl = reader["ResimageUrl"].ToString();
                        item.Plate = Convert.ToInt32(reader["Plate"]);
                    }
                    list.Add(item);
                }
                connection.Close();
                return list;
            }
            catch { throw; }
        }

        public string insertUser(signUpDetails details)
        {
            string msg = "";
            try
            {
                connection.Open();
                SqlCommand cmd = new SqlCommand("insertUser", connection);
                cmd.CommandType =CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@UserName", details.UserName);

                cmd.Parameters.AddWithValue("@phNum",details.phNum);

                cmd.Parameters.AddWithValue("@pwd", details.pwd);

                cmd.Parameters.AddWithValue("@EmailId",details.emailId);
                cmd.Parameters.AddWithValue("@address", details.address);
                int rows=cmd.ExecuteNonQuery();
                //SqlCommand cmnd = new SqlCommand("insert into SignUp(UserName,phNum,pwd,emailId,address) values('" + details.UserName + "','" + details.phNum + "','" + details.pwd + "','" + details.emailId + "','" + details.address + "')", connection);
               // int rows = cmnd.ExecuteNonQuery();
                if (rows == 1)
                {
                    msg = msg + "success";
                }
                connection.Close();
            }
            catch { throw; }
            return msg;
        }
        public IEnumerable<loginDetails> login(string phNum, string pwd)
        {
            string msg = "";
            try
            {

                connection.Open();
                SqlCommand cmd = new SqlCommand("loginUser", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@phNum", phNum);

                cmd.Parameters.AddWithValue("@pwd", pwd);

                // SqlCommand cmd = new SqlCommand("select * from SignUp where phNum='" + phNum + "' and pwd='" + pwd + "'", connection);
                SqlDataReader rdr = cmd.ExecuteReader();
                List<loginDetails> list = new List<loginDetails>();
                while (rdr.Read())
                {
                    loginDetails item = new loginDetails();
                    item.phNum = rdr["phNum"].ToString();
                    item.pwd = rdr["pwd"].ToString();
                    item.address = rdr["address"].ToString();
                    item.UserName = rdr["UserName"].ToString();
                    list.Add(item);
                }
                if (list.Count == 1)
                {
                    connection.Close();
                    msg += "success";
                }
                return list;
            }
            catch
            {
                throw;
            }

        }

        public string update(loginDetails details)
        {
            string msg = "";
            try
            {
                connection.Open();
                SqlCommand cmnd = new SqlCommand("updatePwd", connection);
                cmnd.CommandType = CommandType.StoredProcedure;
                cmnd.Parameters.AddWithValue("@phNum", details.phNum);
                cmnd.Parameters.AddWithValue("@pwd", details.pwd);

           //     SqlCommand cmnd = new SqlCommand("update SignUp set pwd='" + details.pwd + "' where phNum='" + details.phNum + "'", connection);
                int rows = cmnd.ExecuteNonQuery();
                if (rows == 1)
                {
                    msg = msg + "success";
                }
            }
            catch { throw; }
            return msg;

        }
        public string updateAddress(AddressDetails details)
        {
            string msg = "";
            try
            {
                connection.Open();
                SqlCommand cmnd = new SqlCommand("update SignUp set address='" + details.address + "' where phNum='" + details.phNum + "'", connection);
                int rows = cmnd.ExecuteNonQuery();
                if (rows == 1)
                {
                    msg = msg + "success";
                }
            }
            catch { throw; }
            return msg;

        }


        public string OrderDetailsofCust(OrderDet details)
        {
            string msg = "";
            try
            {
                connection.Open();
                SqlCommand cmnd3 = new SqlCommand("select * from DeliveryBoys where Rid='" + details.RestaurantId + "' and BoyStatus='Active'", connection);
                SqlDataReader dataReader = cmnd3.ExecuteReader();
                List<OrderDet> list = new List<OrderDet>();
                OrderDet order = new OrderDet();
                while (dataReader.Read())
                {
                    order.DeliveryBoy = dataReader["DeliveryBoy"].ToString();
                    order.BoyphNum = dataReader["BoyphNum"].ToString();
                    order.DeliveryBoyId = Convert.ToInt32(dataReader["Id"]);
                    list.Add(order);
                }
                dataReader.Close();
                SqlCommand cmnd = new SqlCommand("insert into TotalAmountCust(phNum,Price,DeliveryCharge,Topay,ActualPrice,itemName,Quantity,RestaurantName,Status,OrderedDate,RestaurantId,DeliveryBoy,BoyphNum) values('" + details.phNum + "','" + details.Price + "','" + details.DeliveryCharge + "','" + details.Topay + "','" + details.ActualPrice + "','" + details.itemName + "','" + details.Quantity + "','" + details.RestaurantName + "','" + details.Status + "','"+details.OrderedDate+"','"+details.RestaurantId+"','"+list[0].DeliveryBoy+"','"+list[0].BoyphNum+"')", connection);
                int rows = cmnd.ExecuteNonQuery();
                        if (rows == 1)      {
                    SqlCommand command = new SqlCommand("update DeliveryBoys set BoyStatus='InActive' where Id='" + list[0].DeliveryBoyId + "'", connection);
                    command.ExecuteNonQuery();
                    SqlCommand cmnd2 = new SqlCommand("select * from SignUp where phNum='" + details.phNum + "'", connection);
                    List<loginDetails> items = new List<loginDetails>();
                    SqlDataReader rdr = cmnd2.ExecuteReader();
                    loginDetails item = new loginDetails();
                    while (rdr.Read())
                    {

                        item.emailId = rdr["EmailId"].ToString();
                        items.Add(item);
                    }
                    rdr.Close();

                    msg = msg + "success";
                   MailMessage mail = new MailMessage();
                    string emailId = ConfigurationSettings.AppSettings.Get("EmailId");
                    string pwd = ConfigurationSettings.AppSettings.Get("Password");
                    SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");

                    mail.From = new MailAddress(emailId);
                    mail.To.Add(item.emailId);
                    mail.Subject = "Order Details";
                    mail.Body = "Order From:  " + details.phNum + "\n" + "Price" + details.Price + "\n" + "Delivery Charge :" + details.DeliveryCharge + "\n" + "TotalAmount:" + details.Topay;

                    SmtpServer.Port = 587;
                    SmtpServer.Credentials = new System.Net.NetworkCredential(emailId, pwd);
                    SmtpServer.EnableSsl = true;

                    SmtpServer.Send(mail);
                    connection.Close();
                }
            }
            catch { throw; }
            return msg;
        }

        public string forgetOtpPass(string phNum)
        {
            string msg = "";
            try
            {

                connection.Open();
                SqlCommand cmd = new SqlCommand("select * from SignUp where phNum='" + phNum + "'", connection);
                SqlDataReader rdr = cmd.ExecuteReader();

                if (rdr.Read())
                {
                    string email = rdr["EmailId"].ToString();
                    rdr.Close();
                    msg = msg + "success";
                    int _min = 000000;
                    int _max = 999999;
                    Random _rdm = new Random();
                    string otp = _rdm.Next(_min, _max).ToString("D6");
                    int Otp = Convert.ToInt32(otp);
                    int mid = otp.Length / 2;
                    string msgotp = otp.Substring(0, mid);
                    string emailmsg = otp.Substring(mid);
                    SqlCommand cmnd = new SqlCommand("update SignUp set Otp='" + Otp + "' where phNum='" + phNum + "'", connection);
                    cmnd.ExecuteNonQuery();

                    connection.Close();
                    string From, Message, Hashkey;
                    string Num;
                    From = ConfigurationSettings.AppSettings.Get("EmailId");
                    Hashkey = ConfigurationSettings.AppSettings.Get("txtHashKey");
                  //  Hashkey = " dc63eddfddf892e5b8f49dd928c94eeeec36a6ea691ee2bd0d9d723a70d052e5";
                    Message = "You received an OTP first three digits" + msgotp + "from Swiggy";
                    Num = phNum;
                    var web = new System.Net.WebClient();
                    string url = "https://api.textlocal.in/send/?username=" + From + "&hash=" + Hashkey + "&sender=TXTLCL&numbers=" + Num + "&message=" + Message;
                    string result = web.DownloadString(url);
                    mailOtp(email, emailmsg);

                }

                return msg;
          }
            catch
            {
                throw;
            }

        }

        public void mailOtp(string email, string otp)
        {
            MailMessage mail = new MailMessage();
            string emailId = ConfigurationSettings.AppSettings.Get("EmailId");
            string pwd = ConfigurationSettings.AppSettings.Get("Password");
            SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");
            mail.From = new MailAddress(emailId);
            mail.To.Add(email);
            mail.Subject = "Change Password";
            mail.Body = "You received otp of last 3 digits:  " + otp;
            SmtpServer.Port = 587;
            SmtpServer.Credentials = new System.Net.NetworkCredential(emailId, pwd);
            SmtpServer.EnableSsl = true;
            SmtpServer.Send(mail);
            connection.Close();
        }


        public string checkOtpCust(string phNum, int otp)
        {
            string msg = "";
            try
            {

                connection.Open();
                SqlCommand cmd = new SqlCommand("select * from SignUp where phNum='" + phNum + "' and Otp='" + otp + "'", connection);
                SqlDataReader rdr = cmd.ExecuteReader();
                List<loginDetails> list = new List<loginDetails>();
                while (rdr.Read())
                {
                    loginDetails item = new loginDetails();
                    item.phNum = rdr["phNum"].ToString();
                    item.pwd = rdr["pwd"].ToString();
                    item.otp = Convert.ToInt32(rdr["Otp"]);
                    list.Add(item);
                }
                if (list.Count == 1)
                {
                    connection.Close();
                    msg += "success";
                }
                return msg;
            }
            catch
            {
                throw;
            }
        }

        public IEnumerable<OrderDet> getOrderItems(string phNum)
        {
            try
            {
                connection.Open();
                SqlCommand command = new SqlCommand("select * from TotalAmountCust where phNum='" + phNum + "'", connection);
                List<OrderDet> list = new List<OrderDet>();
                SqlDataReader dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    OrderDet items = new OrderDet();
                    items.itemName = dataReader["itemName"].ToString();
                    items.RestaurantName = dataReader["RestaurantName"].ToString();
                    items.Price = Convert.ToInt32(dataReader["ActualPrice"]);
                    items.Quantity = Convert.ToInt32(dataReader["Quantity"]);
                    items.Status = dataReader["Status"].ToString();
                    items.OrderId = Convert.ToInt32(dataReader["OrderId"]);
                    items.DeliveryBoy = dataReader["DeliveryBoy"].ToString();
                    items.BoyphNum = dataReader["BoyphNum"].ToString();
                    list.Add(items);
                }
                connection.Close();
                return list;
            }

            catch { throw; }
        }
        public string CancelOrderDetailsofCust(OrderDet details)
        {
            string msg = "";
            try
            {
                connection.Open();
                string det = "pending";
                SqlCommand cmnd = new SqlCommand(" update TotalAmountCust set Status='" + det + "' ,CancelledTime='"+details.CancelledTime + "' where OrderId='" + details.OrderId + "'", connection);
                int rows = cmnd.ExecuteNonQuery();
                SqlCommand cmnd1 = new SqlCommand("select * from TotalAmountCust where OrderId='" + details.OrderId + "'", connection);
                SqlDataReader dataReader = cmnd1.ExecuteReader();
              
                if (rows == 1 && dataReader.Read())
                {
                   string OrderDate = dataReader["OrderedDate"].ToString();
                    var dateFormat = Convert.ToString(dataReader["OrderedDate"]);
                    DateTime date = DateTime.ParseExact(dateFormat, "M/dd/yyyyhh:mm:ss", null);
                    var cancelDate = Convert.ToString(dataReader["CancelledTime"]);
                    DateTime date2 = DateTime.ParseExact(cancelDate, "M/dd/yyyyhh:mm:ss", null);
                    dataReader.Close();
                    int diff = (date2 - date).Minutes;
                    if(diff < 10)
                    {
                        string status = "Cancelled";
                        SqlCommand command = new SqlCommand("update TotalAmountCust set Status='" + status + "' where OrderId='" + details.OrderId + "'", connection);
                        command.ExecuteNonQuery();
                        msg = msg + "success";
                    }
                    else
                    {
                        msg = msg + "failure";
                    }
      
                }
            }
            catch { throw; }
            return msg;
        }
    }
}


